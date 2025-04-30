import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import './NotificationsPanel.css';

const NotificationsPanel = () => {
  const notifications = [
    {
      id: 1,
      type: 'announcement',
      title: 'New Course Material Available',
      message: 'New Java Spring Boot tutorial videos have been uploaded',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'assignment',
      title: 'Project Graded',
      message: 'Your E-commerce website project has been reviewed',
      time: '1 day ago'
    },
    {
      id: 3,
      type: 'event',
      title: 'Upcoming Workshop',
      message: 'Machine Learning workshop is scheduled for next week',
      time: '2 days ago'
    },
    {
      id: 4,
      type: 'announcement',
      title: 'New Batch Starting',
      message: 'New batch for Web Development course starting next month',
      time: '3 days ago'
    }
    // ... (keep your existing notifications data)
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'announcement': return '📢';
      case 'assignment': return '📝';
      case 'event': return '📅';
      default: return '🔔';
    }
  };

  return (
    <div className="notifications-page">
      <Navbar />
      <main className="notifications-main-content">
        <div className="notifications-container">
          <div className="panel-header">
            <h2>Notifications</h2>
            <Link to="/dashboard" className="back-button">
              ← Back to Dashboard
            </Link>
          </div>
          
          <div className="notifications-list">
            {notifications.map(notification => (
              <div key={notification.id} className="notification-card">
                <div className="notification-icon">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="notification-content">
                  <h3>{notification.title}</h3>
                  <p>{notification.message}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotificationsPanel;