// import {
//   Box,
//   Stack,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   InputRightElement,
// } from '@chakra-ui/react';
// import { getCountries, getCities } from 'countries-cities';
import './Header.scss';
import { Box, Image, Text } from '@chakra-ui/react';
import Search from '../Search/Search';
import { useContext, useState } from 'react';
import SearchResultList from '../SearchResultsList/SearchResultList';
import { LocationContext } from '../../context/LocationContext';

const Header = () => {
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  const { currentWeather } = useContext(LocationContext);
  if (!cities) setOpen(false);
  return (
    <Box className="headerContainer">
      <Box>
        <Image
          src="/logo.png"
          width="150px"
          marginLeft="20px"
          cursor="pointer"
        />
      </Box>
      <Box>
        <Text color="white" fontSize="16px">
          {currentWeather?.location?.name}, {currentWeather?.location?.country}{' '}
          | {currentWeather?.current?.temp_c}°
        </Text>
      </Box>
      <Box>
        <Search setCities={setCities} setOpen={setOpen} />
        <SearchResultList cities={cities} setOpen={setOpen} open={open} />
      </Box>
    </Box>
  );
};

export default Header;
