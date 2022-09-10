import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './lib/routers/userRouter';
import credentialRouter from './lib/routers/credentialRouter';
import safeNoteRouter from './lib/routers/safeNoteRouter';
import cardRouter from './lib/routers/cardRouter';
import wifiRouter from './lib/routers/wifiRouter';
import errorHandler from './lib/middlewares/errorHandler';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/credentials', credentialRouter);
app.use('/safeNotes', safeNoteRouter);
app.use('/cards', cardRouter);
app.use('/wifis', wifiRouter);

app.use(errorHandler);

app.listen(SERVER_PORT, () => console.log(`Server running at port ${SERVER_PORT}`));