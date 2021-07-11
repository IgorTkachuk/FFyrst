import { Router } from 'express';
import { ApiPath, AuthApiPath, HttpCode, EmailType } from '~/common/enums';
import { userService } from '~/services/services';
import { hashPassword, isMatchPassword } from '~/helpers/bcrypt';
import { ResponseMessages } from '~/common/enums/messages/response-messages.enum';
import { jwtValidation } from '~/middlewares/jwt-validation/jwt-validation.middelware';
import { ILogin, IVerPassword } from 'shared';
import { comparePasswords, createJWT, createMail, verifyJWT } from '~/helpers';
import { MailService } from '~/services/mail-service/mail-service.service';
import { link } from 'config/email.config';
import { yupValidation } from '~/middlewares/yup-validation/yup-validation.middelware';
import { verifySchema, resetSchema, loginSchema } from 'shared';
import { refreshTokenValidation } from '~/middlewares/jwt-validation/refresh-validation.middelware';
import { getTokens } from '~/helpers';
import { secret } from 'config/jwt.config';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();
  apiRouter.use(ApiPath.AUTH, authRouter);
  authRouter.post(AuthApiPath.LOGIN, yupValidation(loginSchema), async (_req, _res) => {
    try {
      const { email, password } = _req.body as ILogin;
      console.log('working');
      console.log(`${email}, ${password}`);
      const user = await userService.getUserByEmail(email);
      if (!user) {
        return _res.status(HttpCode.UNAUTHORIZED)
          .json({ message: ResponseMessages.NON_EXISTING_EMAIL });
      } else {
        const isMatch = await isMatchPassword(password, user.password);

        if (!isMatch) {
          return _res.status(HttpCode.UNAUTHORIZED)
            .json({ message: ResponseMessages.NON_MATCH_PASSWORDS });
        }
        const tokens = await getTokens(user.id);
        _res.status(HttpCode.OK).json({ tokens });
      }
    } catch (error) {
      _res.status(HttpCode.BAD_REQUEST).json({ e: '' + error });
    }
  });

  authRouter.post(
    AuthApiPath.REFRESH_TOKEN,
    refreshTokenValidation,
    async (_req, _res) => {
      const tokens = await getTokens(_req.body.userId);
      _res.status(HttpCode.OK).json(tokens);
    },
  );

  authRouter.get(AuthApiPath.LOGIN, jwtValidation, async (req, res) => { // endpoint for testing jwtValidation
    res.json(req.user.userId);
  });

  authRouter.post(AuthApiPath.RESET_PASSWORD, yupValidation(resetSchema), async (_req, res) => {
    try {
      const { email } = _req.body;
      const mailService = new MailService();
      const user = await userService.getUserByEmail(email);
      if (user) {
        const token = createJWT(user.id);
        const mail = createMail(`Reset password from ${email} account`, `${link}/${token}`);
        await mailService.sendMail(EmailType.RESET_PASSWORD, 'dimonprykh@gmail.com', mail);
        res.status(HttpCode.OK)
          .json({ message: ResponseMessages.CONFIRMED });

      } else {
        res.status(HttpCode.BAD_REQUEST)
          .json({ message: ResponseMessages.NON_EXISTING_EMAIL });
      }
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  authRouter.post(AuthApiPath.VERIFY_PASSWORD, yupValidation(verifySchema), async (_req, res) => {
    try {
      const { password, verifiedPassword, token } = _req.body as IVerPassword;
      const isCompare = comparePasswords(password, verifiedPassword);

      if (!isCompare) {
        res.status(HttpCode.BAD_REQUEST)
          .json({ message: ResponseMessages.NON_MATCH_PASSWORDS });

      } else {
        const decoded = verifyJWT(token, secret) as { userId: string };

        if (decoded) {
          const user = await userService.getUserById(decoded.userId);

          if (user) {
            const hashedPassword = await hashPassword(password);
            await userService.updateUser(user.id, { ...user, password: hashedPassword });
            res.status(HttpCode.OK)
              .json({ message: ResponseMessages.CONFIRMED });

          } else {
            res.status(HttpCode.BAD_REQUEST)
              .json({ message: ResponseMessages.NON_EXISTING_EMAIL });
          }
        } else {
          res.status(HttpCode.BAD_REQUEST)
            .json({ message: ResponseMessages.TOKEN_EXPIRED });
        }

      }
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  return authRouter;
};

export { initAuthApi };
