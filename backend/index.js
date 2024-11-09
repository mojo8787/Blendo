const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:8080', // Your Vue.js app URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Accept']
}));

app.use(express.json());

// Test endpoint
app.get('/test', (req, res) => {
  res.send('Backend is running');
});

// POST endpoint for submitting the contact form
app.post('/submit-contact', (req, res) => {
  console.log('Received contact form submission:', req.body);
  const { name, email, mobile, message } = req.body;

  if (!name || !email || !mobile || !message) {
    return res.status(400).send('All fields are required');
  }

  // Email options
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'blend@warani.iq',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error submitting contact form: ' + error.message);
    } else {
      console.log('Email sent:', info.response);
      res.send('Contact form submitted successfully');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
