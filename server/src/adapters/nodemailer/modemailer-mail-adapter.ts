import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f3e6c1b62c5792",
    pass: "eff401363a490e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {

    await transport.sendMail({
    from: 'Equipe Feedgeth <oi@feedback.com>',
    to: 'Alberto <3ddy.br@gmail.com>',
    subject,
    html:body,
  })
  }
}
