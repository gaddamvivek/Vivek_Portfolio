import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C#', 'Go', 'C/C++', 'PHP', 'SQL']
    },
    {
      title: 'Frameworks',
      skills: ['Spring Boot', 'ASP.NET', 'Flask', 'Django', 'FastAPI', 'React.js', 'Angular', 'Next.js', 'Node.js', 'Express.js', 'React Native', 'Maven', 'Hibernate', 'JUnit']
    },
    {
      title: 'Web & Frontend',
      skills: ['HTML5', 'CSS3', 'SASS', 'Tailwind', 'Bootstrap', 'JQuery', 'Drupal', 'Twig']
    },
    {
      title: 'Identity & Auth (IAM)',
      skills: ['Okta', 'OAuth 2.0', 'SAML (Security Assertion Markup Language)', 'JWT', 'LDAP (Lightweight Directory Access Protocol)', 'Red Hat Directory Server', 'Spring Security']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'OpenShift', 'Helm', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'IBM WebSphere', 'DAWS (Directory & Auth Web Services)', 'Linux', 'SaaS']
    },
    {
      title: 'Databases & Tools',
      skills: ['PostgreSQL', 'MongoDB', 'Oracle DB', 'REST/SOAP APIs', 'Git', 'GitLab', 'JIRA', 'SonarQube', 'Selenium', 'Dynatrace', 'Android Studio']
    },
    {
      title: 'AI / ML',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI API', 'LangChain', 'MLflow', 'NLTK', 'spaCy', 'Pandas', 'NumPy']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">TECHNICAL SKILLS</h2>
      <blockquote>"Mastering tools that transform ideas into scalable solutions"</blockquote>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.title}</h3>
            <div className="skills-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
