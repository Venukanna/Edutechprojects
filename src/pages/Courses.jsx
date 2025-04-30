import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Java Full Stack Development',
      instructor: 'Mr. Ramesh Kumar',
      progress: 75,
      description: 'Master full-stack development with Java, Spring Boot, and modern frontend technologies.',
      image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?ga=GA1.1.1721003505.1744224289&semt=ais_hybrid&w=740'
    },
    {
      id: 2,
      title: 'Python Programming',
      instructor: 'Ms. Priya Sharma',
      progress: 60,
      description: 'Learn Python programming, data structures, and algorithms for software development.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Data Science & ML',
      instructor: 'Dr. Anil Mehta',
      progress: 45,
      description: 'Explore data science, machine learning, and artificial intelligence concepts.',
      image: 'https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8013.jpg?ga=GA1.1.1721003505.1744224289&semt=ais_hybrid&w=740'
    },
    {
      id: 4,
      title: 'Web Development',
      instructor: 'Ms. Sneha Patel',
      progress: 30,
      description: 'Build modern web applications using HTML, CSS, JavaScript, and React.',
      image: 'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?ga=GA1.1.1721003505.1744224289&semt=ais_hybrid&w=740'
    },
    {
      id: 5,
      title: 'Cloud Computing',
      instructor: 'Mr. Suresh Rao',
      progress: 20,
      description: 'Learn cloud platforms, deployment, and infrastructure management.',
      image: 'https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?ga=GA1.1.1721003505.1744224289&semt=ais_hybrid&w=740'
    },
    {
      id: 6,
      title: 'Mobile App Development',
      instructor: 'Ms. Anjali Verma',
      progress: 15,
      description: 'Create cross-platform mobile applications with Flutter and React Native.',
      image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg'
    }
  ];

  return (
    <div className="courses-page-container">
      <Navbar />
      <main className="courses-main-content">
        <div className="courses-container">
          <div className="courses-page-header">
            <h1 className="courses-page-title">My Learning Journey</h1>
            <p className="courses-page-subtitle">Continue your progress or explore new courses</p>
          </div>
          <div className="courses-page-grid">
            {courses.map(course => (
              <div key={course.id} className="courses-page-card">
                <div className="courses-card-image">
                  <img src={course.image} alt={course.title} />
                  <div className="courses-card-badge">In Progress</div>
                </div>
                <div className="courses-card-info">
                  <div className="courses-card-meta">
                    <span className="courses-card-instructor">{course.instructor}</span>
                    <span className="courses-card-progress">{course.progress}%</span>
                  </div>
                  <h2 className="courses-card-title">{course.title}</h2>
                  <p className="courses-card-description">{course.description}</p>
                  <div className="courses-progress-container">
                    <div className="courses-progress-bar">
                      <div 
                        className="courses-progress-fill"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <button className="courses-continue-btn">
                    {course.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                  </button>
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

export default Courses;