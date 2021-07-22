import { RequestHandler } from 'express';
import { parseURL } from '~/helpers';
import { tenantService } from '~/services/services';

const getPlatform: RequestHandler = async (req, res, next) => {
  try {
    const referer = parseURL(req.headers.referer).host
    const tenant = await tenantService.getTenantByDomainUrl(referer);
    if(!tenant) {
      res.status(404).json({ message: `Tenant on domain ${referer} doesn't exist` });
    }
    req.platform = tenant;
    next();
  } catch (e) {
    next(e)
  }
};

export { getPlatform };
