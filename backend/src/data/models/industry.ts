import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';
import { ModelName } from '~/common/enums';
import { IIndustry } from '~/common/interfaces';

export interface IndustryInstance extends IIndustry, Model {}

const createIndustryModel = (orm: Sequelize): ModelCtor<IndustryInstance> => {
  const IndustryModel = orm.define<IndustryInstance>(ModelName.INDUSTRY, {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'industries',
  })
  return IndustryModel
};

export default createIndustryModel;
