import { Router } from 'express';
import { ApiPath, HttpCode, TemplatesApiPath } from 'shared';
import { templateService } from '~/services/services';


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

  templateRouter.post(TemplatesApiPath.ROOT, async (_req, res, next) => {
    try {
      const industry = await templateService.createNewTemplate(_req.body);
      res.status(HttpCode.OK).json(industry);
    } catch (error) {
      next(error);
    }
  });

  templateRouter.put(TemplatesApiPath.$ID, async (_req, res, next) => {
    try {
      const industryUpdateInfo = await templateService.updateTemplate(_req.params.id, _req.body);
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
