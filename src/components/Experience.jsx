import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-item">
          <h3>Software Developer</h3>
          <h4>NYS Office of Information Technology Services for WebNY | May 2024 - Present</h4>
          <ul>
          <li>Built and optimized websites for NYS agencies using Drupal CMS, PHP, JavaScript, and Bootstrap, ensuring responsive and visually polished designs across all devices. Delivered seamless user experiences in compliance with WCAG and NYS Information Security Policies, improving accessibility and security.</li>
  
  <li>Enhanced over 50 Drupal modules, implementing custom authentication, role-based access controls, and security patches to mitigate vulnerabilities such as SQL injection, while boosting system performance by 40% through optimized queries, lazy loading, and caching strategies.</li>
  
  <li>Designed responsive, ADA-compliant interfaces using HTML, Twig, CSS, and SASS for all breakpoints. Increased page views by 30% and reduced load time by 50% by optimizing asset delivery, integrating CDNs, and improving navigation with mega menus and dynamic search filters.</li>
  
  <li>Applied UI/UX best practices through comprehensive visual reviews, prototyping, and usability testing to ensure intuitive layouts and seamless interactions.</li>
  
  <li>Conducted detailed code reviews to maintain efficient, optimized code, aligning design and functionality with user needs and accessibility standards.</li>
  
  <li>Developed custom modules for content approval workflows and multi-agency permissions, integrating real-time API connections to support scalable and secure backend processes, improving editorial efficiency by 50%.</li>
  
  <li>Implemented automated CI/CD pipelines using Jenkins and YAML configurations for Acquia Cloud and Docker deployments, reducing deployment errors by 60% and enhancing platform scalability and reliability.</li>
  </ul>
        </div>
        
        <div className="experience-item">
          <h3>Founder & CEO</h3>
          <h4>EFORGE NexGen Innovations Pvt. Ltd. | March 2022 - April 2023</h4>
          <ul>
          <li>Led a student startup focused on converting prototypes into commercial products, delivering automation and secure IoT solutions for smart cities and agriculture.</li>
  
  <li>Developed React.js dashboards and Android apps with Firebase/AWS integration, enabling real-time analytics and reducing backend latency by 40%.</li>
  
  <li>Built ML models (Python) and Selenium automation tools for agricultural productivity predictions, reducing operational downtime by 35%.</li>
  
  <li>Commercialized 3 AI-powered prototypes, boosting cross-industry operational efficiency by 20% through automation.</li>
  
  <li>Applied OOP principles and algorithm optimization to create scalable apps with RESTful APIs, ensuring robust performance and security.</li>
  
  <li>Secured startup funding through data-driven investor pitches highlighting AI automation, driving 30% revenue growth.</li>
  </ul>        </div>

<div className="experience-item">
          <h3>Research Intern</h3>
          <h4>NewGen Innovation Center, CVR College of Engineering | January 2021 - March 2022</h4>
          <ul>
          <li>
    <strong>ML Optimization:</strong> Designed and implemented a machine learning model for environmental resource allocation in smart farming, optimizing water/fertilizer usage.
  </li>
  
  <li>
    <strong>Data Visualization:</strong> Developed a real-time agricultural dashboard (JavaScript/HTML/CSS) to visualize IoT sensor data for actionable insights.
  </li>
  
  <li>
    <strong>IoT Integration:</strong> Built Python/AWS-powered APIs for IoT sensors, enabling seamless data collection and processing from field devices.
  </li>
  
  <li>
    <strong>Predictive Prototype:</strong> Created an IoT/ML-powered weather station with 70% accuracy in precipitation forecasting for precision agriculture.
  </li>
  
  <li>
    <strong>Research Contribution:</strong> Evaluated system scalability/reliability, publishing findings in a Scopus-indexed journal.
  </li>
  
  <li>
    <strong>Process Automation:</strong> Reduced system latency by 40% through Python scripts automating real-time data analysis workflows.
  </li>
  </ul>      </div>
        
        <h2 className="section-title">Education</h2>
        
        <div className="experience-item">
          <h3>Master of Science in Computer Science</h3>
          <h4> University At Albany, State University of New York  |  August 2023 - May 2025 | Albany, NY </h4>
          <p>Specialized in programming, problem solving and analytical skills.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;