import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container" >

        {/* Company Info */}
        <div className="footer-col">
          <h3>Abhijit HR Compliance Services</h3>
          <p>
            Abhijit HR Compliance Services provides reliable, professional, 
            and excellence-driven HR consulting solutions. We focus on 
            delivering measurable results while maintaining transparency, 
            integrity, and strict confidentiality standards.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/elearning">E-Library</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Establishment Compliance Services</li>
            <li>Factory Compliance Services</li>
            <li>Payroll Management Support</li>
            <li>Post Payroll Services – EPF / ESI / PT</li>
            <li>HR Shared Services</li>
            <li>HR Due Diligence Audit</li>
            <li>Labour Law Updates & Legal Consultation</li>
            <li>Management Consultancy Services</li>
          </ul>
        </div>

        {/* Reach Us */}
        <div className="footer-col">
          <h4>Reach Us</h4>
          <p>
            <FaMapMarkerAlt className="footer-icon" />
            No. 123, Business Tower, Anna Salai, Chennai, Tamil Nadu 600002
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            044 – 4000 1234
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91 90000 00000
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            info@abhijithr.com
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            support@abhijithr.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Abhijit HR Compliance Services. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;