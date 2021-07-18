import { Router } from 'express';
import { ApiPath, FileUploadApiPath, HttpCode } from '~/common/enums';
import { fileUploadService } from '~/services/services';

const initFileUploadApi = (apiRouter: Router): Router => {
  const fileUploadRouter = Router();

  apiRouter.use(ApiPath.FILE_UPLOAD, fileUploadRouter);

  fileUploadRouter.post(FileUploadApiPath.ROOT, (_req, _res) => {
    fileUploadService.getSingleParser('image')(_req, _res, (err: unknown) => {
      if (err) return _res.status(HttpCode.BAD_REQUEST).json({ error: err });
      _res.status(HttpCode.OK).json({ url: _req.file?.path });
    });
  });

  return fileUploadRouter;
};

export { initFileUploadApi };
