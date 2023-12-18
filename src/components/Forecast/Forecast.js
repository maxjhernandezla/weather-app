import { useContext } from 'react';
import './Forecast.scss';
import { Box, Text } from '@chakra-ui/react';
import { LocationContext } from '../../context/LocationContext';

const Forecast = () => {
  const { currentWeather, day, time } = useContext(LocationContext);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      gap="5px"
      padding="20px"
    >
      <Text color="white" fontSize="40px" fontWeight="300">
        Clima
      </Text>
      <Text color="grey" fontSize="25px" fontWeight="300">
        {day}, {time} hs.
      </Text>
      <Text color="grey" fontSize="25px" fontWeight="300">
        {currentWeather?.current?.condition.text}
      </Text>
    </Box>
  );
};

export default Forecast;
