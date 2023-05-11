import {Request, Response} from 'express';
import shortUrl from '../model/shortUrlModel';
import analytics from '../model/analyticsModel';

// To create a shortUrl
export const createShortUrl = async (req: Request, res: Response) => {
    // Get the destination url from the request body
    const {destination} = req.body;

    
    // Regular expression pattern for URL validation
    // const urlPattern = /^(?:https?:\/\/)?([^\s.]+\.\S{2,}|localhost)(?:\/[^\s]*)?(?:\.com)?$/;

    // Validate the destination URL
    // if (!urlPattern.test(destination)) {
    //     return res.status(400).json({ error: 'Invalid destination URL' });
    // }

    // Create a shortUrl for the destination url
    const newUrl = await shortUrl.create({destination});

    // Save the shortUrl to the database/ Return the shortUrl to the user
    return res.send(newUrl);
}

// To handle the redirect when a user clicks on the shortUrl
export const handleRedirect =  async(req: Request, res: Response) => {
    // Get the shortId from the request params
    const {shortId} = req.params;

    // Find the shortUrl with the shortId
    const shortID = await shortUrl.findOne({shortId}).lean();
    if(!shortID) return res.sendStatus(404);

    analytics.create({shortUrl: shortID._id});

    return res.redirect(shortID.destination);
} 

export const get1Analytics = async (req: Request, res: Response) => {
  const {shortUrlId} = req.params;
  const data = await analytics.find({shortUrl: shortUrlId}).lean();
  // const data = await analytics.find({}).lean()

  return res.send(data);
}

