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
  return res.status(200).json({
    message: 'Portfolio Backend API (Vercel) is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: 'GET /api/health',
      sendEmail: 'POST /api/send-email'
    }
  });
}


