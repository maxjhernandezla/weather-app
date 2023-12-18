import { Text, Box, Image } from '@chakra-ui/react';
import { useContext } from 'react';
import { LocationContext } from '../../context/LocationContext';

const Current = () => {
  const { currentWeather } = useContext(LocationContext);

  return (
    <Box padding="25px">
      <Box display="flex" flexDirection="row" gap="10px">
        <Box>
          <Image
            src={currentWeather?.current?.condition.icon}
            title={currentWeather?.current?.condition.text}
            alt="icon"
            height="100px"
            width="100px"
          />
        </Box>
        <Box>
          <Text fontSize="80px" color="white">
            {currentWeather?.current?.temp_c}
          </Text>
        </Box>
        <Box display="flex" flexDirection="row" paddingTop="15px" color="white">
          <Text fontWeight="600" fontSize="20px" color="white">
            °C | °F
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontWeight="300" fontSize="15px" color="#929299">
          Sensación térmica: {currentWeather?.current?.feelslike_c}°
        </Text>
        <Text fontWeight="300" fontSize="15px" color="#929299">
          Humedad: {currentWeather?.current?.humidity}%
        </Text>
        <Text fontWeight="300" fontSize="15px" color="#929299">
          Viento: a {currentWeather?.current?.wind_kph} km/h
        </Text>
      </Box>
    </Box>
  );
};

export default Current;
