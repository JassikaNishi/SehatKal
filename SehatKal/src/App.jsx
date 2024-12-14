import React from 'react';
<<<<<<< HEAD
import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUS";
import Contact from "./Components/ContactPage";
=======
import { useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import './App.css';

>>>>>>> b42b16c (Modified files)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Contact' element={<Contact/>}/>



        </Routes>
      </Router>
=======
    <Navbar/>
      
>>>>>>> b42b16c (Modified files)
    </>
  )
}

export default App
