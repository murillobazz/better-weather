import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';

// TODOS -> Migrar para styled-components && melhorar api requests (?)

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {/* The notation below is to make sure that the component only shows when currentWeather exists */}
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
