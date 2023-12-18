import { Box, Text } from '@chakra-ui/react';
import './SearchResultList.scss';
import { useContext } from 'react';
import { LocationContext } from '../../context/LocationContext';

const SearchResultList = ({ cities, setOpen, open }) => {
  const { setLocation } = useContext(LocationContext);

  const getLocationCityName = (city) => {
    const cityName = city.split(',');
    return cityName[0];
  };
  const handleSelect = (city) => {
    setOpen(false);
    setLocation(getLocationCityName(city));
  };
  console.log(cities);
  return (
    <Box className="resultList">
      {open && cities && cities.options
        ? cities?.options?.map((opt) => (
            <Text
              className="city"
              key={opt.value}
              onClick={() => handleSelect(opt.label)}
            >
              {opt.label}
            </Text>
          ))
        : null}
    </Box>
  );
};

export default SearchResultList;

// <Box>
//   {cities
//     ? cities?.options?.map((opt) => (
//         <Select
//           key={opt.value}
//           zIndex="9"
//           backgroundColor="#f6f6f6"
//           height="30px"
//           width="300px"
//           fontSize="16px"
//           marginLeft="36px"
//           padding="10px"
//           color="#333333"
//           cursor="pointer"
//         >
//           <option
//             type="text"
//             onClick={(e) => handleSelect(e.target.value)}
//             value={opt.label}
//             placeholder={opt.label}
//             onChange={() => console.log(opt.value)}
//           />
//         </Select>
//       ))
//     : null}
// </Box>
