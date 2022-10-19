import { Router } from 'express';
import LoginController from '../controller/loginController';
import TeamsController from '../controller/teamsController';
import MatchesController from '../controller/matches.Controller'; //
import LeaferBoadsController from '../controller/LeaderboardController';
import LeaferBoadsControllerAway from '../controller/LeaderboardAwayController';
import LeaderbordGeneralController from '../controller/LeaderbordGeneralController';

import validEmail from '../middleware/middlewareLogin';
import { validToken } from '../middleware/middlewareToken';

const router = Router();
// const loginController = new LoginController();

// router.post('/login', LoginController.create);
router.post(
  '/login',
  validEmail.checkPassworEmail,
  validEmail.checkEmail,
  validEmail.checkPassword,
  LoginController.create,
);
router.get('/login/validate', LoginController.chektoken);
router.get('/teams', TeamsController.creat); // rota do requisito 15.
router.get('/teams/:id', TeamsController.getId); // rota do requidito 16.
router.get('/matches', MatchesController.getAll); // rota do requisito 19. obs: quando fiz esse requisito passou o 20 21
router.post('/matches', validEmail.checkTeams, validToken, MatchesController.seveController);
router.patch('/matches/:id/finish', MatchesController.patchMatchController); // rota requisito 24  PROBLEMAS;
router.patch('/matches/:id', validToken, MatchesController.UpdateController);
router.get('/leaderboard/home', LeaferBoadsController.getall);
router.get('/leaderboard/away', LeaferBoadsControllerAway.getallAway); // rever está parte na aula para terminar este requisito.
router.get('/leaderboard', LeaderbordGeneralController.generalTeams)

export default router;
