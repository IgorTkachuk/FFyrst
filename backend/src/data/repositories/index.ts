import { UserRepository } from './user-repository';
import { TenantRepository } from './tenant-repository';
import { IndustryRepository } from './industry-repository';
import { TemplateRepository } from './template-repository';

const userRepository = new UserRepository();
const tenantRepository = new TenantRepository();
const industryRepository = new IndustryRepository();
const templateRepository = new TemplateRepository();

export {
  userRepository,
  tenantRepository,
  industryRepository,
  templateRepository,
}
