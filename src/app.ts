import express from 'express';
import 'dotenv/config';
import connectDB from './config/db';
connectDB();
import { notFound, errorHandler } from './middlewares/errorMiddleware';
// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
