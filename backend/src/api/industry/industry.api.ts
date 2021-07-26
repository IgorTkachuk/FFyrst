import { Router } from 'express';
import { ApiPath, HttpCode, IndustriesApiPath } from 'shared';
import { industryService } from '~/services/services';
import { industrySchema } from './industry.schema';

const initIndustryApi = (apiRouter: Router): Router => {
  const industryRouter = Router();

  apiRouter.use(ApiPath.INDUSTRIES, industryRouter);

  industryRouter.get(IndustriesApiPath.ROOT, async (_req, res, next) => {
    try {
      const industries = await industryService.getAllIndustries();
      res.status(HttpCode.OK).json(industries);
    } catch (error) {
      next(error);
    }
  });

  industryRouter.get(IndustriesApiPath.$ID, async (_req, res, next) => {
    try {
      const industry = await industryService.getIndustryById(_req.params.id);
      res.status(HttpCode.OK).json(industry);
    } catch (error) {
      next(error);
    }
  });

  industryRouter.post(IndustriesApiPath.ROOT, async (_req, res, next) => {
    try {
      await industrySchema.validate(_req.body);
      const industry = await industryService.createNewIndustry(_req.body);
      res.status(HttpCode.OK).json(industry);
    } catch (error) {
      next(error);
    }
  });

  industryRouter.put(IndustriesApiPath.$ID, async (_req, res, next) => {
    try {
      await industrySchema.validate(_req.body);
      const industryUpdateInfo = await industryService.updateIndustry(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(industryUpdateInfo[0]);
    } catch (error) {
      next(error);
    }
  });

  industryRouter.delete(IndustriesApiPath.$ID, async (_req, res, next) => {
    try {
      await industryService.deleteIndustry(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json();
    } catch (error) {
      next(error);
    }
  });

  return industryRouter;
};

export { initIndustryApi };
