// Components/ServicePage/servicepage.js

import React from 'react';
import './servicepage.css'; // Optional if you have custom styles
import Footer from '../Footer/Footer'; // Make sure you have a Footer component
import { Link } from 'react-router-dom';

const ServicePage = ({ title, description, image }) => {
  return (
    <div className="service-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
          <Link to="/contact" className="hero-btn">Connect Now</Link>
        </div>
        <div className="hero-image">
          <img src={image} alt={title} />
        </div>
      </section>

      {/* Put your custom page content here */}
      <section className="custom-content">
        <h2>More about {title}</h2>
        <p>Put your custom content here...</p>
      </section>

      {/* Reuse your footer */}
      <Footer />
    </div>
  );
};

export default ServicePage;
