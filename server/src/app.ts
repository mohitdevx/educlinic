import express, { type Request, type Response } from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'

const app: express.Application = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.use('/api/auth',authRoutes);


export default app;
