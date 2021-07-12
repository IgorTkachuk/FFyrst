import { host, port, user, pass } from 'config/email.config';
import { Transporter } from 'nodemailer';
import { MailOptions } from '~/common/types';

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
      secure: port === '465' ? true : false,
    });
  }

  //type: check enum emailType  email: example@gmail.com
  async sendMail(type: any, email: string, options: MailOptions) {
    await this.transporter.sendMail(
      {
        from: user,
        to: email,
        subject: options?.mailTheme,
        html: pug.compileFile(`${__dirname}/templates/${type}.pug`)({
          link: options.data.link,
        }),
      },
      function(error: any, info: any) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      },
    );
  }
}

export { MailService };
