import { cloud_name, api_key, api_secret } from '../../../config/cloudinary.config';
import { image_size_limit } from '../../../config/file-ipload.config';
import { nanoid } from 'nanoid';
import { v2 as Cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import { RequestHandler } from 'express';

class FileUploadService {
  parser: multer.Multer;

  constructor() {
    Cloudinary.config({
      cloud_name,
      api_key,
      api_secret,
    });

    const storage = new CloudinaryStorage({
      cloudinary: Cloudinary,
      params: async (req, file) => {
        return {
          folder: 'img',
          format: 'png',
          public_id: nanoid(),
        };
      },
    });

    this.parser = multer({ storage, limits: { fileSize: image_size_limit } });
  }

  getSingleParser(fieldName: string): RequestHandler {
    return this.parser.single(fieldName);
  }
}

export { FileUploadService };
