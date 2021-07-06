import { Router } from 'express';
import { ApiPath, HttpCode, TenantsApiPath } from '~/common/enums';
import { tenantService } from '~/services/services';

const initTenantApi = (apiRouter: Router): Router => {
  const tenantRouter = Router();

  apiRouter.use(ApiPath.TENANTS, tenantRouter);

  tenantRouter.get(TenantsApiPath.ROOT, async (_req, res) => {
    try {
      const tenants = await tenantService.getAllTenants();
      res.status(HttpCode.OK).json(tenants);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  tenantRouter.get(TenantsApiPath.$ID, async (_req, res) => {
    try {
      const user = await tenantService.getTenantById(_req.params.id);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  tenantRouter.post(TenantsApiPath.ROOT, async (_req, res) => {
    try {
      const user = await tenantService.createNewTenant(_req.body);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  tenantRouter.put(TenantsApiPath.$ID, async (_req, res) => {
    try {
      const user = await tenantService.updateTenant(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  tenantRouter.delete(TenantsApiPath.$ID, async (_req, res) => {
    try {
      await tenantService.deleteTenant(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json();
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });


  return tenantRouter;
};

export { initTenantApi };
