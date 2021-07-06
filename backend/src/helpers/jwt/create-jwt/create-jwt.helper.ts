import jwt, { Secret } from 'jsonwebtoken';
import { expire, secret } from '../../../../config/jwt.config';

const createJWT = () => { // id: string
  return jwt.sign(
    // {userId: id}, can add id to decode from jwt
    {},
    secret as Secret,
    { expiresIn: expire },
  );
};

export { createJWT };
