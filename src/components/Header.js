import React, { useState, useEffect } from 'react';
import logo from '../IMAGES/Silogo.svg';

const Header = ({ isAltBg }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply/remove the dark mode class on the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="App-header">
      <nav className="header-nav">
        <div className="brand-logo-container">
          <img src={logo} alt="Silicon Logo" className="brand-logo" />
          <span className="company-title">Silicon</span>
        </div>
        <ul className="nav-menu-list">
          <li><a className="nav-link-item" href="#">Features</a></li>
        </ul>
        <div className="nav-right-section">
          <div className="theme-toggle-container">
            <label className="theme-switch">
              <input
                type="checkbox"
                id="darkModeToggle"
                onChange={toggleDarkMode}
                checked={isDarkMode}
              />
              <span className="switch-slider"></span>
            </label>
            <span className="dark-mode-text">Dark Mode</span>
          </div>
          <button className="auth-button">Sign in / up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
