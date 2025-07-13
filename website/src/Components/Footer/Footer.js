import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedin, FaXTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../../images/logo-footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Logo & Description */}
        <div className="footer-logo">
          <Link to='/' className='navbar-logo'>
            <img src={logo} className='brand' alt="Logo" />
          </Link>
          <p>
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
            <li>Web Application</li>
            <li>App Development</li>
            <li>Cyber Security</li>
            <li>Graphic Designing</li>
            <li>AI / ML</li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>Our Services</li>
            <li>Our Products</li>
            <li>Vision</li>
            <li>Mission</li>

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
          <div className="footer-socials">
            
            
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
