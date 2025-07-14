import React, { forwardRef } from 'react';
import './AboutUs.css';
import { Button } from '../Button/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutUs = forwardRef((props, ref) => {
  return (
    <div className="about-container" ref={ref}>
      <div className='blur'></div>

      {/* Left Side */}
      <div className="about-left">
        <p className="subheading">WHAT SETS US APART?</p>
        <h1 className="main-heading">Elite Software Solutions, Powered by NetroxIT</h1>
        <p className="about-description">
          NetroxIT is a full-service software company helping businesses grow through custom solutions in mobile app development, web development, and cybersecurity.
          From idea to launch, we build secure, high-quality digital products that deliver real results and keep our clients ahead in a fast-changing tech world.
        </p>
        {/* <div className='about-buttons'>
            <Button buttonStyle="btn--gradient" buttonSize="btn--large" to="/" >
            LEARN MORE
          </Button>
       <Button buttonStyle="btn--outline" buttonSize="btn--large" to="/" >
            CONTACT US
          </Button>
           
        </div>*/}

      </div>

      {/* Right Side */}
      <div className="about-right">
        <div className="about-card">
          <div className="card-title">Our Vision</div>
          <div className="card-icon"><i className="fa-solid fa-eye"></i></div>
          <div className="card-content">
            <p>To build a future where innovation knows no bounds, leading the tech world with powerful, inclusive software solutions, and championing everyone as creators, leaders, and changemakers in the digital revolution.</p>
          </div>
        </div>
        <div className="about-card">
          <div className="card-title">Our Mission</div>
          <div className="card-icon"><i className="fa-solid fa-bullseye"></i></div>
          <div className="card-content">
            <p>Our mission is to empower businesses to grow and thrive by building custom software solutions that simplify operations, fuel innovation, and create measurable impact.</p>
          </div>
        </div>
        {/* <div className="about-card">
          <div className="card-title">Our Approach</div>
          <div className="card-icon"><i className="fa-solid fa-rocket"></i></div>
          <div className="card-content">
            <p>Your satisfaction drives our process with customized solutions, ensuring every project aligns perfectly.</p>
          </div>
        </div>
        */}
      </div>
    </div>
  );
});

export default AboutUs;
