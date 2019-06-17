const nodemailer = require("nodemailer");
require("env2")("./.env");

const sendActionPlan = async (name, email, answers) => {
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
    from: "Hank <worldofhankcraft@gmail.com>",
    to: email || "bobbysebolao@gmail.com", //Change to email address that you want to receive messages on
    subject: "test",
    text: "hello world or something",
    html: `<h1>hello ${name}?</h1>
      <h2>What do you want to change?</h2>
      <p>${answers.q1}</p>
      
      <h2>Why do you want to change it?</h2>
      <p>${answers.q2}</p>
      
      <h2>Who's behaviour do you want to change?</h2>
      <p>${answers.q3}</p>
      
      <h2>What barriers do you foresee?</h2>
      <p>${answers.q4}</p>
      
      <h2>How will you communicate your message?</h2>
      <p>${answers.q5}</p>`
  };

  let info = await transporter.sendMail(mailContent);
  console.log("message sent", info.messageId);
  console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
};

module.exports = sendActionPlan;
