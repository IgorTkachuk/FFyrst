import jwt, { Secret } from 'jsonwebtoken';
import { expireRefresh, secretRefresh } from '../../../../config/jwt.config';
import { HttpCode } from '~/common/enums';
import redis_client from '~/data/redis/redis-connection';

const createRefreshToken = (userId: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { userId: userId };
    const options = { expiresIn: expireRefresh };
    const secret = secretRefresh as Secret;
    const refreshToken = jwt.sign(payload, secret, options);

    redis_client.SET(userId, refreshToken, (err) => {
      if (err) {
        reject(HttpCode.INTERNAL_SERVER_ERROR);
        return;
      }
      resolve(refreshToken);
    });
  });
};

export { createRefreshToken };
