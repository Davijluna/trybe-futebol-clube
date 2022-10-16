import { Request, Response } from 'express';
import getAlltamsLeaderBoards from '../services/serviveLeaderboard';
// requisito 29
export default class LeaferBoadsController {
  static getall = async (_req: Request, res: Response) => {
    const result = await getAlltamsLeaderBoards.finAllLederboardsServe();
    return res.status(200).json(result);
  };
}
