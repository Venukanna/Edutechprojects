import React, { useState } from 'react';
import { FaSearch, FaVideo, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';
// import './MyLiveClasses.css';
 import './MyLiveclasses.css';

const MyLiveClasses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('upcoming');

  const liveClasses = [
    {
      id: 1,
      title: "VAC-Java FSD (JavaScript, CSS, HTML, Bootstrap)",
      type: "Weekday-Online",
      date: "11th February 2025",
      time: "12:00 PM to 02:00 PM",
      mode: "Online",
      status: "upcoming"
    },
    {
      id: 2,
      title: "VAC-Core Java",
      type: "Weekday-Online",
      date: "7th February 2025",
      time: "11:00 AM to 01:00 PM",
      mode: "Online",
      status: "upcoming"
    },
    {
      id: 3,
      title: "VAC-ChatGPT (DA + FSD)",
      type: "Weekday-Online",
      date: "27th December 2024",
      time: "11:00 AM to 01:00 PM",
      mode: "Online",
      status: "completed"
    }
  ];

  const filteredClasses = liveClasses.filter(cls => {
    const matchesSearch = cls.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = cls.status === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="my-live-classes-page">
      <Navbar />
    <div className="live-classes-container">
      

      <div className="live-classes-header">
        <h2>My Live Classes</h2>
        <p>You can join the Instructor-Led live classes you have currently enrolled and watch the recordings of those live classes.</p>
        
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Classes
          </button>
          <button
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Classes
          </button>
        </div>
      </div>
      
      <div className="classes-list">
        {filteredClasses.length > 0 ? (
          filteredClasses.map(cls => (
            <div key={cls.id} className="class-card">
              <div className="class-header">
                <h3>{cls.title}</h3>
                <span className="class-type">{cls.type}</span>
              </div>
              
              <div className="class-details">
                <div className="detail-item">
                  <FaRegClock className="detail-icon" />
                  <span>{cls.date} • {cls.time}</span>
                </div>
                
                <div className="detail-item">
                  <FaMapMarkerAlt className="detail-icon" />
                  <span>{cls.mode}</span>
                </div>
              </div>
              
              <div className="class-actions">
                {cls.status === 'upcoming' ? (
                  <button className="join-btn">
                    <FaVideo className="action-icon" /> Join Class
                  </button>
                ) : (
                  <button className="view-btn">
                    <FaVideo className="action-icon" /> View Recording
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-classes">
            <p>No {activeTab} classes found</p>
          </div>
        )}
      </div>
      
    </div>
      <Footer />
    </div>
  );
};

export default MyLiveClasses;
