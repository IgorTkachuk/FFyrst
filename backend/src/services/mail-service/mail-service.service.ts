import { host, port, user, pass } from 'config/email.config';
import { emailType } from '~/common/enums';
import { Transporter } from 'nodemailer';
import { Request } from 'express';
import { getFullUrl } from '~/helpers';
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
    // this.transporter = nodemailer.createTransport({
    //   host: 'smtp.ethereal.email',
    //   port: 587,
    //   auth: {
    //       user: 'emma68@ethereal.email',
    //       pass: 'Qgtk3UCAC4uuqa61eG'
    //   }
    // }, {
    //   from: 'emma68@ethereal.email',
    // })
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
  async sendMail(type: string, email: string, options: mailOptions):Promise<Transporter> {
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
  async sendActivationMail(_req: Request): Promise<Transporter>{
    return await this.sendMail(emailType.ACTIVATION, _req.body, {
      mailTheme: 'Confirm registration',
      data: {
        link: getFullUrl(_req.originalUrl),
    }});
  }
}

export { MailService };
