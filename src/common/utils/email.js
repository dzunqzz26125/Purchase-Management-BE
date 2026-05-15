import nodemailer from "nodemailer";
import { configenv } from "../configs/configenv";

const sendEmail = async(email, subject, (options = {}) => {
  const { text, html } = options;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: configenv.EMAIL_USERNAME || "vuhoangdung26122005@gmail.com",
      pass: configenv.EMAIL_PASSWORD,
    },
  });
});
