import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onThemeToggle }) => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h1>My Portfolio</h1>
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </div>
    </header>
  );
};