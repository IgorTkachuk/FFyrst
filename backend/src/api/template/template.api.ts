import { Router } from 'express';
import { ApiPath, HttpCode, TemplatesApiPath } from 'shared';
import { getPlatform } from '~/middlewares/get-platform/get-platform.middelware';
import { templateService } from '~/services/services';
import { templateFieldsSchema } from './template-fields.schema';


const initTemplateApi = (apiRouter: Router): Router => {
  const templateRouter = Router();

  apiRouter.use(ApiPath.TEMPLATES, templateRouter);

  templateRouter.get(TemplatesApiPath.ROOT, async (_req, res, next) => {
    try {
      const industries = await templateService.getAllTemplates();
      res.status(HttpCode.OK).json(industries);
    } catch (error) {
      next(error);
    }
  });

  templateRouter.get(TemplatesApiPath.$ID, async (_req, res, next) => {
    try {
      const industry = await templateService.getTemplateById(_req.params.id);
      res.status(HttpCode.OK).json(industry);
    } catch (error) {
      next(error);
    }
  });

  templateRouter.post(TemplatesApiPath.ROOT, getPlatform, async (_req, res, next) => {
    try {
      const industryId =_req.platform.industry;
      await templateFieldsSchema.validate(_req.body);
      const template = await templateService.createNewTemplate(_req.body, industryId);
      res.status(HttpCode.OK).json(template);
    } catch (error) {
      next(error);
    }
  });

  templateRouter.put(TemplatesApiPath.$ID, getPlatform, async (_req, res, next) => {
    try {
      const industryId =_req.platform.industry;
      await templateFieldsSchema.validate(_req.body);
      const industryUpdateInfo = await templateService.updateTemplate(_req.params.id, _req.body, industryId);
      res.status(HttpCode.OK).json(industryUpdateInfo[0]);
    } catch (error) {
      next(error);
    }
  });

  templateRouter.delete(TemplatesApiPath.$ID, async (_req, res, next) => {
    try {
      await templateService.deleteTemplate(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json();
    } catch (error) {
      next(error);
    }
  });

  return templateRouter;
};

export { initTemplateApi };
