import Matches from '../database/models/Matches';
import Team from '../database/models/Team';
import IMachts from '../entities/IMatch';
// import TeamsService from '../services/serviceTeam'

// import TeamsService from './serviceTeam';

export default class MatchesService {
  static model = Matches;

  static async finAllMatches() {
    const result = this.model.findAll({
      include: [
        {
          model: Team,
          as: 'teamHome',
          attributes: { exclude: ['id'],
          },
        },
        {
          model: Team,
          as: 'teamAway',
          attributes: { exclude: ['id'],
          },
        },
      ],
    });
    return result;
};

static async patchMatch (id: any) { // trocar nome..
 await this.model.update(
    {inProgress: false},
    { where: { id } },
  );
  return {  message: 'Finished' };
}

static async saveMatch({ homeTeam, awayTeam, awayTeamGoals, inProgress, homeTeamGoals }: IMachts) {
  const body = { homeTeam,awayTeam, homeTeamGoals, awayTeamGoals, inProgress };
  const matchesBody = await this.model.create({ ...body })
  return { code: 201, data: matchesBody };
};
 
// static async fishMatah(id: string) {
//   await this.model.update({ inProgress: false })
// }
}
