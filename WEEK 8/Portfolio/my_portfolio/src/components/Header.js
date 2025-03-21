// Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  return (
    <header>
      <div className="header-content">
        <h1>My Portfolio</h1>
        <p>Welcome to my personal portfolio website</p>
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
      </button>
      </div>
    </header>
  );
};

export default Header;