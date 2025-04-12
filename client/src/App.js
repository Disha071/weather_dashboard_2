import React, { useState } from 'react' ;
import axios from 'axios' ;
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';
import Error from './components/Error';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const[Loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async(city) =>{
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (err) {
      setWeatherData(null);
      setError(err.response?.data?.error || 'Failed to fetch weather data');
    }
    finally{
      setLoading(false)
    }
    };
    return (
      <div className="app">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={fetchWeather} />
       {Loading?(
        <loading />
       ) : error ? (
        <Error message={error} />
       ) : weatherData ? (
        <WeatherCard weatherData={weatherData} />
       ) :null}
  
      </div>
    );
  }
export default App;