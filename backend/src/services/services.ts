import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { Logger } from './logger/logger.service';
import { UserService } from './user-service/user-service.service';
import { MailService } from './mail-service/mail-service.service';
import { TenantService } from './tenant-service/tenant-service.service';
import { AuthService } from '~/services/auth-service/auth-service.service';
import { FileUploadService } from './file-upload/file-upload-service';
import { IndustryService } from './industry-service/industry-service.service';
import { TemplateService } from './template-service/template-service.service';
import { BookingService } from './booking-service/booking-service.service';


const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const userService = new UserService();
const tenantService = new TenantService();
const mailService = new MailService();
const authService = new AuthService();
const fileUploadService = new FileUploadService();
const industryService = new IndustryService();
const templateService = new TemplateService();
const bookingService = new BookingService();

export {
  appAsyncStorage,
  logger,
  userService,
  tenantService,
  mailService,
  authService,
  fileUploadService,
  industryService,
  templateService,
  bookingService
}
