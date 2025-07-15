import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './MobileDevelopmentPage.css';

function MobileDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

const faqData = [
  {
    question: 'What kinds of mobile apps can you develop?',
    answer: 'We build cross-platform mobile applications for iOS and Android using Flutter and React Native. From MVPs to complex, scalable solutions, we tailor each app to meet your business goals and your users’ expectations.',
  },
  {
    question: 'Do you provide UI/UX design services?',
    answer: 'Yes! We have an in-house design team that creates user-friendly, visually engaging interfaces. We follow best practices for wireframing, prototyping, and usability testing to ensure the final product delights users.',
  },
  {
    question: 'How much does a typical project cost?',
    answer: 'Project costs vary depending on complexity, features, integrations, and timeline. We provide clear, upfront estimates after understanding your requirements and always keep you informed throughout development.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in Flutter, React Native, Firebase, Node.js, MongoDB, REST APIs, and more. Our team chooses the right stack to match your project’s technical needs and future growth plans.',
  },
  {
    question: 'How long will it take to launch my app?',
    answer: 'Timelines depend on the size and complexity of your project. On average, simple apps take 4–8 weeks, while more advanced platforms may take 3–6 months. We always aim to deliver efficiently without compromising quality.',
  },
  {
    question: 'Will I own the code and IP?',
    answer: 'Absolutely. You will have complete ownership of the final source code and intellectual property once the project is complete and paid for. We believe in full transparency and client ownership.',
  },
  {
    question: 'Do you offer ongoing support and updates?',
    answer: 'Yes! After launch, we can help maintain your app, fix bugs, roll out updates, and add new features. We offer flexible support plans to keep your product secure and up to date.',
  },
  {
    question: 'How do we get started?',
    answer: 'It’s simple — reach out to us through our Contact Us page or schedule a free consultation. We’ll discuss your vision, define goals, and plan a roadmap to bring your idea to life!',
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
  <div className="tech-icon-item">
    <img src="/images/figma3.png" alt="Figma" />
    <p>Figma</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/ps2.png" alt="Photoshop" />
    <p>Photoshop</p>
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

export default MobileDevelopmentPage;