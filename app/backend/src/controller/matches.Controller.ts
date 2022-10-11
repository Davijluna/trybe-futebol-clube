import { Request, Response } from 'express';
import MatchesService from '../services/serviceMatches';

export default class MatchesController {
  static getAll = async (_req: Request, res: Response) => {
    // const { include } =
    const response = await MatchesService.finAllMatches();
    return res.status(200).json(response);
  };
}
