import React from 'react';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge,
  Sunrise,
  Sunset
} from 'lucide-react';
import weatherService from '../services/weatherApi';

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    name,
    main: { temp, feels_like, humidity, pressure },
    weather,
    wind: { speed, deg = 0 },
    visibility = 0,
    sys: { sunrise, sunset, country }
  } = weatherData;

  const weatherDescription = weatherService.getWeatherDescription(weather);
  const iconUrl = weatherService.getWeatherIconUrl(weather[0]?.icon);
  
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getWindDirection = (degrees) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

  const weatherStats = [
    {
      icon: Thermometer,
      label: 'Feels like',
      value: weatherService.formatTemperature(feels_like),
      color: 'text-orange-500'
    },
    {
      icon: Droplets,
      label: 'Humidity',
      value: `${humidity}%`,
      color: 'text-blue-500'
    },
    {
      icon: Wind,
      label: 'Wind',
      value: `${speed} m/s ${getWindDirection(deg)}`,
      color: 'text-green-500'
    },
    {
      icon: Eye,
      label: 'Visibility',
      value: `${(visibility / 1000).toFixed(1)} km`,
      color: 'text-purple-500'
    },
    {
      icon: Gauge,
      label: 'Pressure',
      value: `${pressure} hPa`,
      color: 'text-gray-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{name}, {country}</h1>
          <p className="text-gray-600 capitalize">{weatherDescription}</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold text-gray-800">
            {weatherService.formatTemperature(temp)}
          </div>
          <img 
            src={iconUrl} 
            alt={weatherDescription}
            className="w-16 h-16 mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {weatherStats.map(({ icon: Icon, label, value, color }, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
            <Icon className={`w-6 h-6 mx-auto mb-2 ${color}`} />
            <p className="text-sm text-gray-600 mb-1">{label}</p>
            <p className="font-semibold text-gray-800">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-around bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg p-4">
        <div className="text-center">
          <Sunrise className="w-6 h-6 mx-auto mb-2 text-orange-500" />
          <p className="text-sm text-gray-600">Sunrise</p>
          <p className="font-semibold">{formatTime(sunrise)}</p>
        </div>
        <div className="text-center">
          <Sunset className="w-6 h-6 mx-auto mb-2 text-orange-600" />
          <p className="text-sm text-gray-600">Sunset</p>
          <p className="font-semibold">{formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
