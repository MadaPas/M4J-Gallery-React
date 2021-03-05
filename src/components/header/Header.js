import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/m4j.png';
import './Header.css';

const Header = () => (
  <header className="nav">
    <div className="nav-header">
      <div className="logo-image" id="logo-navbar">
        <img src={logo} alt="logo" />
      </div>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </header>
);

export default Header;
