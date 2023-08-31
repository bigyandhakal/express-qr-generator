const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "dhakalbigyan0@gmail.com",
    pass: "kamkbdadkzxolvhc",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const mailer = async (data) => {
  const { email, qrUrl } = data;
  const messageOptions = {
    from: '"Bigyan Dhakal" <dhakalbigyan0@gmail.com>', // sender address
    to: email ?? "bigyandhakal377@gmail.com",
    subject: "QR code generator", // Subject line
    html: '<img src="cid:qrImage"/>',
    attachments: [
      {
        filename: "image.png",
        path: qrUrl,
        cid: "qrImage", //same cid value as in the html img src
      },
    ],
  };
  const info = await transporter.sendMail(messageOptions);
  return info.messageId;
};

module.exports = { mailer };
