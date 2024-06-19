import express from 'express';
import 'dotenv/config';
import connectDB from './config/db';
connectDB();
// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
