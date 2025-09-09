import React, { useState, useEffect } from 'react';
import { Cloud, AlertCircle } from 'lucide-react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import WeatherCharts from './components/WeatherCharts';
import weatherService from './services/weatherApi';
import './App.css';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load default city on component mount
  useEffect(() => {
    handleSearch('London'); // Default city
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city)
      ]);
      
      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationRequest = async (lat, lon) => {
    setLoading(true);
    setError(null);
    
    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherService.getCurrentWeatherByCoords(lat, lon),
        weatherService.getForecastByCoords(lat, lon)
      ]);
      
      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <Cloud className="w-8 h-8 text-white mr-3" />
            <h1 className="text-3xl font-bold text-white">Weather Dashboard</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <SearchBar 
          onSearch={handleSearch}
          onLocationRequest={handleLocationRequest}
          loading={loading}
        />

        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center animate-fade-in">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>{error}</span>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <span className="ml-3 text-white text-lg">Loading weather data...</span>
          </div>
        )}

        {/* Weather Content */}
        {!loading && currentWeather && (
          <div className="space-y-6">
            {/* Current Weather */}
            <CurrentWeather weatherData={currentWeather} />
            
            {/* Forecast and Charts Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Weather Forecast */}
              <div className="xl:col-span-2">
                <WeatherForecast forecastData={forecast} />
              </div>
              
              {/* Weather Charts */}
              <div className="xl:col-span-2">
                <WeatherCharts forecastData={forecast} />
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !currentWeather && !error && (
          <div className="text-center py-12">
            <Cloud className="w-16 h-16 text-white/50 mx-auto mb-4" />
            <p className="text-white text-lg">Search for a city to view weather information</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md mt-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg mb-4 text-center">
            <p className="text-sm">
              <strong>Demo Mode:</strong> This dashboard is running with sample data. 
              To use real weather data, replace the API_KEY in weatherApi.js with your OpenWeatherMap API key.
            </p>
          </div>
          <p className="text-center text-white/80 text-sm">
            Weather data provided by OpenWeatherMap API
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
