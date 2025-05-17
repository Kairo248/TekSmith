import React from 'react';
import './Footer.css'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} TechSmith. All rights reserved.</p>
          <p>Contact us: smithkaya404@gmail.com</p>
        </div>

        <div className="footer-links">
          <a href="/login">Login</a>
          <a href="/profile">Create Profile</a>
          <a href="/products">Shop Now</a>
        </div>

        <div className="footer-socials">
          <p>Follow us:</p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF /> 
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> 
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> 
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub /> 
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
