// simplified-email-server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors({
  origin: 'http://localhost:4200' // Your Angular app
}));
app.use(bodyParser.json());

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Email server is running!' });
});

// Email transporter configuration
// For Gmail, you'll need an "App Password" if 2FA is enabled
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pramupiyumika@gmail.com', // REPLACE WITH YOUR EMAIL
    pass: 'ttiudrpzctwnfswq'     // REPLACE WITH YOUR APP PASSWORD
  }
});

// Email endpoint
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  
  console.log('Received email request:', { name, email, message });
  
  if (!name || !email || !message) {
    console.log('Missing required fields');
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const mailOptions = {
    from: 'pramupiyumika@gmail.com', // REPLACE WITH YOUR EMAIL
    to: 'pramupiyumika@gmail.com',
    subject: `Contact Form from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email send error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
    
    console.log('Email sent successfully:', info.response);
    res.json({ success: true, message: 'Email sent successfully' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});