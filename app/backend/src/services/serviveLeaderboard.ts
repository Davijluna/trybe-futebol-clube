// import { ITeams, leaderbordTimes } from '../entities/Itimes'; // interface com os times obs: não tenho a minima ideia de como usar.
import Matches from '../database/models/Matches';
import Team from '../database/models/Team';
// Devido a complexidade do requisito pedi ajuda de 'Guilherme Fernandes' na sala de estudo 4. em 15/10/2022 as 8:00.
export default class HomeLeaderboard {
  static gols = (arrayGols: any) => {
    const goalsFavor = arrayGols.reduce((acc: any, curr: any) => acc + curr.homeTeamGoals, 0); // awayTeamGoals
    const goalsOwn = arrayGols.reduce((acc: any, curr: any) => acc + curr.awayTeamGoals, 0); // homeTeamGoals
    const goalsBalance = goalsFavor - goalsOwn;
    return { goalsFavor, goalsOwn, goalsBalance };
  };

  static results = (arrayGames: any) => {
    let totalVictories = 0;
    let totalDraws = 0;
    let totalLosses = 0;
    let totalPoints = 0;
    arrayGames.forEach((game:any) => {
      if (game.homeTeamGoals > game.awayTeamGoals) {
        totalVictories += 1;
        totalPoints += 3;
      } else if (game.homeTeamGoals < game.awayTeamGoals) {
        totalLosses += 1;
      } else {
        totalDraws += 1;
        totalPoints += 1;
      }
    });
    return { totalDraws, totalLosses, totalPoints, totalVictories };
  };

  static efficiency = (totalPoints: number, totalGames: number) => {
    const result = ((totalPoints / (totalGames * 3)) * 100);
    return result.toFixed(2);
  };

  static sortBoarder = (array: any) => {
    const result = array.sort((a: any, b: any) => {
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.totalVictories < b.totalVictories) return 1;
      if (a.totalVictories > b.totalVictories) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;
      if (a.goalsOwn < b.goalsOwn) return 1;
      if (a.goalsOwn > b.goalsOwn) return -1;
      return 0;
    });
    return result;
  };

  static createBoarder = (array: any) => array.map((team: any) => {
    const gols = HomeLeaderboard.gols(team.matchHome);
    const result = HomeLeaderboard.results(team.matchHome);
    const totalGames = team.matchHome.length;
    const efficiency = HomeLeaderboard.efficiency(result.totalPoints, totalGames);
    return {
      name: team.teamName,
      totalGames,
      ...gols,
      ...result,
      efficiency,
    };
  });

  static async finAllLederboardsServe() {
    const allTeams = await Team.findAll({
      include: [
        {
          model: Matches,
          as: 'matchHome', // matchAway
          where: { inProgress: 0 },
        },
      ],
   
    });
    const allTeamsBoards = HomeLeaderboard.createBoarder(allTeams);

    const sortBoarder = HomeLeaderboard.sortBoarder(allTeamsBoards);
    return sortBoarder;
  }
}
