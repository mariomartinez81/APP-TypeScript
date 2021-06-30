import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import config from '../lib/config';

const app: Application = express();
export default app;

app.use(express.urlencoded({ extended: true, limit: '50mb' })); // middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
  cors({
    origin: config.cors,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  })
);
