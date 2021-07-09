/* eslint-disable @typescript-eslint/no-var-requires */
import { host, port, user, pass } from 'config/email.config';
import { emailType } from '~/common/enums';
import { Transporter } from 'nodemailer';
import { MailOptions } from '~/common/types';
import { getFullUrl, createMail } from '~/helpers';

const pug = require('pug');
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
  //type: check enum emailType  email: example@gmail.com
  async sendMail(type: string, email: string, options: MailOptions):Promise<Transporter> {
    return this.transporter.sendMail(
      {
        from: user,
        to: email,
        subject: options?.mailTheme,
        html: pug.compileFile(`${__dirname}/templates/${type}.pug`)({
          ...options?.data,
        }),
      },
      // function (error: any, info: any) {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('Email sent: ' + info.response);
      //   }
      // },
    );
  }
  async sendActivationMail(email: string, token: string): Promise<Transporter>{
    const link = getFullUrl(`/email-activation/${token}`);
    const mailOptions = createMail('Confirm registration', link)
    return await this.sendMail(emailType.ACTIVATION, email, mailOptions);
  }
}

export { MailService };
