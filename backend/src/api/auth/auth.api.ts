import { Router } from 'express';
import { ApiPath, AuthApiPath, HttpCode } from '~/common/enums';
import { authService } from '~/services/services';
import { isMatchPassword } from '~/helpers/bcrypt';
import { createJWT } from '~/helpers/jwt';
import { ResponseMessages } from '~/common/enums/messages/rerponse-messages.enum';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();
  apiRouter.use(ApiPath.AUTH, authRouter);
  authRouter.post(AuthApiPath.LOGIN, async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await authService.findUserByEmail(email);
      if (!user) {
        res.status(HttpCode.NO_CONTENT).json({ message: ResponseMessages.NON_EXIST_EMAIL });
      } else {
        const isMatch = await isMatchPassword(password, user.password);
        if (!isMatch) res.status(HttpCode.NO_CONTENT).json({ message: ResponseMessages.NON_MATCH_PASSWORDS });
        const jwt = createJWT();
        res.status(HttpCode.OK).json({ jwt });
      }
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });
  return authRouter;
};

export { initAuthApi };

