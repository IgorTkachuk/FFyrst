import { RequestHandler } from 'express';
import { HttpCode } from '~/common/enums';
import { urlHelper } from '~/helpers';
import { tenantService } from '~/services/services';

const getPlatform: RequestHandler = async (req, res, next) => {
  try {
    const referer = urlHelper.parseURL(req.headers.referer).host
    const tenant = await tenantService.getTenantByDomainUrl(referer);
    if(!tenant) {
      return res.status(HttpCode.NOT_FOUND).json({message: 'No matching tenant information found'});
    }
    urlHelper.appHost = referer;
    req.platform = tenant;
    next();
  } catch (e) {
    next(e)
  }
};

export { getPlatform };
