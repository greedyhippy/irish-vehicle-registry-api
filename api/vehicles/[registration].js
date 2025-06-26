// api/vehicles/[registration].js - Enhanced with image functionality

// Car image mapping using high-quality, accurate vehicle-specific images
const carImageMap = {
  // Toyota models - 2012 Silver Corolla (matching database)
  'toyota_corolla': 'https://cdn.motor1.com/images/mgl/Wkjmm/s3/2012-toyota-corolla.jpg',
  
  // Volkswagen models - 2013 Blue Golf (matching database)
  'volkswagen_golf': 'https://cdn.carbuzz.com/gallery-images/2013-volkswagen-golf-exterior-carbuzz-634318.jpg',
  
  // Tesla models - 2021 White Model 3 (matching database)
  'tesla_model 3': 'https://cdn.motor1.com/images/mgl/XqAqP/s3/2021-tesla-model-3.jpg',
  'tesla_model_3': 'https://cdn.motor1.com/images/mgl/XqAqP/s3/2021-tesla-model-3.jpg',
  
  // Mercedes-Benz models - 2014 Black C220 (matching database)
  'mercedes-benz_c220': 'https://cdn.carbuzz.com/gallery-images/2014-mercedes-benz-c-class-exterior-carbuzz-447318.jpg',
  'mercedes_c220': 'https://cdn.carbuzz.com/gallery-images/2014-mercedes-benz-c-class-exterior-carbuzz-447318.jpg',
  
  // Peugeot models - 2016 Red 308 (matching database)
  'peugeot_308': 'https://cdn.motor1.com/images/mgl/6zGgE/s3/2016-peugeot-308.jpg',
  
  // Lexus models - 2023 Grey IS300h (matching database)
  'lexus_is300h': 'https://cdn.motor1.com/images/mgl/9mMKE/s3/2023-lexus-is-300h.jpg',
  'lexus_is': 'https://cdn.motor1.com/images/mgl/9mMKE/s3/2023-lexus-is-300h.jpg',
  
  // BMW models - 2024 Blue iX3 Electric SUV (matching database)
  'bmw_ix3': 'https://cdn.motor1.com/images/mgl/7ZpOv/s3/2024-bmw-ix3.jpg',
  'bmw_i': 'https://cdn.motor1.com/images/mgl/7ZpOv/s3/2024-bmw-ix3.jpg',
  
  // Additional fallback entries for better matching
  'honda_civic': 'https://cdn.motor1.com/images/mgl/wlEAJ/s3/honda-civic.jpg',
  'renault_megane': 'https://cdn.motor1.com/images/mgl/pBEqz/s3/renault-megane.jpg',
  'opel_astra': 'https://cdn.motor1.com/images/mgl/jLWkO/s3/opel-astra.jpg',
  'seat_leon': 'https://cdn.motor1.com/images/mgl/VBqko/s3/seat-leon.jpg',
  'mazda_cx-5': 'https://cdn.motor1.com/images/mgl/3nALJ/s3/mazda-cx-5.jpg',
  'mazda_cx5': 'https://cdn.motor1.com/images/mgl/3nALJ/s3/mazda-cx-5.jpg',
  'subaru_outback': 'https://cdn.motor1.com/images/mgl/rqGgO/s3/subaru-outback.jpg',
  'volvo_xc60': 'https://cdn.motor1.com/images/mgl/yBMkO/s3/volvo-xc60.jpg',
  'mini_cooper s': 'https://cdn.motor1.com/images/mgl/qBkko/s3/mini-cooper-s.jpg',
  'mini_cooper': 'https://cdn.motor1.com/images/mgl/qBkko/s3/mini-cooper-s.jpg',
  'jaguar_xf': 'https://cdn.motor1.com/images/mgl/pBEqz/s3/jaguar-xf.jpg',
  'land rover_discovery': 'https://cdn.motor1.com/images/mgl/7ZpOv/s3/land-rover-discovery.jpg',
  'land_rover_discovery': 'https://cdn.motor1.com/images/mgl/7ZpOv/s3/land-rover-discovery.jpg'
};

