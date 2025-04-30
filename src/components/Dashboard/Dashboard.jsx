import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import WelcomeBanner from './WelcomeBanner';
import UpcomingClasses from './UpcomingClasses';
import RecentAssignments from './RecentAssignments';
import './Dashboard.css';
import Footer from '../Shared/Footer';

const Dashboard = () => {
  const navigate = useNavigate();

  // Sample data
  const upcomingClasses = [
    {
      id: 1,
      title: "Java Full Stack - Frontend",
      description: "React.js Integration with Spring Boot",
      instructor: "Ms. Smeha Patel",
      location: "Lab 102",
      time: "10:00 AM"
    },
    {
      id: 2,
      title: "Java Full Stack - Database",
      description: "Hibernate & JPA Implementation",
      instructor: "Mr. Sambasivarao Sir",
      location: "Lab 103",
      time: "02:00 PM"
    }
  ];

  const recentAssignments = [
    {
      id: 1,
      title: "E-commerce Website Project",
      course: "Java Full Stack",
      dueDate: "2024-03-15",
      status: "pending"
    }
  ];

  const dashboardOptions = [
    { id: 1, title: "Today's Session", icon: "fa-calendar-day", active: true, path: "/Today's Session" },
    { id: 2, title: "My Self-paced Courses", icon: "fa-laptop-code", path: "/self-paced-courses" },
    { id: 3, title: "My Live Classes", icon: "fa-chalkboard-teacher", path: "/myliveclasses" },
    { id: 4, title: "Upcoming Schedule", icon: "fa-calendar-week", path: "/schedule" },
    { id: 5, title: "Pre-Recorded Material", icon: "fa-video", path: "/recordings" },
    { id: 6, title: "Refer & Earn", icon: "fa-gift", badge: "New", path: "/referral" },
    { id: 7, title: "FAQ's", icon: "fa-question-circle", path: "/faq" }
  ];

  const handleOptionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="dashboard-main">
        <div className="dashboard-grid">
          <div className="dashboard-content">
            <WelcomeBanner />
            
            {/* Dashboard Options Navigation */}
            <div className="dashboard-options">
              <div className="options-container">
                {dashboardOptions.map(option => (
                  <div 
                    key={option.id} 
                    className={`option-card ${option.active ? 'active' : ''}`}
                    onClick={() => handleOptionClick(option.path)}
                  >
                    <div className="option-icon">
                      <i className={`fas ${option.icon}`}></i>
                    </div>
                    <div className="option-title">
                      {option.title}
                      {option.badge && <span className="option-badge">{option.badge}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="dashboard-section">
              <UpcomingClasses classes={upcomingClasses} />
            </div>
            
            <div className="dashboard-section">
              <h2 className="section-title">
                <i className="fas fa-clipboard-list section-icon"></i>
                Recent Assignments
              </h2>
              <RecentAssignments assignments={recentAssignments} />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Dashboard;