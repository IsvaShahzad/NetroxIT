import React, { useState } from 'react';
import './TechShowcase.css';
import { Button } from '../Button/Button';

const TechShowcase = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="tech-section">
      <div className="tech-left-content">
        <h4>OUR TECH STACK</h4>
        <h1>Empowering Innovation with Modern Technologies</h1>
        <p>
          As a top-rated software agency, we leverage cutting-edge technologies to deliver customized, future-ready solutions tailored to your business needs.
        </p>

        <div className="tech-tags">
          <button>Flutter</button>
          <button>React JS</button>
          <button>Java</button>
          <button>Firebase</button>
          <button>MongoDB</button>
          {showMore && (
            <div className="tech-tags">
              <button>HTML</button>
              <button>CSS</button>
              <button>Javascript</button>
              <button>Node JS</button>
              <button>Android SDK</button>
              <button>Express JS</button>
              <button>Flutter Web</button>
              <button>REST API</button>
              <button>FAST API</button>
              <button>Dart</button>
              <button>Python</button>
            </div>
          )}

        </div>

        <Button buttonStyle="btn--gradient" buttonSize="btn--large" onClick={handleLearnMore} >
          {showMore ? 'SEE LESS' : 'SEE MORE'}
        </Button>
      </div>

      <div className="tech-right-content">
        <div className="blur-right"></div>

        <div className="tech-card">
          <img src="https://assets.codepen.io/3421562/figma_graphic.png" alt="Tech Graphic" />
        </div>


        <div className="floating-card top-card">
          <div className="floating-card-content">
            <h2>Accelerate Growth</h2>
            <p>Smart Tech for Faster Impact.</p>
          </div>
        </div>

        <div className="floating-card bottom-card">
          <div className="floating-card-content">
            <h2>Custom Solutions</h2>
            <p>Built to Match Your Goals.</p>
          </div>
        </div>

        <div className="accents">
          <div className="acc-card"></div>
          <div className="acc-card"></div>
          <div className="acc-card"></div>
          <div className="light"></div>
          <div className="light sm"></div>
          <div className="top-light"></div>
        </div>
      </div>

    </div>
  );
};

export default TechShowcase;
