const nodemailer = require("nodemailer");
require("env2")("./config.env");

const sendActionPlan = async (name, email) => {
  let testAccount = await nodemailer.createTestAccount();

  let mailConfig = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  };

  let transporter = nodemailer.createTransport(mailConfig);

  var mailContent = {
    from: name || "Hank <worldofhankcraft@gmail.com>",
    to: email || "bobbysebolao@gmail.com", //Change to email address that you want to receive messages on
    subject: "test",
    text: "hello world or something",
    html: "<h1>hello world or something</h1>"
  };

  let info = await transporter.sendMail(mailContent);
  console.log("message sent", info.messageId);
  console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
};

module.exports = sendActionPlan;
