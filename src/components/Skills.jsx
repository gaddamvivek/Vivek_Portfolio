import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages & Databases',
      skills: [
        { name: 'Java', percentage: 90 },
        { name: 'Python', percentage: 95 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'C/C++', percentage: 85 },
        { name: 'SQL', percentage: 95 },
        { name: 'MongoDB', percentage: 85 }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/Twig', percentage: 95 },
        { name: 'CSS/SASS', percentage: 90 },
        { name: 'Tailwind', percentage: 85 },
        { name: 'Drupal', percentage: 95 },
        { name: 'React.js', percentage: 90 },
        { name: 'Next.js', percentage: 80 }
      ]
    },
    {
      title: 'Backend & Cloud',
      skills: [
        { name: 'Node.js', percentage: 90 },
        { name: 'Express.js', percentage: 85 },
        { name: '.NET', percentage: 70 },
        { name: 'AWS', percentage: 85 },
        { name: 'Azure', percentage: 80 },
        { name: 'RESTful APIs', percentage: 90 }
      ]
    },
    {
      title: 'Developer Tools & DevOps',
      skills: [
        { name: 'Docker', percentage: 90 },
        { name: 'Jenkins', percentage: 85 },
        { name: 'GitHub', percentage: 95 },
        { name: 'VS Code', percentage: 95 },
        { name: 'IntelliJ/Eclipse', percentage: 85 },
        { name: 'Linux', percentage: 80 },
        { name: 'Webpack/Vite', percentage: 75 },
        { name: 'PowerShell', percentage: 70 },
         { name: 'Kubernetes', percentage: 80 },  // Added
      { name: 'Terraform', percentage: 80 } 
      ]
    },
    {
      title: 'Project Management & Testing',
      skills: [
        { name: 'Agile/Scrum', percentage: 90 },
        { name: 'JIRA', percentage: 85 },
        { name: 'Selenium', percentage: 80 },
        { name: 'JUnit', percentage: 80 },
        { name: 'Software Design', percentage: 90 },
        { name: 'Kernel', percentage: 70 },
        { name: 'WordPress', percentage: 75 },
        { name: 'LaTeX', percentage: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      {/* <div className="container"> */}
        <h2 className="section-title">TECHNICAL SKILLS</h2>
        <blockquote>"Mastering tools that transform ideas into scalable solutions"</blockquote>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </section>
  );
};

export default Skills;