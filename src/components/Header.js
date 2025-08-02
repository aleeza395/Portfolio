import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">AZ</Link>
      </div>

      <div className={`nav-links ${open ? 'active' : ''}`}>
        <Link to="/home" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/skills" onClick={closeMenu}>Skills</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <div className="menu-icon" onClick={handleMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Header;
