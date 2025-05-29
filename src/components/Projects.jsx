import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'PlanVoyage - Personalized Travel Recommendation Web App',
      technologies: ['Next.js, Node.js, Express.js, MongoDB, TailwindCSS, JWT'],
      description: 'PlanVoyage is a genome-based travel recommendation platform, modeled after Pandora’s music DNA concept. It intelligently matches users to destinations based on personalized travel preferences such as weather, budget, activities, and prior travel experiences.',
    link: 'https://github.com/gaddamvivek/PlanVoyage-app'},
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

  const publications = [
    {
      title: 'Sparse Channel Estimation Using OMP Algorithm for Next-Gen Wireless',
      journal: 'IEEE Conference on Communication and Computing 4.0',
      date: 'Mar 14, 2023',
      link: 'https://ieeexplore.ieee.org/document/10051352'
    },
    {
      title: 'ML for Urbanization Prediction using Automatic Weather Station',
      journal: 'Mathematical Statistician and Engineering Applications',
      date: 'Dec 21, 2022',
      link: 'https://philstat.org/index.php/MSEA/article/view/1451'
    },
    {
      title: 'Smart Precision Agriculture using IoT Data Analytics',
      journal: 'Mathematical Statistician and Engineering Applications',
      date: 'Dec 21, 2022',
      link: 'https://philstat.org/index.php/MSEA/article/view/1450'
    },
    {
      title: 'Smart Precision Interface for Agricultural Methods',
      journal: 'CVR Journal of Science and Technology',
      date: 'Dec 3, 2022',
      link: 'https://www.cvr.ac.in/ojs/index.php/cvracin/article/view/812'
    }
  ];

  const patents = [
    {
      title: 'Data Analytics Powered Smart Precision Farming to Increase Crop Yield',
      number: '202341008759',
      authority: 'Intellectual Property India (Government of India)',
      year: '2023'
    },
    {
      title: 'Machine Learning Powered IoT Weather Station to Predict the Rate of Urbanization',
      number: '202341008760',
      authority: 'Intellectual Property India (Government of India)',
      year: '2023'
    },
    {
      title: 'Data Analytics Powered IoT Weather Station to Determine the AQI Index in a Micro Climatic Zone',
      number: '202341027954',
      authority: 'Intellectual Property India (Government of India)',
      year: '2023'
    }
  ];

  return (
    <section className="projects" id="projects">
     
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
        
        <section className= "scroll-section" id="publications">
          <h2 className="section-title">Publications</h2>
        <div className="projects-grid">
          {publications.map((pub, index) => (
            <div key={index} className="project-card">
              <h3>{pub.title}</h3>
              <p><strong>{pub.journal}</strong></p>
              <p>{pub.date}</p>
              <a href={pub.link} className="btn" target="_blank" rel="noopener noreferrer">
                View Publication
              </a>
            </div>
          ))}
        </div>
        </section>

        <section className="scroll-section" id="patents">
       <h2 className="section-title">Patents</h2>
        <div className="projects-grid">
          {patents.map((patent, index) => (
            <div key={index} className="project-card">
              <h3>{patent.title}</h3>
              <p><strong>{patent.authority}</strong></p>
              <p>Patent Number: {patent.number} • Year: {patent.year}</p>
            </div>
          ))}
        </div>
      </section>  

    </section>
  );
};

export default Projects;