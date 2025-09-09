# Weather Dashboard

A modern, interactive weather dashboard built with React, featuring real-time weather data, forecasts, and interactive charts.

## ✨ Features

- **Real-time Weather Data**: Current weather conditions including temperature, humidity, wind speed, visibility, and more
- **5-Day Forecast**: Detailed weather forecast with daily highs/lows and conditions
- **Interactive Charts**: Temperature trends, humidity levels, and wind speed visualizations
- **Location Services**: Search by city name or use GPS for current location weather
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern design with smooth animations and gradients
- **Demo Mode**: Works out of the box with sample data for testing

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd weather-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 🔑 API Setup

The dashboard currently runs in **demo mode** with sample data. To use real weather data:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Open `src/services/weatherApi.js`
3. Replace `'demo_key'` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Interactive charts and data visualization
- **Lucide React** - Beautiful, customizable icons
- **Axios** - HTTP client for API requests

## 📱 Components

- **SearchBar**: City search with geolocation support
- **CurrentWeather**: Detailed current weather display
- **WeatherForecast**: 5-day weather forecast cards
- **WeatherCharts**: Interactive temperature, humidity, and wind charts

## 🌟 Features in Detail

### Current Weather Display
- Large temperature display with weather icon
- "Feels like" temperature
- Humidity, wind speed, and direction
- Visibility and atmospheric pressure
- Sunrise and sunset times

### 5-Day Forecast
- Daily weather cards with icons
- High and low temperatures
- Weather descriptions
- Additional metrics (humidity, wind)

### Interactive Charts
- **Temperature Chart**: Shows temperature trends with "feels like" overlay
- **Humidity Chart**: Bar chart showing humidity levels over time
- **Wind Speed Chart**: Line chart displaying wind speed variations
- Switch between chart types with intuitive buttons

### Location Features
- Search by city name
- GPS location support (with permission)
- Error handling for invalid locations
- Loading states and user feedback

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── SearchBar.jsx    # Search and location input
│   ├── CurrentWeather.jsx # Current weather display
│   ├── WeatherForecast.jsx # 5-day forecast
│   └── WeatherCharts.jsx # Interactive charts
├── services/           # API services
│   └── weatherApi.js   # Weather API integration
├── data/              # Demo data
│   └── demoData.js    # Sample weather data
├── App.jsx            # Main application component
├── index.css          # Tailwind CSS imports
└── main.jsx          # Application entry point
```

## 🎨 Customization

### Styling
The dashboard uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Animations and transitions
- Component layouts and spacing

### Adding Features
- Additional weather metrics
- Different chart types
- Weather alerts and notifications
- Historical weather data
- Multiple location tracking

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

The app can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the built files from `dist/`
- **Firebase Hosting**: Use Firebase CLI

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help setting up the project, please feel free to reach out.

---

Made with ❤️ using React and modern web technologies

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
