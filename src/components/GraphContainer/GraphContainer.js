import './GraphContainer.scss';
import Graph from '../Graph/Graph';

const GraphContainer = () => {
  return (
    <div className="graph">
      <div className="types">
        <div className="spec">
          <div className="h4">Temperatura</div>
        </div>
        <div className="spec precipitations">
          <div className="h4">Precipitaciones</div>
        </div>
        <div className="spec">
          <div className="h4">Viento</div>
        </div>
      </div>
      <div className="graph">
        <Graph />
      </div>
      <div className="time"></div>
    </div>
  );
};

export default GraphContainer;
