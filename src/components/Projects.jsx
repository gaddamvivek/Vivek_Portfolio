import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI based Smart Interview Preparation App (PrepSmart)',
      technologies: ['ReactJS', 'NodeJS', 'CSS', 'MongoDB', 'TypeScript'],
      description: 'Designed and developed a scalable smart interview preparation platform. The platform features AI-powered feedback systems leveraging machine learning to analyze code and oral interview responses, along with speech-to-text conversion for technical assessments. Real-time interview simulations were implemented using WebSocket for video recording, question narration, and performance tracking',
    link: 'https://github.com/gaddamvivek/SmartPrep_Interview-Platform'},
    {
      title: 'E-Commerce Application ',
      technologies: ['ReactJS', 'ExpressJS', 'Docker', 'Caddy', 'AWS', 'JWT'],
      description: 'Developed a user-friendly e-commerce platform with seamless UI/UX, using MongoDB for storage and Docker for containerization',
    link: 'https://github.com/gaddamvivek/SoleCraft_E-Commerce-Platform'},
    {
      title: 'Dual Communication System for Device Interaction',
      technologies: ['C Language', 'Operating Systems'],
      description: '{Developed a dual communication system using TCP/IP, pipes, and sockets for reliable device interaction and optimized data exchange',
    link: 'https://drive.google.com/file/d/1u0GFZLvrYPi8KSu8wArtWn19nftSd4yg/view?usp=sharing'},
    {
      title: 'Smart Precision Farming Using IoT Data Analytics',
      technologies: ['Python','Android Studio', 'JavaScript', 'IoT', 'Selenium'],
      description: 'Developed precision farming solution using machine learning, Data Analysis and IoT, achieving 90% accuracy in predicting optimal crop resource allocation',
    link: 'https://www.philstat.org/index.php/MSEA/article/view/1450'},
    {
      title: 'Algorithm Visualizer',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'Developed a website for sorting algorithms, providing visualization and customizations on a website',
      link: 'https://gaddamvivek.github.io/Sorting-Visualiser.io/'}
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <div className="project-technologies">
                {project.technologies.join(' • ')}
              </div>
              <p>{project.description}</p>
              <a 
                href={project.link || '#'} 
                className="btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;