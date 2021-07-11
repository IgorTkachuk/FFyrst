import jwt, { Secret } from 'jsonwebtoken';

const verifyJWT = (token: string, secret = '') => {
  return jwt.verify(token, secret as Secret);
};

export { verifyJWT };
