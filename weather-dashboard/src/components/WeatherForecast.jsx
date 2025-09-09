import React from 'react';
import { Calendar } from 'lucide-react';
import weatherService from '../services/weatherApi';

const WeatherForecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  // Group forecast data by day (every 8th item represents daily data at 3-hour intervals)
  const dailyForecast = [];
  const processedDays = new Set();
  
  forecastData.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toDateString();
    
    if (!processedDays.has(dayKey) && dailyForecast.length < 5) {
      // Find min and max temp for this day
      const dayData = forecastData.list.filter(forecast => {
        const forecastDate = new Date(forecast.dt * 1000);
        return forecastDate.toDateString() === dayKey;
      });
      
      const temps = dayData.map(d => d.main.temp);
      const minTemp = Math.min(...temps);
      const maxTemp = Math.max(...temps);
      
      // Use the first forecast item for general weather info
      dailyForecast.push({
        ...item,
        minTemp,
        maxTemp,
        date: date
      });
      
      processedDays.add(dayKey);
    }
  });

  const formatDate = (date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center mb-6">
        <Calendar className="w-6 h-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">5-Day Forecast</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {dailyForecast.map((day, index) => {
          const weatherDescription = weatherService.getWeatherDescription(day.weather);
          const iconUrl = weatherService.getWeatherIconUrl(day.weather[0]?.icon);
          
          return (
            <div 
              key={index}
              className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                {formatDate(day.date)}
              </h3>
              
              <img 
                src={iconUrl} 
                alt={weatherDescription}
                className="w-12 h-12 mx-auto mb-2"
              />
              
              <p className="text-sm text-gray-600 mb-2 capitalize">
                {weatherDescription}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">
                  {weatherService.formatTemperature(day.maxTemp)}
                </span>
                <span className="text-gray-500">
                  {weatherService.formatTemperature(day.minTemp)}
                </span>
              </div>
              
              <div className="mt-2 text-xs text-gray-500">
                <div>Humidity: {day.main.humidity}%</div>
                <div>Wind: {day.wind.speed} m/s</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;
