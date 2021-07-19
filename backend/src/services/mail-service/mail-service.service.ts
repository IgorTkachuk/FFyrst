/* eslint-disable @typescript-eslint/no-var-requires */
import { host, port, user, pass } from 'config/email.config';
import { EmailType } from '~/common/enums';
import { Transporter } from 'nodemailer';
import { MailOptions } from '~/common/types';
import { getFullUrl, createMail } from '~/helpers';
import { compileFile } from 'pug';

const nodemailer = require('nodemailer');

class MailService {
  transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host,
      port,
      auth: {
        user,
        pass,
      },
      secure: port === '465',
    });
  }

  async sendMail(type: string, email: string, options: MailOptions): Promise<Transporter> {
    return this.transporter.sendMail(
      {
        from: user,
        to: email,
        subject: options?.mailTheme,
        html: compileFile(`${__dirname}/templates/${type}.pug`)({
          ...options?.data,
        }),
      },
    );
  }

  async sendActivationMail(email: string, token: string): Promise<Transporter> {
    const link = getFullUrl(`/email-activation/${token}`);
    const mailOptions = createMail('Confirm registration', link);
    return await this.sendMail(EmailType.ACTIVATION, email, mailOptions);
  }
}

export { MailService };
