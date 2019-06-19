const nodemailer = require("nodemailer");
require("env2")("./.env");
const TESTACC = process.env.TESTACC;
const TESTPASS = process.env.TESTPASS;

const sendActionPlan = (name, email, answers) => {
  return new Promise((resolve, reject) => {

    let mailConfig = {
      host: "smtp-mail.outlook.com", // hostname,
      port: 587,
      secure: false,
      tls: {
        ciphers:'SSLv3'
     },
      auth: {
        user: TESTACC,
        pass: TESTPASS
      }
    };
  
    let transporter = nodemailer.createTransport(mailConfig);
  
    var mailContent = {
      from: TESTACC,
      to: email || "bobbysebolao@gmail.com", //Change to email address that you want to receive messages on
      subject: "Your LSx Action Plan",
      text: `hello ${name}`,
      html: `
      <p>Thank you for engaging with the LSx Action Planner app. The most important step even now is to get others involved.
      The following is your acions plan, generated from the form you filled in.</p> 
      <div style="text-align: center;"> 
      <h1>Action Plan</h1>
     <h2>As a citizen scientist, I wish to make visbile the air polution and try and enact real <span style="text-decoration: underline;">change</span></h2>.</div>
        
        <h3>I want to change:</h3>
        <p>${answers.q1}</p>
        
        <h3>Why I want to change this:</h3>
        <p>${answers.q2}</p>
        
        <h3>People involved:</h3>
        <p>${answers.q3}</p>
        
        <h3>Possible barriers:</h3>
        <p>${answers.q4}</p>
        
        <h3>My plan for communicating my message:</h3>
        <p>${answers.q5}</p>
  
        <p>
        See other action planing ideas for inspiration which is attached as a pdf. 
        For the LSx Action Planning toolkit please email comms@lsx.org.uk.</p>
      `
    };
  
    transporter
     .sendMail(mailContent)
     .then(success => resolve(success))
     .catch(error => reject(error));
  })
 
};

module.exports = sendActionPlan;
