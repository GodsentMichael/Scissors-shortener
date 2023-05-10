import {Express, Request, Response} from 'express';

const routes = (app: Express) => {
    app.get('/testingMyApp', (req: Request, res: Response) => {
        return res.send('App is tested and ready!')
    })
}