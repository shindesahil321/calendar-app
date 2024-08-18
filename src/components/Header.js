import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // Assuming you have a theme context
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const headerStyle = {
    '--header-bg-color': theme === 'light' ? '#f8f9fa' : '#343a40',
    '--header-text-color': theme === 'light' ? '#343a40' : '#f8f9fa'
  };

  return (
    <header className="header-container" style={headerStyle}>
      <h1 className="title">Calendar App</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        {/* Add more nav links here if needed */}
      </nav>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
