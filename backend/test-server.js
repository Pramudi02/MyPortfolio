// test-server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Simple test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running correctly!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});