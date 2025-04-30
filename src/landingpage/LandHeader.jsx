import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandHeader.css';

const LandHeader = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Close mobile menu if open (you can implement this later)
    navigate(path);
  };

  return (
    <header className="land-header">
      <div className="logo" onClick={() => handleNavigation('/')}>ExcelR Solutions</div>
      <nav className="nav">
        <button className="nav-link" onClick={() => handleNavigation('/')}>
          Home
        </button>
        <button className="nav-link" onClick={() => handleNavigation('/Mycourses')}>
          Courses
        </button>
        {/* <button className="nav-link" onClick={() => handleNavigation('/features')}>
          Features
        </button> */}
        {/* <button className="nav-link" onClick={() => handleNavigation('/pricing')}>
          Pricing
        </button> */}
        <button className="nav-link" onClick={() => handleNavigation('/contactus')}>
          Contact
        </button>
        <button className="nav-link" onClick={() => handleNavigation('/AboutUs')}>
          About
        </button>
        <button className="nav-link" onClick={() => handleNavigation('/faqs')}>
          FAQ
        </button>
        {/* <button className="nav-link" onClick={() => handleNavigation('/dashboard')}>
          Dashboard
        </button> */}
      </nav>
      <button 
        className="login-btn"
        onClick={() => handleNavigation('/login')}
      >
        Login
      </button>
    </header>
  );
};

export default LandHeader;