import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleInternalLink = (hashId) => {
    if (location.pathname !== '/') {
      // Go to home page with hash
      window.location.href = `/#${hashId}`;
    } else {
      // Already on home page → scroll directly
      scrollToSection(hashId);
      // Update the hash too
      window.history.pushState(null, '', `#${hashId}`);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      let yOffset = 0;

      if (id === 'vision') {
        yOffset = -150;
      } else if (id === 'mission') {
        yOffset = -300;
      }

      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* LOGO & DESCRIPTION */}
        <div className="footer-logo-column">
          <img src="/images/logo3.png" alt="Company Logo" className="footer-small-logo" />
          <p className="footer-logo-description">
            Unlock smart solutions that transform your toughest challenges into your greatest wins, driving innovation and real impact every step of the way.
          </p>
        </div>

        {/* LINKS + COMPANY + CONTACT grouped together */}
        <div className="footer-links-group">

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link
                  to="/web-development"
                  onClick={() => window.location.href = '/web-development'}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <a href="/mobile-app-development">
                  Mobile App Development
                </a>
              </li>
                     <li>
                <Link
                  to="/cyber-security"
                  onClick={() => window.location.href = '/cyber-security'}
                >
                  Cyber Security
                </Link>
              </li>              
<li>
               <Link
                  to="/graphic-design"
                  onClick={() => window.location.href = '/graphic-design'}
                >
                  Graphic Design
                </Link>
              </li>             
<li>
              <Link
                  to="/ai-ml"
                  onClick={() => window.location.href = '/ai-ml'}
                >
                  Artificial Intelligence and Machine Learning
                </Link>
              </li>
                          </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><span onClick={() => handleInternalLink('services')}>Services</span></li>
              <li><span onClick={() => handleInternalLink('products')}>Products</span></li>
              <li><span onClick={() => handleInternalLink('vision')}>Vision</span></li>
              <li><span onClick={() => handleInternalLink('mission')}>Mission</span></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <MdEmail />{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=netroxit000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                netroxit000@gmail.com
              </a>
            </p>

            <p>
              <MdPhone /> +92 3140597523
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/netroxit/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/netroxit" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Netroxit. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
