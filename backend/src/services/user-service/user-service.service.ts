import { userRepository } from '~/data/repositories';
import { IUser, IActivationMessage } from 'shared/common/interfaces';
import { mailService } from '../services';
import { hashPassword, hashToken } from '~/helpers/bcrypt';
import { createMessage } from '~/helpers';
import { ActivationStatus } from 'shared/common/enums'

class UserService {
  public getAllUsers(): Promise<IUser[]> {
    return userRepository.getAll();
  }

  public getUserById(id: string): Promise<IUser | null> {
    return userRepository.getById(id);
  }

  public async createNewUser(user: IUser): Promise<IUser> {
    const {email, password} = user;
    const tokenHash = hashToken(Date.now().toString());
    const passwordHash = await hashPassword(password);
    await mailService.sendActivationMail(email, tokenHash);
    return userRepository.createUser({
      ...user,
      password: passwordHash,
      activationToken: tokenHash
    });
  }

  public async updateUser(id: string, data: IUser): Promise<IUser[]> {
    return userRepository.updateById(id, data);
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
    if(!user) {
      return createMessage(ActivationStatus.NOT_FOUND, 'User not found.');
    }
    if(user.expiryDate < new Date(Date.now())) {
      return createMessage(ActivationStatus.EXPIRED, 'Activation time expired.', user.email);
    }
    const data = {
      isActive: true,
      activationToken: ''
    }
    userRepository.activateUser(token, {...user, ...data});
    return createMessage(ActivationStatus.SUCCESS, 'Successful activation.');
  }
}

export { UserService };
