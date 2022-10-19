import { Request, Response } from 'express';
import ServiceLeaderbordGeneral from '../services/serviceLeaderbordGeneral';

export default class LeaderbordGeneralController {
  static generalTeams = async (_req: Request, res: Response) => {
    const { code, data } = await ServiceLeaderbordGeneral.createGeneralLeaderbord();
    return res.status(code).json(data);
  };
}
