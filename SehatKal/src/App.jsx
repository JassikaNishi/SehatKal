import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutUS from './Components/AboutUS';
import ContactPage from './Components/ContactPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { AuthProvider } from './Components/AuthProvider'; 

import './index.css';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="mt-20">
          <Routes>
            <Route path="/about-us" element={<AboutUS />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
