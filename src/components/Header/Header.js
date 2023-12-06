import './Header.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="headerRight">
        <img src="/logo.png" alt="maxweather" className="headerLogo" />
      </div>
      <div className="headerLocation">
        <p>Buenos Aires, Buenos Aires - Capital Federal 19°C</p>
      </div>
      <div className="headerLeft">
        <input type="text" className="headerSearch" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
