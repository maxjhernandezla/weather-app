import './Home.scss';
import Header from '../../components/Header/Header';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Footer from '../../components/Footer/Footer';
import Forecast from '../../components/Forecast/Forecast';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="homeContainer">
        <div className="top">
          <CurrentWeather />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
