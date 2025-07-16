import React, { useEffect } from 'react';
import '../../App.css';
import Main from '../Main/main';
import HomeStats from '../Stats/HomeStats';
import AboutUs from '../aboutUs/AboutUs';
import Services from '../Services/Services';
import TechShowcase from '../TechShow/TechShowcase';
import Projects from '../Projects/Projects';
import OurTeam from '../Team/OurTeam';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Home({ aboutRef, servicesRef, productref, footerref }) {

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        let yOffset = 0;

        if (id === 'vision') {
          yOffset = -150;
        } else if (id === 'mission') {
          yOffset = -300;
        }

        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, []); // runs once when Home mounts

  return (
    <>
      <Main />

      <section id="reviews">
        <HomeStats />
      </section>

      <section id="company">
        <AboutUs ref={aboutRef} />
      </section>

      <section id="services">
        <Services ref={servicesRef} />
      </section>

      <TechShowcase />

      <section id="products">
        <Projects ref={productref} />
      </section>

      <OurTeam />
      <Team />
      <Contact />

      <section id="footer">
        <Footer ref={footerref} />
      </section>
    </>
  );
}

export default Home;
