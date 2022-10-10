import { DataTypes, Model } from 'sequelize';
import Team from './Team';
import db from '.';

class Matches extends Model {
  public id: number;
  public homeTeam: number;
  public homeTeanGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: number; //
}

Matches.init({
  id: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // field: 'home_Team',
    // references: {
    //   model: 'teams', key: 'id',
    // }, // REVER ESTA PARTE NO CUORSE.
  },
  homeTeanGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // field: 'home_teanGoals',
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // field: 'away_team',
    // references: {
    //   model: 'team',
    //   key: 'id',
    // }, // REVER ESTA PARTE NO CUORSE .
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // field: 'in_progress',
  },
}, {

  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});
Matches.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome'});
Matches.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway'})

export default Matches;
