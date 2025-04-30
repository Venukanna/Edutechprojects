import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">ExcelR</div>
            <p className="footer-description">
              Your premier destination for professional IT training and certification programs.
            </p>
            <div className="footer-social">
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiFacebook /></a>
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiInstagram /></a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/assignments">Assignments</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/webinars">Webinars</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-item">
              <FiMail className="footer-contact-icon" />
              support@excelr.com
            </div>
            <div className="footer-contact-item">
              <FiPhone className="footer-contact-icon" />
              (+91) 999-999-9999
            </div>
            <div className="footer-contact-item">
              <FiMapPin className="footer-contact-icon" />
              Hyderabad, Learning City
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 ExcelR Solutions. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;