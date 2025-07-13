import './App.css';
import NavBar from './Components/NavBar/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Components/Pages/Home.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import React, { useRef } from 'react';


function AppWrapper() {
  const statsRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const refs = { statsRef, aboutRef, servicesRef };

  const navigate = useNavigate();
  const location = useLocation();

const scrollTo = (ref) => {
  if (ref?.current?.current) {
    const element = ref.current.current;
    const yOffset = -100; // 👈 Make this more negative to scroll *higher*
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
      setTimeout(() => scrollTo(refMap[section]), 300);
    }
  };

  return (
    <>
      <NavBar onNavClick={handleNavClick} />
      <Routes>
        <Route path='/' element={<Home refs={refs} />} />
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
