import { RequestHandler } from 'express';
import { secret } from '../../../config/jwt.config';
import { HttpCode } from '~/common/enums';
import { ResponseMessages } from '~/common/enums/messages/rerponse-messages.enum';
import jwt, { Secret } from 'jsonwebtoken';

const jwtValidation: RequestHandler = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(HttpCode.UNAUTHORIZED).json({ message: ResponseMessages.NOT_AUTHORIZED });
    }
    const decoded = jwt.verify(token, secret as Secret);
    req.user = decoded;
    next();
  } catch {
    res.status(HttpCode.UNAUTHORIZED).json({ message: ResponseMessages.NOT_AUTHORIZED });
  }
};

export { jwtValidation };
