import { Router } from 'express';
import { ApiPath, AuthApiPath, HttpCode } from 'shared';
import { jwtValidation } from '~/middlewares/jwt-validation/jwt-validation.middelware';
import { yupValidation } from '~/middlewares/yup-validation/yup-validation.middelware';
import { verifySchema, resetSchema, loginSchema } from 'shared';
import { refreshTokenValidation } from '~/middlewares/jwt-validation/refresh-validation.middelware';
import { getTokens } from '~/helpers';
import { authService } from '~/services/services';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();
  apiRouter.use(ApiPath.AUTH, authRouter);
  authRouter.post(
    AuthApiPath.LOGIN,
    yupValidation(loginSchema),
    async (_req, _res) => {
      try {
        const { data, code } = await authService.loginUser(_req.body);
        _res
          .status(code)
          .json(
            typeof data === 'string' ? { message: data } : { tokens: data },
          );
      } catch (error) {
        _res.status(HttpCode.BAD_REQUEST).json({ message: error });
      }
    },
  );

  authRouter.post(
    AuthApiPath.REFRESH_TOKEN,
    refreshTokenValidation,
    async (_req, _res) => {
      const tokens = await getTokens(_req.body.userId);
      _res.status(HttpCode.OK).json(tokens);
    },
  );

  authRouter.get(AuthApiPath.LOGIN, jwtValidation, async (req, res) => {
    // check access token endpoint. Used in frontend API service!
    res.json(req.user.userId);
  });

  authRouter.post(
    AuthApiPath.RESET_PASSWORD,
    yupValidation(resetSchema),
    async (_req, res) => {
      try {
        const { code, data } = await authService.resetPassword(_req.body);
        res.status(code).json({ message: data });
      } catch (error) {
        res.status(HttpCode.BAD_REQUEST).json(error);
      }
    },
  );

  authRouter.post(
    AuthApiPath.VERIFY_PASSWORD,
    yupValidation(verifySchema),
    async (_req, res) => {
      try {
        const { code, data } = await authService.verifyPassword(_req.body);
        res.status(code).json({ message: data });
      } catch (error) {
        res.status(HttpCode.BAD_REQUEST).json(error);
      }
    },
  );

  return authRouter;
};

export { initAuthApi };
