import './Header.scss';
import { getCountries, getCities } from 'countries-cities';

const Header = () => {
  const countries = getCountries();
  const cities = getCities('Argentina');

  return <div>Header</div>;
};

export default Header;
