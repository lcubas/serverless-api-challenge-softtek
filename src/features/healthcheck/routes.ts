import { Router } from 'express';
import { asyncHandlerMiddleware } from '../../middlewares/async-handler.middleware';
import { check } from './controllers/check.controller';

const router = Router();

router.get('/', asyncHandlerMiddleware(check));

export default router;
