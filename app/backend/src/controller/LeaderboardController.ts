import { Request, Response } from 'express';
import HomeLeaderboard from '../services/serviveLeaderboard';
// requisito 29
export default class LeaferBoadsController {
  static getall = async (_req: Request, res: Response) => {
    const result = await HomeLeaderboard.finAllLederboardsServe();
    return res.status(200).json(result);
  };
}
