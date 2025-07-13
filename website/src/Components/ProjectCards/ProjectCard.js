import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, skills, link }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <div className="title-badge">{title}</div>

        <div className="hover-content">
          <div className="hover-title">{title}</div>
          <p className="project-description">
            {description}
          </p>

          <div className="project-skills">
            {skills.map((skill, idx) => (
              <button key={idx} className="skill-btn">{skill}</button>
            ))}
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-live-btn"
            >
              View Live App
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
