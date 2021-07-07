import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

import { IUser } from '~/common/interfaces';
import { ModelName } from '~/common/enums'

interface UserInstance extends IUser, Model {}

const createUserModel = (orm:Sequelize): ModelCtor<UserInstance> => {
  const UserModel = orm.define<UserInstance>(ModelName.USER, {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      surname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      birthdate: {
        allowNull: false,
        type: DataTypes.DATE
      },
      phone: {
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
