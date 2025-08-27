import cors from 'cors';
import express, { Application,  } from 'express'
import cookieParser from 'cookie-parser';
const app: Application = express();

//parsers
app.use(express.json());

app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(cookieParser())



app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Apollo Gears API Service',
  });
});

export default app;
