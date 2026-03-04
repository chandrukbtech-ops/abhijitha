import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <h4>Abhijit HR Compliance Services</h4>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>

        <li 
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span>Services ▾</span>
          {dropdown && (
            <ul className="dropdown-menu">
              <li><a href="#">Labour Law Compliance</a></li>
              <li><a href="#">Payroll Management</a></li>
              <li><a href="#">Statutory Audit</a></li>
              <li><a href="#">HR Consulting</a></li>
            </ul>
          )}
        </li>

        <li><a href="/elearning">E-Learning</a></li>
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact">Contact</a></li>

        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>

        <div className="mode">
          <button 
            className="mode-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;