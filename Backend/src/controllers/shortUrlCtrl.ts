import {Request, Response} from 'express';
import shortUrl from '../model/shortUrlModel';
import analytics from '../model/analyticsModel';

export const createShortUrl = async (req: Request, res: Response) => {
    // Get the destination url from the request body
    const {destination} = req.body;

    // Create a shortUrl for the destination url
    const newUrl = await shortUrl.create({destination});

    // Save the shortUrl to the database/ Return the shortUrl to the user
    return res.send(newUrl);
}
export const handleRedirect =  async(req: Request, res: Response) => {
    // Get the shortId from the request params
    const {shortId} = req.params;

    // Find the shortUrl with the shortId
    const shortID = await shortUrl.findOne({shortId}).lean();
    if(!shortID) return res.sendStatus(404);

    analytics.create({shortUrl: shortID._id});

    return res.redirect(shortID.destination);
} 

export const getAnalytics = async (req: Request, res: Response) => {
  const data = await analytics.find({}).lean()
}

// export const updateShortUrl = async (req: Request, res: Response) => {
//     // Get the shortId and destination from the request body
//     const {shortId, destination} = req.body;

//     // Find the shortUrl with the shortId
//     const url = await shortUrl.findOne({shortId});

//     // Update the destination of the shortUrl
//     url.destination = destination;

//     // Save the updated shortUrl to the database/ Return the updated shortUrl to the user
//     return res.send(await url.save());
// }