import { Box, Text, Image } from '@chakra-ui/react';
import './Cards.scss';

const Cards = () => {
  const data = [
    {
      day: 'mié',
      img: '/cloudy.png',
      low: 17,
      high: 22,
      id: 1,
    },
    {
      day: 'jue',
      img: '/heavy-rain.png',
      low: 17,
      high: 21,
      id: 2,
    },
    {
      day: 'vie',
      img: '/sun.png',
      low: 18,
      high: 22,
      id: 3,
    },
    {
      day: 'sab',
      img: '/sun.png',
      low: 19,
      high: 24,
      id: 4,
    },
    {
      day: 'dom',
      img: '/cloudy.png',
      low: 16,
      high: 20,
      id: 5,
    },
    {
      day: 'lun',
      img: '/sun-cloud.png',
      low: 17,
      high: 21,
      id: 6,
    },
    {
      day: 'mar',
      img: '/sun.png',
      low: 19,
      high: 23,
      id: 7,
    },
    {
      day: 'mié',
      img: '/cloudy.png',
      low: 17,
      high: 21,
      id: 8,
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      margin="20px"
    >
      {data.map((day) => (
        <Box
          width="130px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius="10px"
          padding="15px"
          key={day.id}
          _hover={{ backgroundColor: '#353537' }}
        >
          <Box>
            <Text color="white" fontWeight="600" fontSize="24px">
              {day.day}
            </Text>
          </Box>
          <Box width="100px" padding="10px">
            <Image src={day.img} alt="img" width="100%" />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="space-evenly"
          >
            <Text color="white" fontWeight="600" fontSize="18px">
              {day.high}°.
            </Text>
            <Text color="#5a5a5e" fontWeight="600" fontSize="18px">
              {day.low}°.
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
