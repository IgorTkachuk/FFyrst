const dotenv = require('dotenv');

dotenv.config();

const { IMAGE_UPLOAD_BYTE_LIMIT } = process.env;

module.exports = {
  image_size_limit: Number(IMAGE_UPLOAD_BYTE_LIMIT),
};
