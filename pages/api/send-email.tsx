import { appendFileSync } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS
    },
    secure: true
  })

  const mailData: Mail.Options = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: `Message From ${req.body.name} <${req.body.email}> on Drifan Website`,
    html: `<div>${req.body.message}</div>`
  }
  console.log(mailData)

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log('send mail error', err)
    } else {
      console.log('send mail success', info)
    }
  })
  res.send({
    code: 200,
    success: true,
    message: 'Successfully sent email'
  })
}
