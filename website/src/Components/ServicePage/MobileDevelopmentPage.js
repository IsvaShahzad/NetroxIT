import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './MobileDevelopmentPage.css';

function MobileDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress bar logic
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      const bar = document.querySelector('.scroll-progress-bar');
      if (bar) {
        const maxWidth = 60;
        bar.style.width = `${Math.min(scrollPercent * 100, maxWidth)}%`;
      }

      // Tech section visibility logic
      if (techSectionRef.current) {
        const techSectionTop = techSectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (techSectionTop < windowHeight * 0.75) {
          setIsTechVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mobile-dev-page">
      {/* Scroll progress bar */}
      <div className="scroll-progress-bar"></div>

      {/* Blurs for Mobile App Development section */}
      <div className="mobile-dev-blur"></div>
      <div className="mobile-dev-blur-title"></div>

      <main className="mobile-dev-content">
        <div className="mobile-dev-content-wrapper">
          <div className="mobile-dev-text">
            <h1 className="mobile-dev-title">Mobile App Development</h1>
            <p className="mobile-dev-description">
              Transform ideas into impactful mobile solutions that strengthen customer loyalty,
              open new revenue streams, and put your business right in your customers' hands.
            </p>
            <button
              className="contact-us-button"
              onClick={() => {
                const footer = document.getElementById('footer');
                if (footer) footer.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </button>
          </div>

          <img
            src="/images/ppl.png"
            alt="Mobile App Development"
            className="mobile-dev-image"
          />
        </div>
      </main>

   
<div className="tech-section-blur"></div>

<section 
  ref={techSectionRef}
  className={`tech-section ${isTechVisible ? 'visible' : ''}`}
>
  <h2 className="tech-heading">Our Technology Expertise</h2>

  <div className="tech-tabs">
    {['Languages', 'Frameworks', 'Databases', 'Tools'].map((tab) => (
      <button
        key={tab}
        className={`tech-tab ${activeTab === tab ? 'active' : ''}`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>

 <div className="tech-icons">
    <div className="tech-icons-blur"></div> 

  {activeTab === 'Languages' && (
    <div className="tech-icon-set">
      <div className="tech-icon-item">
        <img src="/images/dart-icon.png" alt="Dart" />
        <p>Dart</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/javascipt-icon4.png" alt="JavaScript" />
        <p>JavaScript</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/ts-icon.png" alt="TypeScript" />
        <p>TypeScript</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/java.png" alt="Java" />
        <p>Java</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/html.png" alt="HTML" />
        <p>HTML</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/css3.png" alt="CSS" />
        <p>CSS</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/python1.png" alt="Python" />
        <p>Python</p>
      </div>
    </div>
  )}

  

  {activeTab === 'Frameworks' && (
    <div className="tech-icon-set">
      <div className="tech-icon-item">
        <img src="/images/flutter2-icon.png" alt="Flutter" />
        <p>Flutter</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/react2-icon.png" alt="React Native" />
        <p>React Native</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/android-os.png" alt="Android SDK" />
        <p>Android SDK</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/un1.png" alt="Unity" />
        <p>Unity</p>
      </div>
    </div>
  )}

  {activeTab === 'Databases' && (
    <div className="tech-icon-set">
      <div className="tech-icon-item">
        <img src="/images/firebase.png" alt="Firebase" />
        <p>Firebase</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/sql.png" alt="MySQL" />
        <p>MySQL</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/md4.png" alt="MongoDB" />
        <p>MongoDB</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/sqlite.png" alt="SQLite" />
        <p>SQLite</p>
      </div>
    </div>
  )}

  {activeTab === 'Tools' && (
    <div className="tech-icon-set">
      <div className="tech-icon-item">
        <img src="/images/android-studio.png" alt="Android Studio" />
        <p>Android Studio</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/vscode.png" alt="VS Code" />
        <p>VS Code</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/figma.png" alt="Figma" />
        <p>Figma</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/photoshop.png" alt="Photoshop" />
        <p>Photoshop</p>
      </div>
    </div>
  )}
</div>

</section>


      <Contact />
      <Footer />
    </div>
  );
}

export default MobileDevelopmentPage;