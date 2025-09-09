import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Area,
  AreaChart
} from 'recharts';
import { TrendingUp, Droplets, Wind } from 'lucide-react';

const WeatherCharts = ({ forecastData }) => {
  const [activeChart, setActiveChart] = useState('temperature');

  if (!forecastData || !forecastData.list) return null;

  // Process data for charts (next 24 hours)
  const next24Hours = forecastData.list.slice(0, 8);
  
  const chartData = next24Hours.map(item => ({
    time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { 
      hour: '2-digit',
      minute: '2-digit'
    }),
    temperature: Math.round(item.main.temp),
    feelsLike: Math.round(item.main.feels_like),
    humidity: item.main.humidity,
    windSpeed: Math.round(item.wind.speed * 10) / 10,
    precipitation: item.rain ? item.rain['3h'] || 0 : 0
  }));

  const chartTypes = [
    {
      id: 'temperature',
      label: 'Temperature',
      icon: TrendingUp,
      color: '#3B82F6'
    },
    {
      id: 'humidity',
      label: 'Humidity',
      icon: Droplets,
      color: '#06B6D4'
    },
    {
      id: 'wind',
      label: 'Wind Speed',
      icon: Wind,
      color: '#10B981'
    }
  ];

  const renderChart = () => {
    switch (activeChart) {
      case 'temperature':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }}
                interval="preserveStartEnd"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                domain={['dataMin - 2', 'dataMax + 2']}
              />
              <Tooltip 
                labelClassName="text-gray-600"
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="temperature" 
                stroke="#3B82F6" 
                fill="#3B82F6" 
                fillOpacity={0.3}
                name="Temperature (°C)"
              />
              <Line 
                type="monotone" 
                dataKey="feelsLike" 
                stroke="#F59E0B" 
                strokeDasharray="5 5"
                dot={false}
                name="Feels like (°C)"
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      case 'humidity':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }}
                interval="preserveStartEnd"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                domain={[0, 100]}
              />
              <Tooltip 
                labelClassName="text-gray-600"
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="humidity" 
                fill="#06B6D4" 
                name="Humidity (%)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'wind':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }}
                interval="preserveStartEnd"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                domain={[0, 'dataMax + 1']}
              />
              <Tooltip 
                labelClassName="text-gray-600"
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="windSpeed" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Wind Speed (m/s)"
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Weather Trends (Next 24 Hours)</h2>
      
      {/* Chart Type Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {chartTypes.map(({ id, label, icon: Icon, color }) => (
          <button
            key={id}
            onClick={() => setActiveChart(id)}
            className={`flex items-center px-4 py-2 rounded-lg transition-all ${
              activeChart === id
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Icon className="w-4 h-4 mr-2" style={{ color: activeChart === id ? 'white' : color }} />
            {label}
          </button>
        ))}
      </div>

      {/* Chart Container */}
      <div className="w-full h-80">
        {renderChart()}
      </div>
      
      {/* Chart Legend/Info */}
      <div className="mt-4 text-sm text-gray-600">
        {activeChart === 'temperature' && (
          <p>Solid line shows actual temperature, dashed line shows "feels like" temperature</p>
        )}
        {activeChart === 'humidity' && (
          <p>Relative humidity percentage over the next 24 hours</p>
        )}
        {activeChart === 'wind' && (
          <p>Wind speed in meters per second</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCharts;
