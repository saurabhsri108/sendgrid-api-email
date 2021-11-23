import chalk from 'chalk';
import dotenv from 'dotenv';
import sendMail from '@sendgrid/mail';
dotenv.config();
sendMail.setApiKey(process.env.SENDGRID_API_KEY);

export const emailMessage = (userEmail, userName, verification_token) => {
  return {
    to: userEmail,
    from: {
      name: 'IBCoder',
      email: 'no-reply@ibcoder.com',
    },
    templateId: process.env.TEMPLATE_ID,
    dynamicTemplateData: {
      customer_name: userName,
      verification_token:
        process.env.NODE_ENV !== 'prod'
          ? `http://localhost:3000/auth/${verification_token}`
          : `https://ibcoder.com/auth/${verification_token}`,
    },
  };
};

export const sendEmail = async (emailMessage) => {
  try {
    const response = await sendMail.send(emailMessage);
    console.log(chalk.green.bold(response));
  } catch (error) {
    console.error(chalk.red.bold(error.message));
  }
};
