import React from 'react';
import '../styles/Hero.css';

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
  View Resume
</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;