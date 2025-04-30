import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandHeader from './LandHeader';
import './LandingPage.css';
import Footer from '../components/Shared/Footer';


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
    <div className="landing-container">
      <LandHeader />
      
      <main className="hero-section">
        <div className="hero-content">
          <h1>
            <span>Start Now</span>
            <span>Your IT</span>
            <span>Education</span>
          </h1>
          <p className="subtitles">
            Master in-demand tech skills with our expert-led courses. From coding to cloud computing, 
            we've got everything to launch your tech career.
          </p>
          <div className="cta-container">
            <button 
              className="primary-btn"
              onClick={() => navigate('/courses')}
            >
              Explore Courses
            </button>
            <div className="free-trial-badge">
              <span>Book demo</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img 
              src="https://img.freepik.com/free-vector/dropdown-menu-concept-illustration_114360-4501.jpg" 
              alt="IT Education Illustration"
              className="hero-img"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </main>

      <section className="stats-section">
        <div className="stat-item">
          <h3>50+</h3>
          <p>Professional Courses</p>
        </div>
        <div className="stat-item">
          <h3>10K+</h3>
          <p>Students Enrolled</p>
        </div>
        <div className="stat-item">
          <h3>200+</h3>
          <p>Expert Instructors</p>
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Satisfaction Rate</p>
        </div>
        
      </section>
      
    </div>
     <Footer/>
    </div>
  );
};

export default LandingPage;