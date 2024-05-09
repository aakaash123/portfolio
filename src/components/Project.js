import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-card">
        <h2>Portfolio</h2>
        <p>Created a responsive portfolio using Next.js, React, HTML, CSS, JavaScript for optimal user experience.</p>
        <p>Integrated dynamic content for real-time updates, featuring interactive sections.</p>
      </div>
      <div className="project-card">
        <h2>Blood Bank Management System</h2>
        <p>Developed a system for managing blood donations and supplies using Django, Dbsqlite, HTML, and CSS.</p>
      </div>
      <div className="project-card">
        <h2>BalanceBoost</h2>
        <p>Proposed an improved SMOTE method using clustering to handle imbalanced datasets, enhancing classification effectiveness in machine learning applications.</p>
      </div>
    </div>
  );
}

export default Project;
