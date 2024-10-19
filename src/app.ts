import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import oauthRoutes from './routes/oauth.routes';
import chartRoutes from './routes/chart.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes)
app.use('/api', oauthRoutes)
app.use('/api', chartRoutes)

app.get('/hello', (req: Request, res: Response) => {
  res.status(200).json('OK')
});


export default app;
