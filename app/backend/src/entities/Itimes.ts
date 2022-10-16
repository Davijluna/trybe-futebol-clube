export interface ITeams {
  id: number,
  teamName: string,
  home: [
    {
      id: number,
      homeTeams: number,
      homeTeamGoals: number,
      awayTeam: number,
      awayTeamGoals: number,
      inProgress: boolean,
    },
  ]
}

export interface leaderbordTimes {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string, // fique na duvida se é string ou number.
}
