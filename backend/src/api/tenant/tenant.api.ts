import { Router } from 'express';
import { ApiPath, HttpCode, TenantsApiPath } from 'shared';
import { parseURL } from '~/helpers';
import { getPlatform } from '~/middlewares';
import { tenantService } from '~/services/services';

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
      const user = await tenantService.updateTenant(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(user);
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
