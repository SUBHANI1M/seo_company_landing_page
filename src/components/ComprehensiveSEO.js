import React from "react";
import "./ComprehensiveSEO.css";
import system from "../assets/system.jpg";

const ComprehensiveSEO = () => {
  return (
    <div className="seo-container">
      <h2 className="seo-heading">Our Comprehensive SEO Process</h2>
      <div className="seo-content">
        {/* Left: List Section */}
        <ul className="seo-list">
          <li className="active">Understanding Your Business</li>
          <li>Website Architecture Planning</li>
          <li>Competitor Audit</li>
          <li>Keyword Research</li>
          <li>On Page Optimization</li>
          <li>Content Optimization</li>
          <li>Topical Authority Optimization</li>
          <li>UI UX Optimization</li>
          <li>Conversion Rate Optimization - CRO</li>
          <li>Technical Optimization</li>
          <li>Off Page Management</li>
          <li>Monitoring & Reporting</li>
        </ul>

        {/* Right: Red Section */}
        <div className="seo-detail">
          <h3>Understanding Your Business</h3>
          <img src={system} alt="Understanding Your Business" />
          <p>
            At Brandstory, we prioritize understanding your business,
            objectives, and unique aspects to craft a tailored SEO strategy. As
            your trusted SEO expert in Dubai, we begin with a comprehensive
            website audit, identifying and fixing technical and on-page SEO
            issues. While premium tools help address quick fixes, we go beyond
            by ensuring complete error-free optimization for better crawl
            accessibility and user experience. Our strategic approach aligns
            with your business model, driving enhanced visibility and long-term
            growth in the competitive Dubai market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSEO;
