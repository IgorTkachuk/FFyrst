import { userRepository } from '~/data/repositories';
import { IUser, IActivationMessage, IProfile } from 'shared/common/interfaces';
import { mailService, userService } from '../services';
import { hashPassword, hashToken } from '~/helpers/bcrypt';
import { createActivationMessage as message, getUpdatedUser } from '~/helpers';
import { ActivationStatus, HttpCode } from 'shared/common/enums';
import { userSchema } from '~/api/user/user.schema';

class UserService {
  public getAllUsers(): Promise<IUser[]> {
    return userRepository.getAll();
  }

  public getUserById(id: string): Promise<IUser | null> {
    return userRepository.getById(id);
  }

  public async createNewUser(user: IUser): Promise<IUser> {
    const { password } = user;
    const passwordHash = await hashPassword(password);

    return userRepository.createUser({
      ...user,
      password: passwordHash,
    });
  }

  public async setUserActivation(data: IUser): Promise<IUser[]> {
    const { id, email } = data;
    const tokenHash = hashToken(Date.now().toString());
    await mailService.sendActivationMail(email, tokenHash);
    return await this.updateUser(id, {
      ...data,
      activationToken: tokenHash,
      activationTokenExpiration: new Date(Date.now() + 1000 * 60 * 60),
    });
  }

  public async updateUser(id: string, data: IUser): Promise<IUser[]> {
    return userRepository.updateById(id, data);
  }

  public async updateUserProfile(
    id: string,
    userProfile: IProfile,
  ): Promise<IUser[] | null> {
    try {
      const user = await userService.getUserById(id);
      if (!user) {
        return null;
      }
      const updatedUser = getUpdatedUser(user, userProfile);
      await userSchema.validate(updatedUser, { context: { required: true } });
      const result = await userRepository.updateById(id, updatedUser);
      return result;
    } catch {
      return null;
    }
  }

  public deleteUser(id: string): Promise<number> {
    return userRepository.deleteById(id);
  }

  public getUserByEmail(email: string): Promise<IUser | null> {
    return userRepository.getByEmail(email);
  }

  public getUserByToken(token: string): Promise<IUser | null> {
    return userRepository.getByToken(token);
  }

  public async activateUser(token: string): Promise<IActivationMessage> {
    const user = await this.getUserByToken(token);
    if (!user) {
      return message(ActivationStatus.NOT_FOUND, 'User not found.');
    }
    if (user.activationTokenExpiration < new Date(Date.now())) {
      return message(
        ActivationStatus.EXPIRED,
        'Activation time expired.',
        user.email,
      );
    }
    const data = {
      isActive: true,
      activationToken: '',
    };
    userRepository.activateUser(token, { ...user, ...data });
    return message(ActivationStatus.SUCCESS, 'Successful activation.');
  }
}

export { UserService };
