import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Android App Developer (Virtual Internship)',
      company: 'Google Developers – AICTE',
      period: '2024',
      description: [
        'Built Android apps using Kotlin, Jetpack Compose, and Material Design',
        'Integrated Room, DataStore, and REST APIs for local and remote data sync',
        'Handled navigation and background jobs using Jetpack libraries'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Clinchstack',
      period: 'Jun 2025 – Jul 2025',
      description: [
        'Developed responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React',
        'Implemented reusable components and state management to improve performance and maintainability',
        'Collaborated with designers and backend developers to integrate APIs and enhance UI/UX'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-company">{exp.company}</div>
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;