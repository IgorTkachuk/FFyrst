import { UserModel } from '../models';
import { IUser } from '~/common/interfaces';

class UserRepository {
  public getAll(): Promise<IUser[]> {
    return UserModel.findAll();
  }

  public getById(id: string): Promise<IUser | null> {
    return UserModel.findByPk(id);
  }

  public createUser(user: IUser): Promise<IUser> {
    return UserModel.create(user);
  }

  public async updateById(id: string, data: IUser): Promise<IUser[]> {
    const result = await UserModel.update(data, {
      where: { id },
      returning: true,
    });
    return result[1];
  }

  public deleteById(id: string): Promise<number> {
    return UserModel.destroy({
      where: { id },
    });
  }

  public async getByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ where: { email } });
  }

  public async getByToken(activationToken: string): Promise<IUser | null> {
    return await UserModel.findOne({ where: { activationToken } });
  }

  public async activateUser(activationToken: string, data: IUser): Promise<IUser[]> {
    const result = await UserModel.update(data, {
      where: { activationToken },
      returning: true,
    });
    return result[1];
  }
}

export { UserRepository };
