const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: [
    'https://portfolio990.web.app',
    'https://portfolio990.firebaseapp.com',
    'http://localhost:4200', // For local development
    'http://localhost:3000'  // For local development
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio Backend API is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: 'GET /',
      sendEmail: 'POST /api/send-email'
    }
  });
});

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER ,
    pass: process.env.EMAIL_PASS 
  }
});

// API endpoint to send email
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }
  
  try {
    // Email options for notification to site owner
    const mailOptions = {
      from: process.env.EMAIL_FROM ,
      to: process.env.EMAIL_TO ,
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    // Auto-reply email options
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM ,
      to: email,
      subject: process.env.AUTO_REPLY_SUBJECT || 'Thank you for contacting me',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333; text-align: center; border-bottom: 1px solid #eee; padding-bottom: 10px;">Thank You for Your Message</h2>
          
          <p style="color: #555; font-size: 16px;">Dear ${name},</p>
          
          <p style="color: #555; font-size: 16px;">Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          
          <p style="color: #555; font-size: 16px;">For your reference, here's a copy of your message:</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0; color: #666;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <p style="color: #555; font-size: 16px;">If you have any additional information or questions, please feel free to reply to this email.</p>
          
          <p style="color: #555; font-size: 16px;">Best regards,<br>Pramudi Samarawickrama</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email address if you need immediate assistance.</p>
          </div>
        </div>
      `
    };
    
    // Send notification email to site owner
    await transporter.sendMail(mailOptions);
    
    // Send auto-reply email to the user
    await transporter.sendMail(autoReplyOptions);
    
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});