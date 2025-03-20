// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:your.email@example.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Geno Joshua. All rights reserved.</p>
    </footer>
  );
};

export default Footer;