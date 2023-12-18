import { Box, Text, Image } from '@chakra-ui/react';
import './Cards.scss';
import { useContext } from 'react';
import { LocationContext } from '../../context/LocationContext';
import { getDayOfWeek } from '../../helpers/getDayAndTime';

const Cards = () => {
  const { forecast } = useContext(LocationContext);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      margin="20px"
    >
      {forecast?.forecastday?.map((day) => (
        <Box
          width="130px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius="10px"
          padding="15px"
          key={day.date}
          _hover={{ backgroundColor: '#353537' }}
        >
          <Box>
            <Text color="white" fontWeight="600" fontSize="24px">
              {getDayOfWeek(day.date)}
            </Text>
          </Box>
          <Box width="100px" padding="10px">
            <Image
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              width="100%"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="space-evenly"
          >
            <Text color="white" fontWeight="600" fontSize="18px">
              {day.day.maxtemp_c}°.
            </Text>
            <Text color="#5a5a5e" fontWeight="600" fontSize="18px">
              {day.day.mintemp_c}°.
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
