const nodemailer = require("nodemailer");
require("env2")("./.env");
const TESTACC = process.env.TESTACC;
const TESTPASS = process.env.TESTPASS;

const sendActionPlan = (name, email, answers) => {
  // let testAccount = await nodemailer.createTestAccount();


  let mailConfig = {
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: TESTACC,
      pass: TESTPASS
    }
  };

  let transporter = nodemailer.createTransport(mailConfig);

  var mailContent = {
    from: TESTACC,
    to: email || "bobbysebolao@gmail.com", //Change to email address that you want to receive messages on
    subject: "Your Action Plan",
    text: `hello ${name}`,
    html: `<h1>My Action Plan</h1>
   
      <h2>What do you want to change?</h2>
      <p>${answers.q1}</p>
      
      <h2>Why do you want to change it?</h2>
      <p>${answers.q2}</p>
      
      <h2>Who's behaviour do you want to change?</h2>
      <p>${answers.q3}</p>
      
      <h2>What barriers do you foresee?</h2>
      <p>${answers.q4}</p>
      
      <h2>How will you communicate your message?</h2>
      <p>${answers.q5}</p>
    `
  };

  transporter
   .sendMail(mailContent)
   .then(success => console.log('success', success))
   .catch(error => console.log('error', error));

  // console.log("message sent", info.messageId);
  // console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
};

module.exports = sendActionPlan;
