import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './MobileDevelopmentPage.css';
import { graphicFAQ } from '../../data/faqData'; // ✅ Import the Mobile FAQ data


function GraphicDesignPage() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = graphicFAQ;



const toggleFAQ = (index) => {
  if (activeIndex === index) {
    setActiveIndex(null);
  } else {
    setActiveIndex(index);
  }
};


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
      <div className="mobile-dev-blur-title"></div>

      <main className="mobile-dev-content">
        <div className="mobile-dev-content-wrapper">
          <div className="mobile-dev-text">
            <h1 className="mobile-dev-title">Graphic Design</h1>
            <p className="mobile-dev-description">
              Bring your brand to life with stunning visuals and thoughtful design that 
              connect with your audience. From logos and branding to digital graphics and marketing assets,
               we craft designs that stand out and leave a lasting impression.
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
            src="/images/office1.jpg"
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
    {['Tools', 'Prototyping', 'Asset Libraries',].map((tab) => (
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

  <div className={`tech-icon-set ${activeTab === 'Tools' ? 'active' : ''}`}>

      <div className="tech-icon-item">
        <img src="/images/canva.svg" alt="Canva" />
        <p>Canva</p>
      </div>
      <div className="tech-icon-item">
    <img src="/images/ps2.png" alt="Adobe Photoshop" />
        <p>Adobe Photoshop</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/adobe-illustrator.svg" alt="Illustrator" />
        <p>Illustrator</p>
      </div>
      <div className="tech-icon-item">
    <img src="/images/figma3.png" alt="Figma" />
        <p>Figma</p>
    
    </div>
        </div>


  
  
<div className={`tech-icon-set ${activeTab === 'Prototyping' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/figma3.png" alt="Figma" />
    <p>Figma</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/adobe-xd-logo.svg" alt="Adobe XD" />
    <p>Adobe XD</p>
  </div>
  
</div>

<div className={`tech-icon-set ${activeTab === 'Asset Libraries' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/freepik-logo.svg" alt="Freepik" />
    <p>Freepik</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/unsplash.svg" alt="Unsplash" />
    <p>Unsplash</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/adobe1.webp" alt="Adobe Stock" />
    <p>Adobe Stock</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/envanto.webp" alt="Envato Elements" />
    <p>Envato Elements</p>
  </div>
</div>



</div>

</section>

<section className="faq-section">
  <div className="faq-left">
    <h2>Frequently Asked Questions</h2>
    <img src="/images/rr.jpg" alt="FAQ Illustration" />
  </div>

  <div className="faq-right">
    {faqData.map((faq, index) => (
      <div key={index} className={`faq-item ${activeIndex === index ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFAQ(index)}>
          <h3>{faq.question}</h3>
          <span>{activeIndex === index ? '-' : '+'}</span>
        </div>
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      </div>
    ))}
  </div>
</section>




      <Contact />
      <Footer />
    </div>
  );
}

export default GraphicDesignPage;