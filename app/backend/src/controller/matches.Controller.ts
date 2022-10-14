import { Request, Response } from 'express';
import MatchesService from '../services/serviceMatches';

export default class MatchesController {
  static getAll = async (_req: Request, res: Response) => {
    const result = await MatchesService.finAllMatches();
    return res.status(200).json(result);
  };

  static patchMatchController = async (req: Request, res: Response) => {
    const { id } = req.params;
     const result = await MatchesService.patchMatch(id)
    return res.status(200).json(result.message)
  }

  static seveController = async (req: Request, res: Response) => {
    const requestBody =req.body;
    const { code, data } = await MatchesService.saveMatch(requestBody)
    return res.status(code).json(data)
  }

  // static create = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   const response = await MatchesService.createMatch(id);
  //   return res.status(200).json(console.log(response));
  // };
  // static create = async(req: Request, res: Response) => {
  //   const result = req.body
  //   const response = await MatchesService.MatchUp(result);
  //   return res.status(200).json(response);
  // }

}
