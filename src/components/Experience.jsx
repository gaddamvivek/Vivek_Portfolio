import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-item">
          <h3>Software Engineer II</h3>
          <h4>NYS Office of Information Technology - Strategy &amp; Enterprise Architecture | June 2025 – Present</h4>
          <div className="tags">
            <span>Generative AI</span><span>Vertex AI</span><span>Gemini 2.5</span><span>Spring AI</span><span>Java 21</span><span>Spring Boot</span><span>React</span><span>TypeScript</span><span>Angular</span><span>Node.js</span><span>Express.js</span><span>Python</span><span>Flask</span><span>Cloud Run</span><span>Firestore</span><span>BigQuery</span><span>GCP</span><span>Oracle DB</span><span>PostgreSQL</span><span>OAuth 2.0</span><span>OIDC</span><span>SAML</span><span>LDAP</span><span>DAWS</span><span>ADFS</span><span>Red Hat</span><span>IBM WebSphere</span><span>Docker</span><span>Helm</span><span>Kubernetes</span><span>OpenShift</span><span>GitLab CI/CD</span><span>OpenTofu</span><span>SonarQube</span><span>Dynatrace</span><span>Microservices</span>
          </div>
          <ul className="highlights">
            <li>Engineering <strong>AI Sparkle Pro</strong>, a production Generative AI assistant for NY State agencies on Google Cloud — Java 21 / Spring Boot 3.5 backend with Spring AI integrating Vertex AI and Gemini 2.5 Flash Lite for chat, document Q&amp;A, coding support, and multimodal analysis of uploaded PDFs and images</li>
            <li>Designed two-service Cloud Run deployment (React/TypeScript Web + Spring Boot API) with Global Cloud Load Balancer, Cloud Armor, Firestore for persistent chat memory, BigQuery for analytics, ADFS OIDC SSO, and GitLab CI/CD via Kaniko, Skopeo, and OpenTofu</li>
            <li>Built full-stack password management app for NY.GOV ID IAM platform (20M+ users) using Angular, Spring Boot, OAuth 2.0/SAML, and LDAP, reducing verification time by 40%</li>
            <li>Developed Flask-based bulk upload automation with DAWS/SOAP integration and PostgreSQL, cutting user provisioning time by 85%; later re-architected as a Java EE 8 WAR on IBM WebSphere for enterprise standardization</li>
            <li>Built self-service Developer Portal for NY State agencies using Angular, Spring Boot, and Oracle DB, enabling identity verification onboarding via a guided wizard workflow</li>
            <li>Engineered Tier 0 IAM infrastructure using Red Hat Directory Server and IBM WebSphere microservices, supporting high availability across NY.GOV ID systems under heavy concurrent load</li>
            <li>Built automated log-analysis pipeline using Splunk REST API and Python (requests, pandas) to parse high-volume email logs, identify invalid entries, and clean stale LDAP accounts</li>
            <li>Containerized and shipped applications to OpenShift using Docker, Helm, and GitLab CI/CD, integrating SonarQube, OWASP ZAP, and Elastic APM for code quality, security scanning, and runtime monitoring</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Software Engineer</h3>
          <h4>NYS Office of Information Technology Services (WebNY) | May 2024 – May 2025</h4>
          <div className="tags">
            <span>Drupal</span><span>PHP</span><span>JavaScript</span><span>TypeScript</span><span>HTML5/CSS3</span><span>Twig</span><span>Bootstrap</span><span>WCAG</span><span>Acquia Cloud</span><span>CI/CD</span><span>GitHub Actions</span><span>Docker</span><span>JIRA</span>
          </div>
          <ul className="highlights">
            <li>Maintained 10+ platforms using Drupal, PHP, and JavaScript with WCAG standards on Acquia Cloud, reducing vulnerabilities by 70%</li>
            <li>Optimized HTML5, CSS3, and Twig templates, achieving 50% reduction in page load times across state web properties</li>
            <li>Established CI/CD pipelines with GitHub Actions and Docker, cutting production rollback incidents by 60%</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Founder/CEO &amp; Software Developer</h3>
          <h4>EFORGE NexGen Innovations Pvt. Ltd. | March 2021 – April 2023</h4>
          <div className="tags">
            <span>Python</span><span>TensorFlow</span><span>scikit-learn</span><span>MLflow</span><span>Go</span><span>C++</span><span>C#</span><span>AWS</span><span>Linux</span><span>Docker</span><span>AI/IoT</span><span>ML</span><span>Android</span><span>REST APIs</span>
          </div>
          <ul className="highlights">
            <li>Created scalable Python (Flask) backends on AWS/Linux for AI/IoT platforms with pandas/NumPy data pipelines and REST APIs, reducing processing latency by 50%</li>
            <li>Trained and deployed ML-powered analytics dashboards (TensorFlow, scikit-learn, MLflow) with real-time inference on cross-platform Android apps using Docker, achieving 35% workflow automation gains</li>
            <li>Mentored 5+ engineers in ML system design, model deployment, and on-call operations</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Software Engineer Intern</h3>
          <h4>NewGen Innovation Center, CVR College of Engineering | Jan 2020 – Mar 2021</h4>
          <div className="tags">
            <span>Python</span><span>scikit-learn</span><span>TensorFlow</span><span>C/C++</span><span>ML</span><span>IoT</span><span>AWS</span><span>Data Analytics</span>
          </div>
          <ul className="highlights">
            <li>Developed ML solutions in Python (scikit-learn, TensorFlow) and C++ for IoT-based smart farming, improving resource management by 25%</li>
            <li>Published 4 research papers in Scopus-indexed journals and co-invented 3 patents in precision farming and environmental monitoring</li>
          </ul>
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