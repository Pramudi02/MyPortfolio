const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const allowedOrigins = [
    'https://portfolio990.web.app',
    'https://portfolio990.firebaseapp.com',
    'http://localhost:4200'
  ];
  const requestOrigin = req.headers.origin || '';
  const originToUse = allowedOrigins.includes(requestOrigin)
    ? requestOrigin
    : 'https://portfolio990.web.app';

  // Always set CORS headers
  res.setHeader('Access-Control-Allow-Origin', originToUse);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }


  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `
    };

    const autoReplyOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: process.env.AUTO_REPLY_SUBJECT || 'Thank you for contacting me',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333; text-align: center; border-bottom: 1px solid #eee; padding-bottom: 10px;">Thank You for Your Message</h2>
          <p style="color: #555; font-size: 16px;">Dear ${name},</p>
          <p style="color: #555; font-size: 16px;">Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          <p style="color: #555; font-size: 16px;">For your reference, here's a copy of your message:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0; color: #666;">
            ${String(message).replace(/\n/g, '<br>')}
          </div>
          <p style="color: #555; font-size: 16px;">If you have any additional information or questions, please feel free to reply to this email.</p>
          <p style="color: #555; font-size: 16px;">Best regards,<br>Pramudi Samarawickrama</p>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email address if you need immediate assistance.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}


