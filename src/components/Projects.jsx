import React from 'react';
import Skills from './Skills';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Driven Precision Agriculture Platform',
      technologies: ['Python', 'Android Studio', 'JavaScript', 'IoT', 'Selenium', 'TensorFlow', 'FastAPI', 'React'],
      highlights: [
        'Developed ML-powered crop yield prediction achieving 90% accuracy using ensemble methods (Random Forest + XGBoost)',
        'Built real-time IoT data pipeline processing 10K+ sensor readings/hour for soil analysis and irrigation optimization',
        'Deployed TensorFlow models on Android via Docker for edge computing, reducing cloud costs by 60%',
        'Implemented data analytics dashboard with Python/FastAPI backend and React frontend',
        'Impact: 25% resource optimization | Published: 3 patents + Scopus-indexed research papers',
      ],
      link: 'https://www.philstat.org/index.php/MSEA/article/view/1450',
    },
    {
      title: 'PrepSmart - AI-Powered Technical Interview Platform',
      technologies: ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'WebSocket', 'NLP'],
      highlights: [
        'Built production-grade interview preparation system with ML-driven feedback and real-time performance analytics',
        'Implemented speech-to-text conversion with 95% accuracy using WebSocket for low-latency video streaming',
        'Developed custom NLP engine for code quality assessment and personalized improvement recommendations',
        'Architecture: Node.js microservices, MongoDB for user analytics, WebSocket for real-time features',
        'Performance: Supports 1,000+ concurrent interview sessions with <500ms response time',
      ],
      link: 'https://github.com/gaddamvivek/SmartPrep_Interview-Platform',
    },
    {
      title: 'Enterprise E-Commerce Platform with Microservices',
      technologies: ['ReactJS', 'Express.js', 'MongoDB', 'Docker', 'Caddy', 'AWS', 'JWT', 'Stripe'],
      highlights: [
        'Designed scalable e-commerce system handling 10K+ concurrent users with JWT-based authentication',
        'Implemented Docker containerization with 99.9% uptime using health checks and auto-recovery',
        'Built real-time inventory management with MongoDB change streams and WebSocket notifications',
        'Integrated Stripe payment processing with webhook validation and transaction logging',
        'Metrics: 99.9% uptime, <200ms API response time (p95)',
      ],
      link: 'https://github.com/gaddamvivek/SoleCraft_E-Commerce-Platform',
    },
    {
      title: 'PlanVoyage - AI-Powered Travel Recommendation Engine',
      technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'JWT'],
      highlights: [
        'Implemented content-based filtering using TF-IDF and cosine similarity for personalized destination matching',
        'Built Node.js backend with MongoDB for user profiles and travel data, Express.js REST APIs',
        'Integrated real-time weather and budget data via third-party APIs',
        'Modeled after Pandora\'s music DNA concept for intelligent travel matching',
      ],
      link: 'https://github.com/gaddamvivek/PlanVoyage-app',
    },
    {
      title: 'Multi-Client Communication System',
      technologies: ['C', 'Unix System Calls', 'Named Pipes', 'IPC'],
      highlights: [
        'Developed a C-based multi-client chat system using named pipes and Unix system calls',
        'Enabled concurrent messaging via centralized IPC on Linux',
      ],
      link: 'https://drive.google.com/file/d/1HX-OLCaoA8cG41HrgWEHanwk_wet0VKp/view?usp=sharing',
    },
    {
      title: 'Dual-Core Compiler Simulator',
      technologies: ['C', 'Computer Architecture', 'Data Structures'],
      highlights: [
        'Built a dual-core compiler simulator to model instruction parsing, task dispatch, and parallel execution',
        'Simulated multicore processor behavior with configurable pipeline stages',
      ],
      link: 'https://drive.google.com/file/d/1u0GFZLvrYPi8KSu8wArtWn19nftSd4yg/view?usp=sharing',
    },
    {
      title: 'Algorithm Visualizer',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Built an interactive web app for visualizing sorting algorithms in real time',
        'Supports customizable speed, array size, and multiple algorithm comparisons',
      ],
      link: 'https://gaddamvivek.github.io/Sorting-Visualiser.io/',
    },
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
      applicationNumber: '202341008759',
      publicationNumber: '12/2023',
      filingDate: 'February 10, 2023',
      publicationDate: 'March 24, 2023',
      authority: 'Intellectual Property India (Indian Patent Office)',
      link: 'https://drive.google.com/file/d/1c5y4b7HRFim99SiTbXrfZK0Bvg9esqp9/view?usp=sharing'
    },
    {
      title: 'Machine Learning Powered IoT Weather Station to Predict the Rate of Urbanization',
      applicationNumber: '202341008760',
      publicationNumber: '12/2023',
      filingDate: 'February 10, 2023',
      publicationDate: 'March 24, 2023',
      authority: 'Intellectual Property India (Indian Patent Office)',
      link: 'https://drive.google.com/file/d/1ZH_0eoZF3Gv_LubXzz-20yFsrVMEPprH/view?usp=sharing'
    },
    {
      title: 'Data Analytics Powered IoT Weather Station to Determine the AQI Index in a Micro Climatic Zone',
      applicationNumber: '202341027954',
      publicationNumber: '18/2023',
      filingDate: 'April 17, 2023',
      publicationDate: 'May 05,2023',
      authority: 'Intellectual Property India (Indian Patent Office)',
      link: 'https://drive.google.com/file/d/1aKVw36Uiu4djiPfx5tYnUDpEpKaHz4Da/view?usp=sharing'
    }
  ];

  return (
    <>
      <section className="featured-project section-alt" id="featured">
        <h2 className="section-title">Featured Project</h2>
        <div className="featured-card">
          <span className="featured-badge">Featured</span>
          <h3>Enterprise Identity & Access Management at Scale</h3>
          <p className="featured-subtitle">
            Production system serving 20M+ users across New York State
          </p>
          <div className="featured-content">
            <div className="featured-challenge">
              <h4>Challenge</h4>
              <p>
                Modernize a legacy identity management platform for a state government agency,
                enabling secure authentication and authorization for millions of residents
                accessing critical public services — while meeting strict compliance, uptime,
                and scalability requirements.
              </p>
            </div>
            <div className="featured-achievements">
              <h4>Key Achievements</h4>
              <ul>
                <li>Architected IAM platform serving 20M+ users with 99.9% uptime SLA</li>
                <li>Reduced authentication latency by 40% through Redis caching layer</li>
                <li>Implemented OAuth 2.0 / OIDC flows with MFA for 50+ agency applications</li>
                <li>Built automated CI/CD pipelines cutting deployment time from days to hours</li>
                <li>Led migration of 15M+ user records with zero-downtime cutover</li>
              </ul>
            </div>
          </div>
          <div className="featured-tech">
            {['Java', 'Spring Boot', 'OAuth 2.0', 'OIDC', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'].map((tech, i) => (
              <span key={i} className="featured-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section-dark" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <a
                  href={project.link || '#'}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
              <div className="project-tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Skills />

      <section className="projects section-alt" id="publications">
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

      <section className="projects section-dark" id="patents">
        <h2 className="section-title">Patents</h2>
        <div className="projects-grid">
          {patents.map((patent, index) => (
            <div key={index} className="project-card">
              <h3>{patent.title}</h3>
              <p><strong>{patent.authority}</strong></p>
              <div className="patent-details">
                <p><strong>Application Number:</strong> {patent.applicationNumber}</p>
                {patent.publicationNumber && (
                  <p><strong>Publication Number:</strong> {patent.publicationNumber}</p>
                )}
                {patent.filingDate && (
                  <p><strong>Filing Date:</strong> {patent.filingDate}</p>
                )}
                {patent.publicationDate && (
                  <p><strong>Publication Date:</strong> {patent.publicationDate}</p>
                )}
              </div>
              {patent.link && (
                <a href={patent.link} className="btn" target="_blank" rel="noopener noreferrer">
                  View Patent
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
