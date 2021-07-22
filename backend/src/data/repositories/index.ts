import { UserRepository } from './user-repository';
import { TenantRepository } from './tenant-repository';
import { IndustryRepository } from './industry-repository';

const userRepository = new UserRepository();
const tenantRepository = new TenantRepository();
const industryRepository = new IndustryRepository();

export {
  userRepository,
  tenantRepository,
  industryRepository
}
