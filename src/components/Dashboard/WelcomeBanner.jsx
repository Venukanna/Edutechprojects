 
import React from 'react';
import './WelcomeBanner.css';
import { FaCalendarAlt, FaTasks, FaBookOpen } from 'react-icons/fa';

const WelcomeBanner = () => {
  const currentTime = new Date().getHours();
  let greeting = 'Good morning';
  let icon = '☀️';
  
  if (currentTime >= 12 && currentTime < 17) {
    greeting = 'Good afternoon';
    icon = '⛅';
  } else if (currentTime >= 17 || currentTime < 5) {
    greeting = 'Good evening';
    icon = '🌙';
  }

  return (
    <div className="welcome-banner">
      <div className="welcome-content">
        <h1>
          <span className="greeting-icon">{icon}</span>
          {greeting}, <span className="highlight-name">Venu</span>!
        </h1>
        <p className="welcome-subtext">Here's what's happening with your courses today.</p>
      </div>
      <div className="welcome-stats">
        <div className="stat-itemm">
          <span className="stat-value">3</span>
          <span className="stat-label">
            <FaCalendarAlt className="stat-icon" />
            Upcoming Classes
          </span>
        </div>
        <div className="stat-itemm">
          <span className="stat-value">2</span>
          <span className="stat-label">
            <FaTasks className="stat-icon" />
            Pending Assignments
          </span>
        </div>
        <div className="stat-itemm">
          <span className="stat-value">4</span>
          <span className="stat-label">
            <FaBookOpen className="stat-icon" />
            Active Courses
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;