import { UserRepository } from './user-repository';
import { TenantRepository } from './tenant-repository';

const userRepository = new UserRepository();
const tenantRepository = new TenantRepository();

export {
  userRepository,
  tenantRepository
}
