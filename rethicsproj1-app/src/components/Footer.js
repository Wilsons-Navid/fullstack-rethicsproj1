import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/rethics4africa/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
        <p>&copy; 2025 RETHICS. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
