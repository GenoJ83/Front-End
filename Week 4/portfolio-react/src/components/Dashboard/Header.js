import React, { useState, useEffect } from 'react';
import ThemeToggle from '../Layout/ThemeToggle';

function Header({ onLogout }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h1>My Portfolio</h1>
          <div>
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 