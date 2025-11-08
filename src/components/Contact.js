import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    const mailtoLink = `mailto:ashraf fathima@srmap.edu.in?subject=Contact from Portfolio&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ashraf fathima@srmap.edu.in',
      link: 'mailto:ashraf fathima@srmap.edu.in'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 8074840488',
      link: 'tel:+918074840488'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'fathimasdd',
      link: 'https://www.linkedin.com/in/fathimasdd/'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'Fathimasdd',
      link: 'https://github.com/Fathimasdd'
    }
  ];

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        I'm always open to discussing new opportunities, interesting projects, or just having a chat!
      </p>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-info-title">Let's Connect</h3>
          <p className="contact-info-description">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="contact-detail-item"
              >
                <div className="detail-icon">{info.icon}</div>
                <div className="detail-content">
                  <div className="detail-label">{info.label}</div>
                  <div className="detail-value">{info.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="social-links">
            <a href="https://github.com/Fathimasdd" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/fathimasdd/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
      <div className="footer">
        <p>© 2024 Ashraf Fathima. Built with React.js</p>
      </div>
    </section>
  );
};

export default Contact;

