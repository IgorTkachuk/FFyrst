const dotenv = require('dotenv');

dotenv.config();

const {
  JWT_EXPIRE_TIME,
  JWT_SECRET,
} = process.env;

module.exports = {
  expire: JWT_EXPIRE_TIME,
  secret: JWT_SECRET,
};