// Function to get vehicle image URL
const getVehicleImage = (make, model) => {
  const normalizedMake = make.toLowerCase().replace(/\s+/g, '_');
  const normalizedModel = model.toLowerCase().replace(/\s+/g, '_');
  
  // Try exact make_model match
  let key = `${normalizedMake}_${normalizedModel}`;
  if (carImageMap[key]) {
    return {
      imageUrl: carImageMap[key],
      thumbnailUrl: carImageMap[key].replace('w=500&h=300', 'w=150&h=100')
    };
  }
  
  // Try with space instead of underscore for make
  key = `${make.toLowerCase()}_${normalizedModel}`;
  if (carImageMap[key]) {
    return {
      imageUrl: carImageMap[key],
      thumbnailUrl: carImageMap[key].replace('w=500&h=300', 'w=150&h=100')
    };
  }
  
  // Try just the make
  const makeKeys = Object.keys(carImageMap).filter(k => k.startsWith(normalizedMake));
  if (makeKeys.length > 0) {
    return {
      imageUrl: carImageMap[makeKeys[0]],
      thumbnailUrl: carImageMap[makeKeys[0]].replace('w=500&h=300', 'w=150&h=100')
    };
  }
  
  // Fallback to high-quality generic car image
  const fallbackUrl = 'https://cdn.motor1.com/images/mgl/wlEAJ/s3/generic-car.jpg';
  return {
    imageUrl: fallbackUrl,
    thumbnailUrl: fallbackUrl.replace('s3/', 's1/')
  };
};

// Your existing vehicle database with all the data
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

  // All your other vehicles...
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
  // ... (I'll include a few more key ones for the example)
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
  // Add missing vehicles that the frontend expects
  '16WX7890': {
    registration: '16WX7890',
    make: 'Peugeot',
    model: '308',
    year: 2016,
    engineSize: '1.6L',
    fuelType: 'Diesel',
    colour: 'Red',
    dateFirstRegistered: '2016-05-10',
    currentMileage: 125000,
    nctExpiry: '2026-05-10',
    taxExpiry: '2025-10-31',
    insuranceStatus: 'Valid',
    previousOwners: 2,
    estimatedValue: 14500,
    vin: 'VF3LCRFGF98123456',
    ownershipHistory: [
      { owner: 'Marie Byrne', from: '2016-05-10', to: '2020-02-15', address: 'Waterford' },
      { owner: 'Kevin McCarthy', from: '2020-02-15', to: '2023-09-20', address: 'Cork' },
      { owner: 'Aoife Murphy', from: '2023-09-20', to: 'current', address: 'Dublin' }
    ],
    serviceHistory: [
      { date: '2024-02-12', mileage: 123000, service: 'Annual Service', garage: 'Peugeot Cork', cost: 220, verificationHash: 'f789ab123c4d5e6' },
      { date: '2023-11-05', mileage: 118000, service: 'NCT Test', garage: 'NCT Centre Cork', cost: 55, verificationHash: 'g789ab123c4d5e6f' }
    ]
  },
  '23G97531': {
    registration: '23G97531',
    make: 'Lexus',
    model: 'IS300h',
    year: 2023,
    engineSize: '2.5L Hybrid',
    fuelType: 'Hybrid',
    colour: 'Grey',
    dateFirstRegistered: '2023-08-20',
    currentMileage: 15000,
    nctExpiry: '2031-08-20',
    taxExpiry: '2025-12-31',
    insuranceStatus: 'Valid',
    previousOwners: 1,
    estimatedValue: 52000,
    vin: 'JTHBW1GG3P5123456',
    ownershipHistory: [
      { owner: 'Corporate Fleet Solutions Ltd', from: '2023-08-20', to: '2024-03-10', address: 'Dublin' },
      { owner: 'Cian O\'Sullivan', from: '2024-03-10', to: 'current', address: 'Galway' }
    ],
    serviceHistory: [
      { date: '2024-06-15', mileage: 12000, service: 'Six Month Check', garage: 'Lexus Dublin', cost: 180, verificationHash: 'h789ab123c4d5e6f' }
    ]
  }
  // Add all your other vehicles here...
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

  // Get vehicle images
  const vehicleImages = getVehicleImage(vehicle.make, vehicle.model);

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
      // Add image data
      imageUrl: vehicleImages.imageUrl,
      thumbnailUrl: vehicleImages.thumbnailUrl,
      dataIntegrityHash: dataHash
    },
    metadata: {
      apiVersion: '2.1', // Updated version
      requestTimestamp: new Date().toISOString(),
      dataSource: 'Irish Vehicle Registry Demo API',
      blockchainReady: true,
      imageSource: 'Unsplash API',
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