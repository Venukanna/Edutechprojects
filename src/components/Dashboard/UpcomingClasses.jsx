
import React from 'react';
import './UpcomingClasses.css';

const UpcomingClasses = () => {
  const classes = [
    {
      id: 1,
      time: '4:00 PM',
      course: 'Java Full Stack - Database',
      topic: 'Hibernate & JPA Implementation',
      instructor: 'Mr. Suresh Rao',
      room: 'Lab 103'
    },

    {
      id: 2,
      course: 'Java Full Stack - Frontend',
      time: '2:00 PM',
      duration: '2 hours',
      instructor: 'Ms. Sneha Patel',
      room: 'Lab 102',
      topic: 'React.js Integration with Spring Boot'
    },
    {
      id: 3,
      course: 'Java Full Stack - Database',
      time: '4:00 PM',
      duration: '2 hours',
      instructor: 'Mr. Suresh Rao',
      room: 'Lab 103',
      topic: 'Hibernate & JPA Implementation'
    }
    // Add other classes as needed
  ];

  return (
    <div className="upcoming-classes">
      <h2>Upcoming Classes</h2>
      <div className="classes-list">
        {classes.map(classItem => (
          <div key={classItem.id} className="class-card">
            <div className="class-time">{classItem.time}</div>
            <div className="class-details">
              <h3>{classItem.course}</h3>
              <p className="class-topic">{classItem.topic}</p>
              <div className="class-meta">
                <span className="instructor">{classItem.instructor}</span>
                <span className="room">{classItem.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClasses;