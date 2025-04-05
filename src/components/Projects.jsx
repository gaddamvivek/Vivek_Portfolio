import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI based Smart Interview Preparation App (PrepSmart)',
      technologies: ['ReactJS', 'NodeJS', 'CSS'],
      description: 'Designed and developed a scalable smart interview preparation platform. The platform features AI-powered feedback systems leveraging machine learning to analyze code and oral interview responses, along with speech-to-text conversion for technical assessments. Real-time interview simulations were implemented using WebSocket for video recording, question narration, and performance tracking'},
    {
      title: 'E-Commerce Application ',
      technologies: ['Python', 'SQL', 'Docker'],
      description: 'Developed a user-friendly e-commerce platform with seamless UI/UX, using MongoDB for storage and Docker for containerization'},
    {
      title: 'Dual Communication System for Device Interaction',
      technologies: ['Python','SAS Studio', 'Excel'],
      description: '{Developed a dual communication system using TCP/IP, pipes, and sockets for reliable device interaction and optimized data exchange'},
    {
      title: 'Smart Precision Farming Using IoT Data Analytics',
      technologies: ['Python','SAS Studio', 'Excel'],
      description: 'Developed precision farming solution using machine learning, Data Analysis and IoT, achieving 90\% accuracy in predicting optimal crop resource allocation'},
    {
      title: 'Algorithm Visualizer',
      technologies: ['Python','SAS Studio', 'Excel'],
      description: 'Developed a website for sorting algorithms, providing visualization and customizations on a website'}
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
              <a href="#" className="btn">View Project</a>
            </div>
          ))}
        </div>
        
        <div className="view-all">
          <a href="localhost:8000/project/products-analytic-model" className="btn">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;