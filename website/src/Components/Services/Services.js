import React, { forwardRef } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import {
  FaLaptopCode, FaMobileAlt, FaDesktop, FaGamepad,
  FaShieldAlt, FaTags, FaSearch, FaRobot, FaCamera
} from 'react-icons/fa';

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
    icon: <FaGamepad />,
    title: "Cybersecurity",
    description: "Real-time protection for real-world threats."
  },
  {
    icon: <FaTags />,
    title: "Consultation",
    description: "Smart branding that builds lasting impact."
  },
  {
    icon: <FaSearch />,
    title: "Workflow Automation",
    description: "Get more done in less time, with smarter tools."
  },
  {
    icon: <FaShieldAlt />,
    title: "Cloud Services",
    description: "Scalable cloud solutions built for security and growth."
  },
  {
    icon: <FaCamera />,
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
      <p className="services-subtitle">OUR SERVICES</p>
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
