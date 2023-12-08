import { Text, Box, Image } from '@chakra-ui/react';

const Current = () => {
  return (
    <Box padding="25px">
      <Box display="flex" flexDirection="row" gap="10px">
        <Box>
          <Image
            src="/cloudy.png"
            title="rain icons"
            alt="icon"
            height="100px"
            width="100px"
          />
        </Box>
        <Box>
          <Text fontSize="80px" color="white">
            22
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
          Probabilidad de precipitaciones: 15%
        </Text>
        <Text fontWeight="300" fontSize="15px" color="#929299">
          Humedad: 89%
        </Text>
        <Text fontWeight="300" fontSize="15px" color="#929299">
          Viento: a 11 km/h
        </Text>
      </Box>
    </Box>
  );
};

export default Current;
