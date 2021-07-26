import { sequelize } from '../db/connection';
import createUserModel from './user';
import createTenantModel from './tenant';
import createIndustryModel from './industry';
import createTemplateModel from './template';
import createBookingModel from './booking';

const UserModel = createUserModel(sequelize);
const TenantModel = createTenantModel(sequelize);
const IndustryModel = createIndustryModel(sequelize);
const TemplateModel = createTemplateModel(sequelize);
const BookingModel = createBookingModel(sequelize);

export {
  UserModel,
  TenantModel,
  IndustryModel,
  TemplateModel,
  BookingModel
};
