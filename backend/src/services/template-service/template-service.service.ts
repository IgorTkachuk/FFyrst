import { templateRepository } from '~/data/repositories';
import { ITemplate } from '~/common/interfaces';

class TemplateService {
  public getAllTemplates():Promise<ITemplate[]>{
    return templateRepository.getAll()
  }
  public getTemplateById(id:string):Promise<ITemplate | null>{
    return templateRepository.getById(id)
  }
  public createNewTemplate(template:ITemplate):Promise<ITemplate>{
    return templateRepository.createTemplate(template)
  }
  public async updateTemplate(id:string, data:ITemplate):Promise<ITemplate[]>{
    return templateRepository.updateById(id, data)
  }
  public deleteTemplate(id:string):Promise<number>{
    return templateRepository.deleteById(id)
  }
}

export { TemplateService };
