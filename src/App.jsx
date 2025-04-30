import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App; 