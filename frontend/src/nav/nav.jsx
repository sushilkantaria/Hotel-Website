import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Import the CSS file
import logo from '..//assets/logo.png'; // Replace with your logo path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">About us</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
      <li><Link to="/hearts">Hearts   
 ❤️</Link></li>
      </ul>
    </nav>
    
  );
};

export default Navbar;