const dotenv = require('dotenv');

dotenv.config();

const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
  TEST_DB_NAME,
  TEST_DB_USERNAME,
  TEST_DB_PASSWORD,
  TEST_DB_HOST,
  TEST_DB_PORT,
  TEST_DB_DIALECT,
} = process.env;

module.exports = {
  development: {
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    logging: false,
  },
  test: {
    database: TEST_DB_NAME,
    username: TEST_DB_USERNAME,
    password: TEST_DB_PASSWORD,
    host: TEST_DB_HOST,
    port: TEST_DB_PORT,
    dialect: TEST_DB_DIALECT,
    logging: false,
  },
};
