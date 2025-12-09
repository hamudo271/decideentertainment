import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">DECIDE ENTERTAINMENT</div>
          <div className="social-links">
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Facebook">FB</a>
          </div>
        </div>
        
        <div className="footer-links">
          <a href="#">Company</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-bottom">
          <p className="address">
            205, Gangdong-daero, Gangdong-gu, Seoul, Republic of Korea<br />
            Tel: +82-2-1234-5678 | Fax: +82-2-1234-5679
          </p>
          <p className="copyright">
            &copy; 2024 DECIDE ENTERTAINMENT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
