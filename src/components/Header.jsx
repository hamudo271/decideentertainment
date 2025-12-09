import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={`header ${isScrolled || !isHome ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>DECIDE ENTERTAINMENT</Link>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li className="nav-item has-submenu">
              <Link to="/company/organization" onClick={closeMenu}>COMPANY</Link>
              <div className="submenu">
                <Link to="/company/organization" onClick={closeMenu}>ORGANIZATION</Link>
                <Link to="/company/history" onClick={closeMenu}>HISTORY</Link>
              </div>
            </li>
            <li><Link to="/artists" onClick={closeMenu}>ARTISTS</Link></li>
            <li><Link to="/news" onClick={closeMenu}>NEWS</Link></li>
            <li><Link to="/audition" onClick={closeMenu}>AUDITION</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="lang-btn">ENG</button>
          <button className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
