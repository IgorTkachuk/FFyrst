import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';
import { ModelName } from '~/common/enums';
import { ITenant } from '~/common/interfaces';

interface TenantInstance extends ITenant, Model {}

const createTenantModel = (orm: Sequelize): ModelCtor<TenantInstance> => {
  const TenantModel = orm.define<TenantInstance>(ModelName.TENANT, {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    legal_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    domain_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'tenants',
  })
  return TenantModel
};

export default createTenantModel;
