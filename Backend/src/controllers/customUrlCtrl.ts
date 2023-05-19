import { Request, Response } from 'express';
import shortUrl from '../model/shortUrlModel';
import analytics from '../model/analyticsModel';

//Users must have registered their domain name.


export const createCustomUrl = async (req: Request, res: Response) => {
  const { destination } = req.body;

  // Check if the destination is already in use
  const existingUrl = await shortUrl.findOne({ destination });

  if (existingUrl) {
    const { shortId } = existingUrl;
    return res.status(409).json({ error: 'Custom URL already in use', shortId });
  }

  // Create a shortUrl for the destination URL
  const newUrl = await shortUrl.create({ destination });

  return res.send(newUrl);
};


export const handleCustomRedirect = async (req: Request, res: Response) => {
  const { customId } = req.params;

  // Find the shortCustomUrl with the customId
  const customURL = await shortUrl.findOne({ customId }).lean();
  // TODO: Check if the customId is already in use
  // TODO: If the destination exists already then pull out the shortId ataached to that destination

  if (!customURL) {
    return res.status(404).send({message:"custom URL not found"});
  }

  analytics.create({ customUrl: customURL._id });

  return res.redirect(customURL.destination);
};