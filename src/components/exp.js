// exp.js

import React from 'react';
import './exp.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-box">
        <h2>SDE 1</h2>
        <p>Pype, Delhi, India</p>
        <p>July 2023 - Present</p>
        <div className="Tech-Stack">
            <div className="Tech">Node.js</div>
            <div className="Tech">Next.js</div>
            <div className="Tech">Gen AI</div>
            <div className="Tech">Python</div>
        </div>
        <ul>
          <li style={{padding:"5px"}}>Leading development of an advanced Enterprise Search Tool for seamless data retrieval</li>
          <li style={{padding:"5px"}}>Implementing robust security measures, including role-based access controls, for data integrity</li>
          <li style={{padding:"5px"}}>Integrating AI chat for interactive user support and AI document generation for content expansion, enhancing user experience</li>
        </ul>
      </div>
      <div className="experience-box">
        <h2>SDE Intern</h2>
        <p>Amazon, Bangalore, India</p>
        <p>Jan 2023 - June 2023</p>
        <div className="Tech-Stack">
                    <div className="Tech">Java</div>
                    <div className="Tech">ReactJs</div>
                    <div className="Tech">AWS</div>
                    <div className="Tech">SQL</div>
                </div>
        <ul>
        <li style={{padding:"5px"}}>Developed a cutting-edge testing tool from scratch, slashing testing time from days to mere hours</li>
          <li style={{padding:"5px"}}>Created a Java-based differ library, doubling accuracy in comparing and diffing documents in ion format</li>
          <li style={{padding:"5px"}}>Designed and implemented a ReactJS web application for analyzing test results, incorporating advanced data visualization techniques for improved error identification and resolution</li>
        </ul>
      </div>
      <div className="experience-box">
        <h2>ML Intern</h2>
        <p>Feynn Labs, Jabalpur, India</p>
        <p>Oct 2021 - Dec 2021</p>
        <div className="Tech-Stack">
                            <div className="Tech">Python</div>
                            <div className="Tech">Django</div>
                            <div className="Tech">Opencv</div>
                            <div className="Tech">Linux</div>
                        </div>
        <ul>
        <li style={{padding:"5px"}}>Created AI-enabled FinTech B2B Invoice, trained ML model for payment prediction</li>
        <li style={{padding:"5px"}}>Created AI-enabled FinTech B2B Invoice, trained ML model for payment prediction</li>
          <li style={{padding:"5px"}}>Implemented Email Intent and Entity recognition model, achieving 150 percent increase in Collector’s productivity</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
