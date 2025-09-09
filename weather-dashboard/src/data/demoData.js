// Demo weather data for testing without API key
export const demoCurrentWeather = {
  name: "London",
  main: {
    temp: 15,
    feels_like: 13,
    humidity: 65,
    pressure: 1013
  },
  weather: [
    {
      main: "Clouds",
      description: "broken clouds",
      icon: "04d"
    }
  ],
  wind: {
    speed: 3.5,
    deg: 240
  },
  visibility: 10000,
  sys: {
    sunrise: Math.floor(Date.now() / 1000) - 3600 * 2, // 2 hours ago
    sunset: Math.floor(Date.now() / 1000) + 3600 * 6,  // 6 hours from now
    country: "GB"
  }
};

export const demoForecast = {
  list: [
    // Next 8 entries (24 hours) with 3-hour intervals
    ...Array.from({ length: 8 }, (_, i) => ({
      dt: Math.floor(Date.now() / 1000) + (i * 3 * 3600), // Every 3 hours
      main: {
        temp: 15 + Math.sin(i * 0.5) * 5, // Temperature varies
        feels_like: 13 + Math.sin(i * 0.5) * 5,
        humidity: 60 + Math.sin(i * 0.3) * 20
      },
      weather: [
        {
          main: i % 3 === 0 ? "Rain" : "Clouds",
          description: i % 3 === 0 ? "light rain" : "broken clouds",
          icon: i % 3 === 0 ? "10d" : "04d"
        }
      ],
      wind: {
        speed: 2 + Math.random() * 4
      },
      rain: i % 3 === 0 ? { "3h": Math.random() * 2 } : undefined
    })),
    // Add more entries for 5-day forecast
    ...Array.from({ length: 32 }, (_, i) => ({
      dt: Math.floor(Date.now() / 1000) + ((i + 8) * 3 * 3600),
      main: {
        temp: 12 + Math.sin((i + 8) * 0.2) * 8,
        feels_like: 10 + Math.sin((i + 8) * 0.2) * 8,
        humidity: 55 + Math.sin((i + 8) * 0.4) * 25
      },
      weather: [
        {
          main: ["Clear", "Clouds", "Rain"][i % 3],
          description: ["clear sky", "few clouds", "light rain"][i % 3],
          icon: ["01d", "02d", "10d"][i % 3]
        }
      ],
      wind: {
        speed: 1 + Math.random() * 5
      }
    }))
  ]
};
