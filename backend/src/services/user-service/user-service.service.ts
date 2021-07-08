import { userRepository } from '~/data/repositories';
import { IUser } from '~/common/interfaces';
import { mailService } from '../services';
import { hashPassword } from '~/helpers/bcrypt';

class UserService {
  public getAllUsers(): Promise<IUser[]> {
    return userRepository.getAll();
  }

  public getUserById(id: string): Promise<IUser | null> {
    return userRepository.getById(id);
  }

  public async createNewUser(user: IUser): Promise<IUser> {
    const {email, password} = user;
    const passwordHash = await hashPassword(password);
    await mailService.sendActivationMail(email);
    return userRepository.createUser({
      ...user,
      password: passwordHash
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
}

export { UserService };
