import React from "react";
import "./SocialMedia.css";
import xIcon from "../assets/x.png";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.png";

const SocialMedia = () => {
  return (
    <section className="social-media-section">
      <h2 className="social-media-heading">
        Our Experience Extends Across All Social Media Channels, <br />
        Ensuring Your Complete Presence
      </h2>

      <div className="social-media-icons">
        <a href="#" className="icon-wrapper" aria-label="X">
          <img src={xIcon} alt="X" />
        </a>
        <a href="#" className="icon-wrapper" aria-label="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="#" className="icon-wrapper" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="#" className="icon-wrapper" aria-label="Facebook">
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
