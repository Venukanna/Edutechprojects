import React from 'react';
import './Contactus.css';
import Footer from './Footer';
import LandHeader from '../../landingpage/LandHeader';

const ContactPage = () => {
  return (
    <div className="tech-contact-page">
      <LandHeader />
    <div className="tech-contact-container">
      <header className="tech-contact-header">
        <h1 className="tech-contact-title">Get in Touch</h1>
        <p className="tech-contact-subtitle">We'd love to hear from you! Reach out for inquiries, support, or partnership opportunities.</p>
      </header>

      <div className="tech-contact-content-wrapper">
        <section className="tech-contact-form-section">
          <h2 className="tech-section-title">Send Us a Message</h2>
          <form className="tech-contact-form">
            <div className="tech-form-group">
              <label htmlFor="tech-name" className="tech-form-label">Full Name</label>
              <input 
                type="text" 
                id="tech-name" 
                className="tech-form-input"
                placeholder="Enter your name" 
              />
            </div>
            
            <div className="tech-form-group">
              <label htmlFor="tech-email" className="tech-form-label">Email Address</label>
              <input 
                type="email" 
                id="tech-email" 
                className="tech-form-input"
                placeholder="Enter your email" 
              />
            </div>
            
            <div className="tech-form-group">
              <label htmlFor="tech-phone" className="tech-form-label">Phone Number (Optional)</label>
              <input 
                type="tel" 
                id="tech-phone" 
                className="tech-form-input"
                placeholder="Enter your phone number" 
              />
            </div>
            
            <div className="tech-form-group">
              <label htmlFor="tech-subject" className="tech-form-label">Subject</label>
              <select id="tech-subject" className="tech-form-select">
                <option value="">Select a subject</option>
                <option value="admission">Admission Inquiry</option>
                <option value="course">Course Information</option>
                <option value="corporate">Corporate Training</option>
                <option value="feedback">Feedback/Suggestions</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="tech-form-group">
              <label htmlFor="tech-message" className="tech-form-label">Your Message</label>
              <textarea 
                id="tech-message" 
                className="tech-form-textarea" 
                rows="5" 
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <button type="submit" className="tech-submit-button">
              <span className="tech-button-text">Send Message</span>
              <span className="tech-button-icon">→</span>
            </button>
          </form>
        </section>

        <section className="tech-contact-info-section">
          <div className="tech-info-card">
            <div className="tech-info-icon-wrapper">
              <span className="tech-info-icon">📍</span>
            </div>
            <h3 className="tech-info-title">Visit Us</h3>
            <p className="tech-info-text"> Hyd</p>
            <p className="tech-info-text">Cyber Towers, 5th flor</p>
          </div>
          
          <div className="tech-info-card">
            <div className="tech-info-icon-wrapper">
              <span className="tech-info-icon">📞</span>
            </div>
            <h3 className="tech-info-title">Call Us</h3>
            <p className="tech-info-text">Main Office: 9999999997</p>
            <p className="tech-info-text">Admissions: 99999999</p>
          </div>
          
          <div className="tech-info-card">
            <div className="tech-info-icon-wrapper">
              <span className="tech-info-icon">✉️</span>
            </div>
            <h3 className="tech-info-title">Email Us</h3>
            <p className="tech-info-text">General: info@Excelr solutions.edu</p>
            <p className="tech-info-text">Support: help@excelr solutions.edu</p>
          </div>
          
          <div className="tech-info-card">
            <div className="tech-info-icon-wrapper">
              <span className="tech-info-icon">🕒</span>
            </div>
            <h3 className="tech-info-title">Hours</h3>
            <p className="tech-info-text">Monday-Friday: 8:00 AM - 6:00 PM</p>
            <p className="tech-info-text">Saturday: 9:00 AM - 3:00 PM</p>
            <p className="tech-info-text">Sunday: Closed</p>
          </div>
        </section>
      </div>

      <section className="tech-contact-map-section">
        <h2 className="tech-section-title">Our Location</h2>
        <div className="tech-map-container">
          <div className="tech-map-placeholder">
            <div className="tech-map-overlay">
              <button className="tech-map-button">
                View on Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

     </div>
        <Footer />
        </div> 
  );
};

export default ContactPage;