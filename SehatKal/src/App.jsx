import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AboutUS from './Components/AboutUS';
import ContactPage from './Components/ContactPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import TipsAndResources from './Components/TipsandResources';
import ProfilePage from './Components/ProfilePage';
import Analytics from './Components/Analytics';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/Homepage';
import Chatbot from './Components/Chatbot'; // Import the chatbot component
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      
      <div className="mt-24">
        <Routes>
          {/* Define routes for your pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/tips" element={<TipsAndResources />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />

        </Routes>
      </div>

      <Chatbot />
    </Router>
  );
};

export default App;
