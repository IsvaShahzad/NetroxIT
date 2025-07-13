import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-left">
        <h2>Solutions Made Simple<br />Let’s Get in Touch Today!</h2>
      </div>
      <div className="contact-right">
        <button
          className="contact-btn primary"
          onClick={() => window.location.href = 'tel:+1234567890'}
        >
          Call Us
        </button>
        <a
          href="https://mail.google.com/mail/?view=cm&to=netroxit00@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="contact-btn secondary">
            Send Message
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;