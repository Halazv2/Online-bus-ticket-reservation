"use strict";
const nodemailer = require("nodemailer");

exports.sendMail = (req, res) => {
  const data = req.body;
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: data.to,
    subject: data.subject,
    html: `
        <h3>Information</h3>
        <ul>
            <li>Name: ${data.full_name}</li>
            <li>Email: ${data.to}</li>
            <li>ticketID: ${data.ticketID}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
