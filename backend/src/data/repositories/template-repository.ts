import { TemplateModel } from '../models';
import { ITemplate } from '~/common/interfaces';

class TemplateRepository {
  public getAll():Promise<ITemplate[]>{
    return TemplateModel.findAll()
  }
  public getById(id:string):Promise<ITemplate | null>{
    return TemplateModel.findByPk(id)
  }
  public createTemplate(template:ITemplate):Promise<ITemplate>{
    return TemplateModel.create(template)
  }
  public async updateById(id:string, data:ITemplate):Promise<ITemplate[]>{
    const result = await TemplateModel.update(data, {
      where: { id },
      returning: true
    });
    return result[1];
  }
  public deleteById(id:string):Promise<number>{
    return TemplateModel.destroy({
      where: { id }
    });
  }
}

export { TemplateRepository };
