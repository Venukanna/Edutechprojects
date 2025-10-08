// import React, { useState, useRef, useEffect } from 'react';
// import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCamera, FaEdit, FaSave, FaTimes, FaSignOutAlt } from 'react-icons/fa';
// import './Profile.css';

// const Profile = ({ onClose }) => {
//   const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
//   const [isHovered, setIsHovered] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const fileInputRef = useRef(null);
//   const popupRef = useRef(null);

//   // Initial student data
//   const [studentData, setStudentData] = useState({
//     name: "Venu",
//     email: "venu@gmail.com",
//     mobile: "+91 9963662332",
//     course: "Full Stack Development (java)",
//     batch: "FSD-2023-06",
//     studentId: "IT20230045"
//   });

//   // Form data state
//   const [formData, setFormData] = useState({ ...studentData });

//   const handleImageClick = (e) => {
//     e.stopPropagation();
//     fileInputRef.current.click();
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (!file.type.startsWith('image/')) {
//         alert('Please select an image file (JPEG, PNG, etc.)');
//         return;
//       }

//       if (file.size > 5 * 1024 * 1024) {
//         alert('Image size should be less than 5MB');
//         return;
//       }

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.onerror = () => {
//         alert('Error reading the image file. Please try another image.');
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleEditClick = (e) => {
//     e.stopPropagation();
//     console.log('Edit clicked');
//     setIsEditing(true);
//     setFormData({ ...studentData });
//   };

//   const handleCancelClick = (e) => {
//     e.stopPropagation();
//     console.log('Cancel clicked');
//     setIsEditing(false);
//   };

//   const handleSaveClick = (e) => {
//     e.stopPropagation();
//     console.log('Save clicked with data:', formData);
//     setStudentData({ ...formData });
//     setIsEditing(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleLogout = (e) => {
//     e.stopPropagation();
//     console.log('Logout clicked');
//   };

//   // Close popup when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         // Don't close if we're in edit mode or just saved
//         if (!isEditing) {
//           onClose();
//         }
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [onClose, isEditing]);

//   return (
//     <div className="profile-overlay">
//       <div className="profile-card" ref={popupRef} onClick={(e) => e.stopPropagation()}>
//         <div className="profile-header">
//           <button className="close-btn" onClick={onClose}>×</button>
//           <h2>Student Profile</h2>
//         </div>
        
//         <div className="profile-content">
//           <div 
//             className="profile-image-container"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div className="image-wrapper" onClick={handleImageClick}>
//               <img src={profileImage} alt="Profile" className="profile-image" />
//               {isHovered && (
//                 <div className="image-overlay">
//                   <FaCamera className="camera-icon" />
//                   <span>Change Photo</span>
//                 </div>
//               )}
//             </div>
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               style={{ display: 'none' }}
//               onClick={(e) => e.stopPropagation()}
//             />
//           </div>
          
//           <div className="profile-info">
//             <div className="info-item">
//               <FaUser className="info-icon" />
//               <span className="info-label">Name:</span>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                   onClick={(e) => e.stopPropagation()}
//                 />
//               ) : (
//                 <span className="info-value">{studentData.name}</span>
//               )}
//             </div>
            
//             <div className="info-item">
//               <FaEnvelope className="info-icon" />
//               <span className="info-label">Email:</span>
//               {isEditing ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                   onClick={(e) => e.stopPropagation()}
//                 />
//               ) : (
//                 <span className="info-value">{studentData.email}</span>
//               )}
//             </div>
            
//             <div className="info-item">
//               <FaPhone className="info-icon" />
//               <span className="info-label">Mobile:</span>
//               {isEditing ? (
//                 <input
//                   type="tel"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                   onClick={(e) => e.stopPropagation()}
//                 />
//               ) : (
//                 <span className="info-value">{studentData.mobile}</span>
//               )}
//             </div>
            
//             <div className="info-item">
//               <FaGraduationCap className="info-icon" />
//               <span className="info-label">Course:</span>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="course"
//                   value={formData.course}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                   onClick={(e) => e.stopPropagation()}
//                 />
//               ) : (
//                 <span className="info-value">{studentData.course}</span>
//               )}
//             </div>
            
//             <div className="info-item">
//               <FaCalendarAlt className="info-icon" />
//               <span className="info-label">Batch:</span>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="batch"
//                   value={formData.batch}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                   onClick={(e) => e.stopPropagation()}
//                 />
//               ) : (
//                 <span className="info-value">{studentData.batch}</span>
//               )}
//             </div>
            
//             <div className="info-item">
//               <FaMapMarkerAlt className="info-icon" />
//               <span className="info-label">Student ID:</span>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="studentId"
//                   value={formData.studentId}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                   onClick={(e) => e.stopPropagation()}
//                 />
//               ) : (
//                 <span className="info-value">{studentData.studentId}</span>
//               )}
//             </div>
//           </div>

//           <div className="profile-footer">
//             {isEditing ? (
//               <>
//                 <button className="action-btn save-btn" onClick={handleSaveClick}>
//                   <FaSave className="action-icon" /> Save
//                 </button>
//                 <button className="action-btn cancel-btn" onClick={handleCancelClick}>
//                   <FaTimes className="action-icon" /> Cancel
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="action-btn edit-btn" onClick={handleEditClick}>
//                   <FaEdit className="action-icon" /> Edit Profile
//                 </button>
//                 <button className="action-btn logout-btn" onClick={handleLogout}>
//                   <FaSignOutAlt className="action-icon" /> Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser, FaEnvelope, FaPhone, FaGraduationCap,
  FaCalendarAlt, FaMapMarkerAlt, FaCamera,
  FaEdit, FaSave, FaTimes, FaSignOutAlt
} from 'react-icons/fa';
import './Profile.css';

const Profile = ({ onClose }) => {
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const popupRef = useRef(null);
  const navigate = useNavigate(); // ✅ React Router navigation

  // Initial student data
  const [studentData, setStudentData] = useState({
    name: "Venu",
    email: "venu@gmail.com",
    mobile: "+91 9963662332",
    course: "Full Stack Development (java)",
    batch: "FSD-2023-06",
    studentId: "IT20230045"
  });

  const [formData, setFormData] = useState({ ...studentData });

  const handleImageClick = (e) => {
    e.stopPropagation();
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPEG, PNG, etc.)');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.onerror = () => {
        alert('Error reading the image file. Please try another image.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
    setFormData({ ...studentData });
  };

  const handleCancelClick = (e) => {
    e.stopPropagation();
    setIsEditing(false);
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
    setStudentData({ ...formData });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Updated Logout Function
  const handleLogout = (e) => {
    e.stopPropagation();
    navigate("/login"); // 🔁 Redirect to login page
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (!isEditing) {
          onClose();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, isEditing]);

  return (
    <div className="profile-overlay">
      <div className="profile-card" ref={popupRef} onClick={(e) => e.stopPropagation()}>
        <div className="profile-header">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>Its Your Profile</h2>
        </div>

        <div className="profile-content">
          <div 
            className="profile-image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="image-wrapper" onClick={handleImageClick}>
              <img src={profileImage} alt="Profile" className="profile-image" />
              {isHovered && (
                <div className="image-overlay">
                  <FaCamera className="camera-icon" />
                  <span>Change Photo</span>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="profile-info">
            {[
              { icon: <FaUser />, label: "Name", field: "name" },
              { icon: <FaEnvelope />, label: "Email", field: "email" },
              { icon: <FaPhone />, label: "Mobile", field: "mobile" },
              { icon: <FaGraduationCap />, label: "Course", field: "course" },
              { icon: <FaCalendarAlt />, label: "Batch", field: "batch" },
              { icon: <FaMapMarkerAlt />, label: "Student ID", field: "studentId" },
            ].map(({ icon, label, field }) => (
              <div className="info-item" key={field}>
                {icon}
                <span className="info-label">{label}:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="edit-input"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <span className="info-value">{studentData[field]}</span>
                )}
              </div>
            ))}
          </div>

          <div className="profile-footer">
            {isEditing ? (
              <>
                <button className="action-btn save-btn" onClick={handleSaveClick}>
                  <FaSave className="action-icon" /> Save
                </button>
                <button className="action-btn cancel-btn" onClick={handleCancelClick}>
                  <FaTimes className="action-icon" /> Cancel
                </button>
              </>
            ) : (
              <>
                <button className="action-btn edit-btn" onClick={handleEditClick}>
                  <FaEdit className="action-icon" /> Edit Profile
                </button>
                <button className="action-btn logout-btn" onClick={handleLogout}>
                  <FaSignOutAlt className="action-icon" /> Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
