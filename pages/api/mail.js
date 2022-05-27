const nodemailer = require('nodemailer');

const validateCaptcha = response_key => {
  return new Promise((resolve, reject) => {
    const secret_key = process.env.CAPTCHA_SECRET;

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    fetch(url, {
      method: 'post',
    })
      .then(response => response.json())
      .then(google_response => {
        if (google_response.success == true) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => {
        resolve(false);
      });
  });
};

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (name, email, message) => {
  const respone = await transporter.sendMail({
    from: `${name} <${email}>`,
    to: 'info@byandro.com',
    subject: 'byAndro Web Message',
    text: `${message}`,
  });
  return respone;
};

async function mailerHandler(req, res) {
  if (req.method === 'POST') {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const captcha = req.body.captcha;

    const captchaCheck = await validateCaptcha(captcha);
    if (!captchaCheck) {
      res.status(401).json({ isError: true, message: 'Something went wrong...' });
    }
    try {
      const data = await sendMail(name, email, message);
      return res.status(201).json({ isError: false, message: 'Success!' });
    } catch (error) {
      return res.status(400).json({ isError: true, message: 'Something went wrong...' });
    }
  } else {
    return res.status(404).json('Invalid request');
  }
}

export default mailerHandler;
