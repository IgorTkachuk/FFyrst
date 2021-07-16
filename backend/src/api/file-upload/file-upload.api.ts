import { Router } from 'express';
import { ApiPath, FileUploadApiPath, HttpCode } from '~/common/enums';
import { fileUploadService } from '~/services/services';

const initFileUploadApi = (apiRouter: Router): Router => {
  const fileUploadRouter = Router();

  apiRouter.use(ApiPath.FILE_UPLOAD, fileUploadRouter);

  fileUploadRouter.post(FileUploadApiPath.ROOT, fileUploadService.parser.single('image') ,  (_req, _res) => {
      _res.status(HttpCode.OK).json({ url: _req.file?.path });
  });

  return fileUploadRouter;
}

export { initFileUploadApi };
