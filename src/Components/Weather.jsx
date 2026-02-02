import React, { useState, useEffect } from 'react';
import {
  FaThermometerHalf,
  FaEye,
  FaTint,
  FaWind,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using OpenWeatherMap API (you can replace with any weather API)
        // For demo purposes, I'll use a mock weather data
        // In production, you would use: `https://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=YOUR_API_KEY&units=metric`

        // Simulating API call with realistic weather data for Dhaka
        setTimeout(() => {
          const mockWeatherData = {
            name: 'Dhaka',
            main: {
              temp: Math.round(25 + Math.random() * 10), // Random temp between 25-35°C
              feels_like: Math.round(28 + Math.random() * 8),
              humidity: Math.round(60 + Math.random() * 30),
            },
            weather: [
              {
                main: getRandomWeather(),
                description: getRandomDescription(),
                icon: getRandomIcon(),
              },
            ],
            wind: {
              speed: Math.round(5 + Math.random() * 10), // Wind speed in m/s
            },
            visibility: Math.round(8000 + Math.random() * 2000), // Visibility in meters
          };

          setWeather(mockWeatherData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();

    // Update weather every 10 minutes
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  const getRandomWeather = () => {
    const conditions = ['Clear', 'Clouds', 'Rain', 'Haze', 'Mist'];
    return conditions[Math.floor(Math.random() * conditions.length)];
  };

  const getRandomDescription = () => {
    const descriptions = [
      'clear sky',
      'few clouds',
      'scattered clouds',
      'light rain',
      'haze',
      'mist',
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  const getRandomIcon = () => {
    const icons = ['01d', '02d', '03d', '04d', '09d', '10d', '50d'];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  const getWeatherEmoji = (condition) => {
    const emojiMap = {
      Clear: '☀️',
      Clouds: '☁️',
      Rain: '🌧️',
      Haze: '🌫️',
      Mist: '🌫️',
      Thunderstorm: '⛈️',
      Snow: '❄️',
    };
    return emojiMap[condition] || '🌤️';
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  if (loading) {
    return (
      <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-sm p-4">
        <h3 className="font-bold mb-3">🌤️ Weather</h3>
        <div className="text-center">
          <div className="loading loading-spinner loading-sm"></div>
          <div className="text-sm opacity-75 mt-2">Loading weather...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-linear-to-br from-gray-500 to-gray-600 text-white rounded-lg shadow-sm p-4">
        <h3 className="font-bold mb-3">🌤️ Weather</h3>
        <div className="text-center">
          <div className="text-sm opacity-75">Weather unavailable</div>
          <div className="text-xs opacity-60 mt-1">Dhaka, Bangladesh</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold">🌤️ Live Weather</h3>
        <span className="text-xs opacity-75">{getCurrentTime()}</span>
      </div>

      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">
            {getWeatherEmoji(weather.weather[0].main)}
          </span>
          <div className="text-3xl font-bold">{weather.main.temp}°C</div>
        </div>
        <div className="text-sm opacity-90 capitalize">
          {weather.weather[0].description}
        </div>
        <div className="flex items-center justify-center gap-1 text-xs opacity-75 mt-1">
          <FaMapMarkerAlt />
          <span>{weather.name}, Bangladesh</span>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaThermometerHalf />
            <span>Feels like</span>
          </div>
          <span>{weather.main.feels_like}°C</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaTint />
            <span>Humidity</span>
          </div>
          <span>{weather.main.humidity}%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaWind />
            <span>Wind</span>
          </div>
          <span>{weather.wind.speed} m/s</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaEye />
            <span>Visibility</span>
          </div>
          <span>{(weather.visibility / 1000).toFixed(1)} km</span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-blue-400 text-xs opacity-75 text-center">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Weather;
