import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Full-Stack Software Engineer building scalable applications and intelligent systems.</h3>
         <p>
  Full-Stack Software Engineer with 4+ years building scalable web applications and automation systems. Expertise in developing end-to-end solutions from <strong>REST APIs</strong> to responsive frontends, with production deployments on <strong>AWS</strong>, <strong>Docker</strong>, and <strong>Kubernetes</strong>. Delivered enterprise platforms achieving 85% reduction in manual processes and 40% faster response times through optimized backend architectures.
</p>

<p>
  Proficient across multiple technology stacks including <strong>Python</strong>, <strong>Java (Spring Boot)</strong>, <strong>C#/.NET</strong>, <strong>Go</strong>, <strong>Angular</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>. Experienced in building identity and access management systems using <strong>OAuth 2.0</strong>, <strong>SAML</strong>, and <strong>LDAP</strong> for platforms serving 20M+ users.
</p>

<p>
  Strong background in <strong>AI/ML</strong>, with hands-on experience in <strong>TensorFlow</strong>, <strong>PyTorch</strong>, <strong>OpenAI API</strong>, <strong>LangChain</strong>, and <strong>NLP</strong> frameworks. Published researcher with 4 papers in Scopus-indexed journals and 3 patents in precision farming and environmental monitoring.
</p>

<p>
  Hands-on with <strong>DevOps</strong> and cloud infrastructure including <strong>CI/CD pipelines</strong>, <strong>Docker</strong>, <strong>OpenShift</strong>, <strong>Helm</strong>, and <strong>AWS</strong>, ensuring reliable, secure, and automated deployments across enterprise environments.
</p>

            <div className="about-details">
              <div>
                <strong>Name:</strong> Vivek Gaddam
              </div>
              <div>
                <strong>Email:</strong> gaddamvivek01@gmail.com
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
              <h4>4+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h4>3</h4>
              <p>Patents</p>
            </div>
            <div className="stat-box">
              <h4>4</h4>
              <p>Publications</p>
            </div>
            <div className="stat-box">
              <h4>7+</h4>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
