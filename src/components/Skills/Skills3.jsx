import React from 'react';
import './Skills3.css';

const skills = [
  { name: 'HTML', level: '90%', color: '#FF5722' },
  { name: 'CSS', level: '85%', color: '#2196F3' },
  { name: 'Javascript', level: '80%', color: '#9C27B0' },
  { name: 'ReactJs', level: '85%', color: '#FF5722' },
  { name: 'Java', level: '85%', color: '#009688' },
  { name: 'Spring Boot', level: '70%', color: '#2196F3' },
  { name: 'NodeJs', level: '65%', color: '#009688' },
  { name: 'MongoDB', level: '70%', color: '#009688' },
  { name: 'ExpressJs', level: '65%', color: '#3F51B5' },
  { name: 'Python', level: '70%', color: '#9C27B0' }
];

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="section-heading">
        <i className="fas fa-chalkboard-teacher"></i>
        <span> SKILLS </span>
      </h1>
      <div className="skills-display">
        {skills.map(skill => (
          <div key={skill.name} className="skill-progress">
            <div className="skill-bar" style={{ width: skill.level, backgroundColor: skill.color }}>
              <div className="skill-name">
                <span>{skill.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
