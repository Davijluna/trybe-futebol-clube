import AwayLeaderboard from './serviceLeaderboardAway';
import HomeLeaderboard from './serviveLeaderboard';

export default class ServiceLeaderbordGeneral {
  static async createGeneralLeaderbord() {
    const leaderbordHome = await HomeLeaderboard.finAllLederboardsServe();
    const leaderboardAway = await AwayLeaderboard.finAllLederboardsServe();
    const leaderboardGeneral = leaderboardAway.map((awayTeam: any) => {
      const homeTeam = leaderbordHome.find((home: any) => home.name === awayTeam.name);
      const result = {
      
        name: awayTeam.name,
        totalPoints: awayTeam.totalPoints + homeTeam.totalPoints,
        totalGames: awayTeam.totalGames + homeTeam.totalGames,
        totalVictories: awayTeam.totalVictories + homeTeam.totalVictories,
        totalDraws: awayTeam.totalDraws + homeTeam.totalDraws,
        totalLosses: awayTeam.totalLosses + homeTeam.totalLosses,
        goalsFavor: awayTeam.goalsFavor + homeTeam.goalsFavor,
        goalsOwn: awayTeam.goalsOwn + homeTeam.goalsOwn,
        goalsBalance: awayTeam.goalsBalance + homeTeam.goalsBalance,
        efficiency: Number((((awayTeam.totalPoints + homeTeam.totalPoints)
         / ((awayTeam.totalGames + homeTeam.totalGames) * 3)) * 100).toFixed(2)),
      }; return result;
    }); return { code: 200, data: this.sortFunction(leaderboardGeneral) };
  }

  private static sortFunction(matches:any) {
    return matches.sort((a: any, b: any) => (
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
    ));
  }
  // static sortGames = (array: any) => {
  //   const result = array.sort((a: any, b: any) => {
  //     if (a.totalPoints < b.totalPoints) return 1;
  //     if (a.totalPoints > b.totalPoints) return -1;
  //   //   if (a.totalVictories < b.totalVictories) return 1;
  //   //   if (a.totalVictories > b.totalVictories) return -1;
  //     if (a.goalsBalance < b.goalsBalance) return 1;
  //     if (a.goalsBalance > b.goalsBalance) return -1;
  //     if (a.goalsFavor < b.goalsFavor) return 1;
  //     if (a.goalsFavor > b.goalsFavor) return -1;
  //     if (a.goalsOwn < b.goalsOwn) return 1;
  //     if (a.goalsOwn > b.goalsOwn) return -1;
  //     return 0;
  //   });
  //   return result;
  // };
}
