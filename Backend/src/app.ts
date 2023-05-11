import express from 'express'
import config from 'config'
import cors from 'cors'
import routes from './routes'
import db from '../config/db'

const app = express()


// Apply the CORS middleware
app.use(cors({
    origin: config.get('corsOrigin')
}));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

db()
routes(app)


export default app