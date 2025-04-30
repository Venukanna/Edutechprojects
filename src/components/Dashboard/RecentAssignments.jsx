// import React from 'react';
// import './RecentAssignments.css';

// const RecentAssignments = () => {
//   const assignments = [
//     {
//       id: 1,
//       title: 'E-commerce Website Project',
//       course: 'Java Full Stack',
//       dueDate: '2024-03-15',
//       status: 'pending',
//       progress: 0
//     },
//     {
//       id: 2,
//       title: 'Data Analysis Project',
//       course: 'Python Programming',
//       dueDate: '2024-03-20',
//       status: 'in-progress',
//       progress: 60
//     },
//     {
//       id: 3,
//       title: 'Machine Learning Model',
//       course: 'Data Science & ML',
//       dueDate: '2024-03-18',
//       status: 'completed',
//       progress: 100
//     }
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'pending':
//         return 'var(--warning-color)';
//       case 'in-progress':
//         return 'var(--info-color)';
//       case 'completed':
//         return 'var(--success-color)';
//       default:
//         return 'var(--text-secondary)';
//     }
//   };

//   return (
//     <div className="recent-assignments">
//       <h2>Recent Projects</h2>
//       <div className="assignments-list">
//         {assignments.map(assignment => (
//           <div key={assignment.id} className="assignment-card">
//             <div className="assignment-header">
//               <h3>{assignment.title}</h3>
//               <span 
//                 className="status-badge"
//                 style={{ backgroundColor: getStatusColor(assignment.status) }}
//               >
//                 {assignment.status}
//               </span>
//             </div>
//             <div className="assignment-details">
//               <span className="course">{assignment.course}</span>
//               <span className="due-date">Due: {assignment.dueDate}</span>
//             </div>
//             <div className="progress-bar">
//               <div 
//                 className="progress-fill"
//                 style={{ width: `${assignment.progress}%` }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentAssignments; 

import React from 'react';
import './RecentAssignments.css';

const RecentAssignments = () => {
  const assignments = [
    {
      id: 1,
      title: 'E-commerce Website Project',
      course: 'Java Full Stack',
      dueDate: '2024-03-15',
      status: 'pending',
      progress: 0
    },
    {
      id: 2,
      title: 'Data Analysis Project',
      course: 'Python Programming',
      dueDate: '2024-03-20',
      status: 'in-progress',
      progress: 60
    },
    {
      id: 3,
      title: 'Machine Learning Model',
      course: 'Data Science & ML',
      dueDate: '2024-03-18',
      status: 'completed',
      progress: 100
    }
  ];

  const statusColors = {
    pending: 'var(--warning)',
    'in-progress': 'var(--info)',
    completed: 'var(--success)'
  };

  return (
    <div className="recent-assignments">
      <div className="assignments-list">
        {assignments.map(assignment => (
          <div key={assignment.id} className="assignment-card">
            <div className="assignment-header">
              <h3 className="assignment-title">{assignment.title}</h3>
              <span 
                className="status-badge"
                style={{ backgroundColor: statusColors[assignment.status] }}
              >
                {assignment.status.replace('-', ' ')}
              </span>
            </div>
            <div className="assignment-meta">
              <span className="meta-item">
                <i className="fas fa-book"></i> {assignment.course}
              </span>
              <span className="meta-item">
                <i className="fas fa-calendar-day"></i> Due: {assignment.dueDate}
              </span>
            </div>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ 
                    width: `${assignment.progress}%`,
                    backgroundColor: statusColors[assignment.status]
                  }}
                />
              </div>
              <span className="progress-text">{assignment.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAssignments;