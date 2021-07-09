const dotenv = require('dotenv');

dotenv.config();

const {
  JWT_EXPIRE_TIME,
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  REFRESH_EXPIRE_TIME,
} = process.env;

module.exports = {
  expire: JWT_EXPIRE_TIME,
  secret: JWT_SECRET,
  secretRefresh: JWT_REFRESH_SECRET,
  expireRefresh: REFRESH_EXPIRE_TIME,
};
