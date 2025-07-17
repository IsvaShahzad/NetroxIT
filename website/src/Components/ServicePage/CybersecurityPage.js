import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './MobileDevelopmentPage.css';
import { cyberFAQ } from '../../data/faqData'; // ✅ Import the Mobile FAQ data



function CybersecurityPage() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);


  const faqData = cyberFAQ;




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
            <h1 className="mobile-dev-title">Cyber Security</h1>
            <p className="mobile-dev-description">
              Strengthen your defenses with tailored cyber security strategies that protect
               your data, uphold customer trust, meet compliance standards,
               and keep your business safe from modern cyber threats.
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
            src="/images/cyber1.jpg"
            alt="   Cyber Security"
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
    {['Forensics', 'Vulnerability Assessment', 'Network Security', 'Monitoring'].map((tab) => (
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

  <div className={`tech-icon-set ${activeTab === 'Forensics' ? 'active' : ''}`}>

      <div className="tech-icon-item">
        <img src="/images/v1.png" alt="Volatility" />
        <p>Volatility</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/autopsy.png" alt="Autopsy" />
        <p>Autopsy</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/yara2.png" alt="YARA" />
        <p>YARA</p>
      </div>
      
    </div>
  

  
  
<div className={`tech-icon-set ${activeTab === 'Vulnerability Assessment' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/meta.png" alt="Metasploit" />
    <p>Metasploit</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/nmap.png" alt="Nmap" />
    <p>Nmap</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/nessus15thlogo.png" alt="Nessus" />
    <p>Nessus</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/burp.png" alt="Burp suite" />
    <p>Burp suite</p>
  </div>
   <div className="tech-icon-item">
    <img src="/images/uu1.png" alt="OpenVAS" />
    <p>OpenVAS</p>
  </div>
  
</div>

<div className={`tech-icon-set ${activeTab === 'Network Security' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/wireshark-icon.png" alt="Wireshark" />
    <p>Wireshark</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/tcp1.png" alt="Tcpdump" />
    <p>Tcpdump</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/snort2.png" alt="Snort" />
    <p>Snort</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/suricata.png" alt="Suricata" />
    <p>Suricata</p>
  </div>
</div>

<div className={`tech-icon-set ${activeTab === 'Monitoring' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/splunk1.png" alt="Splunk" />
    <p>Splunk</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/elastic-stack.svg" alt="ELK Stack" />
    <p>ELK Stack</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/ossec.png" alt="OSSEC" />
    <p>OSSEC</p>
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

export default CybersecurityPage;