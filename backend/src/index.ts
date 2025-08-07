import express, {
  json,
  urlencoded,
  NextFunction,
  Request,
  Response,
} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL || ''],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(urlencoded({extended: false}));
app.use(json());

// app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

process.on('SIGINT', async () => {
  // dbClient.closeConnect();
  process.exit(0);
})
