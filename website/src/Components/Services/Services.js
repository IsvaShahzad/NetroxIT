import React, { forwardRef } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import {
  FaLaptopCode, FaMobileAlt, FaDesktop,
  FaShieldAlt, FaRobot, 
  FaServer,
  FaCommentAlt,
  FaPaintBrush
} from 'react-icons/fa';
import { FaBezierCurve, FaComputer } from 'react-icons/fa6';

const serviceData = [
  {
    icon: <FaLaptopCode />,
    title: "Web Design & Development",
    description: "Web platforms built to impress—and perform."
  },
  {
    icon: <FaMobileAlt />,
    title: "iOS & Android Development",
    description: "Cross-platform apps that stand out and stay strong."
  },
  {
    icon: <FaDesktop />,
    title: "Desktop Application",
    description: "Robust desktop software built for flawless user experiences."
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    description: "Real-time protection for real-world threats."
  },
  {
    icon: <FaCommentAlt />,
    title: "Consultation",
    description: "Smart branding that builds lasting impact."
  },
  {
    icon: <FaBezierCurve />,
    title: "Workflow Automation",
    description: "Get more done in less time, with smarter tools."
  },
  {
    icon: <FaServer />,
    title: "Cloud Services",
    description: "Scalable cloud solutions built for security and growth."
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    description: "From brand marks to full experiences—we bring it all to life."
  },
  {
    icon: <FaRobot />,
    title: "AI/ML",
    description: "Lean, smart, and scalable AI for modern teams."
  }
];

const Services = forwardRef((props, ref) => {
  return (
    <div className="services-wrapper" ref={ref}>
      <div className='blur'></div>

<section id="services">
  <p className="services-subtitle">OUR SERVICES</p>
  {/* More content about services */}

 
</section>
      <h2 className="services-title">Innovating Beyond Limits with Modern Tech</h2>

      <div className="services-grid">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link="#"
          />
        ))}
      </div>
    </div>
  );
});

export default Services;
