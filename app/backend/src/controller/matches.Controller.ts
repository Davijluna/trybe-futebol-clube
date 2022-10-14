import { Request, Response } from 'express';
import MatchesService from '../services/serviceMatches';

export default class MatchesController {
  static getAll = async (_req: Request, res: Response) => {
    const result = await MatchesService.finAllMatches();
    return res.status(200).json(result);
  };

  // requisito 24.
  static patchMatchController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await MatchesService.patchMatch(Number(id));
    return res.status(200).json(result.message);
  };

  // requisito 23.
  static seveController = async (req: Request, res: Response) => {
    const requestBody = req.body;
    const { code, data } = await MatchesService.saveMatch(requestBody);
    return res.status(code).json(data);
  };

  static UpdateController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await MatchesService.updateMarch(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ messsage: 'result' });
  };
}
