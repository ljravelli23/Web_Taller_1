import { Router } from 'express';
import gamesController from './games.controller.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.getAll);
gamesRouter.get('/:id', gamesController.getOne);
gamesRouter.post('/', gamesController.create);
gamesRouter.put('/:id', gamesController.update);
gamesRouter.delete('/:id', gamesController.delete);

export default gamesRouter;