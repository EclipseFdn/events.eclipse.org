import React from 'react';

const CustomSearch = ({ setSearchValue }) => {
  
  const handleSearchOnChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <input onChange={e => handleSearchOnChange(e)} />
    </>
  )
}

export default CustomSearch