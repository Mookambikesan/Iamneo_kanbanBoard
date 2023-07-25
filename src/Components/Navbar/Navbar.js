// Navbar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Your Logo
      </div>
      <div className="menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Services</li>
        <li className="nav-link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
