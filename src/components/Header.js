import React from 'react';
import logo from '../IMAGES/Silogo.svg';

const Header = () => (
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
            <input type="checkbox" id="darkModeToggle" />
            <span className="switch-slider"></span>
          </label>
          <span className="dark-mode-text">Dark Mode</span>
        </div>
        <button className="auth-button">Sign in / up</button>
      </div>
    </nav>
  </header>
);

export default Header;
