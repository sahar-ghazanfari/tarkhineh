import React from 'react'

function SearchInput() {
  return (
    <div>
      <input
        type="search"
        placeholder="جستجو"
        className="outline-none placeholder:pr-2"
      />
    </div>
  );
}

export default SearchInput