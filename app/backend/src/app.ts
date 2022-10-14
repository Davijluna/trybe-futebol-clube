import * as express from 'express';
import LoginController from './controller/loginController';
import TeamsController from './controller/teamsController';
import MatchesController from './controller/matches.Controller'; //
// import UserServices from './services/serviceUser';
import validEmail from './middleware/middlewareLogin';
// import { checkToken } from './middleware/middlewareToken';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.post('/login', validEmail
      .checkPassworEmail, validEmail.checkEmail, validEmail.checkPassword, LoginController.create);//
    this.app.get('/login/validate', LoginController.chektoken);
    this.app.get('/teams', TeamsController.creat); // rota do requisito 15.
    this.app.get('/teams/:id', TeamsController.getId); // rota do requidito 16.
    this.app.get('/matches', MatchesController.getAll); // rota do requisito 19. obs: quando fiz esse requisito passou o 20 21
    this.app.post('/matches',  validEmail.checkTeams, MatchesController.seveController);
    this.app.patch('/matches/:id/finish', MatchesController.patchMatchController) // rota requisito 24  PROBLEMAS ...
    // this.app.patch('/matches/:id', checkToken, MatchesController.)
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
