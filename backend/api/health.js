module.exports = async (req, res) => {
  const allowedOrigins = new Set([
    'https://portfolio990.web.app',
    'https://portfolio990.firebaseapp.com',
    'http://localhost:4200'
  ]);
  const requestOrigin = req.headers.origin;
  const originToUse = allowedOrigins.has(requestOrigin) ? requestOrigin : '';

  if (req.method === 'OPTIONS') {
    if (originToUse) res.setHeader('Access-Control-Allow-Origin', originToUse);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(204).end();
  }

  if (originToUse) res.setHeader('Access-Control-Allow-Origin', originToUse);
  return res.status(200).json({
    message: 'Portfolio Backend API (Vercel) is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: 'GET /api/health',
      sendEmail: 'POST /api/send-email'
    }
  });
}


