import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      
      {/* Logo Section */}
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <h4>Abhijit HR Compliance Services</h4>
      </div>

      {/* Hamburger Button */}
      <button 
        className="hamburger"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>

        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>

        <li 
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setDropdown(true)}
          onMouseLeave={() => window.innerWidth > 768 && setDropdown(false)}
        >
          <span onClick={() => window.innerWidth <= 768 && setDropdown(!dropdown)}>
            Services ▾
          </span>

          {dropdown && (
            <ul className="dropdown-menu">
              <li><a href="#">Labour Law Compliance</a></li>
              <li><a href="#">Payroll Management</a></li>
              <li><a href="#">Statutory Audit</a></li>
              <li><a href="#">HR Consulting</a></li>
              <li><a href="#">New Labor Codes Consulting</a></li>
            </ul>
          )}
        </li>

        <li><a href="/elearning">E-Learning</a></li>
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact">Contact</a></li>

        <li className="auth-buttons">
          <button className="login-btn">Login</button>
        </li>

        <li className="mode">
          <button 
            className="mode-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;