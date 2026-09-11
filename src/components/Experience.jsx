import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-item">
          <h3>IT Specialist</h3>
          <h4>I-Link Solutions Inc. | June 2026 – Present</h4>
        </div>

        <div className="experience-item">
          <h3>Software Engineer II</h3>
          <h4>NYS Office of Information Technology - Strategy &amp; Enterprise Architecture | Special Projects and Rapid Coding | September 2025 – June 2026</h4>
        </div>

        <div className="experience-item">
          <h3>Software Engineer</h3>
          <h4>NYS Office of Information Technology Services (Web Platform Services) | May 2024 – May 2025</h4>
        </div>

        <div className="experience-item">
          <h3>Software Developer</h3>
          <h4>EFORGE NexGen Innovations Pvt. Ltd. | March 2021 – April 2023</h4>
        </div>

        <div className="experience-item">
          <h3>Associate Software Engineer</h3>
          <h4>NewGen Innovation Center, CVR College of Engineering | Jan 2020 – Mar 2021</h4>
        </div>

        <h2 className="section-title">Education</h2>

        <div className="experience-item">
          <h3>Master of Science in Computer Science</h3>
          <h4>State University of New York, University at Albany, SUNY | August 2023 – May 2025</h4>
          <p>Specialized in programming, problem solving, and system design.</p>
          <div className="tags">
            <span>Artificial Intelligence</span>
            <span>Deep Learning</span>
            <span>Machine Learning</span>
            <span>Algorithms &amp; Data Structures</span>
            <span>Database Systems</span>
            <span>Operating Systems</span>
            <span>Adv. Computer Architecture</span>
            <span>Software Engineering</span>
            <span>Automata Theory</span>
            <span>Formal Languages</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;