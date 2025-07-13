import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
      {/*  <a className="service-link" href={link || "#"}>Discover now →</a>*/}
    </div>
  );
};

export default ServiceCard;
