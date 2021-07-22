import { TenantModel } from '../models';
import { ITenant } from '~/common/interfaces';

class TenantRepository {
  public getAll():Promise<ITenant[]>{
    return TenantModel.findAll()
  }
  public getById(id:string):Promise<ITenant | null>{
    return TenantModel.findByPk(id)
  }
  public getByDomainUrl(domainURL:string):Promise<ITenant | null>{
    return TenantModel.findOne({ where: { domainURL } });
  }
  public createTenant(user:ITenant):Promise<ITenant>{
    return TenantModel.create(user)
  }
  public async updateById(id:string, data:ITenant):Promise<ITenant[]>{
    const result = await TenantModel.update(data, {
      where: { id },
      returning: true
    });
    return result[1];
  }
  public deleteById(id:string):Promise<number>{
    return TenantModel.destroy({
      where: { id }
    });
  }
}

export { TenantRepository };
