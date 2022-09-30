import { DataTypes, Model, INTEGER } from 'sequelize';
import db from '.';

class Teams extends Model {
  public id: number;
  public team_name: string;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {

  underscored: true,
  sequelize: db,
  // modelName: 'example',
  timestamps: false,
});

export default Teams;
