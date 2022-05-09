import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f3e6c1b62c5792",
    pass: "eff401363a490e"
  }
});

app.post('/feedbacks', async (req, res) => {
  const {type, comment, screenshot} = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })
  await transport.sendMail({
    from: 'Equipe Feedgeth <oi@feedback.com>',
    to: 'Alberto <3ddy.br@gmail.com>',
    subject: 'Novo feedback',
    html:[
      `<p>Novo feedback do usuário ${type}</p>`,
      `<p>Comentario: ${comment}</p>`,
    ].join('\n')
  })
  return res.status(201).json({data:feedback});
})

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
