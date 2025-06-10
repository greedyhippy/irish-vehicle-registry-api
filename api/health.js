// api/health.js - Health check endpoint
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const healthData = {
    status: 'healthy',
    service: 'Irish Vehicle Registry API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    api: {
      endpoints: {
        vehicles: '/api/vehicles/[registration]',
        health: '/api/health'
      },
      status: 'operational'
    },
    blockchain: {
      ready: true,
      integration: 'algorand',
      status: 'ready for smart contract integration'
    }
  };

  res.status(200).json(healthData);
}