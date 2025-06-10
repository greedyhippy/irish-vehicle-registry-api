// api/vehicles/[registration].js - Enhanced Vercel serverless function
// This creates an API endpoint at: https://your-app.vercel.app/api/vehicles/[registration]

const vehicleDatabase = {
  '12D12345': {
    registration: '12D12345',
    make: 'Toyota',
    model: 'Corolla',
    year: 2012,
    engineSize: '1.4L',
    fuelType: 'Petrol',
    colour: 'Silver',
    dateFirstRegistered: '2012-03-15',
    currentMileage: 145000,
    nctExpiry: '2025-03-15',
    taxExpiry: '2025-12-31',
    insuranceStatus: 'Valid',
    previousOwners: 2,
    estimatedValue: 8500,
    vin: 'JTDBR32E420123456',
    ownershipHistory: [
      { owner: 'John Murphy', from: '2012-03-15', to: '2018-06-20', address: 'Dublin' },
      { owner: 'Sarah O\'Connor', from: '2018-06-20', to: '2021-01-10', address: 'Cork' },
      { owner: 'Michael Walsh', from: '2021-01-10', to: 'current', address: 'Galway' }
    ],
    serviceHistory: [
      { 
        date: '2024-01-15', 
        mileage: 142000, 
        service: 'Annual Service', 
        garage: 'Dublin Motors', 
        cost: 180,
        verificationHash: 'a1b2c3d4e5f6789'
      },
      { 
        date: '2023-07-20', 
        mileage: 138000, 
        service: 'NCT Test', 
        garage: 'NCT Centre Dublin', 
        cost: 55,
        verificationHash: 'b2c3d4e5f6g789a'
      }
    ],
    blockchainStatus: 'registered',
    lastBlockchainUpdate: '2024-01-15T10:30:00Z'
  },
  '13C98876': {
    registration: '13C98876',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2013,
    engineSize: '1.6L',
    fuelType: 'Diesel',
    colour: 'Blue',
    dateFirstRegistered: '2013-07-22',
    currentMileage: 162000,
    nctExpiry: '2024-07-22',
    taxExpiry: '2025-06-30',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 12500,
    vin: 'WVWZZZ1KZ4P123456',
    ownershipHistory: [
      { owner: 'Emma Kelly', from: '2013-07-22', to: '2019-03-15', address: 'Galway' },
      { owner: 'Liam O\'Brien', from: '2019-03-15', to: 'current', address: 'Limerick' }
    ],
    serviceHistory: [
      { 
        date: '2024-02-28', 
        mileage: 160000, 
        service: 'Full Service', 
        garage: 'VW Specialist Galway', 
        cost: 320,
        verificationHash: 'd4e5f6g789ab2c3'
      }
    ],
    blockchainStatus: 'registered',
    lastBlockchainUpdate: '2024-02-28T14:45:00Z'
  },
  '21G99999': {
    registration: '21G99999',
    make: 'Tesla',
    model: 'Model 3',
    year: 2021,
    engineSize: 'Electric',
    fuelType: 'Electric',
    colour: 'White',
    dateFirstRegistered: '2021-12-05',
    currentMileage: 32000,
    nctExpiry: '2029-12-05',
    taxExpiry: '2025-11-30',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 38500,
    vin: '5YJ3E1EA4MF123456',
    ownershipHistory: [
      { owner: 'Tech Startup Ltd', from: '2021-12-05', to: '2023-06-15', address: 'Dublin' },
      { owner: 'Siobhan Murphy', from: '2023-06-15', to: 'current', address: 'Dublin' }
    ],
    serviceHistory: [
      { 
        date: '2024-04-10', 
        mileage: 30000, 
        service: 'Annual Check', 
        garage: 'Tesla Service Dublin', 
        cost: 150,
        verificationHash: 'ab2c3d4e5f6g789'
      }
    ],
    blockchainStatus: 'registered',
    lastBlockchainUpdate: '2024-04-10T11:20:00Z'
  }
};

export default function handler(req, res) {
  // Enable CORS for frontend access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { registration } = req.query;
  
  if (!registration) {
    return res.status(400).json({ 
      error: 'Registration parameter required',
      usage: 'GET /api/vehicles/[registration]',
      examples: Object.keys(vehicleDatabase).slice(0, 3)
    });
  }

  const vehicle = vehicleDatabase[registration.toUpperCase()];
  
  if (!vehicle) {
    return res.status(404).json({ 
      error: 'Vehicle not found',
      message: `No vehicle found with registration: ${registration}`,
      availableRegistrations: Object.keys(vehicleDatabase)
    });
  }

  // Calculate data integrity hash
  const dataHash = generateSimpleHash(JSON.stringify({
    registration: vehicle.registration,
    vin: vehicle.vin,
    currentMileage: vehicle.currentMileage,
    lastUpdate: vehicle.lastBlockchainUpdate
  }));

  const response = {
    success: true,
    data: {
      ...vehicle,
      dataIntegrityHash: dataHash
    },
    metadata: {
      apiVersion: '2.0',
      requestTimestamp: new Date().toISOString(),
      dataSource: 'Irish Vehicle Registry Demo API',
      blockchainReady: true,
      disclaimer: 'This is demo data for educational blockchain integration purposes only'
    }
  };

  res.status(200).json(response);
}

// Simple hash function for demo purposes
function generateSimpleHash(data) {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

export { vehicleDatabase };