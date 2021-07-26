import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

import { IUser } from 'shared';
import { ModelName } from '../../common/enums';

interface UserInstance extends IUser, Model {
}

const createUserModel = (orm: Sequelize): ModelCtor<UserInstance> => {
  const UserModel = orm.define<UserInstance>(
    ModelName.USER,
    {
      firstName: {
        field: 'first_name',
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        field: 'phone_number',
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      birthDate: {
        field: 'birth_date',
        allowNull: true,
        type: DataTypes.DATE,
      },
      avatar: {
        field: 'avatar',
        allowNull: true,
        type: DataTypes.STRING,
      },
      isActive: {
        field: 'is_active',
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      activationTokenExpiration: {
        field: 'activation_token_expiration',
        type: DataTypes.DATE,
        defaultValue: Date.now() + 1000 * 60 * 60,
      },
      activationToken: {
        field: 'activation_token',
        type: DataTypes.STRING,
      },
      postalCode: {
        field: 'postal_code',
        type: DataTypes.STRING,
        defaultValue: '',
      },
      stateAddress: {
        field: 'state_address',
        type: DataTypes.STRING,
        defaultValue: '',
      },
      cityAddress: {
        field: 'city_address',
        type: DataTypes.STRING,
        defaultValue: '',
      },
      streetAddress: {
        field: 'street_address',
        type: DataTypes.STRING,
        defaultValue: '',
      },
      marriageStatus: {
        field: 'marriage_status',
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      dependantsAmount: {
        field: 'dependants_amount',
        type: DataTypes.NUMBER,
        defaultValue: 0,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'users',
    },
  );
  return UserModel;
};

export default createUserModel;
