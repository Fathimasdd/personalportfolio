import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Full-Stack Grocery App',
      period: 'Oct 2024 – Dec 2024',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      description: 'Built a MERN stack grocery platform with authentication, search, and cart functionalities. Designed responsive UI and optimized backend queries to enhance speed and user experience. Improved product discovery, boosting overall purchase efficiency.',
      github: 'https://github.com/Fathimasdd/GroceryFullStack',
      live: 'https://egss.onrender.com/',
      gradient: 'gradient-1'
    },
    {
      title: 'Feredoha – Stock Trading Platform',
      period: '2024',
      tech: ['ReactJS', 'Node', 'Express', 'MongoDB', 'Jest'],
      description: 'Developed a real-time stock tracking and position management application. Implemented dynamic React dashboards with persistent storage via MongoDB. Achieved 90%+ test coverage with Jest to ensure system stability and reliability.',
      github: 'https://github.com/Fathimasdd/Fullstack-stock-trading-',
      live: 'https://fullstack-stocktrading.onrender.com/',
      gradient: 'gradient-2'
    },
    {
      title: 'AI Resume Analyzer & LinkedIn Job Scraper',
      period: '2024',
      tech: ['Streamlit', 'OpenAI API', 'Selenium', 'LangChain', 'FAISS', 'Python'],
      description: 'Developed an AI-powered resume analyzer using OpenAI API and LangChain for summarizing resumes, evaluating strengths and weaknesses, and offering personalized job title suggestions. Built a Selenium-based LinkedIn job scraper to automate extraction of real-time job postings.',
      github: 'https://github.com/Fathimasdd/AI_resume_Analyzer',
      live: null,
      gradient: 'gradient-3'
    },
    {
      title: 'Face Attendance System',
      period: '2024',
      tech: ['Python', 'OpenCV', 'Pandas', 'Haar Cascade Classifier'],
      description: 'Developed a Python-based facial recognition attendance system using OpenCV\'s Haar Cascade Classifier. Enabled real-time face scanning to automate attendance logging with timestamps. Utilized Pandas for efficient CSV data handling managing registration, attendance logs, and deletions without a database.',
      github: null,
      live: null,
      gradient: 'gradient-1'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.gradient}`}>
            <div className="project-header">
              <div className="project-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-period">{project.period}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

