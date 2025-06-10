// api/vehicles/[registration].js - Enhanced Vercel serverless function
// This creates an API endpoint at: https://your-app.vercel.app/api/vehicles/[registration]

// Replace the vehicleDatabase object in api/vehicles/[registration].js with this expanded version

const vehicleDatabase = {
  // Original 3 vehicles
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
      { date: '2024-01-15', mileage: 142000, service: 'Annual Service', garage: 'Dublin Motors', cost: 180, verificationHash: 'a1b2c3d4e5f6789' },
      { date: '2023-07-20', mileage: 138000, service: 'NCT Test', garage: 'NCT Centre Dublin', cost: 55, verificationHash: 'b2c3d4e5f6g789a' }
    ],

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
      { date: '2024-02-28', mileage: 160000, service: 'Full Service', garage: 'VW Specialist Galway', cost: 320, verificationHash: 'd4e5f6g789ab2c3' }
    ],

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
      { date: '2024-04-10', mileage: 30000, service: 'Annual Check', garage: 'Tesla Service Dublin', cost: 150, verificationHash: 'ab2c3d4e5f6g789' }
    ],

  },

  // 13 NEW VEHICLES
  '14L56789': {
    registration: '14L56789',
    make: 'Mercedes-Benz',
    model: 'C220',
    year: 2014,
    engineSize: '2.2L',
    fuelType: 'Diesel',
    colour: 'Black',
    dateFirstRegistered: '2014-08-12',
    currentMileage: 178000,
    nctExpiry: '2025-08-12',
    taxExpiry: '2025-09-30',
    insuranceStatus: 'Valid',
    previousOwners: 2,
    estimatedValue: 16800,
    vin: 'WDB2040241A123456',
    ownershipHistory: [
      { owner: 'Patrick Fitzgerald', from: '2014-08-12', to: '2019-05-20', address: 'Cork' },
      { owner: 'Niamh Collins', from: '2019-05-20', to: '2022-11-10', address: 'Waterford' },
      { owner: 'David Ryan', from: '2022-11-10', to: 'current', address: 'Dublin' }
    ],
    serviceHistory: [
      { date: '2024-03-22', mileage: 176000, service: 'Major Service', garage: 'Mercedes Dublin', cost: 580, verificationHash: 'c4d5e6f789ab123' },
      { date: '2023-08-15', mileage: 170000, service: 'NCT Test', garage: 'NCT Centre Cork', cost: 55, verificationHash: 'd5e6f789ab123c4' }
    ],

  },
  '15G34567': {
    registration: '15G34567',
    make: 'Honda',
    model: 'Civic',
    year: 2015,
    engineSize: '1.8L',
    fuelType: 'Petrol',
    colour: 'Red',
    dateFirstRegistered: '2015-04-08',
    currentMileage: 134000,
    nctExpiry: '2025-04-08',
    taxExpiry: '2025-10-31',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 11200,
    vin: 'SHHFK7G60FU123456',
    ownershipHistory: [
      { owner: 'Aisling McCarthy', from: '2015-04-08', to: '2020-12-15', address: 'Galway' },
      { owner: 'Sean Donnelly', from: '2020-12-15', to: 'current', address: 'Sligo' }
    ],
    serviceHistory: [
      { date: '2024-01-30', mileage: 132000, service: 'Annual Service', garage: 'Honda Galway', cost: 245, verificationHash: 'e6f789ab123c4d5' },
      { date: '2023-04-10', mileage: 125000, service: 'Brake Service', garage: 'Honda Galway', cost: 180, verificationHash: 'f789ab123c4d5e6' }
    ],

  },
  '16WX7890': {
    registration: '16WX7890',
    make: 'Peugeot',
    model: '308',
    year: 2016,
    engineSize: '1.6L',
    fuelType: 'Diesel',
    colour: 'White',
    dateFirstRegistered: '2016-09-25',
    currentMileage: 156000,
    nctExpiry: '2026-09-25',
    taxExpiry: '2025-08-31',
    insuranceStatus: 'Valid',
    previousOwners: 2,
    estimatedValue: 9800,
    vin: 'VF3LCRHJHGS123456',
    ownershipHistory: [
      { owner: 'Claire Murphy', from: '2016-09-25', to: '2021-03-12', address: 'Limerick' },
      { owner: 'Conor Bradley', from: '2021-03-12', to: 'current', address: 'Kilkenny' }
    ],
    serviceHistory: [
      { date: '2024-02-18', mileage: 154000, service: 'Full Service', garage: 'Peugeot Limerick', cost: 295, verificationHash: '789ab123c4d5e6f' },
      { date: '2023-09-20', mileage: 148000, service: 'Oil Change', garage: 'Quick Lube Kilkenny', cost: 65, verificationHash: '89ab123c4d5e6f7' }
    ],

  },
  '17CE2468': {
    registration: '17CE2468',
    make: 'Renault',
    model: 'Megane',
    year: 2017,
    engineSize: '1.5L',
    fuelType: 'Diesel',
    colour: 'Grey',
    dateFirstRegistered: '2017-11-14',
    currentMileage: 98000,
    nctExpiry: '2025-11-14',
    taxExpiry: '2025-07-31',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 13500,
    vin: 'VF1BFB00658123456',
    ownershipHistory: [
      { owner: 'Fiona O\'Sullivan', from: '2017-11-14', to: 'current', address: 'Cork' }
    ],
    serviceHistory: [
      { date: '2024-04-05', mileage: 96000, service: 'Annual Service', garage: 'Renault Cork', cost: 275, verificationHash: '9ab123c4d5e6f78' },
      { date: '2023-11-15', mileage: 89000, service: 'NCT Test', garage: 'NCT Centre Cork', cost: 55, verificationHash: 'ab123c4d5e6f789' }
    ],

  },
  '18MH9876': {
    registration: '18MH9876',
    make: 'Opel',
    model: 'Astra',
    year: 2018,
    engineSize: '1.4L',
    fuelType: 'Petrol',
    colour: 'Blue',
    dateFirstRegistered: '2018-01-20',
    currentMileage: 87000,
    nctExpiry: '2026-01-20',
    taxExpiry: '2025-11-30',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 12800,
    vin: 'W0L0AHL4859123456',
    ownershipHistory: [
      { owner: 'Cian Walsh', from: '2018-01-20', to: 'current', address: 'Mayo' }
    ],
    serviceHistory: [
      { date: '2024-01-25', mileage: 85000, service: 'Annual Service', garage: 'Opel Mayo', cost: 220, verificationHash: 'b123c4d5e6f789a' },
      { date: '2023-07-10', mileage: 78000, service: 'Brake Pads', garage: 'Local Garage Mayo', cost: 165, verificationHash: '123c4d5e6f789ab' }
    ],

  },
  '19KE1357': {
    registration: '19KE1357',
    make: 'Seat',
    model: 'Leon',
    year: 2019,
    engineSize: '1.6L',
    fuelType: 'Petrol',
    colour: 'Orange',
    dateFirstRegistered: '2019-06-30',
    currentMileage: 72000,
    nctExpiry: '2027-06-30',
    taxExpiry: '2025-12-31',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 16200,
    vin: 'VSSZZZ5FZKR123456',
    ownershipHistory: [
      { owner: 'Róisín Byrne', from: '2019-06-30', to: 'current', address: 'Kerry' }
    ],
    serviceHistory: [
      { date: '2024-03-15', mileage: 70000, service: 'Annual Service', garage: 'Seat Kerry', cost: 260, verificationHash: '23c4d5e6f789ab1' },
      { date: '2023-06-28', mileage: 63000, service: 'Oil Change', garage: 'Seat Kerry', cost: 75, verificationHash: '3c4d5e6f789ab12' }
    ],

  },
  '20D24680': {
    registration: '20D24680',
    make: 'Mazda',
    model: 'CX-5',
    year: 2020,
    engineSize: '2.0L',
    fuelType: 'Petrol',
    colour: 'Red',
    dateFirstRegistered: '2020-10-12',
    currentMileage: 45000,
    nctExpiry: '2028-10-12',
    taxExpiry: '2025-06-30',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 24500,
    vin: 'JM3KFBCM8L0123456',
    ownershipHistory: [
      { owner: 'Eoin Murphy', from: '2020-10-12', to: 'current', address: 'Dublin' }
    ],
    serviceHistory: [
      { date: '2024-02-20', mileage: 43000, service: 'Annual Service', garage: 'Mazda Dublin', cost: 285, verificationHash: 'c4d5e6f789ab123' },
      { date: '2023-10-15', mileage: 36000, service: 'Oil Change', garage: 'Mazda Dublin', cost: 85, verificationHash: '4d5e6f789ab123c' }
    ],

  },
  '21WW8642': {
    registration: '21WW8642',
    make: 'Subaru',
    model: 'Outback',
    year: 2021,
    engineSize: '2.5L',
    fuelType: 'Petrol',
    colour: 'Green',
    dateFirstRegistered: '2021-05-18',
    currentMileage: 38000,
    nctExpiry: '2029-05-18',
    taxExpiry: '2025-09-30',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 32800,
    vin: 'JF1BS9KC4MG123456',
    ownershipHistory: [
      { owner: 'Aoife Flanagan', from: '2021-05-18', to: 'current', address: 'Galway' }
    ],
    serviceHistory: [
      { date: '2024-01-12', mileage: 36000, service: 'Annual Service', garage: 'Subaru Galway', cost: 320, verificationHash: '5d6e7f8ab123c4d' },
      { date: '2023-05-20', mileage: 28000, service: 'Oil Change', garage: 'Subaru Galway', cost: 95, verificationHash: 'd6e7f8ab123c4d5' }
    ],

  },
  '22C13579': {
    registration: '22C13579',
    make: 'Volvo',
    model: 'XC60',
    year: 2022,
    engineSize: '2.0L',
    fuelType: 'Hybrid',
    colour: 'Silver',
    dateFirstRegistered: '2022-03-08',
    currentMileage: 28000,
    nctExpiry: '2030-03-08',
    taxExpiry: '2025-08-31',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 45200,
    vin: 'YV4A22RK8N1123456',
    ownershipHistory: [
      { owner: 'Declan O\'Reilly', from: '2022-03-08', to: 'current', address: 'Cork' }
    ],
    serviceHistory: [
      { date: '2024-03-10', mileage: 26000, service: 'Annual Service', garage: 'Volvo Cork', cost: 380, verificationHash: '6e7f8ab123c4d5e' },
      { date: '2023-09-15', mileage: 18000, service: 'Software Update', garage: 'Volvo Cork', cost: 120, verificationHash: 'e7f8ab123c4d5e6' }
    ],

  },
  '23G97531': {
    registration: '23G97531',
    make: 'Lexus',
    model: 'IS300h',
    year: 2023,
    engineSize: '2.5L',
    fuelType: 'Hybrid',
    colour: 'Black',
    dateFirstRegistered: '2023-07-22',
    currentMileage: 15000,
    nctExpiry: '2031-07-22',
    taxExpiry: '2025-12-31',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 52000,
    vin: 'JTHBA1D23O0123456',
    ownershipHistory: [
      { owner: 'Sinéad Kelly', from: '2023-07-22', to: 'current', address: 'Dublin' }
    ],
    serviceHistory: [
      { date: '2024-01-20', mileage: 12000, service: 'First Service', garage: 'Lexus Dublin', cost: 295, verificationHash: '7f8ab123c4d5e6f' },
      { date: '2023-12-10', mileage: 8000, service: 'Software Update', garage: 'Lexus Dublin', cost: 0, verificationHash: 'f8ab123c4d5e6f7' }
    ],

  },
  '24L86420': {
    registration: '24L86420',
    make: 'BMW',
    model: 'iX3',
    year: 2024,
    engineSize: 'Electric',
    fuelType: 'Electric',
    colour: 'Blue',
    dateFirstRegistered: '2024-01-15',
    currentMileage: 8000,
    nctExpiry: '2032-01-15',
    taxExpiry: '2025-12-31',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 68500,
    vin: 'WBAFC810000123456',
    ownershipHistory: [
      { owner: 'Tadhg O\'Connor', from: '2024-01-15', to: 'current', address: 'Limerick' }
    ],
    serviceHistory: [
      { date: '2024-04-20', mileage: 6000, service: 'First Check', garage: 'BMW Limerick', cost: 150, verificationHash: '8ab123c4d5e6f78' }
    ],

  },
  '11D55443': {
    registration: '11D55443',
    make: 'Mini',
    model: 'Cooper S',
    year: 2011,
    engineSize: '1.6L',
    fuelType: 'Petrol',
    colour: 'Yellow',
    dateFirstRegistered: '2011-12-03',
    currentMileage: 189000,
    nctExpiry: '2024-12-03',
    taxExpiry: '2025-05-31',
    insuranceStatus: 'Valid',
    previousOwners: 3,
    estimatedValue: 7200,
    vin: 'WMWSU31000T123456',
    ownershipHistory: [
      { owner: 'Brian Gallagher', from: '2011-12-03', to: '2015-08-20', address: 'Dublin' },
      { owner: 'Orla Dunne', from: '2015-08-20', to: '2020-04-15', address: 'Waterford' },
      { owner: 'Kevin McBride', from: '2020-04-15', to: 'current', address: 'Donegal' }
    ],
    serviceHistory: [
      { date: '2024-01-08', mileage: 187000, service: 'Annual Service', garage: 'Mini Specialist Donegal', cost: 285, verificationHash: '9ab123c4d5e6f78' },
      { date: '2023-12-05', mileage: 185000, service: 'NCT Test', garage: 'NCT Centre Letterkenny', cost: 55, verificationHash: 'ab123c4d5e6f789' }
    ],

  },
  '10L11223': {
    registration: '10L11223',
    make: 'Jaguar',
    model: 'XF',
    year: 2010,
    engineSize: '3.0L',
    fuelType: 'Diesel',
    colour: 'Silver',
    dateFirstRegistered: '2010-06-15',
    currentMileage: 245000,
    nctExpiry: '2024-06-15',
    taxExpiry: '2025-04-30',
    insuranceStatus: 'Valid',
    previousOwners: 2,
    estimatedValue: 9500,
    vin: 'SAJWA08C4ALP123456',
    ownershipHistory: [
      { owner: 'Margaret Connolly', from: '2010-06-15', to: '2018-11-30', address: 'Cork' },
      { owner: 'Paul Hennessy', from: '2018-11-30', to: 'current', address: 'Tipperary' }
    ],
    serviceHistory: [
      { date: '2024-02-14', mileage: 243000, service: 'Major Service', garage: 'Jaguar Cork', cost: 650, verificationHash: 'b123c4d5e6f789a' },
      { date: '2023-06-18', mileage: 235000, service: 'NCT Test', garage: 'NCT Centre Clonmel', cost: 55, verificationHash: '123c4d5e6f789ab' }
    ],

  },
  '09WW33445': {
    registration: '09WW33445',
    make: 'Land Rover',
    model: 'Discovery',
    year: 2009,
    engineSize: '2.7L',
    fuelType: 'Diesel',
    colour: 'Green',
    dateFirstRegistered: '2009-09-08',
    currentMileage: 298000,
    nctExpiry: '2024-09-08',
    taxExpiry: '2025-03-31',
    insuranceStatus: 'Valid',
    previousOwners: 3,
    estimatedValue: 8800,
    vin: 'SALLAAA188A123456',
    ownershipHistory: [
      { owner: 'Farmer John O\'Sullivan', from: '2009-09-08', to: '2014-05-12', address: 'Kerry' },
      { owner: 'Construction Ltd', from: '2014-05-12', to: '2020-08-25', address: 'Clare' },
      { owner: 'Mountain Rescue Ireland', from: '2020-08-25', to: 'current', address: 'Wicklow' }
    ],
    serviceHistory: [
      { date: '2024-03-05', mileage: 296000, service: 'Annual Service', garage: 'Land Rover Specialist Wicklow', cost: 485, verificationHash: '23c4d5e6f789ab1' },
      { date: '2023-09-10', mileage: 285000, service: 'NCT Test', garage: 'NCT Centre Wicklow', cost: 55, verificationHash: '3c4d5e6f789ab12' }
    ],

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