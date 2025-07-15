import './App.css';
import NavBar from './Components/NavBar/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Components/Pages/Home.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import React, { useRef } from 'react';
import MobileDevelopmentPage from './Components/ServicePage/MobileDevelopmentPage';
import WebDevelopmentPage from './Components/ServicePage/WebDevelopmentPage.js'
import Footer from './Components/Footer/Footer'; 
function AppWrapper() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (ref) => {
    if (ref?.current) {
      const yOffset = -100; 
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (section) => {
    if (section === 'footer') {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (section === 'reviews') {
      const reviews = document.getElementById('reviews');
      if (reviews) {
        reviews.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const refMap = {
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
        <Route
          path="/"
          element={
            <Home
              aboutRef={aboutRef}
              servicesRef={servicesRef}
            />
          }
        />

        <Route
          path="/mobile-app-development"
          element={<MobileDevelopmentPage />}
        />

        <Route
          path="/web-application"
          element={<WebDevelopmentPage/>}
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
