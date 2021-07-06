import { userRepository } from '~/data/repositories';
import { IUser } from '~/common/interfaces';


class AuthService {
  public findUserByEmail(email: string): Promise<IUser | null> {
    return userRepository.getByEmail(email);
  }
}

export { AuthService };
