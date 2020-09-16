import React from 'react';
import PropTypes from 'prop-types';

const CustomSearch = ({ setSearchValue }) => {
  
  const handleSearchOnChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <input onChange={e => handleSearchOnChange(e)} className="searchStyle" placeholder="Search" />
    </>
  )
}

CustomSearch.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
}


export default CustomSearch