import { Router } from 'express';
import { ActivationStatus } from 'shared';
import { ApiPath, HttpCode, UsersApiPath } from 'shared';
import { createActivationMessage } from '~/helpers';
import { userService } from '~/services/services';
import { userSchema } from './user.schema';
import { jwtValidation } from '~/middlewares/jwt-validation/jwt-validation.middelware';

const initUserApi = (apiRouter: Router): Router => {
  const userRouter = Router();

  apiRouter.use(ApiPath.USERS, userRouter);

  userRouter.get(UsersApiPath.ROOT, async (_req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(HttpCode.OK).json(users);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  userRouter.get(UsersApiPath.$ID, async (_req, res) => {
    try {
      const user = await userService.getUserById(_req.params.id);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  userRouter.post(UsersApiPath.ROOT, async (_req, res, next) => {
    try {
      await userSchema.validate(_req.body, { context: { required: true } });
      const user = await userService.createNewUser(_req.body);
      const userToActivate = await userService.setUserActivation(user);
      res.status(HttpCode.OK).json({ message: 'success', user: userToActivate });
    } catch (error) {
      // next(error);
    }
  });

  userRouter.put(UsersApiPath.$ID, async (_req, res) => {
    try {
      await userSchema.validate(_req.body);
      const user = await userService.updateUser(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  userRouter.delete(UsersApiPath.$ID, async (_req, res) => {
    try {
      await userService.deleteUser(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json();
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  userRouter.put(UsersApiPath.ACTIVATION_REQUEST, async (_req, res, next) => {
    try {
      const user = await userService.getUserByEmail(_req.body.email);
      if (user) {
        await userService.setUserActivation(user);
        const message = createActivationMessage(ActivationStatus.SENT, 'Mail was sent');
        res.status(HttpCode.OK).json(message);
      }
      res.status(HttpCode.NOT_FOUND).json('User not found.');
    } catch (error) {
      // next(error);
    }
  });

  userRouter.put(UsersApiPath.$ACTIVATION, async (_req, res, next) => {
    try {
      const outcome = await userService.activateUser(_req.params.token);
      return res.json(outcome);
    } catch (error) {
      // next(error);
    }
  });

  userRouter.get(UsersApiPath.PAG_USERS, jwtValidation, async (_req, _res, next) => {
    try {
      const count = await userService.getUsersCount();
      _res.status(HttpCode.OK).json({ count });
    } catch (error) {
      // next(error);
      _res.status(400).json({ error });
    }
  });

  userRouter.post(UsersApiPath.PAG_USERS, jwtValidation, (_req, _res, next) => {
    try {
      const { limit, offset, filters } = _req.body;

    } catch (error) {
      next(error);
    }
  });

  return userRouter;
};

export { initUserApi };
