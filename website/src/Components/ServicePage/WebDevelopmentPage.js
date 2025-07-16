import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './MobileDevelopmentPage.css';


function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

const faqData = [
  {
    question: 'What kinds of websites do you build?',
    answer: 'We design and develop a wide range of websites — from sleek business landing pages to complex web applications and e-commerce platforms. Each site is crafted to match your goals, target audience, and brand identity.',
  },
  {
    question: 'Do you provide UI/UX design for websites?',
    answer: 'Yes! Our in-house designers create intuitive, visually appealing interfaces that deliver a smooth user experience. We focus on usability, responsiveness, and aesthetics to ensure your website stands out and converts visitors.',
  },
  {
    question: 'How much does a website project cost?',
    answer: 'Project costs vary based on scope, features, integrations, and timeline. We provide transparent quotes after learning about your requirements, with no hidden fees, and keep you updated every step of the way.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'Our team works with modern web technologies including React, Next.js, Node.js, Firebase, MongoDB, and more. We choose the best tools to deliver secure, scalable, and high-performing websites.',
  },
  {
    question: 'How long does it take to launch a website?',
    answer: 'Timelines depend on project complexity. Simple sites can launch in 2–4 weeks, while more advanced builds may take 2–3 months. We set clear milestones to keep your project on track and on time.',
  },
  {
    question: 'Will I own the website code and content?',
    answer: 'Yes. You’ll have full ownership of your website’s code, design, and content once the project is complete and payment is settled. We believe in transparency and giving you full control of your digital assets.',
  },
  {
    question: 'Do you offer website maintenance and updates?',
    answer: 'Absolutely. We provide flexible support plans to keep your site secure, updated, and performing at its best — whether you need regular updates, bug fixes, or new features.',
  },
  {
    question: 'How do we get started?',
    answer: 'Getting started is simple — contact us through our website or book a free consultation. We’ll discuss your goals, answer your questions, and create a clear roadmap to bring your web project to life.',
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
      {/* <div className="mobile-dev-blur"></div> */}
      <div className="mobile-dev-blur-title"></div>

      <main className="mobile-dev-content">
        <div className="mobile-dev-content-wrapper">
          <div className="mobile-dev-text">
            <h1 className="mobile-dev-title">Web Development</h1>
            <p className="mobile-dev-description">
              Turn your ideas into high-performing web platforms that attract users,
               enhance your brand credibility, and deliver seamless,
                memorable online experiences.
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
            src="/images/web1.jpg"
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
    {['Frontend', 'Backend', 'Databases', 'Frameworks'].map((tab) => (
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

  <div className={`tech-icon-set ${activeTab === 'Frontend' ? 'active' : ''}`}>

      
      <div className="tech-icon-item">
        <img src="/images/javascipt-icon4.png" alt="JavaScript" />
        <p>JavaScript</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/ts-icon.png" alt="TypeScript" />
        <p>TypeScript</p>
      </div>
      <div className="tech-icon-item">
    <img src="/images/react2-icon.png" alt="React Native" />
    <p>React Native</p>
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
        <img src="/images/bs1.png" alt="Bootstrap" />
        <p>Bootstrap</p>
        
   
        
      </div>
    </div>
  
<div className={`tech-icon-set ${activeTab === 'Backend' ? 'active' : ''}`}>
  <div className="tech-icon-item">
        <img src="/images/java.png" alt="Java" />
        <p>Java</p>
      </div>
   <div className="tech-icon-item">
        <img src="/images/python1.png" alt="Python" />
        <p>Python</p>
      </div>
  <div className="tech-icon-item">
    <img src="/images/android-os.png" alt="PHP" />
    <p>PHP</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/js1.png" alt="Node.js" />
    <p>Node.js</p>
  </div>
   <div className="tech-icon-item">
    <img src="/images/ej1.png" alt="Express.js" />
    <p>Express.js</p>
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

<div className={`tech-icon-set ${activeTab === 'Frameworks' ? 'active' : ''}`}>
   <div className="tech-icon-item">
    <img src="/images/ej1.png" alt="Express.js" />
    <p>Express.js</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/ns.png" alt="Next.js" />
    <p>Next.js</p>
  </div>
 <div className="tech-icon-item">
        <img src="/images/bs1.png" alt="Bootstrap" />
        <p>Bootstrap</p>
      </div>
  <div className="tech-icon-item">
    <img src="/images/angular.png" alt="Angular" />
    <p>Angular</p>
  </div>
  <div className="tech-icon-item">
        <img src="/images/fast3.png" alt="FAST API" />
        <p>FAST API</p>
    
        
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

export default WebDevelopmentPage;