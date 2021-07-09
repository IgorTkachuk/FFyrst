const dotenv = require('dotenv');

dotenv.config();

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

module.exports = {
  redisHost: REDIS_HOST,
  redisPort: REDIS_PORT,
  redisPassword: REDIS_PASSWORD,
};
