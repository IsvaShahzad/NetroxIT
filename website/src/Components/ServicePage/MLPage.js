import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './MobileDevelopmentPage.css';
import { MLFAQ } from '../../data/faqData'; // ✅ Import the Mobile FAQ data
import FAQ from '../FAQ/FAQ'; // ✅ Import your reusable FAQ




function MLPage() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);


  const faqData = MLFAQ;



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
      {/* <div className="mobile-dev-blur"></div> */}
      <div className="mobile-dev-blur-title"></div>

      <main className="mobile-dev-content">
        <div className="mobile-dev-content-wrapper">
          <div className="mobile-dev-text">
            <h1 className="mobile-dev-title">Machine Learning and Artificial Intelligence</h1>
            <p className="mobile-dev-description">
              Turn your ideas into powerful AI/ML solutions 
              that automate, analyze, and help your business make smarter decisions.
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
            src="/images/brain1.jpg"
            alt="Web  Development"
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
    {['Languages', 'Frameworks', 'Tools',].map((tab) => (
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

  <div className={`tech-icon-set ${activeTab === 'Languages' ? 'active' : ''}`}>

      
      <div className="tech-icon-item">
        <img src="/images/python1.png" alt="Python" />
        <p>Python</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/java.png" alt="Java" />
        <p>Java</p>
      </div>
      <div className="tech-icon-item">
    <img src="/images/cpp.png" alt="C++" />
    <p>C++</p>
  </div>
      <div className="tech-icon-item">
        <img src="/images/html.png" alt="Javascript" />
        <p>Javascript</p>
      </div>
    
        
   
    </div>
  
<div className={`tech-icon-set ${activeTab === 'Frameworks' ? 'active' : ''}`}>
  <div className="tech-icon-item">
        <img src="/images/tf1.png" alt="TensorFlow" />
        <p>TensorFlow</p>
      </div>
   <div className="tech-icon-item">
        <img src="/images/py2.png" alt="PyTorch" />
        <p>PyTorch</p>
      </div>
  <div className="tech-icon-item">
    <img src="/images/keras1.png" alt="Keras" />
    <p>Keras</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/sk.png" alt="Scikit-learn" />
    <p>Scikit-learn</p>
  </div>
  
  <div className="tech-icon-item">
        <img src="/images/fast3.png" alt="FAST API" />
        <p>FAST API</p>
    
        
      </div>
</div>
  
  


<div className={`tech-icon-set ${activeTab === 'Tools' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/jy1.png" alt="Jupyter Notebook" />
    <p>Jupyter Notebook</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/collab.png" alt="MySQL" />
    <p>Google Collab</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/anaconda.png" alt="Anaconda" />
    <p>Anaconda</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/vs.png" alt="VS Code" />
    <p>VS Code</p>
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

export default MLPage;