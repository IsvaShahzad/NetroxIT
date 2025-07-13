import React, { useRef, useEffect } from 'react';
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

function Home({ refs }) {
    const statsRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);

    useEffect(() => {
        if (refs) {
            refs.statsRef.current = statsRef;
            refs.aboutRef.current = aboutRef;
            refs.servicesRef.current = servicesRef;
        }
    }, [refs]);

    return (
        <>
            <Main />
            <HomeStats ref={statsRef} />
            <AboutUs ref={aboutRef} />
            <Services ref={servicesRef} />
            <TechShowcase />
            <Projects />
            <OurTeam />
            <Team />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
