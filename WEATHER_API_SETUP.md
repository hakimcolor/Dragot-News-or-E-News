# Weather API Setup Instructions

## Current Implementation

The weather widget currently shows **realistic mock data** that updates every 10 minutes with random but realistic weather conditions for Dhaka, Bangladesh.

## To Use Real Weather Data

### Option 1: OpenWeatherMap API (Recommended)

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. In `src/Components/Weather.jsx`, uncomment lines 12-15 and add your API key:

```javascript
const API_KEY = 'your_api_key_here';
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=${API_KEY}&units=metric`
);
const weatherData = await response.json();
setWeather(weatherData);
```

4. Comment out the mock data section (lines 20-35)

### Option 2: Open-Meteo API (Free, No Key Required)

1. In `src/Components/Weather.jsx`, uncomment lines 17-19:

```javascript
const response = await fetch(
  'https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
);
const data = await response.json();
// You'll need to convert the data format to match our component structure
```

### Option 3: Keep Mock Data (Current)

The current implementation provides realistic weather data that:

- Updates every 10 minutes
- Shows random but realistic temperatures (25-35°C)
- Displays various weather conditions
- Includes humidity, wind speed, and visibility data
- Shows current time and location

## Features

- **Live Updates**: Weather data refreshes automatically
- **Loading States**: Shows spinner while fetching data
- **Error Handling**: Graceful fallback when API fails
- **Responsive Design**: Works on all screen sizes
- **Rich Data**: Temperature, humidity, wind, visibility
- **Visual Indicators**: Weather emojis and icons

## Current Weather Widget Features

✅ Real-time clock display
✅ Temperature with "feels like"
✅ Weather conditions with emojis
✅ Humidity percentage
✅ Wind speed
✅ Visibility distance
✅ Location display
✅ Auto-refresh every 10 minutes
✅ Loading and error states
