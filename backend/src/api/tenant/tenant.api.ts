import { Router } from 'express';
import { ApiPath, HttpCode, TenantsApiPath } from 'shared';
import { getPlatform } from '~/middlewares';
import { tenantService } from '~/services/services';
import { platformGeneralSchema } from './tenant.schema';

const initTenantApi = (apiRouter: Router): Router => {
  const tenantRouter = Router();

  apiRouter.use(ApiPath.TENANTS, tenantRouter);

  tenantRouter.get(TenantsApiPath.ROOT, async (_req, res, next) => {
    try {
      const tenants = await tenantService.getAllTenants();
      res.status(HttpCode.OK).json(tenants);
    } catch (error) {
      next(error);
    }
  });

  tenantRouter.get(TenantsApiPath.DOMAINURL, getPlatform, async (_req, res, next) => {
    try {
      const tenant = _req.platform;
  tenantRouter.get(TenantsApiPath.PLATFORM, async (_req, res, next) => {
    try {
      const tenant = await tenantService.getTenantByDomainUrl(_req.hostname);
      if(!tenant){
        return res.status(HttpCode.NOT_FOUND).json({message: 'No matching tenant information found'});
      }
      res.status(HttpCode.OK).json(tenant);
    } catch(error) {
      next(error);
    }
  });

  tenantRouter.get(TenantsApiPath.$ID, async (_req, res, next) => {
    try {
      const user = await tenantService.getTenantById(_req.params.id);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
      next(error);
    }
  });


  tenantRouter.post(TenantsApiPath.ROOT, async (_req, res, next) => {
    try {
      const user = await tenantService.createNewTenant(_req.body);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
      next(error);
    }
  });

  tenantRouter.put(TenantsApiPath.$ID, async (_req, res, next) => {
    try {
      await platformGeneralSchema.validate(_req.body);
      const tenantUpdateInfo = await tenantService.updateTenant(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(tenantUpdateInfo[0]);
    } catch (error) {
      next(error);
    }
  });

  tenantRouter.delete(TenantsApiPath.$ID, async (_req, res, next) => {
    try {
      await tenantService.deleteTenant(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json();
    } catch (error) {
      next(error);
    }
  });


  return tenantRouter;
};

export { initTenantApi };
