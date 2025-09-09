import React, { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <img src={project.image} alt={project.title} className="modal-image" />
          <div className="modal-info">
            <h2>{project.title}</h2>
            <p className="modal-category">{project.category}</p>
            {project.featured && <span className="featured-badge">Featured Project</span>}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            <h3>Description</h3>
            <p>{project.description}</p>
            
            <h3>Technologies Used</h3>
            <div className="modal-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-features">
            <h3>Key Features</h3>
            <ul>
              <li>Responsive design for all device sizes</li>
              <li>Modern UI/UX with smooth animations</li>
              <li>Optimized performance and fast loading</li>
              <li>Clean, maintainable code structure</li>
              <li>Cross-browser compatibility</li>
            </ul>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-links">
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Demo
              </a>
            )}
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
