import React, { useState } from 'react';
import './main.css';
import { Button } from '../Button/Button';
import video from '../../videos/video.mp4';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Main() {

  const [showMore, setShowMore] = useState(false); // 👈 new state

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="hero-wrapper">
      <video src={video} autoPlay loop muted />
      <div className="video-overlay"></div>

      <div className='main-container'>
        <div className='main-content'>
          <h1 className="fancy">Your future fully coded from concept to launch and beyond.</h1>
          <p>Whether it’s a mobile app or a full-scale website, we deliver robust, user-friendly software solutions that meet your goals.</p>


          {showMore && (
            <div className="learn-more-text">
              <p>
                We’re a team of builders, problem-solvers, and curious minds who love turning big ideas into real, working solutions. Whether it’s designing smooth, user-friendly web and mobile apps or solving tricky cybersecurity puzzles, we help businesses work smarter, stay safer, and stress less. Got an idea? We’ve got the code to make it happen — so you can spend less time wrestling with tech and more time doing what you love!</p>
            </div>
          )}
          <div className='hero-btns'>
            <Button buttonStyle="btn--outline" buttonSize="btn--large" onClick={handleLearnMore}  >
              {showMore ? 'SHOW LESS' : 'LEARN MORE'}
            </Button>

          </div>
        </div>

        <div className="social-stack">
          {/*   <div className="icon-wrapper">
            <span className="icon-label">Check out our work</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
          </div> */}
          <div className="icon-wrapper">
            <span className="icon-label">Say hi!</span>
            <a href="https://www.instagram.com/netroxit/?igsh=MXNrN3pnbm93Y29yYQ%3D%3D#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
          <div className="icon-wrapper">
            <span className="icon-label">Connect with us</span>
            <a href="https://www.linkedin.com/company/netroxit/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
