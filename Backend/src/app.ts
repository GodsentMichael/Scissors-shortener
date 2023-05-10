import express from 'express'
import config from 'config'
import routes from './routes'
import db from '../config/db'

const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: true}))

db()
routes(app)


export default app