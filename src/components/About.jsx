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
  Versatile Software Developer with 3+ years of experience delivering end-to-end solutions across full-stack, frontend, backend, DevOps, and AI/ML domains. Adept at designing, developing, testing, and deploying scalable web and cloud-native applications with a strong focus on performance, security, and user experience.
</p>

<p>
  Proficient in modern frontend frameworks like <strong>React.js</strong> and <strong>Next.js</strong>, and backend technologies such as <strong>Node.js</strong>, <strong>Python (Flask)</strong>, and <strong>Java (Spring Boot)</strong>. Experienced in working with <strong>REST APIs</strong>, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, and implementing real-time data pipelines.
</p>

<p>
  Hands-on with DevOps practices, including <strong>CI/CD pipelines</strong>, <strong>Docker</strong>, <strong>Acquia</strong>, <strong>Kubernetes</strong>, <strong>AWS</strong>, and infrastructure as code using <strong>Terraform</strong>, ensuring reliable, secure, and automated deployments across environments.
</p>

<p>
  In the AI/ML domain, familiar with <strong>model training</strong>, <strong>data preprocessing</strong>, and integrating machine learning models into production systems using tools like <strong>scikit-learn</strong> and <strong>Pandas</strong>. Enthusiastic about building data-driven applications that enhance decision-making and deliver intelligent features to end users.
</p>

<p>
  Proven ability to thrive in agile, cross-functional teams, lead features from concept to launch, and consistently improve system architecture and developer workflows to maximize performance, maintainability, and scalability.
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
              <h4>4+ Years</h4>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;