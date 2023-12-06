import { useEffect, useState } from 'react';
import './FutureWeather.scss';
import axios from 'axios';
import { apiKey, apiUrl } from '../../helpers/apiKey';

const FutureWeather = () => {
  const [future, setFuture] = useState({});
  const today = new Date();

  useEffect(() => {
    const getFuture = async () => {
      const res = await axios.get(
        `${apiUrl}/future.json?key=${apiKey}&q=Paris&dt=2023-12-20`
      );
      console.log(res.data);
    };
    getFuture();
  }, []);

  return <div className="futureWeather"></div>;
};

export default FutureWeather;
