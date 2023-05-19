import { Request, Response } from 'express';
import shortUrl from '../model/shortUrlModel';
import analytics from '../model/analyticsModel';
import {generateQRCode} from '../services/qrCodeGenerator'

// To create a shortUrl
export const createShortUrl = async (req: Request, res: Response) => {
	try {
			// Get the destination url from the request body
	const { destination } = req.body;

	// Check if the destination is already in use
	const existingUrl = await shortUrl.findOne({ destination });
	if(existingUrl){
		const { shortId } = existingUrl;
		return res.status(409).json({ error: 'Custom URL already in use', shortId });
	}

	// Create a shortUrl for the destination url
	const newUrl = await shortUrl.create({ destination });

	// Save the shortUrl to the database/ Return the shortUrl to the user
	return res.send(newUrl);
	} catch (error) {
		return res.status(500).send({message:"Internal server error"});
	}
}

// To handle the redirect when a user clicks on the shortUrl
export const handleRedirect = async (req: Request, res: Response) => {
	try {
	// Get the shortId from the request params
	const { shortId } = req.params;

	// Find the shortUrl with the shortId
	const shortID = await shortUrl.findOne({ shortId }).lean();
	if (!shortID) return res.sendStatus(404);

	analytics.create({ shortUrl: shortID._id });
	shortUrl.updateOne({ shortId }, { $inc: { clickCount: 1 } }).exec();
	return res.redirect(shortID.destination);
	} catch (error) {
		return res.status(500).send({message:"Internal server error"});
	}

};

export const get1Analytics = async (req: Request, res: Response) => {
	const { shortUrlId } = req.params;
	const data = await analytics.find({ shortUrl: shortUrlId }).lean();
	// const data = await analytics.find({}).lean()

	return res.send(data);
};

export const qrCodeGeneration = async (req:Request, res: Response) => {
	const {shortId} = req.params
	try {

	// Find the shortUrl with the shortId
	const shortID = await shortUrl.findOne({ shortId }).lean();
	if (!shortID) return res.sendStatus(404);
	//generate the qrCode witht the shortId as parameter
	const qrCode = await generateQRCode(shortID.destination)
	res.type('png').send(qrCode)
	res.status(200)
	} catch (error) {
		console.log('Error generating QR code:', error)
		res.status(500)
	}

}
