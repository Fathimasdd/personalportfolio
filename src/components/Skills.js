import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'Kotlin']
    },
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js', 'Material Design']
    },
    {
      title: 'Backend & DevOps',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Docker']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Room', 'DataStore']
    },
    {
      title: 'Data Analysis & ML',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'XGBoost', 'Random Forest', 'ANN', 'CNN', 'RNN']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-name">{skill}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: `${85 + Math.random() * 15}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skills-highlight">
        <div className="highlight-card">
          <div className="highlight-icon">🚀</div>
          <h4>Always Learning</h4>
          <p>Continuously exploring new technologies and best practices</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">💡</div>
          <h4>Problem Solver</h4>
          <p>Passionate about finding elegant solutions to complex challenges</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🎨</div>
          <h4>UI/UX Focused</h4>
          <p>Creating beautiful and intuitive user experiences</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

