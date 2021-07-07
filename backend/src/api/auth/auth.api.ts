import { Router } from 'express';
import { ApiPath, AuthApiPath, HttpCode } from '~/common/enums';
import { userService } from '~/services/services';
import { isMatchPassword } from '~/helpers/bcrypt';
import { createJWT } from '~/helpers/jwt';
import { ResponseMessages } from '~/common/enums/messages/rerponse-messages.enum';
import { jwtValidation } from '~/middlewares/jwt-validation/jwt-validation.middelware';


const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();
  apiRouter.use(ApiPath.AUTH, authRouter);
  authRouter.post(AuthApiPath.LOGIN, async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userService.getUserByEmail(email);
      if (!user) {
        res.status(HttpCode.UNAUTHORIZED).json({ message: ResponseMessages.NON_EXIST_EMAIL });
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
  authRouter.get(AuthApiPath.LOGIN, jwtValidation, async (req, res) => { // endpoint for testing jwtValidation
    res.json(req.user.userId);
  });
  return authRouter;
};

export { initAuthApi };
