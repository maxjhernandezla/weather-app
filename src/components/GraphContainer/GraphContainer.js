import Graph from '../Graph/Graph';
import { Box, Text } from '@chakra-ui/react';

const GraphContainer = () => {
  return (
    <Box padding="20px">
      <Box width="100%" display="flex" flexDirection="row" paddingLeft="15px">
        <Box
          padding="0 10px"
          marginRight="10px"
          gap="10px"
          color="white"
          fontWeight="450"
          fontSize="20px"
        >
          <Text>Temperatura</Text>
        </Box>
        <Box
          padding="0 10px"
          marginRight="10px"
          gap="10px"
          color="white"
          fontWeight="450"
          fontSize="20px"
          borderLeft="1px solid grey"
          borderRight="1px solid grey"
        >
          <Text>Precipitaciones</Text>
        </Box>
        <Box
          padding="0 10px"
          marginRight="10px"
          gap="10px"
          color="white"
          fontWeight="450"
          fontSize="20px"
        >
          <Text>Viento</Text>
        </Box>
      </Box>
      <Box className="graph">
        <Graph />
      </Box>
      <Box className="time"></Box>
    </Box>
  );
};

export default GraphContainer;
