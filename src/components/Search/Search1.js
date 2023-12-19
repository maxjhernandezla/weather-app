import axios from 'axios';
import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, citiesUrl } from '../../helpers/citiesApi';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    try {
      return await fetch(
        `${citiesUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      )
        .then((res) => res.json())
        .then((res) => {
          return {
            options: res.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
