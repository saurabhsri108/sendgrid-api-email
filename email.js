/** Simple sendgrid email */
const dotenv = require('dotenv');
dotenv.config();
const sendMail = require('@sendgrid/mail');
sendMail.setApiKey(process.env.SENDGRID_API_KEY);
const chalk = require('chalk');

const message = {
  to: ['dapotoj197@keagenan.com'],
  from: { name: 'IBCoder', email: 'jojiti6129@latovic.com' },
  subject: 'Sending email with Sendgrid',
  text: 'This is a text email sent from node.js using sendgrid',
  html: '<h1>This is a text email sent from node.js using sendgrid</h1>',
};

const sendEmail = async () => {
  try {
    const response = await sendMail.send(message);
    console.log(chalk.green.bold(response));
  } catch (error) {
    console.error(chalk.red.bold(error.message));
  }
};

sendEmail();
