import {Express, Request, Response} from 'express';
import {createCustomUrl, handleCustomRedirect,} from '../controllers/customUrlCtrl';
import validateResource from "../middleware/validation"
import shortUrlSchema from "../validationSchemas/createUrlSchema"


const customUrlRoutes = (app: Express) => {

    app.get('/api/customUrl/:customId',validateResource(shortUrlSchema),handleCustomRedirect )

    app.post('/api/customUrl/',createCustomUrl)

    // app.get('api/shortUrl/:shortUrlId', get1Analytics)
}

export default customUrlRoutes