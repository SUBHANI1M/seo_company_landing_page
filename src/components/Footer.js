import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo-section">
          <h2 className="footer-brand">BrandStory</h2>
          <p className="footer-description">
            We provide top-notch SEO and digital marketing services tailored to
            your business growth in Dubai.
          </p>
        </div>

        <div className="footer-links-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#SEOServices">Services</a>
            </li>
            <li>
              <a href="#WhyChoose">Why Us</a>
            </li>
            <li>
              <a href="#ServingBusiness">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-social-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© {new Date().getFullYear()} BrandStory. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
