import React from 'react';
import './AboutUs.css';
import LandHeader from '../../landingpage/LandHeader';

const AboutUs = () => {
  return (
    <div className="about-page">
        <LandHeader />
    <div className="about-us-container">
      <header className="about-header">
        <h1>About ExcelR Institute</h1>
        <p className="subtitle">Empowering the next generation of IT professionals</p>
      </header>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At TechMasters, we're committed to bridging the gap between academic knowledge and 
            industry requirements. Our hands-on training approach ensures students gain practical 
            skills that are immediately applicable in the workplace.
          </p>
        </div>
        <div className="mission-image"></div>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <h3>10,000+</h3>
          <p>Students Trained</p>
        </div>
        <div className="stat-item">
          <h3>95%</h3>
          <p>Placement Rate</p>
        </div>
        <div className="stat-item">
          <h3>15+</h3>
          <p>Industry Experts</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Corporate Partners</p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Expert Instructors</h2>
        <p className="team-description">
          Our faculty comprises industry veterans with an average of 10+ years of real-world 
          experience in leading tech companies.
        </p>
        
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image img1"></div>
            <h3>Sarah Johnson</h3>
            <p>Cloud Computing Specialist</p>
          </div>
          <div className="team-member">
            <div className="member-image img2"></div>
            <h3>Michael Chen</h3>
            <p>Cybersecurity Expert</p>
          </div>
          <div className="team-member">
            <div className="member-image img3"></div>
            <h3>David Rodriguez</h3>
            <p>Full-Stack Developer</p>
          </div>
          <div className="team-member">
            <div className="member-image img4"></div>
            <h3>Priya Patel</h3>
            <p>Data Science Lead</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We continuously update our curriculum to reflect the latest industry trends.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>We foster a community where students and instructors learn together.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Excellence</h3>
            <p>We maintain the highest standards in IT education and training.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Accessibility</h3>
            <p>We make quality IT education available to everyone, everywhere.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Launch Your IT Career?</h2>
        <p>Join thousands of successful graduates who transformed their careers with TechMasters.</p>
        <button className="cta-button">Explore Our Programs</button>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;