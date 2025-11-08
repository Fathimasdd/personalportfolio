import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            I'm a passionate <span className="highlight">Software Development Engineer</span> and 
            <span className="highlight"> Frontend Developer</span> with a strong foundation in building 
            scalable web applications. I love creating beautiful, user-friendly interfaces and solving 
            complex problems through code.
          </p>
          <p className="about-description">
            My journey in software development has been driven by curiosity and a desire to create 
            impactful solutions. I specialize in modern web technologies and enjoy working with 
            React.js to build responsive, performant applications.
          </p>
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            <div className="gradient-border"></div>
            <div className="image-container">
              <img src="/my_photo.jpg" alt="Ashraf Fathima" className="profile-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

