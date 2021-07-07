import { sequelize } from '../db/connection';
import createUserModel from './user';
import createTenantModel from './tenant';

const UserModel = createUserModel(sequelize);
const TenantModel = createTenantModel(sequelize);

export {
  UserModel,
  TenantModel
};
