import './Cards.scss';

const Cards = () => {
  const data = [
    {
      day: 'mié',
      img: '/cloudy.png',
      low: 17,
      high: 22,
      id: 1,
    },
    {
      day: 'jue',
      img: '/heavy-rain.png',
      low: 17,
      high: 21,
      id: 2,
    },
    {
      day: 'vie',
      img: '/sun.png',
      low: 18,
      high: 22,
      id: 3,
    },
    {
      day: 'sab',
      img: '/sun.png',
      low: 19,
      high: 24,
      id: 4,
    },
    {
      day: 'dom',
      img: '/cloudy.png',
      low: 16,
      high: 20,
      id: 5,
    },
    {
      day: 'lun',
      img: '/sun-cloud.png',
      low: 17,
      high: 21,
      id: 6,
    },
    {
      day: 'mar',
      img: '/sun.png',
      low: 19,
      high: 23,
      id: 7,
    },
    {
      day: 'mié',
      img: '/cloudy.png',
      low: 17,
      high: 21,
      id: 8,
    },
  ];

  return (
    <div className="cards">
      {data.map((day) => (
        <div className="card" key={day.id}>
          <div className="cardDay">
            <h4>{day.day}</h4>
          </div>
          <div className="cardImg">
            <img src={day.img} alt="img" />
          </div>
          <div className="cardTemp">
            <p className="highTemp">{day.high}°.</p>
            <p className="lowTemp">{day.low}°.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
