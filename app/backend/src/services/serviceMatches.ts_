import Matches from '../database/models/Matches';
import Team from '../database/models/Team';

export default class MatchesService {
  static model = Matches;

  static async finAllMatches() {
    return this.model.findAll({
      include: [
        {
          model: Team,
          as: 'teamHome',
          attributes: {
            exclude: ['id'],
          },
        },
        {
          model: Team,
          as: 'teamAway',
          attributes: {
            exclude: ['id'],
          },
        },
      ],
    });
  }
}

// const result = await Matches.findAll();
// return result;
