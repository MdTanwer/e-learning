require("dotenv").config();
import nodemailer, { Transporter } from "nodemailer";
import ejs from "ejs";
import path from "path";

interface EmailOptions {
  email: string;
  subject: string;
  template: string;
  data: { [key: string]: any };
}

const sendMail = async (options: EmailOptions): Promise<void> => {
  const transporter: Transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_MAIL || "tanwirmd922@gmail.com",
      pass: process.env.SMTP_PASSWORD || "jzqh bkac huaw tmyf",
    },
  });

  const { email, subject, template, data } = options;

  // get the pdath to the email template file
  const templatePath = path.join(__dirname, "../mails", template);
  console.log("Looking for email template at:", templatePath);

  let html: string;
  try {
    html = await ejs.renderFile(templatePath, data);
    console.log("EJS template rendered successfully.");
  } catch (err) {
    console.error("EJS render error:", err);
    throw err;
  }

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendMail;
