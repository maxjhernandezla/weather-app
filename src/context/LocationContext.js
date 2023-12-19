import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { apiKey, apiUrl } from '../helpers/apiKey';
import { getDay } from '../helpers/getDayAndTime';

export const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState('Paris');
  const [currentWeather, setCurrentWeather] = useState({});
  const [day, setDay] = useState('Monday');
  const [time, setTime] = useState('');
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    const getCurrentWeather = async () => {
      const res = await axios.get(
        `${apiUrl}/current.json?key=${apiKey}&q=${location}`
      );
      setCurrentWeather(res.data);
    };
    getCurrentWeather();
  }, [location]);

  useEffect(() => {
    const getDate = async () => {
      if (currentWeather?.current?.last_updated) {
        const result = await getDay(currentWeather.current.last_updated);
        setDay(result.actualDay);
        setTime(result.time);
      }
    };
    getDate();
  }, [currentWeather]);

  useEffect(() => {
    const getForecast = async () => {
      const res = await axios.get(
        `${apiUrl}/forecast.json?key=${apiKey}&q=${location}&days=8`
      );
      setForecast(res.data.forecast);
    };
    getForecast();
  }, [location]);

  const contextValue = {
    location,
    setLocation,
    currentWeather,
    day,
    time,
    forecast,
  };

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
