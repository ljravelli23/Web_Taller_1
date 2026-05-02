import { Router } from 'express';

import teamsRouter from '../modules/teams/teams.routes.js';
import gamesRouter from '../modules/games/games.routes.js';

const indexRouter = Router();

indexRouter.use('/teams', teamsRouter);
indexRouter.use('/games', gamesRouter);


export default indexRouter;