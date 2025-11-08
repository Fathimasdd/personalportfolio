import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">AF</span>
        </div>
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="#education" onClick={() => scrollToSection('education')}>Education</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

