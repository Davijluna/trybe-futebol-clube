import { Request, Response } from 'express';
import UserServices from '../services/serviceUser';

export default class LoginController {
  static async create(req: Request, res: Response) {
    const response = await UserServices.login(req.body);
    if (response.erro) {
      return res.status(response.code).json(response.erro);
    }
    return res.status(200).json({ token: response.data });
  }

  static async chektoken(req: Request, res: Response ) {
    const response = await UserServices.tokenValidation(req.headers.authorization);
    if (response.erro) {
      return res.status(response.code).json(response.erro);
    }
    return res.status(200).json({ role: response.role })
  }

  // static async getId(req: Request, res: Response) {
  //   const result = await UserServices.veryficEmail(Number(req.params));
  //   return res.status(200).json(result);
  // }

  // static async functionEmail(req: Request, res: Response) {
  //   const response = await UserServices.veryficEmail(req.body);
  //   return res.status(response.code).json(response.data);
  // }
}
