import { Router } from 'express';
import { AppConfig } from '~/common/enums';
import { initUserApi } from './user/user.api';
import { initTenantApi } from './tenant/tenant.api';
import { initAuthApi } from '~/api/auth/auth.api';
import { initFileUploadApi } from './file-upload/file-upload.api';
import { initIndustryApi } from './industry/industry.api';
import { initTemplateApi } from './template/template.api';


const apis = [
  initUserApi,
  initAuthApi,
  initTenantApi,
  initFileUploadApi,
  initIndustryApi,
  initTemplateApi
];

const initApi = (app: Router): Router => {
  const apiRouter = Router();
  app.use(AppConfig.API_V1_PREFIX, apiRouter);

  apis.forEach((api) => api(apiRouter));

  return apiRouter;
};

export { initApi };
