// import { userRepository } from '~/data/repositories';
import { IUser } from '~/common/interfaces';

class TenantService {
  public getAllTenants(): string{
      return 'getAllTenants'
  }
  public getTenantById(id:string): string{
      return id
  }
  public createNewTenant(user:IUser): IUser{
      return user
  }
  public async updateTenant(id:string, data:IUser): Promise<IUser>{
      return data
  }
  public deleteTenant(id:string): number{
      return Number(id)
  }
}

export { TenantService };
