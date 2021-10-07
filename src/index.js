import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import getRoutes from './routes/index.js';
import languageMiddleware from './middlewares/language.middleware.js';
import timezoneMiddleware from './middlewares/timezone.middleware.js';
import i18n from './helpers/i18n.js';

const app = express();
app.use(cors());
app.use(express());
app.use(express.json());
app.use(i18n.init);
app.use(languageMiddleware);
app.use(timezoneMiddleware);
app.use(getRoutes());

const listener = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${listener.address().port} 🚀`);
});
