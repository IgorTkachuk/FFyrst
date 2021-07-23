import { sequelize } from '../db/connection';
import createUserModel from './user';
import createTenantModel from './tenant';
import createIndustryModel from './industry';

const UserModel = createUserModel(sequelize);
const TenantModel = createTenantModel(sequelize);
const IndustryModel = createIndustryModel(sequelize);

export {
  UserModel,
  TenantModel,
  IndustryModel
};
