import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
