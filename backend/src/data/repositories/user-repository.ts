import { Op, where, fn, col } from 'sequelize';

import { UserModel } from '../models';
import { IUser } from '~/common/interfaces';
import { ISearchFilter } from 'shared';

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

  public async activateUser(
    activationToken: string,
    data: IUser,
  ): Promise<IUser[]> {
    const result = await UserModel.update(data, {
      where: { activationToken },
      returning: true,
    });
    return result[1];
  }

  public async getUsersWithPagination(data: ISearchFilter): Promise<{ rows: IUser[]; count: number; }> {
    const { filter, limit, page, search } = data;
    const offset = (page - 1) * limit;
    const isActive = filter === 'all' ? null : filter !== 'online';
    return await UserModel.findAndCountAll({
      where: {
        [Op.or]: [
          { firstName: { [Op.iLike]: `%${search.trim()}%` } },
          { lastName: { [Op.iLike]: `%${search.trim()}%` } },
          { phoneNumber: { [Op.substring]: search.trim() } },
        ],
        isActive: { [Op.not]: isActive },
      },
      offset: +offset,
      limit: +limit,
    });
  }

}



export { UserRepository };
