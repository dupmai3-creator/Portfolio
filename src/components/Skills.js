import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null);

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className={`skill-progress ${animated ? 'animate' : ''}`}
                  style={{ width: animated ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <h3>Frontend</h3>
            <p>Creating beautiful, responsive user interfaces with modern frameworks and tools.</p>
          </div>
          <div className="summary-item">
            <h3>Backend</h3>
            <p>Building robust server-side applications and APIs with scalable architecture.</p>
          </div>
          <div className="summary-item">
            <h3>Database</h3>
            <p>Designing and managing databases for optimal performance and data integrity.</p>
          </div>
          <div className="summary-item">
            <h3>DevOps</h3>
            <p>Deploying and maintaining applications with modern deployment pipelines.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
