// SearchLogo.js

import React from 'react';
import './search.css'
const SearchLogo = () => {
  return (
    <div className="search-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#999"
        width="24px"
        height="24px"
        className="search-icon"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27A6.472 6.472 0 0 0 17 9.5 6.5 6.5 0 1 0 9.5 17c1.71 0 3.26-.66 4.43-1.76l.27.28v.79l5 4.99 1.49-1.48-4.99-5zM9.5 15a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5z" />
      </svg>
      <input type="text" className='sear' placeholder="Search..." />
    </div>
  );
};

export default SearchLogo;
