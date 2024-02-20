const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Configure your SMTP server details
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'blend.warani@outlook.com',
    pass: 'Blend@1987'
  }
});

// POST endpoint for submitting the CV
app.post('/submit-cv', upload.fields([{ name: 'personalImage' }, { name: 'cv' }]), (req, res) => {
  console.log('Request body:', req.body);
  const { name, email, mobile, jobDesire } = req.body; // Extract the form data
  const personalImage = req.files.personalImage ? req.files.personalImage[0] : null;
  const cv = req.files.cv ? req.files.cv[0] : null;

  // Email options
  const mailOptions = {
    from: 'blend.warani@outlook.com',
    to: 'blend@warani.iq',
    subject: 'New CV Submission',
      html:`
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="background-color: #4CAF50; color: #fff; padding: 10px; text-align: center;">
            <h2>New Job Application</h2>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; font-family: Arial, sans-serif; color: #333;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Job Desired:</strong> ${jobDesire}</p>
            ${personalImage ? `<p><a href="cid:personalImage" style="color: #4CAF50; text-decoration: none;">View Personal Image</a></p>` : ''}
            ${cv ? `<p><a href="cid:cv" style="color: #4CAF50; text-decoration: none;">View CV</a></p>` : ''}
          </td>
        </tr>
      </table>
    `,
    attachments: [
      {
        filename: personalImage ? personalImage.originalname : '',
        path: personalImage ? personalImage.path : '',
        cid: 'personalImage' // Content-ID for embedding in the HTML
      },
      {
        filename: cv ? cv.originalname : '',
        path: cv ? cv.path : '',
        cid: 'cv' // Content-ID for embedding in the HTML
      }
    ]
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error submitting CV');
    } else {
      console.log('Email sent:', info.response);
      res.send('CV submitted successfully');
    }
  });
});


// POST endpoint for submitting the contact form
app.post('/submit-contact', (req, res) => {
  console.log('Request body:', req.body);
  const { name, email, mobile, message } = req.body;

  // Email options
  const mailOptions = {
    from: 'blend.warani@outlook.com',
    to: 'blend@warani.iq',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error submitting contact form');
    } else {
      console.log('Email sent:', info.response);
      res.send('Contact form submitted successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
