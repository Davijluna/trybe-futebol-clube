import { Request, Response } from 'express';
import TeamsService from '../services/serviceTeam';

export default class TeamsController {
  static creat = async (req:Request, res:Response) => {
    const response = await TeamsService.finAllService();
    return res.status(response.code).json(response.message);
  };

  static getId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await TeamsService.findByPkService(Number(id));
    return res.status(result.code).json(result.message);
  };
}
// public teamService;
// constructor() {
//     this.teamService = new TeamsService();
// }
// public getAllController = async (req: Request, res: Response) => {
//     const response = await this.teamService.findAll()
// }
