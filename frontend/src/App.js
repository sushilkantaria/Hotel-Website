
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav/nav'; 
import Home from './pgs/home';
// pgs
import Services from './pgs/services';
import About from './pgs/about';
import Contact from './pgs/contact';
import Location from './pgs/location';
import Hearts from './pgs/hearts'
import Awards from './pgs/awards'

//other logics
import ScrollToTop from './pgs/scroll'
// footer
import Footer from './footer/footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Location" element={<Location />} />
      <Route path="/Hearts" element={<Hearts />} />
      <Route path="/Awards" element={<Awards />} />
      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;