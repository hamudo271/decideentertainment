import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './SubMenu.css';

const SubMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { t } = useLanguage();

  return (
    <div className="submenu-container">
      <div className="submenu-inner">
        <Link 
          to="/company/organization" 
          className={`submenu-item ${currentPath === '/company/organization' ? 'active' : ''}`}
        >
          {t('submenu.organization')}
        </Link>
        <Link 
          to="/company/history" 
          className={`submenu-item ${currentPath === '/company/history' ? 'active' : ''}`}
        >
          {t('submenu.history')}
        </Link>
      </div>
    </div>
  );
};

export default SubMenu;
