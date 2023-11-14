var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'florisngendahayo@gmail.com',
    pass: 'iifr xcjx nlcd ghmj'
  }
});

var mailOptions = {
  from: 'florisngendahayo@gmail.com',
  to: 'floris@goodlife.rw',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});