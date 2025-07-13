import React from 'react';
import './TeamCard.css';

const TeamCard = ({ image, title, description, link }) => {
  return (
    <div className="team-card" >
      <div className="team-image">
        <img src={image} alt={title} className="team-img" />
      </div>
      <h3 className="team-title">{title}</h3>
      <p className="team-desc">{description}</p>
      {/*  <a className="team-link" href={link || "#"}>Discover now →</a>*/}
    </div >
  );
};

export default TeamCard;
