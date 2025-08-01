import React from "react";
import "./SEOServices.css";

const services = [
  {
    title: "Keyword Research & Strategy",
    description:
      "We identify high-value keywords that align with your target audience’s search intent, ensuring your business appears in relevant searches.",
    points: [
      "Competitor analysis & market research",
      "Long-tail keyword strategy for high conversion rates",
      "Industry-specific keyword optimization (e.g., SEO for luxury brands in Dubai)",
    ],
  },
  {
    title: "On-Page Optimization",
    description:
      "Our team fine-tunes your website’s content, structure, and metadata to improve rankings and user experience.",
    points: [
      "Optimized meta titles, descriptions, and headers",
      "SEO-friendly content enhancements",
      "Internal linking & URL structuring",
    ],
  },
  {
    title: "Technical SEO",
    description:
      "We ensure your website is fast, mobile-friendly, and technically sound for search engine crawlers.",
    points: [
      "Website speed optimization & Core Web Vitals improvements",
      "Schema markup for better search visibility",
      "Mobile responsiveness & secure HTTPS implementation",
    ],
  },
  {
    title: "Local SEO (Google My Business & Citations)",
    description:
      "Dominate local search results and attract nearby customers with expert local SEO in Dubai.",
    points: [
      "Google My Business optimization for Dubai-based businesses",
      "Local citations & NAP (Name, Address, Phone) consistency",
      "Customer review management & local backlink strategies",
    ],
  },
  {
    title: "Content Marketing & SEO Copywriting",
    description:
      "Engaging, value-driven content that boosts rankings and keeps your audience engaged.",
    points: [
      "Blog writing with Dubai SEO best practices",
      "SEO-optimized landing pages & service pages",
      "Content tailored for real estate SEO in Dubai, healthcare, e-commerce, and more",
    ],
  },
  {
    title: "Ethical Link Building",
    description:
      "We build high-quality, white-hat backlinks to enhance your website’s authority.",
    points: [
      "Guest posting & outreach campaigns",
      "Niche-specific backlinks for Dubai industries",
      "Brand mentions & PR-driven link acquisition",
    ],
  },
  {
    title: "Performance Tracking & Reporting",
    description:
      "We provide transparent SEO reports with clear insights into rankings, traffic, and ROI.",
    points: [
      "Google Analytics & Search Console monitoring",
      "Monthly SEO performance reports with actionable insights",
      "Ongoing strategy refinement based on data-driven decisions",
    ],
  },
];

const SEOServices = () => {
  return (
    <div className="seo-services-container">
      <h1 className="heading">Our Comprehensive SEO Services In Dubai</h1>
      <p className="subheading">
        At Brandstory, we offer a full suite of Dubai SEO services designed to
        help businesses rank higher, attract quality traffic, and maximize ROI.
        Whether you’re a restaurant in Dubai Marina or an e-commerce store in
        Downtown Dubai, our customized strategies deliver real results.
      </p>

      <div className="cards-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="card final">
          <h3>Ready to Elevate Your Online Presence?</h3>
          <button>Get a Free SEO Audit</button>
        </div>
      </div>
    </div>
  );
};

export default SEOServices;
