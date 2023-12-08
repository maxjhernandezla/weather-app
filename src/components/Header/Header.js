// import {
//   Box,
//   Stack,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   InputRightElement,
// } from '@chakra-ui/react';
// import { getCountries, getCities } from 'countries-cities';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';
import { Box, Image, Input, Text } from '@chakra-ui/react';
const Header = () => {
  // const countries = getCountries();
  // const cities = getCities('Argentina');

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
          Buenos Aires, Argentina | 19°
        </Text>
      </Box>
      <Box
        width="350px"
        display="flex"
        alignItems="center"
        padding="7px"
        borderRadius="28px"
        backgroundColor="#f6f6f6"
        marginRight="20px"
      >
        <SearchIcon className="searchIcon" />
        <Input
          type="text"
          className="searchInput"
          placeholder="Search"
          background="transparent"
          fontSize="16px"
          color="#333333"
          marginLeft="14px"
          border="none"
          outline="none"
          width="300px"
        />
      </Box>
    </Box>
  );
};

export default Header;
