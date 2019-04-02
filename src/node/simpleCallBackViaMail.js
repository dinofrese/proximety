var nodemailer = require('nodemailer');

exports.act = function (req)
{

  console.log('1' + process.env.SENDGRIDUSER);
  console.log('2' + process.env.SENDGRIDPASS);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth:
    {
      user: process.env.SENDGRIDUSER,
      pass: process.env.SENDGRIDPASS
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'dispatcher@proximety.org',
    to: req.query.emails,
    subject: 'Please call ' + req.query.from + ' back ! <eom>',
    text: 'This notification was generated and delivered by Proximety. We are connecting people in real life, enabling them to help each other. Visit us at proximety.org.'
  };

  // send mail with defined transport object
  let info = transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);

};
