// server.js - Express backend for email sending
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:4200' // Your Angular app's URL
}));
app.use(bodyParser.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service like 'outlook'
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your app password
  }
});

// Test endpoint
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Server is running correctly!' });
});

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, message, to } = req.body;
  
  if (!name || !email || !message || !to) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to, // Your email from the request
    replyTo: email, // So you can reply directly to the sender
    subject: `Contact Form Message from ${name}`,
    html: `
      <h3>New Message from Your Website Contact Form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});