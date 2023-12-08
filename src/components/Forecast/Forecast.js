import './Forecast.scss';
import { Box, Text } from '@chakra-ui/react';
const Forecast = () => {
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
        miércoles, 5:00 p.m.
      </Text>
      <Text color="grey" fontSize="25px" fontWeight="300">
        Tormentas aisladas
      </Text>
    </Box>
  );
};

export default Forecast;
