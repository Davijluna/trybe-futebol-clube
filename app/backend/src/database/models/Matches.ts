import { DataTypes, Model, INTEGER } from 'sequelize';
import db from '.';

class Matches extends Model {
  public id: number;
  public homeTeam: number;
  public homeTeanGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: number;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: DataTypes.NUMBER,
    allowNull: false,
    field: 'home_Team',
  },
  homeTeanGoals: {
    type: DataTypes.NUMBER,
    allowNull: false,
    field: 'home_teanGoals',
  },
  awayTeam: {
    type: DataTypes.NUMBER,
    allowNull: false,
    field: 'away_team',
  },
  awayTeamGoals: {
    type: DataTypes.NUMBER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.NUMBER,
    allowNull: false,
    field: 'in_progress',
  },
}, {

  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

export default Matches;
