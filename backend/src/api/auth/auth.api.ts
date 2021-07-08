import { Router } from 'express';
import { ApiPath, AuthApiPath, HttpCode, EmailType } from '~/common/enums';
import { userService } from '~/services/services';
import { hashPassword, isMatchPassword } from '~/helpers/bcrypt';
import { createJWT } from '~/helpers/jwt';
import { ResponseMessages } from '~/common/enums/messages/response-messages.enum';
import { jwtValidation } from '~/middlewares/jwt-validation/jwt-validation.middelware';
import { ILogin, IVerPassword } from 'shared';
import { comparePasswords, createMail } from '~/helpers';
import { MailService } from '~/services/mail-service/mail-service.service';
import { link } from 'config/email.config';
import { yupValidation } from '~/middlewares/yup-validation/yup-validation.middelware';
import { verifySchema, resetSchema, loginSchema } from 'shared';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();
  apiRouter.use(ApiPath.AUTH, authRouter);
  authRouter.post(AuthApiPath.LOGIN, yupValidation(loginSchema), async (_req, res) => {
    try {
      const { email, password } = _req.body as ILogin;
      const user = await userService.getUserByEmail(email);

      if (!user) {
        res.status(HttpCode.UNAUTHORIZED).json({ message: ResponseMessages.NON_EXISTING_EMAIL });

      } else {
        const isMatch = await isMatchPassword(password, user.password);

        if (!isMatch) res.status(HttpCode.UNAUTHORIZED).json({ message: ResponseMessages.NON_MATCH_PASSWORDS });
        const jwt = createJWT(user.id);
        res.status(HttpCode.OK).json({ jwt });

      }
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  authRouter.get(AuthApiPath.LOGIN, jwtValidation, async (_req, res) => { // endpoint for testing jwtValidation
    res.json(_req.user.userId);
  });

  authRouter.post(AuthApiPath.RESET_PASSWORD, yupValidation(resetSchema), async (_req, res) => {
    try {
      const { email } = _req.body;
      const mailService = new MailService();
      const user = await userService.getUserByEmail(email);

      if (user) {
        const mail = createMail(`Reset password from ${email} account`, `${link}/${email}`);
        await mailService.sendMail(EmailType.RESET_PASSWORD, email, mail);
        res.status(HttpCode.OK).json({ message: ResponseMessages.CONFIRMED });

      } else res.status(HttpCode.BAD_REQUEST).json({ message: ResponseMessages.NON_EXISTING_EMAIL });

    } catch (error) {

      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });
  authRouter.post(AuthApiPath.VERIFY_PASSWORD, yupValidation(verifySchema), async (_req, res) => {
    try {
      const { password, verifiedPassword, email } = _req.body as IVerPassword;
      const isCompare = comparePasswords(password, verifiedPassword);

      if (!isCompare) {
        res.status(HttpCode.BAD_REQUEST).json({ message: ResponseMessages.NON_MATCH_PASSWORDS });
      } else {
        const user = await userService.getUserByEmail(email);
        if (user) {
          const hashedPassword = await hashPassword(password);
          await userService.updateUser(user.id, { ...user, password: hashedPassword });
          res.status(HttpCode.OK).json({ message: ResponseMessages.CONFIRMED });

        } else res.status(HttpCode.BAD_REQUEST).json({ message: ResponseMessages.NON_EXISTING_EMAIL });

      }
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  return authRouter;
};

export { initAuthApi };
