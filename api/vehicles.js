// api/vehicles.js - List all vehicles with images

import { vehicleDatabase } from './vehicles/[registration].js';

// Same image mapping function
const carImageMap = {
  'toyota_corolla': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop',
  'volkswagen_golf': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop',
  'tesla_model 3': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop',
  'tesla_model_3': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop',
  'mercedes-benz_c220': 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&h=300&fit=crop',
  'mercedes_c220': 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&h=300&fit=crop',
  'honda_civic': 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&h=300&fit=crop',
  'peugeot_308': 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=500&h=300&fit=crop',
  'renault_megane': 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=500&h=300&fit=crop',
  'opel_astra': 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&h=300&fit=crop',
  'seat_leon': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop',
  'mazda_cx-5': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop',
  'mazda_cx5': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop',
  'subaru_outback': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop',
  'volvo_xc60': 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=500&h=300&fit=crop',
  'lexus_is300h': 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=300&fit=crop',
  'lexus_is': 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=300&fit=crop',
  'bmw_ix3': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
  'bmw_i': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
  'mini_cooper s': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop',
  'mini_cooper': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop',
  'jaguar_xf': 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=300&fit=crop',
  'land rover_discovery': 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=500&h=300&fit=crop',
  'land_rover_discovery': 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=500&h=300&fit=crop'
};

const getVehicleImage = (make, model) => {
  const normalizedMake = make.toLowerCase().replace(/\s+/g, '_');
  const normalizedModel = model.toLowerCase().replace(/\s+/g, '_');
  
  let key = `${normalizedMake}_${normalizedModel}`;
  if (carImageMap[key]) {
    return {
      imageUrl: carImageMap[key],
      thumbnailUrl: carImageMap[key].replace('w=500&h=300', 'w=150&h=100')
    };
  }
  
  key = `${make.toLowerCase()}_${normalizedModel}`;
  if (carImageMap[key]) {
    return {
      imageUrl: carImageMap[key],
      thumbnailUrl: carImageMap[key].replace('w=500&h=300', 'w=150&h=100')
    };
  }
  
  const makeKeys = Object.keys(carImageMap).filter(k => k.startsWith(normalizedMake));
  if (makeKeys.length > 0) {
    return {
      imageUrl: carImageMap[makeKeys[0]],
      thumbnailUrl: carImageMap[makeKeys[0]].replace('w=500&h=300', 'w=150&h=100')
    };
  }
  
  const fallbackUrl = 'https://images.unsplash.com/photo-1494976688153-ca3ce041d4a4?w=500&h=300&fit=crop';
  return {
    imageUrl: fallbackUrl,
    thumbnailUrl: fallbackUrl.replace('w=500&h=300', 'w=150&h=100')
  };
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get query parameters for filtering and pagination
  const { 
    page = 1, 
    limit = 10, 
    make, 
    year, 
    fuelType,
    minValue,
    maxValue,
    format = 'full' // 'full' or 'summary'
  } = req.query;

  let vehicles = Object.values(vehicleDatabase);

  // Apply filters
  if (make) {
    vehicles = vehicles.filter(v => 
      v.make.toLowerCase().includes(make.toLowerCase())
    );
  }

  if (year) {
    vehicles = vehicles.filter(v => v.year.toString() === year);
  }

  if (fuelType) {
    vehicles = vehicles.filter(v => 
      v.fuelType.toLowerCase() === fuelType.toLowerCase()
    );
  }

  if (minValue) {
    vehicles = vehicles.filter(v => v.estimatedValue >= parseInt(minValue));
  }

  if (maxValue) {
    vehicles = vehicles.filter(v => v.estimatedValue <= parseInt(maxValue));
  }

  // Sort by year (newest first)
  vehicles.sort((a, b) => b.year - a.year);

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedVehicles = vehicles.slice(startIndex, endIndex);

  // Add images and format response
  const vehiclesWithImages = paginatedVehicles.map(vehicle => {
    const images = getVehicleImage(vehicle.make, vehicle.model);
    
    if (format === 'summary') {
      // Return summary format for listing pages
      return {
        registration: vehicle.registration,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        colour: vehicle.colour,
        fuelType: vehicle.fuelType,
        estimatedValue: vehicle.estimatedValue,
        currentMileage: vehicle.currentMileage,
        nctExpiry: vehicle.nctExpiry,
        imageUrl: images.imageUrl,
        thumbnailUrl: images.thumbnailUrl
      };
    } else {
      // Return full format
      return {
        ...vehicle,
        imageUrl: images.imageUrl,
        thumbnailUrl: images.thumbnailUrl
      };
    }
  });

  const response = {
    success: true,
    data: vehiclesWithImages,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(vehicles.length / limit),
      totalVehicles: vehicles.length,
      vehiclesPerPage: parseInt(limit),
      hasNextPage: endIndex < vehicles.length,
      hasPreviousPage: page > 1
    },
    filters: {
      applied: { make, year, fuelType, minValue, maxValue },
      available: {
        makes: [...new Set(Object.values(vehicleDatabase).map(v => v.make))].sort(),
        years: [...new Set(Object.values(vehicleDatabase).map(v => v.year))].sort().reverse(),
        fuelTypes: [...new Set(Object.values(vehicleDatabase).map(v => v.fuelType))].sort()
      }
    },
    metadata: {
      apiVersion: '2.1',
      requestTimestamp: new Date().toISOString(),
      dataSource: 'Irish Vehicle Registry Demo API',
      imageSource: 'Unsplash API',
      format: format
    }
  };

  res.status(200).json(response);
}