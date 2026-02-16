import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const roles = [
  'Software Engineer',
  'AI / ML Engineer',
  'Full-Stack Developer',
  'Cloud & DevOps Engineer',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>VIVEK GADDAM</h1>
        <h2 className="hero-role-wrapper">
          <span className={`hero-role ${fade ? 'fade-in' : 'fade-out'}`}>
            {roles[roleIndex]}
          </span>
          <span className="typing-cursor">|</span>
        </h2>
        <div className="hero-cta">
          <a
            href="https://www.linkedin.com/in/vivek-gaddam/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
            LinkedIn
          </a>
          <a
            href="https://github.com/gaddamvivek/"
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
