// src/components/HeroBanner.js
import React from "react";
import "./HeroBanner.css";
import bannerImage from "../assets/banner_image.png"; // Adjust path to your image

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Top-Rated SEO Company in Dubai | Drive Organic Growth</h1>
        <h2>Boost Your Online Presence with Data-Driven SEO Strategies</h2>
        <p>
          We help businesses in Dubai dominate search rankings with
          cutting-edge, ROI-focused SEO solutions. Increase visibility, attract
          qualified leads, and grow your revenue with our expert team.
        </p>
        <ul className="features-list">
          <li>📍 Dubai-based experts | Proven results | Tailored strategies</li>
          <li>✅ 97% client retention rate | 🚀 50K+ keywords ranked </li>
        </ul>
        <button className="cta-button">Get a Free SEO Audit</button>
      </div>

      <div className="hero-image">
        <img src={bannerImage} alt="SEO Illustration" />
      </div>
    </section>
  );
}

export default HeroBanner;
