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
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Logo & Description */}
        <div className="footer-logo">
          <Link to='/' className='navbar-logo'>
            <img src={logo} className='brand' alt="Logo" />
          </Link>
          <p className="footer-description">
            Unlock smart solutions that turn your toughest challenges into your biggest wins.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/netroxit/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/netroxit" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Column 2 - Services */}
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

        {/* Column 3 - Company */}
       <div className="footer-links">
  <h4>Company</h4>
  <ul>
    <li>
      <a href="#services">Our Services</a>
    </li>
    <li>
      <a href="#products">Our Products</a>
    </li>
    <li>
      
<a href="#vision" onClick={(e) => handleScroll(e, 'vision')}>Vision</a>
    </li>
    <li>
      <a href="#mission">Mission</a>
    </li>
  </ul>
</div>


        {/* Column 4 - Contact */}
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
