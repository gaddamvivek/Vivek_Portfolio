import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Developer focused on creating user-centric software that bridges technical and business needs.</h3>
            <p>
            Software Developer with 3+ years of experience in full-stack development, specializing in designing, developing, and testing scalable applications. Skilled in React.js, Python, and JavaScript with a focus on code efficiency, debugging, and software architecture. Proven ability to collaborate with cross-functional teams to deliver impactful solutions.
            </p>
            <div className="about-details">
              <div>
                <strong>Name:</strong> Vivek Gaddam
              </div>
              <div>
                <strong>Email:</strong> gaddamvivek01@gmail.com
              </div>
              <div>
                <strong>Location:</strong> Albany, NY
              </div>
              <div>
                <strong>Availability:</strong> Full-time
              </div>
            </div>
            <blockquote>
              "It is important to follow your dreams and heart. Do something that excites you."
            </blockquote>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h4>3+ Years</h4>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;