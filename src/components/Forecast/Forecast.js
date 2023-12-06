import { useEffect, useState } from 'react';
import './Forecast.scss';
import axios from 'axios';
import { apiKey, apiUrl } from '../../helpers/apiKey';

const Forecast = () => {
  const [forecast, setForecast] = useState({});
  useEffect(() => {
    const getForecast = async () => {
      const res = await axios.get(
        `${apiUrl}/forecast.json?key=${apiKey}&q=paris&days=3`
      );
      setForecast(res.data.forecast);
    };
    getForecast();
  }, []);
  console.log(forecast.forecastday);
  return (
    <div className="forecast">
      <div className="days">
        {forecast?.forecastday?.map((day) => (
          <div className="day" key={day.date}>
            <div className="weatherIconContainer">
              <span className="date">{day.date}</span>
              <img
                src={day.day.condition.icon}
                alt="icon"
                className="weatherIcon"
              />
            </div>
            <div className="specs">
              <div className="temp">
                <p>Temperature</p>

                <span className="number">
                  {day.day.maxtemp_c}° / {day.day.mintemp_c}°
                </span>
              </div>
              <div className="rain">
                <p>Chance of rain</p>
                <span>{day.day.daily_chance_of_rain}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
