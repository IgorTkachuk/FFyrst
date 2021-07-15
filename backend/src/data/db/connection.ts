import { Sequelize, Dialect } from 'sequelize';
import envConfigs from '../../../config/db.config';

const env = process.env.NODE_ENV as keyof typeof envConfigs || 'development';
const config = envConfigs[env];

const  {
  database,
  username,
  password,
  host,
  port,
  dialect,
} = config;

const sequelize = new Sequelize({
  port: Number(port),
  dialect: dialect as Dialect,
  database,
  username,
  password,
  host,
  logging: false,
});



export { sequelize };
