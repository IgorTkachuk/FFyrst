import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';
import { ModelName } from '~/common/enums';
import { ITemplate } from '~/common/interfaces';

export interface TemplateInstance extends ITemplate, Model {}

const createTemplateModel = (orm: Sequelize): ModelCtor<TemplateInstance> => {
  const TemplateModel = orm.define<TemplateInstance>(ModelName.TEMPLATE, {
    industryId: {
      field: 'industry_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    template: {
      field: 'template',
      type: DataTypes.JSON,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'templates',
  })
  return TemplateModel
};

export default createTemplateModel;
