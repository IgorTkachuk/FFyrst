import { RequestHandler } from 'express';
import { secret } from '../../../config/jwt.config';
import { HttpCode } from '~/common/enums';
import { ResponseMessages } from '~/common/enums/messages/response-messages.enum';
import jwt, { JwtPayload, Secret, TokenExpiredError } from 'jsonwebtoken';

const jwtValidation: RequestHandler = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res
        .status(HttpCode.UNAUTHORIZED)
        .json({ message: ResponseMessages.NOT_AUTHORIZED });
    }

    jwt.verify(token, secret as Secret, (err, decoded) => {
      if (err instanceof TokenExpiredError) {
        return res
          .status(HttpCode.UNAUTHORIZED)
          .send({ message: ResponseMessages.TOKEN_EXPIRED });
      }
      if (err) {
        return res
          .status(HttpCode.UNAUTHORIZED)
          .send({ message: ResponseMessages.WRONG_TOKEN_REQUEST });
      }
      req.user = decoded;
      next();
    });
  } catch {
    res
      .status(HttpCode.UNAUTHORIZED)
      .json({ message: ResponseMessages.NOT_AUTHORIZED });
  }
};

export { jwtValidation };
