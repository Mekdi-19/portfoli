import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Themes from './components/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Port from  './pages/port/Port'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/port" element={<Port />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;