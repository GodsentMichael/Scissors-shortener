import {Express, Request, Response} from 'express';
import {createShortUrl, get1Analytics, handleRedirect} from '../controllers/shortUrlCtrl';
import validateResource from "../middleware/validation"
import shortUrlSchema from "../validationSchemas/createUrlSchema"

const routes = (app: Express) => {
    app.get('/testingMyApp', (req: Request, res: Response) => {
        return res.send('App is tested and ready!')
    })

    app.post('/api/shortUrl',validateResource(shortUrlSchema),createShortUrl )

    app.get('/api/shortUrl/:shortId',handleRedirect)

    app.get('api/shortUrl/:shortUrlId', get1Analytics)
}

export default routes

