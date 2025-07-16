import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './MobileDevelopmentPage.css';


function CybersecurityPage() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

const faqData = [
  {
    question: 'What cyber security services do you offer?',
    answer: 'We provide end-to-end cyber security solutions including vulnerability assessments, penetration testing, threat monitoring, network security, cloud security, and incident response. Our services are tailored to protect your digital assets and ensure compliance.',
  },
  {
    question: 'How do you ensure my business stays protected?',
    answer: 'Our experts implement multi-layered security measures, regular audits, real-time monitoring, and proactive threat detection to stay ahead of evolving cyber threats. We design custom security strategies that match your industry and risk profile.',
  },
  {
    question: 'How much does cyber security cost?',
    answer: 'Costs depend on the scope of your security needs, the size of your infrastructure, and the level of protection required. We provide clear, customized estimates after assessing your requirements and goals.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We work with companies of all sizes across industries including finance, healthcare, e-commerce, SaaS, and more. Our team understands sector-specific compliance needs such as GDPR, HIPAA, and PCI DSS.',
  },
  {
    question: 'Can you help with data breach recovery?',
    answer: 'Absolutely. We provide rapid incident response services to contain threats, recover compromised data, and restore your systems. We also analyze breaches to strengthen your defenses and prevent future attacks.',
  },
  {
    question: 'Will you train our staff on security best practices?',
    answer: 'Yes! Human error is a major risk factor. We offer employee training sessions, phishing simulations, and security awareness programs to help your team recognize threats and follow safe practices.',
  },
  {
    question: 'Do you offer ongoing monitoring and support?',
    answer: 'Yes — we provide 24/7 monitoring, threat detection, and regular security updates. Our team is available for ongoing support, audits, and advisory services to keep your business secure.',
  },
  {
    question: 'How do we get started?',
    answer: 'Getting started is easy — reach out through our Contact Us page to schedule a free consultation. We’ll assess your current security posture, identify gaps, and develop a plan to protect your business from threats.',
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
        <img src="/images/v1.png" alt="Dart" />
        <p>Volatility</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/autopsy.png" alt="JavaScript" />
        <p>Autopsy</p>
      </div>
      <div className="tech-icon-item">
        <img src="/images/yara2.png" alt="TypeScript" />
        <p>YARA</p>
      </div>
      
    </div>
  

  
  
<div className={`tech-icon-set ${activeTab === 'Vulnerability Assessment' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/meta.png" alt="Flutter" />
    <p>Metasploit</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/nmap.png" alt="React Native" />
    <p>Nmap</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/nessus15thlogo.png" alt="Android SDK" />
    <p>Nessus</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/burp.png" alt="Unity" />
    <p>Burp suite</p>
  </div>
   <div className="tech-icon-item">
    <img src="/images/uu1.png" alt="Unity" />
    <p>OpenVAS</p>
  </div>
  
</div>

<div className={`tech-icon-set ${activeTab === 'Network Security' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/wireshark-icon.png" alt="Firebase" />
    <p>Wireshark</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/tcp1.png" alt="MySQL" />
    <p>Tcpdump</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/snort2.png" alt="MongoDB" />
    <p>Snort</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/suricata.png" alt="SQLite" />
    <p>Suricata</p>
  </div>
</div>

<div className={`tech-icon-set ${activeTab === 'Monitoring' ? 'active' : ''}`}>
  <div className="tech-icon-item">
    <img src="/images/splunk1.png" alt="Android Studio" />
    <p>Splunk</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/elastic-stack.svg" alt="VS Code" />
    <p>ELK Stack</p>
  </div>
  <div className="tech-icon-item">
    <img src="/images/ossec.png" alt="VS Code" />
    <p>OSSEC</p>
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

export default CybersecurityPage;