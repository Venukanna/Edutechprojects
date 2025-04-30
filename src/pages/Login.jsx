import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaGoogle, FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import Footer from '../components/Shared/Footer';
import LandHeader from '../landingpage/LandHeader';

import './Login.css';
import LandingPage from '../landingpage/LandingPage';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <LandHeader/>
     <div className="login-container">
      <div className="training-background">
        <div className="course-card floating-card-1">
          <div className="course-icon"><FaGraduationCap /></div>
          <h4>Data Science</h4>
          <p>Master machine learning techniques</p>
        </div>
        <div className="course-card floating-card-2">
          <div className="course-icon"><FaGraduationCap /></div>
          <h4>Full Stack</h4>
          <p>Build modern web applications</p>
        </div>
        <div className="course-card floating-card-3">
          <div className="course-icon"><FaGraduationCap /></div>
          <h4>Cloud Computing</h4>
          <p>AWS, Azure & GCP</p>
        </div>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <div className="institute-logo">
            <img src="https://mma.prnewswire.com/media/1859927/ExcelR_Logo.jpg?p=facebook" alt="Excelr Institute" />
          </div>
          <h1>Welcome to Excelr</h1>
          <p className="login-subtitle">Skill up with industry experts</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <div className="input-container">
              <FaUser className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <div className="input-container">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>
          
          <div className="remember-forgot">
            <div className="checkbox-container">
              <input type="checkbox" id="remember" className="checkbox-input" />
              <label htmlFor="remember" className="checkbox-label">Remember me</label>
            </div>
            <a href="#forgot" className="forgot-link">Forgot password?</a>
          </div>
          
          <button type="submit" className="submit-btn">
            Sign In
          </button>
          
          <div className="social-login">
            <p className="social-divider">Or continue with</p>
            <div className="social-icons">
              <button type="button" className="social-btn google">
                <FaGoogle />
              </button>
              <button type="button" className="social-btn github">
                <FaGithub />
              </button>
              <button type="button" className="social-btn linkedin">
                <FaLinkedin />
              </button>
            </div>
          </div>
          
          <p className="signup-link">
            New to Excelr? <a href="#signup">Create an account</a>
          </p>
        </form>
      </div>
     </div>
     <Footer/>
     </div> 

  );
};

export default Login;
