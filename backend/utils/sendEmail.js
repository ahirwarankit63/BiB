const dotenv = require("dotenv");
dotenv.config();
const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host:`smpt.gmail.com`,
    port: 465,
    // secure: true,
    service:`gmail`,
    auth: {
      // SMPT- simple mail transfer protocol
      user:`bookibookofficial@gmail.com` ,
      pass: `lyksrhxhirshocxg`,
    },
  });

  const mailOptions = {
    from:`bookibookofficial@gmail.com` ,
    to:options.email,
    subject:options.subject,
    text:options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
