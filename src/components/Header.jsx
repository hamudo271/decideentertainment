import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); // State for lang dropdown
  const { language, setLanguage, t } = useLanguage();
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
    if (!isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const toggleLang = () => setIsLangOpen(!isLangOpen);
  
  const changeLang = (lang) => {
    setLanguage(lang);
    setIsLangOpen(false);
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
              <Link to="/company/organization" onClick={closeMenu}>{t('nav.company')}</Link>
              <div className="submenu">
                <Link to="/company/organization" onClick={closeMenu}>{t('submenu.organization')}</Link>
                <Link to="/company/history" onClick={closeMenu}>{t('submenu.history')}</Link>
              </div>
            </li>
            <li><Link to="/artists" onClick={closeMenu}>{t('nav.artists')}</Link></li>
            <li><Link to="/news" onClick={closeMenu}>{t('nav.news')}</Link></li>
            <li><Link to="/audition" onClick={closeMenu}>{t('nav.audition')}</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-container" style={{ position: 'relative' }}>
            <button className="lang-btn" onClick={toggleLang}>{language}</button>
            {isLangOpen && (
              <ul className="lang-dropdown">
                {['KR', 'EN', 'JP', 'CN'].map(lang => (
                  <li key={lang} onClick={() => changeLang(lang)} className={language === lang ? 'active' : ''}>
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
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
