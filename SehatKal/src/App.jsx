import React from 'react';
import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUS";
import Contact from "./Components/ContactPage";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Contact' element={<Contact/>}/>



        </Routes>
      </Router>
    </>
  )
}

export default App
