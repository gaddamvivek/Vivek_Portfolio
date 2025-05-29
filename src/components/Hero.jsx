import React from 'react';
import '../styles/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>VIVEK GADDAM</h1>
        <h2>Software Developer</h2>
        <div className="hero-cta">
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '8px' }} />
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-gaddam/"  // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
            LinkedIn
          </a>
          <a
            href="https://github.com/gaddamvivek/" // Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
