import React from 'react';
const WeatherCard = ({weatherData}) => {
    if (!weatherData) return null;

    const iconUrl =  `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

    return(
        <div className="weather-card">
            <h2>{weatherData.city}, {weatherData.country}</h2>
            <div className="weather-main">
                <img src={iconUrl} alt={weatherData.condition} />
            <div>
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="condition">{weatherData.condition}</p>
        </div>
   </div>
   <div className='weather-details'>
    <p>Description: {weatherData.description}</p>
    <p>Humidity: {weatherData.humidity}%</p>
    <p>Wind Speed: {weatherData.windSpeed} m/s</p>
    </div>
   </div>

    );
};
export default WeatherCard;