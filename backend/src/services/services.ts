import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { Logger } from './logger/logger.service';
import { UserService } from './user-service/user-service.service';
import { MailService } from './mail-service/mail-service.service';
import { TenantService } from './tenant-service/tenant-service.service';
import { AuthService } from '~/services/auth-service/auth-service.service';


const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const userService = new UserService();
const tenantService = new TenantService();
const mailService = new MailService();
const authService = new AuthService();

export { appAsyncStorage, logger, userService, tenantService, mailService, authService };
