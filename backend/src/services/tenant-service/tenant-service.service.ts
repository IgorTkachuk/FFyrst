import { tenantRepository } from '~/data/repositories';
import { ITenant } from '~/common/interfaces';

class TenantService {
  public getAllTenants():Promise<ITenant[]>{
    return tenantRepository.getAll()
  }
  public getTenantById(id:string):Promise<ITenant | null>{
    return tenantRepository.getById(id)
  }
  public getTenantByDomainUrl(domainUrl:string):Promise<ITenant | null>{
    return tenantRepository.getByDomainUrl(domainUrl)
  }
  public createNewTenant(user:ITenant):Promise<ITenant>{
    return tenantRepository.createTenant(user)
  }
  public async updateTenant(id:string, data:ITenant):Promise<ITenant[]>{
    return tenantRepository.updateById(id, data)
  }
  public deleteTenant(id:string):Promise<number>{
    return tenantRepository.deleteById(id)
  }
}

export { TenantService };
