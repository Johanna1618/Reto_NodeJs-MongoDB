// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
//javascript

require('dotenv').config();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: process.env.RECIPIENT, // Change to your recipient
  from: process.env.SENDER, // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>Mensaje enviado desde el servicio Sengrid</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email enviado correctamente!')
  })
  .catch((error) => {
    console.error(error)
  })
