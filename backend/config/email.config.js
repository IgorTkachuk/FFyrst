const dotenv = require('dotenv');

dotenv.config();

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LINK_HOST } = process.env;

module.exports = {
  host: SMTP_HOST,
  port: SMTP_PORT,
  user: SMTP_USER,
  pass: SMTP_PASS,
  link: LINK_HOST,
};
