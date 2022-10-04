import { Router } from 'express';
import LoginController from '../controller/loginController';

const router = Router();
// const loginController = new LoginController(); 

router.post('/login', LoginController.create); // rever está parte na aula para terminar este requisito.

export default router;
