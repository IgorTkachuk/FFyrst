import { industryRepository } from '~/data/repositories';
import { IIndustry } from '~/common/interfaces';

class IndustryService {
  public getAllIndustries():Promise<IIndustry[]>{
    return industryRepository.getAll()
  }
  public getIndustryById(id:string):Promise<IIndustry | null>{
    return industryRepository.getById(id)
  }
  public createNewIndustry(industry:IIndustry):Promise<IIndustry>{
    return industryRepository.createIndustry(industry)
  }
  public async updateIndustry(id:string, data:IIndustry):Promise<IIndustry[]>{
    return industryRepository.updateById(id, data)
  }
  public deleteIndustry(id:string):Promise<number>{
    return industryRepository.deleteById(id)
  }
}

export { IndustryService };
