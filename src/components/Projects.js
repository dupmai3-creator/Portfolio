import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesFeatured = !showFeaturedOnly || project.featured;
    return matchesCategory && matchesFeatured;
  });

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.
        </p>

        <div className="projects-controls">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="view-options">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={(e) => setShowFeaturedOnly(e.target.checked)}
              />
              <span className="toggle-slider"></span>
              Featured Only
            </label>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn btn-demo"
                      >
                        Live Demo
                      </a>
                    )}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn btn-code"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected filters.</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default Projects;
