import React from 'react';
import './skills.css';

// Import images
import Java from '../images/java.png';
import Bootstrap from '../images/bootstrap.png';
import Css from '../images/css.svg';
import C from '../images/c.svg';
import Django from '../images/django.svg';
import Github from '../images/github.svg';
import HTML from '../images/html.svg';
import Intellij from '../images/intellij.svg';
import JS from '../images/js.svg';
import Linux from '../images/linux.png';
import Mongo from '../images/mongo.svg';
import Mysql from '../images/mysql.svg';
import Nodejs from '../images/nodejs.svg';
import Python from '../images/python.svg';
import Reactjs from '../images/react.svg';

const Skills = () => {
  // Array of skills with corresponding image imports
  const skills = [
    { name: 'Java', image: Java },
    { name: 'Bootstrap', image: Bootstrap },
    { name: 'CSS', image: Css },
    { name: 'C', image: C },
    { name: 'Django', image: Django },
    { name: 'GitHub', image: Github },
    { name: 'HTML', image: HTML },
    { name: 'IntelliJ', image: Intellij },
    { name: 'JavaScript', image: JS },
    { name: 'Linux', image: Linux },
    { name: 'MongoDB', image: Mongo },
    { name: 'MySQL', image: Mysql },
    { name: 'Node.js', image: Nodejs },
    { name: 'Python', image: Python },
    { name: 'React.js', image: Reactjs }
  ];

  return (
    <div className="skills-container">
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.image} alt={`${skill.name} Icon`} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
