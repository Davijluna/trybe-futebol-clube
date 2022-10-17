import { Request, Response } from 'express';  // ESTE ARQUIVO ESTÁ DANDO PROBLEMAS..
import getAlltamsLeaderBoards from '../services/serviceLeaderboardAway'
// requisito 31 

export default class LeaferBoadsControllerAway {
  static getallAway = async (_req: Request, res: Response) => {
    const result = await getAlltamsLeaderBoards.finAllLederboardsServe();
    return res.status(200).json(result);
  };
}
