import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Router from './Components/Router';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ServiceDetails from './Pages/ServiceDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Router />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/services'>
        <Route path="/services" element={<Services />} />
        <Route path="servicedetails" element={<ServiceDetails />} />
      </Route>
      <Route path='/contact' element={<Contact />}/>
      {/* <Route path="/services/:id" element={<ServiceDetails />}/> */}
      <Route path="*" element={<h1>Error</h1>} />
      
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
