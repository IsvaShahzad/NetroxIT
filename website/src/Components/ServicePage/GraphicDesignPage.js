import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './MobileDevelopmentPage.css';


function GraphicDesignPage() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

const faqData = [
  {
    question: 'What kinds of graphic design services do you offer?',
    answer: 'We create logos, brand identities, social media graphics, marketing materials, UI elements, packaging, and more — all tailored to reflect your brand’s personality and connect with your audience.',
  },
  {
    question: 'Do you provide complete branding packages?',
    answer: 'Yes! We can design a full branding suite including logos, color palettes, typography, brand guidelines, and other collateral to ensure consistency across all your platforms.',
  },
  {
    question: 'How much does a typical graphic design project cost?',
    answer: 'Pricing depends on project scope, deliverables, and timelines. We provide transparent estimates after discussing your goals and make sure you stay informed at every step.',
  },
  {
    question: 'What design tools and software do you use?',
    answer: 'Our team uses industry-standard tools like Adobe Photoshop, Illustrator, InDesign, Figma, and Canva Pro to deliver high-quality, versatile designs.',
  },
  {
    question: 'How long does a design project usually take?',
    answer: 'Timelines vary by project complexity. A simple logo may take a week, while full brand packages or multiple design assets can take 2–4 weeks. We always aim for fast delivery without compromising quality.',
  },
  {
    question: 'Will I own the final designs?',
    answer: 'Absolutely. Once the project is complete and approved, you receive all final files and full rights to your designs.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes! We include a set number of revisions in our packages to ensure you’re happy with the final result. Additional revisions can be arranged if needed.',
  },
  {
    question: 'How do we get started?',
    answer: 'Just reach out via our Contact page or book a free consultation. We’ll discuss your ideas, define deliverables, and get to work creating visuals that make an impact.',
  },
];


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
            src="/images/y2.jpg"
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

  <div className={`tech-icon-set ${activeTab === 'Languages' ? 'active' : ''}`}>

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
  

  
  
<div className={`tech-icon-set ${activeTab === 'Frameworks' ? 'active' : ''}`}>
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

<div className={`tech-icon-set ${activeTab === 'Databases' ? 'active' : ''}`}>
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
    <img src="/images/lite3.png" alt="SQLite" />
    <p>SQLite</p>
  </div>
</div>

<div className={`tech-icon-set ${activeTab === 'Tools' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/as.png" alt="Android Studio" />
    <p>Android Studio</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/vs.png" alt="VS Code" />
    <p>VS Code</p>
  </div>
  {/* <div className="tech-icon-item">
    <img src="/images/figma3.png" alt="Figma" />
    <p>Figma</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/ps2.png" alt="Photoshop" />
    <p>Photoshop</p>
  </div> */}
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