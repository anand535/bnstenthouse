import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <img
          src={require('../logo.svg').default}
          alt="B&S Logo"
          className="navbar-logo"
          style={{ cursor: 'pointer' }}
          onClick={() => window.location.reload()}
        />
        <div className="navbar-title-group">
          <span className="navbar-title">Bihari Ji & Sons Tent House</span>
          <span className="navbar-subtitle">Transforming Spaces into Celebrations</span>
        </div>
        <button className="navbar-hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>
      <div className={`navbar-link-group${menuOpen ? ' open' : ''}`}>
        <ul className="navbar-links">
          <li>
            <a href="#home" className="navbar-link-btn" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="navbar-link-btn" onClick={handleLinkClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" className="navbar-link-btn" onClick={handleLinkClick}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link-btn book-btn" onClick={handleLinkClick}>
              Book Consultation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;