import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

import { IUser } from '~/common/interfaces';
import { ModelName } from '~/common/enums'

interface UserInstance extends IUser, Model {}

const createUserModel = (orm:Sequelize): ModelCtor<UserInstance> => {
  const UserModel = orm.define<UserInstance>(ModelName.USER, {
    firstName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      activationTokenExpiration: {
        type: DataTypes.DATE,
        defaultValue: Date.now() + 1000 * 60 * 60
      },
      activationToken: {
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      tableName: 'users',
    }
  )
  return UserModel;
};

export default createUserModel;
