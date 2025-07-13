import React from 'react';
import './ProjectsTabs.css';

const tabs = ['Apps', 'Websites'];

const ProjectsTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs-wrapper">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProjectsTabs;
