import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-header">
      <img src={require('../logo.svg').default} alt="B&S Logo" className="navbar-logo" />
      <div className="navbar-title-group">
        <span className="navbar-title">Bihari Ji & Sons Tent House</span>
        <span className="navbar-subtitle">Transforming Spaces into Celebrations</span>
      </div>
    </div>
    <div className="navbar-link-group">
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link-btn">Home</a></li>
          <li><a href="#services" className="navbar-link-btn">Services</a></li>
          <li><a href="#gallery" className="navbar-link-btn">Gallery</a></li>
          <li><a href="#contact" className="navbar-link-btn book-btn">Book Consultation</a></li>
        </ul>
    </div>
  </nav>
);

export default Navbar;
