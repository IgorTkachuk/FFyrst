import { templateRepository } from '~/data/repositories';
import { ITemplate, ITemplateField } from '~/common/interfaces';

class TemplateService {
  public getAllTemplates():Promise<ITemplate[]>{
    return templateRepository.getAll()
  }
  public getTemplateById(id:string):Promise<ITemplate | null>{
    return templateRepository.getById(id)
  }
  public createNewTemplate(template:ITemplateField[], industryId: number):Promise<ITemplate>{
    return templateRepository.createTemplate({template, industryId})
  }
  public async updateTemplate(id:string, template:ITemplateField[], industryId: number):Promise<ITemplate[]>{
    return templateRepository.updateById(id, {template, industryId})
  }
  public deleteTemplate(id:string):Promise<number>{
    return templateRepository.deleteById(id)
  }
}

export { TemplateService };
