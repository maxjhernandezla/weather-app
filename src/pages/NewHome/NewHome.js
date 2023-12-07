import Current from '../../components/Current/Current';
import Forecast from '../../components/Forecast/Forecast';
import GraphContainer from '../../components/GraphContainer/GraphContainer';
import './NewHome.scss';

const NewHome = () => {
  return (
    <div className="newHome">
      <div className="top">
        <Current />
        <Forecast />
      </div>
      <div className="middle">
        <GraphContainer />
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default NewHome;
