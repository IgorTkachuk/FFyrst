import { createRefreshToken } from '~/helpers/jwt/create-refresh-token/create-refresh-token.helper';
import { createJWT } from '~/helpers/jwt';
import { ITokens } from 'shared';

const getTokens = async (userId: string): Promise<ITokens> => {
  const accessToken = createJWT(userId);
  const refreshToken = await createRefreshToken(userId);
  return {
    accessToken,
    refreshToken,
  };
};

export { getTokens };
