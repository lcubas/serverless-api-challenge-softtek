import { Router } from 'express';
import { asyncHandlerMiddleware } from '../../middlewares/async-handler.middleware';
import { getById } from './controllers/get-by-id.controller';
import { create } from './controllers/create.controller';
import { index } from './controllers/index.controller';

const router = Router();

// Define your routes here
router.post('/', asyncHandlerMiddleware(create));
router.get('/', asyncHandlerMiddleware(index));
router.get('/:userId', asyncHandlerMiddleware(getById));

export default router;