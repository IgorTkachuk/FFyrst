import { UserRepository } from './user-repository';
import { TenantRepository } from './tenant-repository';
import { IndustryRepository } from './industry-repository';
import { TemplateRepository } from './template-repository';
import { BookingRepository } from './booking-repository';

const userRepository = new UserRepository();
const tenantRepository = new TenantRepository();
const industryRepository = new IndustryRepository();
const templateRepository = new TemplateRepository();
const bookingRepository = new BookingRepository();

export {
  userRepository,
  tenantRepository,
  industryRepository,
  templateRepository,
  bookingRepository
}
