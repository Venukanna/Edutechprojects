import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import Profile from './Profile';
import './Navbar.css';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const notificationButtonRef = useRef(null);

  const notifications = [
    {
      id: 1,
      title: "Machine Learning Workshop",
      message: "Workshop scheduled for next week",
      time: "2 days ago",
      read: false
    },
    {
      id: 2,
      title: "New Batch Starting",
      message: "Web Development course starting next month", 
      time: "3 days ago",
      read: true
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleViewAll = () => {
    setShowNotifications(false);
    navigate('/notifications');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          !notificationButtonRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getDropdownPosition = () => {
    if (!notificationButtonRef.current) return {};
    
    const buttonRect = notificationButtonRef.current.getBoundingClientRect();
    return {
      top: `${buttonRect.bottom + window.scrollY + 10}px`,
      right: `${window.innerWidth - buttonRect.right - buttonRect.width/2}px`,
      transform: 'translateX(50%)'
    };
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
             Excelr Student Dashboard
          </Link>
        </div>
        
        <div className="navbar-right">
          <div className="navbar-links">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/assignments" className="nav-link">Assignments</Link>
            {/* <Link to="/schedule" className="nav-link">Schedule</Link> */}
            <Link to="/Codecompiler" className="nav-link">Codecompiler</Link>
          </div>
          
          <div className="navbar-actions">
            <div className="notification-icon-wrapper" ref={dropdownRef}>
              <button 
                ref={notificationButtonRef}
                className={`notification-btn ${unreadCount > 0 ? 'has-unread' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotifications(!showNotifications);
                }}
                aria-label="Notifications"
                aria-expanded={showNotifications}
              >
                <FaBell className="notification-icon" />
                {unreadCount > 0 && <span className="unread-badge">{unreadCount}</span>}
              </button>
              
              {showNotifications && (
                <div 
                  className="notification-dropdown" 
                  style={getDropdownPosition()}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="notification-header">
                    <h3>Notifications</h3>
                    <span className="notification-count">{notifications.length}</span>
                  </div>
                  
                  <div className="notifications-list">
                    {notifications.slice(0, 2).map(notification => (
                      <div key={notification.id} className={`notification-item ${!notification.read ? 'unread' : ''}`}>
                        <h4 className="notification-title">{notification.title}</h4>
                        <p className="notification-message">{notification.message}</p>
                        <span className="notification-time">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="notification-footer">
                    <button onClick={handleViewAll} className="view-all-btn">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              className="profile-btn"
              onClick={() => setShowProfile(!showProfile)}
              aria-label="Profile"
            >
              <FaUserCircle className="user-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Popup */}
      {showProfile && (
        <Profile onClose={() => setShowProfile(false)} />
      )}
    </nav>
  );
};

export default Navbar;