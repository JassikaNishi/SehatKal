import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutUS from './Components/AboutUS';
import ContactPage from './Components/ContactPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import TipsAndResources from './Components/TipsandResources';
import ProfilePage from './Components/profilepage';
import Analytics from './Components/Analytics';
import Dashboard from './Components/DashBoard';
import HomePage from './Components/Homepage';
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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/Tips" element={<TipsAndResources />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Home" element={<HomePage />} />
            
           
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
