import { Router } from 'express';
import { ApiPath, AuthApiPath, HttpCode } from '~/common/enums';
import { userService } from '~/services/services';
import { isMatchPassword } from '~/helpers/bcrypt';
import { ResponseMessages } from '~/common/enums/messages/response-messages.enum';
import { jwtValidation } from '~/middlewares/jwt-validation/jwt-validation.middelware';
import { refreshTokenValidation } from '~/middlewares/jwt-validation/refresh-validation.middelware';
import { getTokens } from '~/helpers';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();
  apiRouter.use(ApiPath.AUTH, authRouter);

  authRouter.post(AuthApiPath.LOGIN, async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userService.getUserByEmail(email);

      if (!user) {
        return res
          .status(HttpCode.UNAUTHORIZED)
          .json({ message: ResponseMessages.NON_EXIST_EMAIL });
      } else {
        const isMatch = await isMatchPassword(password, user.password);

        if (!isMatch) {
          return res
            .status(HttpCode.UNAUTHORIZED)
            .json({ message: ResponseMessages.NON_MATCH_PASSWORDS });
        }
        const tokens = await getTokens(user.id);

        // accessToken and refreshToken should be saved on client side
        res.status(HttpCode.OK).json(tokens);
      }
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  // Refresh token endpoint .
  // Should be called from client side automatically with body message {token: refresh token} when client
  // receives ResponseMessages.TOKEN_EXPIRED message from jwtValidation middleware
  authRouter.post(
    AuthApiPath.REFRESH_TOKEN,
    refreshTokenValidation,
    async (req, res) => {
      const tokens = await getTokens(req.body.userId);
      res.status(HttpCode.OK).json(tokens);
    },
  );

  authRouter.get(AuthApiPath.LOGIN, jwtValidation, async (req, res) => {
    // endpoint for testing jwtValidation
    res.json(req.user.userId);
  });
  return authRouter;
};

export { initAuthApi };
