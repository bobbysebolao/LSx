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
        
        <h3> The problem I would like to address :</h3>
        <p>${answers.q1}</p>
        
        <h3>Why I have chosen this problem:</h3>
        <p>${answers.q2}</p>
        
        <h3>I need to work with or engage with to solve this problem:</h3>
        <p>${answers.q3}</p>
        
        <h3>What I need to do to achieve this:</h3>
        <p>${answers.q4}</p>
        
        <h3>How will I communicate my message:</h3>
        <p>${answers.q5}</p>
  
        <h3>I agree to be signed up to the quarterly
        Air Quality Bulletin to receive updates on our air pollution work:</h3>
        <p>${answers.q6}</p>

        <p>
        See other action planing ideas for inspiration which is attached as a pdf. 
        For the LSx Action Planning toolkit please email comms@lsx.org.uk.</p>


      <p>Thank you for completing this form, your personal data will be kept in accordance with the requirements of the Data Protection Act (1998) and will only be used for the purpose of monitoring this project unless specified. The information that you have provided will not be shared with any other third-party organisations. </p>`
    };
  
    transporter
     .sendMail(mailContent)
     .then(success => resolve(success))
     .catch(error => reject(error));
  })
 
};

module.exports = sendActionPlan;
