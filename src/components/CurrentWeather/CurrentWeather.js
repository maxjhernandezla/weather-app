import { useEffect, useState } from 'react';
import './CurrentWeather.scss';
import axios from 'axios';
import { apiUrl, apiKey } from '../../helpers/apiKey';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    const getCurrentWeather = async () => {
      const res = await axios.get(
        `${apiUrl}/current.json?key=${apiKey}&q=Paris`
      );
      setCurrentWeather(res.data);
    };
    getCurrentWeather();
  }, []);

  return (
    <div className="currentWeather">
      <h2 className="currentTitle">CURRENT WEATHER</h2>
      <p className="localTime">{currentWeather?.location?.localtime}</p>
      <div className="top">
        <div className="weatherIconContainer">
          <img
            src={currentWeather?.current?.condition.icon}
            alt="icon"
            className="weatherIcon"
          />
          <div className="currentTemp">
            <div className="temp">
              <span className="number">{currentWeather?.current?.temp_c}°</span>
              <span className="c">C</span>
            </div>
            <div className="feel">
              <h4>RealFeel</h4>
              <span>{currentWeather?.current?.feelslike_c}°</span>
            </div>
          </div>
        </div>
        <div className="weatherSpecs">
          <div className="spec">
            <p>HUMIDITY:</p>
            <span>{currentWeather?.current?.humidity}%</span>
          </div>
          <div className="spec">
            <p>WIND:</p>
            <span>{currentWeather?.current?.wind_kph} Km/h</span>
          </div>
          <div className="spec">
            <p>VISIBILITY:</p>
            <span>{currentWeather?.current?.vis_km} Km.</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="weatherCondition">
          <h3>{currentWeather?.current?.condition.text}</h3>
        </div>
        <div className="moreDetails">
          <h3>MORE DETAILS</h3>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
