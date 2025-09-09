import React from 'react';
import { personalInfo, experiences, education } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              {personalInfo.bio}
            </p>
            <p>
              I'm passionate about creating digital experiences that are both beautiful and functional. 
              My journey in web development started with a curiosity about how websites work, and has 
              evolved into a deep love for crafting user-centric applications.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="about-details">
            <div className="experience-section">
              <h3>Experience</h3>
              <div className="timeline">
                {experiences.map((exp) => (
                  <div key={exp.id} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>{exp.position}</h4>
                      <h5>{exp.company}</h5>
                      <span className="duration">{exp.duration}</span>
                      <p>{exp.description}</p>
                      {exp.achievements && (
                        <ul className="achievements">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="education-section">
              <h3>Education</h3>
              <div className="education-list">
                {education.map((edu) => (
                  <div key={edu.id} className="education-item">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <span className="duration">{edu.duration}</span>
                    <p>{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
