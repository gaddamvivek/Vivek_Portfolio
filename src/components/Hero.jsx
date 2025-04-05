import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>VIVEK GADDAMM</h1>
        <h2>Software Developer</h2>
        <div className="hero-cta">
          <a 
            href="/resume.pdf" 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;