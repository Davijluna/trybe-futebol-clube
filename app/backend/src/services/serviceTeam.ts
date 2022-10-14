import Team from '../database/models/Team';

export default class TeamsService {
  static async finAllService() {
    const allTeams = await Team.findAll();
    return { message: allTeams, code: 200 };
  }

  static async findByPkService(id: number) {
    const teamGetId = await Team.findByPk(id);
    return { message: teamGetId, code: 200 };
  }
}
