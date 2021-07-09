import { RequestHandler } from 'express';
import { secretRefresh } from '../../../config/jwt.config';
import { HttpCode } from '~/common/enums';
import { ResponseMessages } from '~/common/enums/messages/response-messages.enum';
import jwt, { JwtPayload, Secret, VerifyErrors } from 'jsonwebtoken';
import redis_client from '~/data/redis/redis-connection';

const refreshTokenValidation: RequestHandler = (req, res, next) => {
  const refreshToken = req.body.token;
  try {
    if (!refreshToken) {
      return res
        .status(HttpCode.BAD_REQUEST)
        .json({ message: ResponseMessages.WRONG_TOKEN_REQUEST });
    }

    jwt.verify(
      refreshToken,
      secretRefresh as Secret,
      (err: VerifyErrors | null, decoded: JwtPayload | undefined) => {
        if (err) {
          return res
            .status(HttpCode.UNAUTHORIZED)
            .send({ message: ResponseMessages.NOT_AUTHORIZED });
        }
        if (decoded?.userId) {
          redis_client.GET(decoded?.userId, (err, data) => {
            if (err) {
              return res
                .status(HttpCode.BAD_REQUEST)
                .send({ message: ResponseMessages.REDIS_REQUEST_ERROR });
            }

            if (data === null) {
              return res
                .status(HttpCode.NOT_FOUND)
                .json({ message: ResponseMessages.TOKEN_NOT_IN_STORE });
            }

            if (data !== refreshToken) {
              return res
                .status(HttpCode.NOT_FOUND)
                .json({ message: ResponseMessages.TOKEN_NOT_IN_STORE });
            }
          });
        }
        req.body.userId = decoded?.userId;
        next();
      },
    );
  } catch {
    res
      .status(HttpCode.UNAUTHORIZED)
      .json({ message: ResponseMessages.NOT_AUTHORIZED });
  }
};

export { refreshTokenValidation };
