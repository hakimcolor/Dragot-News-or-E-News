import React, { useState, useEffect } from 'react';
import {
  FaThermometerHalf,
  FaEye,
  FaTint,
  FaWind,
  FaMapMarkerAlt,
  FaSyncAlt,
} from 'react-icons/fa';

const weatherCodeMap = {
  113: { label: 'Sunny', emoji: '☀️' },
  116: { label: 'Partly Cloudy', emoji: '⛅' },
  119: { label: 'Cloudy', emoji: '☁️' },
  122: { label: 'Overcast', emoji: '🌥️' },
  143: { label: 'Mist', emoji: '🌫️' },
  176: { label: 'Patchy Rain', emoji: '🌦️' },
  200: { label: 'Thundery Rain', emoji: '⛈️' },
  227: { label: 'Blowing Snow', emoji: '🌨️' },
  248: { label: 'Fog', emoji: '🌫️' },
  260: { label: 'Freezing Fog', emoji: '🌫️' },
  263: { label: 'Drizzle', emoji: '🌧️' },
  293: { label: 'Light Rain', emoji: '🌧️' },
  302: { label: 'Moderate Rain', emoji: '🌧️' },
  308: { label: 'Heavy Rain', emoji: '🌧️' },
  353: { label: 'Light Showers', emoji: '🌦️' },
  389: { label: 'Thunderstorm', emoji: '⛈️' },
};

const getWeatherInfo = (code) =>
  weatherCodeMap[code] || { label: 'Unknown', emoji: '🌤️' };

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      // wttr.in — completely free, no API key required
      const res = await fetch('https://wttr.in/Dhaka?format=j1', {
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error('Network response not ok');
      const data = await res.json();
      const current = data.current_condition[0];
      setWeather({
        temp: current.temp_C,
        feelsLike: current.FeelsLikeC,
        humidity: current.humidity,
        windSpeed: current.windspeedKmph,
        visibility: current.visibility,
        weatherCode: parseInt(current.weatherCode),
        description: current.weatherDesc[0].value,
      });
      setLastUpdated(new Date());
    } catch (err) {
      setError('Could not load weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="weather-widget">
        <div className="weather-header">
          <span>🌤️ Live Weather</span>
        </div>
        <div className="flex flex-col items-center justify-center py-6 gap-2">
          <div className="loading loading-spinner loading-md text-white"></div>
          <span className="text-xs text-blue-100">Fetching weather...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-widget">
        <div className="weather-header">🌤️ Weather</div>
        <div className="flex flex-col items-center py-4 gap-2 text-center">
          <span className="text-2xl">😶‍🌫️</span>
          <span className="text-sm text-blue-100">{error}</span>
          <button
            onClick={fetchWeather}
            className="mt-2 flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
          >
            <FaSyncAlt className="text-xs" /> Retry
          </button>
        </div>
      </div>
    );
  }

  const { emoji, label } = getWeatherInfo(weather.weatherCode);

  return (
    <div className="weather-widget">
      {/* Header */}
      <div className="weather-header">
        <span>🌤️ Live Weather</span>
        <button
          onClick={fetchWeather}
          className="text-xs text-blue-200 hover:text-white transition-colors"
          title="Refresh"
        >
          <FaSyncAlt />
        </button>
      </div>

      {/* Main temp display */}
      <div className="flex flex-col items-center py-4">
        <span className="text-5xl mb-1">{emoji}</span>
        <div className="text-4xl font-bold tracking-tight">
          {weather.temp}°C
        </div>
        <div className="text-sm text-blue-100 capitalize mt-1">{label}</div>
        <div className="flex items-center gap-1 text-xs text-blue-200 mt-1">
          <FaMapMarkerAlt />
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="weather-stat">
          <FaThermometerHalf className="text-orange-300" />
          <div>
            <div className="text-blue-200">Feels like</div>
            <div className="font-semibold">{weather.feelsLike}°C</div>
          </div>
        </div>
        <div className="weather-stat">
          <FaTint className="text-cyan-300" />
          <div>
            <div className="text-blue-200">Humidity</div>
            <div className="font-semibold">{weather.humidity}%</div>
          </div>
        </div>
        <div className="weather-stat">
          <FaWind className="text-green-300" />
          <div>
            <div className="text-blue-200">Wind</div>
            <div className="font-semibold">{weather.windSpeed} km/h</div>
          </div>
        </div>
        <div className="weather-stat">
          <FaEye className="text-yellow-300" />
          <div>
            <div className="text-blue-200">Visibility</div>
            <div className="font-semibold">{weather.visibility} km</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {lastUpdated && (
        <div className="mt-3 pt-2 border-t border-blue-400/40 text-xs text-blue-200 text-center">
          Updated{' '}
          {lastUpdated.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      )}
    </div>
  );
};

export default Weather;
