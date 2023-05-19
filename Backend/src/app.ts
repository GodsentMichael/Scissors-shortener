import express from 'express';
import config from 'config';
import cors from 'cors';
import customUrlRoutes from './routes/customRoutes';
import shortUrlRoutes from './routes/shortUrlRoutes';
import db from '../config/db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const corsOptions = {
  origin: '*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

// Add a middleware to set the "Access-Control-Allow-Origin" header
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); 
//   next();
// });

db();
shortUrlRoutes(app)
customUrlRoutes(app);

export default app;
