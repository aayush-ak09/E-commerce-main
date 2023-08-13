const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "programmers472@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
});

module.exports.verifyEmail = async (email, token, host) => {
  const mailConfigurations = {
    from: "diodelife22@gmail.com",
    to: email,
    subject: "Email Verification",
    text: `Haanji, Website pr aaye the humari, sign-up bhi kia tha, dillkhus krr dia
           ab dekho toda User verification jaroori hai, jada time nhi lgega app niche wale link pe click karo sab hojayega   Hi! There, You have recently visited diodelife.com and sign-up.
           http://${host}/auth/verify/${token}, 
           
           thoda jaldi krna 10 minutes k lie hi h ye link valid. 
           
           Baki "Swagat Hai Ji Appka"`,
  };

  transporter.sendMail(mailConfigurations, (Error) => {
    if (Error) {
      console.log(`Error while sending email: ${Error}`);
      return;
    }
  });
};

module.exports.updatePassword = async (email, token, host) => {
  const mailConfigurations = {
    from: "diodelife22@gmail.com",
    to: email,
    subject: "Password",
    text: `Haanji, Password change krne ki request aayi thi aapke account se, 
           jara dhyan se shayad koi login krna chahta hai apka account, 
           wese agar aap hi ho to click karo link pr  
           http://${host}/auth/new-password/${token}, 
           per thoda jaldi 10 minutes baad bekar hojayega link. 
           
           or koi dikkat hoto batana`,
  };

  transporter.sendMail(mailConfigurations, (Error, info) => {
    if (Error) {
      console.log(`Error while sending email: ${Error}`);
      return;
    }
  });
};

module.exports.successful = async (email) => {
  const mailConfigurations = {
    from: "addi.anant01@gmail.com",
    to: email,
    subject: "Password",
    text: `Hi! Your password has been changed successfully!. Thanks`,
  };

  transporter.sendMail(mailConfigurations, (Error, info) => {
    if (Error) {
      console.log(`Error while sending email: ${Error}`);
      return;
    }
  });
};
