import { DataTypes, Model, INTEGER } from 'sequelize';
import db from '.';

class UserModel extends Model {
  public id: number;
  public username: string;
  public role: string;
  public email: string;
  public password: string;
}

UserModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // ... Campos //
}, {

  underscored: true,
  sequelize: db,
  // modelName: 'example',
  timestamps: false,
  tableName: 'users',
});

export default UserModel;
