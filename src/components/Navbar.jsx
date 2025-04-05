import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('home');
  
  const handleClick = (section) => {
    setActive(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Vivek Gaddam</div>
        <ul className="navbar-links">
          <li className={active === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>Home</li>
          <li className={active === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>About</li>
          <li className={active === 'experience' ? 'active' : ''} onClick={() => handleClick('experience')}>Experience</li>
          <li className={active === 'skills' ? 'active' : ''} onClick={() => handleClick('skills')}>Skills</li>
          <li className={active === 'projects' ? 'active' : ''} onClick={() => handleClick('projects')}>Projects</li>
          <li className={active === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;