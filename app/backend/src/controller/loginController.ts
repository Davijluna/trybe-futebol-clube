import { Request, Response } from 'express';
import User from '../database/models/User';

export default class LoginController {
  static async create(req: Request, res: Response) {
    const newUser = await User.create(req.body);
    return res.status(200).json(newUser);
  }
}
