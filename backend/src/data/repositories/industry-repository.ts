import { IndustryModel } from '../models';
import { IIndustry } from '~/common/interfaces';

class IndustryRepository {
  public getAll():Promise<IIndustry[]>{
    return IndustryModel.findAll()
  }
  public getById(id:string):Promise<IIndustry | null>{
    return IndustryModel.findByPk(id)
  }
  public createIndustry(industry:IIndustry):Promise<IIndustry>{
    return IndustryModel.create(industry)
  }
  public async updateById(id:string, data:IIndustry):Promise<IIndustry[]>{
    const result = await IndustryModel.update(data, {
      where: { id },
      returning: true
    });
    return result[1];
  }
  public deleteById(id:string):Promise<number>{
    return IndustryModel.destroy({
      where: { id }
    });
  }
}

export { IndustryRepository };
