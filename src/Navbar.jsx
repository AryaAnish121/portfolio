import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="navbar">
      <h1 className="nav-logo">Arya</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div
        className={navbar ? 'hamburger open' : 'hamburger'}
        onClick={handleClick}
      >
        <div />
        <div />
        <div />
      </div>
      <div className={navbar ? 'mobile-nav show' : 'mobile-nav'}>
        <Link to="/" onClick={handleClick}>
          Home
        </Link>
        <Link to="/projects" onClick={handleClick}>
          Projects
        </Link>
        <Link to="/contact" onClick={handleClick}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
