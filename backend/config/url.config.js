const dotenv = require('dotenv');

dotenv.config();

const { APP_PROTOCOL, APP_HOST, APP_PORT } = process.env;

module.exports = {
  protocol: APP_PROTOCOL,
  host: APP_HOST,
  port: APP_PORT,
};
