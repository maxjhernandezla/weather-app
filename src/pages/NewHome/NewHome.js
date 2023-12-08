import Cards from '../../components/Cards/Cards';
import Current from '../../components/Current/Current';
import Forecast from '../../components/Forecast/Forecast';
import GraphContainer from '../../components/GraphContainer/GraphContainer';
import Header from '../../components/Header/Header';
import './NewHome.scss';

const NewHome = () => {
  return (
    <div className="newHome">
      {/* <Header /> */}
      <div className="top">
        <Current />
        <Forecast />
      </div>
      <div className="middle">
        <GraphContainer />
      </div>
      <div className="bottom">
        <Cards />
      </div>
    </div>
  );
};

export default NewHome;
