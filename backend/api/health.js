export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(204).end();
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json({
    message: 'Portfolio Backend API (Vercel) is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: 'GET /api/health',
      sendEmail: 'POST /api/send-email'
    }
  });
}


