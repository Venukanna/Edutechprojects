import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import './Assignments.css';

const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: 'E-commerce Website Project',
      course: 'Java Full Stack',
      dueDate: '2024-03-15',
      status: 'pending',
      description: 'Build a full-stack e-commerce application using Java, Spring Boot, and React.',
      points: 100
    },
    {
      id: 2,
      title: 'Data Analysis Project',
      course: 'Python Programming',
      dueDate: '2024-03-20',
      status: 'in-progress',
      description: 'Analyze a dataset using Python libraries and create visualizations.',
      points: 150
    },
    {
      id: 3,
      title: 'Machine Learning Model',
      course: 'Data Science & ML',
      dueDate: '2024-03-18',
      status: 'completed',
      description: 'Develop and train a machine learning model for predictive analysis.',
      points: 200
    },
    {
      id: 4,
      title: 'Responsive Web Application',
      course: 'Web Development',
      dueDate: '2024-03-22',
      status: 'pending',
      description: 'Create a responsive web application using HTML, CSS, and JavaScript.',
      points: 120
    },
    {
      id: 5,
      title: 'Cloud Deployment Project',
      course: 'Cloud Computing',
      dueDate: '2024-03-25',
      status: 'pending',
      description: 'Deploy a web application on cloud platforms and configure CI/CD.',
      points: 180
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'var(--warning-color)';
      case 'in-progress':
        return 'var(--info-color)';
      case 'completed':
        return 'var(--success-color)';
      default:
        return 'var(--text-secondary)';
    }
  };

  return (
    <div className="assignments-page">
      <Navbar />
      <main className="assignments-content">
        <div className="container">
          <h1>My Projects</h1>
          <div className="assignments-list">
            {assignments.map(assignment => (
              <div key={assignment.id} className="assignment-card">
                <div className="assignment-header">
                  <h2>{assignment.title}</h2>
                  <span 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(assignment.status) }}
                  >
                    {assignment.status}
                  </span>
                </div>
                <div className="assignment-details">
                  <p className="course">{assignment.course}</p>
                  <p className="due-date">Due: {assignment.dueDate}</p>
                  <p className="points">Points: {assignment.points}</p>
                </div>
                <p className="description">{assignment.description}</p>
                <div className="assignment-actions">
                  <button className="btn btn-primary">View Details</button>
                  {assignment.status !== 'completed' && (
                    <button className="btn btn-secondary">Submit</button>
                  )}
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

export default Assignments; 