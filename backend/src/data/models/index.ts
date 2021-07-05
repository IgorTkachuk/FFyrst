import { sequelize } from '../db/connection';
import createUserModel from './user';

const UserModel = createUserModel(sequelize);

export {
  UserModel
};
