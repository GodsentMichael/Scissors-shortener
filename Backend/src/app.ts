import express from 'express'
import config from 'config'

const app = express()

app.use(express.json())

export default app