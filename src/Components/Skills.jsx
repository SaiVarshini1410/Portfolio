import React from 'react';
import './skills.css';
import birt from '../assets/birt.png';
import cimage from '../assets/c.png';
import cpp from '../assets/cpp.png';
import css from '../assets/css.png';
import docker from '../assets/docker.png';
import eclipse from '../assets/eclipse.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import linux from '../assets/linux.png';
import mongo from '../assets/mongo.png';
import mysql from '../assets/mysql.png';
import node from '../assets/nodeJS.png';
import postgres from '../assets/postgres.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import shell from '../assets/shell.png';
import springBoot from '../assets/springBoot.png';
import tableau from '../assets/tableau.png';
import { useEffect, useState } from 'react';
// import './responsive-updates.css'


function Skills() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const skillsArray = [
    { src: cpp, alt: "C++" },
    { src: css, alt: "CSS" },
    { src: docker, alt: "Docker" },
    { src: eclipse, alt: "Eclipse" },
    { src: git, alt: "Git" },
    { src: github, alt: "GitHub" },
    { src: html, alt: "HTML" },
    { src: react, alt: "React" },
    { src: javascript, alt: "JavaScript" },
  ];
  const skillsArray2 = [
    { src: linux, alt: "Linux" },
    { src: mongo, alt: "MongoDB" },
    { src: mysql, alt: "MySQL" },
    { src: node, alt: "Node.js" },
    { src: postgres, alt: "PostgreSQL" },
    { src: python, alt: "Python" },
    { src: redux, alt: "Redux" },
    { src: shell, alt: "Shell" },
    { src: springBoot, alt: "Spring Boot" },
    { src: tableau, alt: "Tableau" }
  ]

useEffect(() => {
  const generateRandomValue = (max) => Math.random() * max * 2 - max;
  const icons = document.querySelectorAll('.skills-icon-ele');
  icons.forEach(icon => {
    const style = {
      '--x1': `${generateRandomValue(15)}px`,
      '--y1': `${generateRandomValue(20)}px`,
      '--r1': `${generateRandomValue(5)}deg`,
      '--x2': `${generateRandomValue(25)}px`,
      '--y2': `${generateRandomValue(30)}px`,
      '--r2': `${generateRandomValue(8)}deg`,
      '--x3': `${generateRandomValue(15)}px`,
      '--y3': `${generateRandomValue(20)}px`,
      '--r3': `${generateRandomValue(5)}deg`,
    };
    
    Object.entries(style).forEach(([prop, value]) => {
      icon.style.setProperty(prop, value);
    });

    icon.style.animationDuration = `${5 + Math.random() * 5}s`;
    icon.style.animationDelay = `${Math.random() * 3}s`;
  });
}, []);


  return (
    <div className='skills-mn-cls'>
      <div className='skills-title-cls'>
        Skills
      </div>
      <div className='skills-icon-cls'>
        <div className='skills-icon-sb-cls-1'>
          {
            skillsArray.map((skill, index) => (
              <div 
                key={index} 
                className='skills-icon-ele'
                onMouseEnter={() => setActiveTooltip(skill.alt)} 
                onMouseLeave={() => setActiveTooltip(null)} 
              >
                <img src={skill.src} alt={skill.alt} />
                {activeTooltip === skill.alt && ( 
                  <span className="skill-tooltip">{skill.alt}</span>
                )}
              </div>
            ))
          }
        </div>
        <div className='skills-icon-sb-cls-2'>
          {
            skillsArray2.map((skill, index) => (
              <div 
                key={index} 
                className='skills-icon-ele'
                onMouseEnter={() => setActiveTooltip(skill.alt)} 
                onMouseLeave={() => setActiveTooltip(null)} 
              >
                <img src={skill.src} alt={skill.alt}/>
                {activeTooltip === skill.alt && ( 
                  <span className="skill-tooltip">{skill.alt}</span>
                )}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Skills;
