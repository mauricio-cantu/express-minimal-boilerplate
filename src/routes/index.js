import {Router} from 'express';
import userRouter from './user.js';
const router = Router();

export default (baseUrl = '') => {
  userRouter(router, baseUrl);
  return router;
};
