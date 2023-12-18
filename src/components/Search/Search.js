import { Box, Input } from '@chakra-ui/react';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { citiesUrl, geoApiOptions } from '../../helpers/citiesApi';
// import cities from 'cities-list';

const Search = ({ setCities, setOpen }) => {
  const [input, setInput] = useState('');

  const handleChange = (value) => {
    setOpen(true);
    setInput(value);
  };

  useEffect(() => {
    const fetchData = async (value) => {
      if (value !== '') {
        try {
          const response = await fetch(
            `${citiesUrl}/cities?minPopulation=100000&namePrefix=${value}`,
            geoApiOptions
          );

          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
          }

          const searchData = await response.json();

          // Verificar si el componente está aún montado antes de actualizar el estado
          if (input === value) {
            const searchCities = {
              options: searchData.data.map((city) => ({
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              })),
            };
            setCities(searchCities);
          }
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      }
    };

    const delayTimer = setTimeout(() => {
      fetchData(input);
    }, 300);

    // Limpiar el temporizador al desmontar el componente o al cambiar la entrada
    return () => clearTimeout(delayTimer);
  }, [input, setCities]);

  return (
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
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Box>
  );
};

export default Search;

// const allCities = cities;
// const cityArray = Object.keys(allCities).map((city) => city.toLowerCase());

// const filterCities = (value) => {
//   return cityArray.filter((city) => city.includes(value.toLowerCase()));
// };
