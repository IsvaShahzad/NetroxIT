import React from 'react';
import './OurTeam.css';

const teamData = [

 {
    id: '02',
    title: 'Full Stack Developer',
    description: 'Dedicated developers powering the next generation of digital platforms.',
  },
     {
    id: '02',
    title: 'Web Developer',
    description: 'Building responsive, powerful web solutions that fuel digital growth.',
  },
 
    {
    id: '01',
    title: 'Mobile App Developer',
    description: 'Building mobile apps that turn visionary ideas into everyday essentials.',
  },
    {
    id: '01',
    title: 'Cybersecurity Specialist',
    description: 'Your online assets, fiercely protected by forward-thinking security pros.',
  },
  {
    id: '04',
    title: 'Graphic Designer',
    description: 'Crafting visionary ideas into unforgettable digital journeys.',
  },

 
];

const OurTeam = () => {
  return (
    <div className="ourteam-wrapper">
      <p className="ourteam-subtitle">Our Professionals</p>
      <h2 className="ourteam-title">Tailored Teams For Your Goals!</h2>
      <div className="ourteam-horizontal-cards">
        {teamData.map((item, index) => (
          <div className="ourteam-card" key={index}>
            <span className="ourteam-card-number">{item.id}</span>
            <h3 className="ourteam-card-title">{item.title}</h3>
            <p className="ourteam-card-desc">{item.description}</p>
            {/*       <a href="#" className="ourteam-card-link">
              <span className="ourteam-link-line"></span>
              Learn More
            </a>   */}
          </div>
        ))}
      </div>
      <div className="blur-right"></div>
    </div>
  );
};

export default OurTeam;
