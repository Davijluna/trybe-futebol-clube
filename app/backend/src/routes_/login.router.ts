import { Router } from 'express';
import LoginController from '../controller/loginController';

const router = Router();
const loginController = new LoginController();

router.post('/login', loginController.);

export default router;
