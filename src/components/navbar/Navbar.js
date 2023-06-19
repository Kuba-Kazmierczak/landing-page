import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [ isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  const links = [
    { label: 'Brand', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' }
  ];



  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        <li
          className={`navbar-link `}
        >
          {link.label}
        </li>
      </Link>
    );
  });

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className={`navbar-left ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">
          <span className="nav-brand">{links[0].label}</span>
        </Link>
      </div>
      <button className={`toggle-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        Toggle
      </button>
      <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
        {renderedLinks.slice(1)}
      </div>
    </div>
  );
};

export default Navbar;
