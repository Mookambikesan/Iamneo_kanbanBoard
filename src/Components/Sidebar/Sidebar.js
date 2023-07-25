// Sidebar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser,faEarthEurope,faClipboard ,faSuitcase, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <FontAwesomeIcon icon={faCircleUser} id='logo' />
      </div>
      <div className="logo1">
        <FontAwesomeIcon icon={faEarthEurope} id='logo1' />
      </div>
      <div className="logo2">
        <FontAwesomeIcon icon={faClipboard} id='logo2' />
      </div>
      <div className="logo3">
        <FontAwesomeIcon icon={faSuitcase} id='logo3'/>
      </div>
      <div className="logo4">
        <FontAwesomeIcon icon={faUsers} id='logo4' />
      </div>
    </div>
  );
};

export default Sidebar;
