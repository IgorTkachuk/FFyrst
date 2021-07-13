import { HttpCode, ILogin, ITokens, IVerPassword } from 'shared';
import { userService } from '~/services/services';
import { ResponseMessages } from '~/common/enums/messages/response-messages.enum';
import {
  comparePasswords,
  createJWT,
  createMail,
  getTokens,
  hashPassword,
  isMatchPassword,
  verifyJWT,
} from '~/helpers';
import { AuthServiceRes } from '~/common/interfaces';
import { MailService } from '~/services/mail-service/mail-service.service';
import { link } from '../../../config/email.config';
import { EmailType } from '~/common/enums';
import { secret } from '../../../config/jwt.config';


class AuthService {

  async loginUser(data: ILogin): Promise<AuthServiceRes<ITokens>> {
    const { email, password } = data;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return { code: HttpCode.BAD_REQUEST, data: ResponseMessages.NON_EXISTING_EMAIL };
    } else {
      const isMatch = await isMatchPassword(password, user.password);
      if (!isMatch) {
        return { code: HttpCode.BAD_REQUEST, data: ResponseMessages.NON_MATCH_PASSWORDS };
      }
      const tokens = await getTokens(user.id);
      return { code: HttpCode.OK, data: tokens };
    }
  }

  async resetPassword(data: { email: string }): Promise<AuthServiceRes<string>> {
    const { email } = data;
    const mailService = new MailService();
    const user = await userService.getUserByEmail(email);
    if (user) {
      const token = createJWT(user.id);
      const mail = createMail(`Reset password from ${email} account`, `${link}/${token}`);
      await mailService.sendMail(EmailType.RESET_PASSWORD, 'dimonprykh@gmail.com', mail);
      return { code: HttpCode.OK, data: ResponseMessages.CONFIRMED };
    } else {
      return { code: HttpCode.BAD_REQUEST, data: ResponseMessages.NON_EXISTING_EMAIL };
    }
  }

  async verifyPassword(data: IVerPassword): Promise<AuthServiceRes<string>> {
    const { password, verifiedPassword, token } = data;
    const isCompare = comparePasswords(password, verifiedPassword);
    if (!isCompare) {
      return { code: HttpCode.BAD_REQUEST, data: ResponseMessages.NON_MATCH_PASSWORDS };
    } else {
      const decoded = verifyJWT(token, secret) as { userId: string };

      if (decoded) {
        const user = await userService.getUserById(decoded.userId);

        if (user) {
          const hashedPassword = await hashPassword(password);
          await userService.updateUser(user.id, { ...user, password: hashedPassword });
          return { code: HttpCode.OK, data: ResponseMessages.CONFIRMED };
        } else {
          return { code: HttpCode.BAD_REQUEST, data: ResponseMessages.NON_EXISTING_EMAIL };
        }
      } else {
        return { code: HttpCode.FORBIDDEN, data: ResponseMessages.TOKEN_EXPIRED };
      }

    }
  }

}

export { AuthService };
