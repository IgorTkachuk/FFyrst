const nodemailer = require("nodemailer");
type dataT = {
    headerText: string,
    bodyHtml: string,
}
class MailService {
    transporter: any
    constructor ()  {
        this.transporter = nodemailer.createTransport({
            //check env.example
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT === '465' ? true : false ,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            }
        })
    }
    //email: example@gmail.com
    //activation Email
    async sendActivationMail(email: string, link: string) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Email activation",
            html: `<div>
                        <h1>Please, active your email</h1>
                        <a href=${link}>Activate account</a>
                    </div>`,
        }, function (error:any, info:any) {
            if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
        })
    }
    //send template Email
    async sendMail(email: string, data: dataT) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: data.headerText,
            html: data.bodyHtml,
        }, function (error: any, info: any) {
            if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
        })
    }
}

export { MailService }
