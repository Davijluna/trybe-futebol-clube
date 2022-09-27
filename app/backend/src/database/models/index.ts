import { Sequelize } from 'sequelize';
import * as config from '../config/database';
// inicio do projeto.
export default new Sequelize(config);
