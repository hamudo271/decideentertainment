import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SubMenu.css';

const SubMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="submenu-container">
      <div className="submenu-inner">
        <Link 
          to="/company/organization" 
          className={`submenu-item ${currentPath === '/company/organization' ? 'active' : ''}`}
        >
          ORGANIZATION
        </Link>
        <Link 
          to="/company/history" 
          className={`submenu-item ${currentPath === '/company/history' ? 'active' : ''}`}
        >
          HISTORY
        </Link>
      </div>
    </div>
  );
};

export default SubMenu;
