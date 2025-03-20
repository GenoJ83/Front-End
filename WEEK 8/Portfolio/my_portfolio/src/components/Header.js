// Header.js
import React from "react";

const Header = ({ lightMode, setLightMode }) => {
  return (
    <header>
      <h1>Geno Joshua</h1>
      <p>Welcome to my personal portfolio page!</p>
      <button 
        className="toggle-button" 
        onClick={() => setLightMode(!lightMode)}
        aria-label={`Switch to ${lightMode ? 'dark' : 'light'} mode`}
      >
        <i className={`fas fa-${lightMode ? 'moon' : 'sun'}`}></i>
        {lightMode ? ' Dark Mode' : ' Light Mode'}
      </button>
    </header>
  );
};

export default Header;