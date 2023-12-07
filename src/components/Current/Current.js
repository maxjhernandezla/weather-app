import './Current.scss';

const Current = () => {
  return (
    <div className="current">
      <div className="currentTop">
        <div className="icon">
          <img src="/cloudy.png" title="rain icons" alt="icon" />
        </div>
        <div className="temperature">
          <span>22</span>
        </div>
        <div className="degrees">
          <p>°C | °F</p>
        </div>
      </div>
      <div className="currentBottom">
        <p>Probabilidad de precipitaciones: 15%</p>
        <p>Humedad: 89%</p>
        <p>Viento: a 11 km/h</p>
      </div>
    </div>
  );
};

export default Current;
