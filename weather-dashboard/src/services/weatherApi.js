import axios from 'axios';
import { demoCurrentWeather, demoForecast } from '../data/demoData';

const API_KEY = 'demo_key'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const DEMO_MODE = API_KEY === 'demo_key'; // Enable demo mode when no real API key is provided

class WeatherService {
  // Get current weather by city name
  async getCurrentWeather(city) {
    if (DEMO_MODE) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return { ...demoCurrentWeather, name: city };
    }
    
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch weather for ${city}: ${error.message}`);
    }
  }

  // Get current weather by coordinates
  async getCurrentWeatherByCoords(lat, lon) {
    if (DEMO_MODE) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return { ...demoCurrentWeather, name: 'Your Location' };
    }
    
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch weather for coordinates: ${error.message}`);
    }
  }

  // Get 5-day forecast by city name
  async getForecast(city) {
    if (DEMO_MODE) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return demoForecast;
    }
    
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch forecast for ${city}: ${error.message}`);
    }
  }

  // Get 5-day forecast by coordinates
  async getForecastByCoords(lat, lon) {
    if (DEMO_MODE) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return demoForecast;
    }
    
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch forecast for coordinates: ${error.message}`);
    }
  }

  // Search for cities
  async searchCities(query) {
    try {
      const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
        params: {
          q: query,
          limit: 5,
          appid: API_KEY
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search cities: ${error.message}`);
    }
  }

  // Get weather icon URL
  getWeatherIconUrl(icon, size = '@2x') {
    return `https://openweathermap.org/img/wn/${icon}${size}.png`;
  }

  // Format temperature
  formatTemperature(temp) {
    return `${Math.round(temp)}°C`;
  }

  // Get weather description
  getWeatherDescription(weatherArray) {
    return weatherArray[0]?.description || 'Unknown';
  }
}

export default new WeatherService();
