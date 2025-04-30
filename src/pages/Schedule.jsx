import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import { FaClock, FaMapMarkerAlt, FaChalkboardTeacher } from 'react-icons/fa';
import './Schedule.css';

const Schedule = () => {
  const schedule = [
    {
      id: 1,
      day: 'Monday',
      classes: [
        {
          id: 1,
          title: 'Java Full Stack',
          time: '09:00 - 11:00',
          room: 'Lab 101',
          instructor: 'Mr. Ramesh Kumar'
        },
        {
          id: 2,
          title: 'Python Programming',
          time: '11:30 - 13:00',
          room: 'Lab 102',
          instructor: 'Ms. Priya Sharma'
        }
      ]
    },
    {
      id: 2,
      day: 'Tuesday',
      classes: [
        {
          id: 3,
          title: 'Data Science & ML',
          time: '10:00 - 12:00',
          room: 'Lab 201',
          instructor: 'Dr. Anil Mehta'
        },
        {
          id: 4,
          title: 'Web Development',
          time: '13:00 - 15:00',
          room: 'Lab 202',
          instructor: 'Ms. Sneha Patel'
        }
      ]
    },
    {
      id: 3,
      day: 'Wednesday',
      classes: [
        {
          id: 5,
          title: 'Java Full Stack',
          time: '09:00 - 11:00',
          room: 'Lab 101',
          instructor: 'Mr. Ramesh Kumar'
        },
        {
          id: 6,
          title: 'Cloud Computing',
          time: '11:30 - 13:00',
          room: 'Lab 301',
          instructor: 'Mr. Suresh Rao'
        }
      ]
    },
    {
      id: 4,
      day: 'Thursday',
      classes: [
        {
          id: 7,
          title: 'Python Programming',
          time: '10:00 - 12:00',
          room: 'Lab 102',
          instructor: 'Ms. Priya Sharma'
        },
        {
          id: 8,
          title: 'Aptitude & Soft Skills',
          time: '13:00 - 14:30',
          room: 'Seminar Hall',
          instructor: 'Ms. Kavya Singh'
        }
      ]
    },
    {
      id: 5,
      day: 'Friday',
      classes: [
        {
          id: 9,
          title: 'Data Science & ML',
          time: '09:00 - 11:00',
          room: 'Lab 201',
          instructor: 'Dr. Anil Mehta'
        },
        {
          id: 10,
          title: 'Web Development',
          time: '11:30 - 13:00',
          room: 'Lab 202',
          instructor: 'Ms. Sneha Patel'
        }
      ]
    }
  ];

  return (
    <div className="schedule-page">
      <Navbar />
      <main className="schedule-content">
        <div className="container">
          <div className="schedule-header">
            <h1>Weekly Schedule</h1>
            <p>View your class schedule for the week</p>
          </div>
          <div className="schedule-grid">
            {schedule.map(day => (
              <div key={day.id} className="day-card">
                <div className="day-header">
                  <h2>{day.day}</h2>
                </div>
                <div className="classes-list">
                  {day.classes.map(classItem => (
                    <div key={classItem.id} className="upcoming-class-card">
                      <h3 className="upcoming-class-title">{classItem.title}</h3>
                      <div className="upcoming-class-details">
                        <div className="upcoming-class-detail-item">
                          <FaClock className="upcoming-class-icon" />
                          <span>{classItem.time}</span>
                        </div>
                        <div className="upcoming-class-detail-item">
                          <FaMapMarkerAlt className="upcoming-class-icon" />
                          <span>{classItem.room}</span>
                        </div>
                        <div className="upcoming-class-detail-item">
                          <FaChalkboardTeacher className="upcoming-class-icon" />
                          <span>{classItem.instructor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default Schedule;