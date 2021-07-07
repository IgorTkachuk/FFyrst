import jwt, { Secret } from 'jsonwebtoken';
import { expire, secret } from '../../../../config/jwt.config';

const createJWT = (id: string) => {
  return jwt.sign(
    { userId: id },
    secret as Secret,
    { expiresIn: expire },
  );
};

export { createJWT };
