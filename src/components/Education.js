import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech. in Computer Science',
      institution: 'SRM University, AP',
      period: '2022 – 2026',
      gpa: 'GPA: 8.88/10.0',
      details: 'Pursuing Bachelor of Technology with focus on software development, algorithms, and modern web technologies.'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College, Guntur',
      period: '2020 – 2022',
      gpa: 'Percentage: 97.8%',
      details: 'Completed intermediate education with Mathematics, Physics, and Chemistry.'
    }
  ];

  const certificates = [
    {
      name: 'MongoDB Certified',
      issuer: 'MongoDB',
      description: 'Certified in MongoDB database management and operations'
    }
  ];

  const hackathons = [
    {
      name: 'Smart India Hackathon (SIH)',
      period: 'Aug 2024',
      description: 'Participated and developed a fertilizer recommendation system using ML on crop, soil, and weather inputs.'
    }
  ];

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
              </svg>
            </div>
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-institution">{edu.institution}</div>
              <div className="education-period">{edu.period}</div>
              <div className="education-gpa">{edu.gpa}</div>
              <p className="education-details">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="certificates-section">
        <h3 className="subsection-title">Certificates</h3>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">🏆</div>
              <h4 className="certificate-name">{cert.name}</h4>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hackathons-section">
        <h3 className="subsection-title">Hackathons</h3>
        <div className="hackathons-grid">
          {hackathons.map((hack, index) => (
            <div key={index} className="hackathon-card">
              <div className="hackathon-icon">💻</div>
              <h4 className="hackathon-name">{hack.name}</h4>
              <p className="hackathon-period">{hack.period}</p>
              <p className="hackathon-description">{hack.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

