import React, { useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Pages/Home';
import MobileDevelopmentPage from './Components/ServicePage/MobileDevelopmentPage';
import WebDevelopmentPage from './Components/ServicePage/WebDevelopmentPage';
import './App.css';
import CybersecurityPage from './Components/ServicePage/CybersecurityPage';
import GraphicDesignPage from './Components/ServicePage/GraphicDesignPage';
import MLPage from './Components/ServicePage/MLPage';

function AppWrapper() {
  const [isFading, setIsFading] = useState(false);

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

  const handlePageNav = (path) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(path);
      setIsFading(false);
    }, 800); // fade out in 400ms
  };

  return (
    <>
      <NavBar onNavClick={handleNavClick} onPageNav={handlePageNav} />
      <div className={`fade-wrapper ${isFading ? 'fade-out' : 'fade-in'}`}>
        <Routes>
          <Route
            path="/"
            element={
              <Home aboutRef={aboutRef} servicesRef={servicesRef} />
            }
          />
          <Route
            path="/mobile-app-development"
            element={<MobileDevelopmentPage />}
          />

           <Route
            path="/web-development"
            element={<WebDevelopmentPage />}
          />

          <Route
            path="/cyber-security"
            element={<CybersecurityPage/>}
          />

          <Route
            path="/graphic-design"
            element={<GraphicDesignPage/>}
          />

          <Route
            path="/ai-ml"
            element={<MLPage/>}
          />

        </Routes>

        
      </div>
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
