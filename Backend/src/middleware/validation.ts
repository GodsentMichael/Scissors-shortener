import { AnyObjectSchema } from 'yup';
import { Request, Response, NextFunction } from 'express';

const validateResource =
	(resourceSchema: AnyObjectSchema) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await resourceSchema.validate({
				body: req.body,
				query: req.query,
				params: req.params,
			},
			{
				abortEarly: false, // Validate all fields, not just the first error
				strict: true, // Enable strict mode for validation
				context: req.body, // Set the context to the request body
			});
		
// Custom URL validation
const { destination } = req.body;
const urlPattern = /^(?:https?:\/\/)?([^\s.]+\.\S{2,}|localhost)(?:\/[^\s]*)?(?:\.com)?$/;
if (!urlPattern.test(destination)) {
	return res.status(400).json({ error: 'Invalid destination URL' });
}

			next();
		} catch (error) {
             return res.status(400).send(error)
        }
	};


export default validateResource
