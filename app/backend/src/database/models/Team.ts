import { DataTypes, Model, INTEGER } from 'sequelize';
import db from '.';

class Team extends Model {
  public id: number;
  public teamName: string;
}

Team.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'team_name',
  },
}, {

  underscored: true,
  sequelize: db,
  modelName: 'teams', //
  timestamps: false,
  // tableName: 'teams', // ESTÁ PARTE NÃO TINHA ANTES
});

export default Team;
