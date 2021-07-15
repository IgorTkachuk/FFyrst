import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

import { IUser } from '~/common/interfaces';
import { ModelName } from '~/common/enums'

interface UserInstance extends IUser, Model {}

const createUserModel = (orm:Sequelize): ModelCtor<UserInstance> => {
  const UserModel = orm.define<UserInstance>(ModelName.USER, {
    firstName: {
      field: 'first_name',
        allowNull: false,
        type: DataTypes.STRING
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: DataTypes.STRING
      },
      phoneNumber: {
        field: 'phone_number',
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
        field: 'is_active',
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      activationTokenExpiration: {
        field: 'activation_token_expiration',
        type: DataTypes.DATE,
        defaultValue: Date.now() + 1000 * 60 * 60
      },
      activationToken: {
        field: 'activation_token',
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
