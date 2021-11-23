import { emailMessage, sendEmail } from './advanced-email.js';

const emails = 'kicah89047@ineedsa.com';
const name = 'IBCoder';
const token = Math.random() * 10000;

const message = emailMessage(emails, name, token);

sendEmail(message);
