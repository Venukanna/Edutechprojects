// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Dashboard from '../components/Dashboard/Dashboard';
// import Courses from '../pages/Courses';
// import Assignments from '../pages/Assignments';
// import Schedule from '../pages/Schedule';
// import Login from '../pages/Login';
// import NotFound from '../pages/NotFound';
// import Codecompiler from '../Codecompiler/Codecompiler';
// import Faq from '../pages/Faq';
// import MyLiveclasses from "../pages/MyLiveClasses";




// import NotificationsPanel from '../components/Dashboard/NotificationsPanel';



// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/courses" element={<Courses />} />
//       <Route path="/assignments" element={<Assignments />} />
//       <Route path="/schedule" element={<Schedule />} />
//       <Route path="/notifications" element={<NotificationsPanel />} />
//       <Route path="/Codecompiler" element={<Codecompiler />} />
//       <Route path="/myliveclasses" element={<MyLiveclasses />} />

//       <Route path="/faq" element={<Faq />} />

//       <Route path="/login" element={<Login />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes; 

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../landingpage/LandingPage'; 
import Dashboard from '../components/Dashboard/Dashboard';
import Courses from '../pages/Courses';
import Assignments from '../pages/Assignments';
import Schedule from '../pages/Schedule';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Codecompiler from '../Codecompiler/Codecompiler';
import Faq from '../pages/Faq';
import MyLiveclasses from "../pages/MyLiveClasses";
import NotificationsPanel from '../components/Dashboard/NotificationsPanel';
import AboutUs from '../components/Shared/AboutUs';
import ContactUs from '../components/Shared/Contactus'; 
import Mycourses from '../pages/Mycourses'; 
import Faqs from '../pages/Faqs'; 

const AppRoutes = () => {
  return (
    <Routes>
      {/* Landing page as the root route */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Mycourses" element={<Mycourses />} />
      <Route path="/Faqs" element={<Faqs />} />
      
      {/* Login route */}
      <Route path="/login" element={<Login />} />
      
      {/* Protected routes (after login) */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/notifications" element={<NotificationsPanel />} />
      <Route path="/Codecompiler" element={<Codecompiler />} />
      <Route path="/myliveclasses" element={<MyLiveclasses />} />
      <Route path="/faq" element={<Faq />} />
      
      {/* Redirect all unmatched routes to not-found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;