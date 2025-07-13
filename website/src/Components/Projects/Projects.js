import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Projects.css';
import ProjectCard from '../ProjectCards/ProjectCard';
import ProjectsTabs from '../ProjectsTabs/ProjectsTabs';

const allProjects = {
  Apps: [
    {
      image: '/images/pOne.jpg',
      title: 'Charmed Home Services',
      description:
        'This app connects Local Sellers and Consumers for all things handmade and homegrown - from arts & crafts to baked goods, and everything in between.',
      skills: ['Flutter', 'Dart', 'User Authentication', 'Firebase', 'Cloud Firestore'],
    },
    {
      image: '/images/pTwo.jpg',
      title: 'Quran App',
      description:
        'This Quran App allows users to read the Quran, listen to audio recitations, and explore translations in multiple languages.',
      skills: ['Flutter', 'Dart', 'API', 'Firebase', 'Cloud Firestore'],
    },
    {
      image: '/images/pThree.jpg',
      title: 'Quiz It',
      description:
        'This app helps boost knowledge with 19,000+ quiz questions fetched via a powerful API across various categories.',
      skills: ['Flutter', 'Dart', 'API', 'Firebase', 'Cloud Firestore'],
    },
    {
      image: '/images/pFour.jpg',
      title: 'Foodify',
      description:
        'A food delivery app that connects users with restaurants to browse menus, place orders, track deliveries, and leave reviews.',
      skills: ['Flutter', 'Dart', 'API', 'Firebase', 'Cloud Firestore'],
    },
    {
      image: '/images/pFive.jpg',
      title: 'Tune Nest',
      description:
        'A modern music streaming app integrated with the Spotify SDK, allowing users to explore and listen to their favorite tracks.',
      skills: ['Flutter', 'Spotify SDK', 'Dart', 'API'],
    },
  ],
  'Live Applications': [
    {
      image: '/images/streamhive1.png',
      title: 'Stream Hive',
      description: 'A Netflix clone delivering seamless streaming of your favorite shows and movies. Click below to explore!',
      skills: ['Flutter Web', 'UI/UX', 'RESTAPIs', 'YouTube SDK', 'Dart', 'Firebase'],
      link: 'https://ezitaskmana.web.app',
    },
    {
      image: '/images/HCs1.jpg',
      title: 'Crafty Hands',
      description: 'A services app connecting you with skilled experts for home-based crafts and personalized handiwork. Experience the app in action by clicking below.',
      skills: ['Flutter', 'Dart', 'API', 'Firebase', 'Cloud Firestore'],
      link: 'https://play.google.com/store/apps/details?id=com.cs.home_services_flutter&pli=1',
    },
  ],
  Websites: [
    {
      image: '/images/tourvia1.jpeg',
      title: 'Tourvia',
      description: 'A modern tourism website connecting travelers to unforgettable destinations.',
      skills: ['React', 'Node Js', 'Express Js', 'Java', 'Firebase'],
    },
    {
      image: '/images/streamhive1.png',
      title: 'Stream Hive',
      description: 'A Netflix clone delivering seamless streaming of your favorite shows and movies.',
      skills: ['Flutter Web', 'UI/UX', 'RESTAPIs', 'YouTube SDK', 'Dart', 'Firebase'],
    },
    {
      image: '/images/Ew5.jpg',
      title: 'Explore World',
      description: 'A informative website that give information about different countries of the world.',
      skills: ['React', 'Axios', 'RESTAPIs', 'Firebase'],
    },
  ],
};

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1260 }, items: 4 },
  desktop: { breakpoint: { max: 1260, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Apps');
  const [fadeClass, setFadeClass] = useState('fade-in');

  const projectData = allProjects[activeTab] || [];

  useEffect(() => {
    setFadeClass('fade-out');
    const timer = setTimeout(() => {
      setFadeClass('fade-in');
    }, 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="projects-wrapper">
      <p className="projects-subtitle">OUR PROJECTS</p>
      <h2 className="projects-title">Showcasing Innovation, Delivering Impact</h2>
      <ProjectsTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className={`projects-container ${fadeClass}`}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={true}
          showDots={false}
          containerClass="carousel-container"
        >
          {projectData.map((proj, index) => (
            <div className="carousel-card" key={index}>
              <ProjectCard {...proj} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
