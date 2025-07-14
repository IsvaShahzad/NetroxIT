import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../../images/logo-footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    let yOffset = 0;

    if (id === 'vision') {
      yOffset = -150; // pull up Vision more
    } else if (id === 'mission') {
      yOffset = -250; // pull up Mission a bit more
    }

    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};


  return (
    <footer className="footer">
  {/* ✅ Separated logo block */}
  <div className="footer-logo-wrapper">
    <div className="footer-logo-column">
      <img src="/images/logo3.png" alt="Company Logo" className="footer-small-logo" />
      <p className="footer-logo-description">
        Unlock smart solutions that transform your toughest challenges into your greatest wins, driving innovation and real impact every step of the way.
      </p>
    </div>
  </div>

  {/* ✅ Rest of footer links in the main flex container */}
  <div className="footer-container">
    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><span onClick={() => scrollToSection('webapp')}>Web Application</span></li>
        <li><span onClick={() => scrollToSection('appdev')}>App Development</span></li>
        <li><span onClick={() => scrollToSection('cybersecurity')}>Cyber Security</span></li>
        <li><span onClick={() => scrollToSection('design')}>Graphic Designing</span></li>
        <li><span onClick={() => scrollToSection('aiml')}>AI / ML</span></li>
      </ul>
    </div>

    <div className="footer-links">
      <h4>Company</h4>
      <ul>
        <li>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
            Services
          </a>
        </li>
        <li>
          <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>
            Products
          </a>
        </li>
        <li>
          <a href="#vision" onClick={(e) => { e.preventDefault(); scrollToSection('vision'); }}>
            Vision
          </a>
        </li>
        <li>
          <a href="#mission" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>
            Mission
          </a>
        </li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>
        <MdEmail />{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=netroxit000@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          netroxit000@gmail.com
        </a>
      </p>
      <p>
        <MdPhone /> +92 3140597523
      </p>
    </div>
  </div>

  <div className="footer-bottom">
    © 2025 Netroxit. All Rights Reserved
  </div>
</footer>

  );
};

export default Footer;
