import './App.css';
import NavBar from './Components/NavBar/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Components/Pages/Home.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import React, { useRef } from 'react';
import ServicePage from './Components/ServicePage/servicepage.js';

function AppWrapper() {
  // ✅ refs to DOM nodes
  const statsRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (ref) => {
    if (ref?.current) {
      const yOffset = -100; // adjust for sticky navbar
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (section) => {

    const refMap = {
      reviews: statsRef,
      company: aboutRef,
      solutions: servicesRef,
    };

    if (location.pathname === '/') {
      scrollTo(refMap[section]);
    } else {
      navigate('/');
      setTimeout(() => scrollTo(refMap[section]), 500);
    }
  };

  return (
    <>
      <NavBar onNavClick={handleNavClick} />
      <Routes>
        <Route path="/" element={
          <Home 
            statsRef={statsRef} 
            aboutRef={aboutRef} 
            servicesRef={servicesRef} 
          />
        } />

        <Route
  path="/webapp"
  element={
    <ServicePage
      title="Web App Development Services"
      description="Expand your reach to a global audience, unlock new growth opportunities, and broaden your business operations with our web application solutions."
      image="/images/webapp-hero.png" // Save your illustration here
    />
  }
/>

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
