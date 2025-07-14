import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom'; // ✅ Make sure you have this!

const Footer = () => {
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    let yOffset = 0;

    if (id === 'vision') {
      yOffset = -150; // pull up Vision more
    } else if (id === 'mission') {
      yOffset = -300; // pull up Mission a bit more
    }

    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

  return (
    <footer className="footer">
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
              <li><Link to="/web-application">Web Application</Link></li>
              <li><Link to="/app-development">App Development</Link></li>
              <li><Link to="/cyber-security">Cyber Security</Link></li>
              <li><Link to="/graphic-designing">Graphic Designing</Link></li>
              <li><Link to="/ai-ml">AI / ML</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><span onClick={() => scrollToSection('services')}>Services</span></li>
              <li><span onClick={() => scrollToSection('products')}>Products</span></li>
              <li><span onClick={() => scrollToSection('vision')}>Vision</span></li>
              <li><span onClick={() => scrollToSection('mission')}>Mission</span></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <MdEmail />{" "}
              <a href="mailto:netroxit000@gmail.com" target="_blank" rel="noopener noreferrer">
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
