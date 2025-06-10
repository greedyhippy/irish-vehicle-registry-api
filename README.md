# Irish Vehicle Registry API

A demo API for Irish vehicle registration data, designed for Algorand blockchain integration projects.

## 🚀 Live API

- **Base URL**: `https://irish-vehicle-registry-api.vercel.app`
- **Vehicle Endpoint**: `/api/vehicles/{registration}`
- **Health Check**: `/api/health`

## 🧪 Test Registrations

### Recent Vehicles (2020-2024)
- `21G99999` - Tesla Model 3 2021 (Electric)
- `20D24680` - Mazda CX-5 2020 (Petrol)
- `21WW8642` - Subaru Outback 2021 (Petrol)
- `22C13579` - Volvo XC60 2022 (Hybrid)
- `23G97531` - Lexus IS300h 2023 (Hybrid)
- `24L86420` - BMW iX3 2024 (Electric)

### Mid-Range Vehicles (2015-2019)
- `15G34567` - Honda Civic 2015 (Petrol)
- `16WX7890` - Peugeot 308 2016 (Diesel)
- `17CE2468` - Renault Megane 2017 (Diesel)
- `18MH9876` - Opel Astra 2018 (Petrol)
- `19KE1357` - Seat Leon 2019 (Petrol)

### Older Vehicles (2009-2014)
- `12D12345` - Toyota Corolla 2012 (Petrol)
- `13C98876` - Volkswagen Golf 2013 (Diesel)
- `14L56789` - Mercedes-Benz C220 2014 (Diesel)
- `11D55443` - Mini Cooper S 2011 (Petrol)
- `10L11223` - Jaguar XF 2010 (Diesel)
- `09WW33445` - Land Rover Discovery 2009 (Diesel)

## 🔗 Example Usage

### Get Vehicle Information
```bash
# Recent electric vehicle
curl https://irish-vehicle-registry-api.vercel.app/api/vehicles/24L86420

# Classic Toyota
curl https://irish-vehicle-registry-api.vercel.app/api/vehicles/12D12345

# Luxury vehicle
curl https://irish-vehicle-registry-api.vercel.app/api/vehicles/23G97531
```

### Test Different Response Types
```bash
# Valid vehicle
curl https://irish-vehicle-registry-api.vercel.app/api/vehicles/21G99999

# Invalid registration (error handling)
curl https://irish-vehicle-registry-api.vercel.app/api/vehicles/INVALID

# Health check
curl https://irish-vehicle-registry-api.vercel.app/api/health
```


