import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";
const Search = ({ onSearchChange }) => {
  // USE STATE TO GET THE VALUE OF THE INPUT
  const [search, setSearch] = useState(null);

  // PASS THE INFORMATION TO THE PARENT COMPONENT
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  // THE CALL TO THE API TO GET THE LABEL, LATITUDE AND LONGITUDE OF THE CITY
  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)

      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} , ${city.countryCode}`
            }
          })
        }
      })
      .catch(err => console.error(err));

  };


  // DEBONCE = HACE LA BUSQUEDA HASTA EL TIEMPO QUE LE PASEMOS
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;