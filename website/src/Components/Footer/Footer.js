import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedin, FaXTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../../images/logo-footer.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Logo & Description */}
        {/*   <div className="footer-logo">
          <Link to='/' className='navbar-logo'>
            <img src={logo} className='brand' alt="Logo" />
            <span className='logo-text'>NETROXIT</span>
          </Link>
          <p>
            Smart code and bold ideas so you can spend less time fixing problems and more time chasing possibilities.
          </p>
          <div className="social-icons">
    <FaFacebookF />
<FaPinterestP />
<FaLinkedinIn />
            <FaXTwitter />
            <FaInstagram />

          </div>
        </div>
*/}
        {/* Column 2 - Quick Links */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>Web Application</li>
            <li>App Development</li>
            <li>CyberSecurity</li>
            <li>Consultation</li>
            <li>Workflow Automation</li>
            <li>Cloud Services</li>
            <li>Graphic Designing</li>
            <li>AI/ML</li>


          </ul>
        </div>

        {/* Column 3 - Company */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>Company</li>
            {/*  <li>Blog</li> */}
            <li>Contact Us</li>
            <li>Our Servicesss</li>
            <li>Our Products</li>
            {/* <li>Terms & Conditions</li>
             <li>Refund Policy</li> */}
            <li>Hire An Expert</li>
          </ul>
        </div>

        {/* Column 4 - Contact Us */}
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
          <p><MdPhone /> +92 3140597523 </p>
          <a href="https://www.linkedin.com/company/netroxit/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>



          <a href="https://www.instagram.com/netroxit/?igsh=MXNrN3pnbm93Y29yYQ%3D%3D#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          {/*     <p> Subscribe<br /> </p>
          <div className="subscribe-box">

            <input type="email" placeholder="Enter email address" />
            <button>→</button> 
          </div>*/}
        </div>
      </div>

      <div className="footer-bottom">
        ©2025 Netroxit. All Rights Reserved
      </div>
    </footer >
  );
};

export default Footer;
