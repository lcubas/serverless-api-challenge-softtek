import { Router } from 'express';
import { asyncHandlerMiddleware } from '../../middlewares/async-handler.middleware';
import { getSpeciesById } from './controllers/get-specie-by-id.controller';
import { getSpecies } from './controllers/get-species.controller';

const router = Router();

router.get('/species', asyncHandlerMiddleware(getSpecies));
router.get('/species/:specieId', asyncHandlerMiddleware(getSpeciesById));

export default router;