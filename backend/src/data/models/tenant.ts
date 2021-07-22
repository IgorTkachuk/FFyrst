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
    domainURL: {
      field: 'domain_url',
      type: DataTypes.STRING,
      allowNull: false,
    },
    logoURL: {
      field: 'logo_url',
      type: DataTypes.STRING,
      allowNull: false,
    },
    supportEmail: {
      field: 'support_email',
      defaultValue: '',
      type: DataTypes.STRING,
    },
    industry: {
      field: 'industry',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phoneNumber: {
      field: 'phone_number',
      defaultValue: '',
      type: DataTypes.STRING,
    },
    invoiceAddress: {
      field: 'invoice_address',
      defaultValue: '',
      type: DataTypes.STRING,
    },
    useCred: {
      field: 'use_cred',
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    credURL: {
      field: 'cred_url',
      defaultValue: '',
      type: DataTypes.STRING,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'tenants',
  })
  return TenantModel
};

export default createTenantModel;
