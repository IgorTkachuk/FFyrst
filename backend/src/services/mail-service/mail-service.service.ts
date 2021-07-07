import { host, port, user, pass } from 'config/email.config';
import { Transporter } from 'nodemailer';
const pug = require('pug');
const nodemailer = require('nodemailer');

type mailOptions = {
  mailTheme: string;
  data: {
    link: string;
  };
};

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
  async sendMail(type: any, email: string, options: mailOptions) {
    await this.transporter.sendMail(
      {
        from: user,
        to: email,
        subject: options?.mailTheme,
        html: pug.compileFile(`${__dirname}/templates/${type}.pug`, {
          ...options?.data,
        })(),
      },
      function (error: any, info: any) {
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
