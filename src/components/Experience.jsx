import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-item">
            <h3>Software Engineer II</h3>
            <h4>NYS Office of Information Technology - Strategy & Enterprise Architecture | June 2025 – Present</h4>
            <div className="tags">
              <span>Java</span><span>Spring Boot</span><span>Maven</span><span>Okta</span><span>OAuth 2.0</span><span>SAML</span><span>LDAP</span><span>Red Hat</span><span>IBM WebSphere</span><span>Microservices</span><span>REST APIs</span><span>JUnit</span>
            </div>
            <ul className="highlights">
              <li>Architected enterprise-grade Identity Access Management solutions using Java and Spring Boot for large-scale government platforms</li>
              <li>Developed secure authentication and authorization systems implementing industry-standard protocols and identity verification services</li>
              <li>Built and maintained high-availability microservices architecture supporting millions of users with robust monitoring and testing frameworks</li>
            </ul>
          </div>
          
          <div className="experience-item">
          <h3>Software Engineer</h3>
          <h4>NYS Office of Information Technology Services (WebNY) | May 2024 – Present</h4>
          <div className="tags">
            <span>Drupal</span><span>PHP</span><span>JavaScript</span><span>Bootstrap</span><span>CI/CD</span><span>LINUX</span><span>Jenkins</span><span>WCAG</span><span>HTML/Twig</span><span>CSS/Sass</span><span>JIRA</span><span>Acquia Cloud</span>
          </div>
          <ul className="highlights">
            <li>Optimized New York State websites for accessibility, responsiveness, and performance</li>
            <li>Worked across frontend, backend, and DevOps to build secure, scalable web applications</li>
            <li>Contributed to Agile development cycles with regular code reviews and CI/CD deployment support</li>


          </ul>
        </div>

        <div className="experience-item">
          <h3>Founder/CEO & Software Developer</h3>
          <h4>EFORGE NexGen Innovations Pvt. Ltd. | March 2022 – April 2023</h4>
          <div className="tags">
            <span>React.js</span><span>Firebase</span><span>AWS</span><span>Python</span><span>Selenium</span><span>IoT</span><span>ML Models</span><span>REST APIs</span>
          </div>
          <ul className="highlights">
            <li>Driven by a vision to empower young innovators in scaling ideas from prototypes to market-ready solutions</li>
           <li>Contributed across product, engineering, and infrastructure to help scale the company as a full-spectrum developer</li>
            <li>Closed seed funding by showcasing impact of predictive ML prototypes</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Software Engineer Intern</h3>
          <h4>NewGen Innovation Center, CVR College of Engineering | Jan 2021 – Mar 2022</h4>
          <div className="tags">
            <span>Python</span><span>C, C++</span><span>ML</span><span>IoT</span><span>AWS</span><span>Data Viz</span><span>JavaScript</span><span>Edge Devices</span><span>Sensor APIs</span>
          </div>
          <ul className="highlights">
     <li>Conducted applied research in ML, AI, IoT systems, and programming for smart agriculture and automation</li>
<li>Published 3 research papers in Scopus-indexed journals and co-invented 3 patents in precision farming and environmental monitoring</li>

          </ul>
        </div>

        <h2 className="section-title">Education</h2>

        <div className="experience-item">
          <h3>Master of Science in Computer Science</h3>
          <h4>State University of New York, University at Albany, SUNY | August 2023 – May 2025</h4>
         <p>Specialized in programming, problem solving, and system design.</p>
<div className="tags">
  <span>Operating Systems</span>
  <span>Adv. Computer Architecture</span>
  <span>Algorithms & Data Structures</span>
  <span>Database Systems</span>
  <span>Software Engineering</span>
  <span>Artificial Intelligence</span>
  <span>Automata Theory</span>
  <span>Formal Languages</span>
</div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
