const nodemailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (email, password) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  let mailOptions = {
    from: process.env.USER,
    to: email,
    subject: "reset password",
    text:
      "The email to set new password for new login. New password is " +
      password,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return error;
    } else {
      console.log("Email sent: " + info.response);
      return info.response;
    }
  });
};

module.exports = sendEmail;
