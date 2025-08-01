// src/components/SEOBenefitsSection.js
import React from "react";
import "./SEOBenefitsSection.css";
import eyeIcon from "../assets/eye.png";
import chartIcon from "../assets/bar-graphic.png";
import speakerIcon from "../assets/public-relation.png";
import trophyIcon from "../assets/trophy.png";
import roiIcon from "../assets/money-bag.png";
import conversion from "../assets/conversion.png";
import transaction from "../assets/transaction.png";
import auction from "../assets/auction.png";
import piechart from "../assets/pie-chart.png";

const benefits = [
  {
    icon: eyeIcon,
    title: "Increased Visibility",
    desc: [
      "SEO helps businesses in Dubai to rank higher in search engine results, making them more visible to potential customers.",
    ],
    bg: "#EC696A",
  },
  {
    icon: chartIcon,
    title: "Targeted Traffic",
    desc: [
      "SEO helps businesses to attract targeted traffic to their websites, increasing the chances of conversions.",
    ],
    bg: "#302357",
  },
  {
    icon: speakerIcon,
    title: "Brand Awareness",
    desc: [
      "SEO helps businesses to build brand awareness and establish themselves as leaders in their industry.",
    ],
    bg: "#845EF7",
  },
  {
    icon: trophyIcon,
    title: "Competitive Advantage",
    desc: [
      "SEO helps businesses to gain a competitive advantage over their rivals.",
    ],
    bg: "#31A8FE",
  },
  {
    icon: roiIcon,
    title: "Cost-Effective",
    desc: [
      "SEO is a cost-effective marketing strategy that can generate a high ROI.",
    ],
    bg: "#EA7D30",
  },
];
const seoBenefits = [
  {
    icon: chartIcon,
    title: "Increased Website Traffic",
    desc: [
      "SEO can help to increase website traffic from organic search results.",
    ],
    bg: "#EC696A",
  },
  {
    icon: conversion,
    title: "Improved Conversion Rates",
    desc: [
      "SEO can help to improve conversion rates by attracting targeted traffic to your website.",
    ],
    bg: "#302357",
  },
  {
    icon: transaction,
    title: "Higher ROI",
    desc: [
      "SEO is a cost-effective marketing strategy that can generate a high ROI.",
    ],
    bg: "#845EF7",
  },
  {
    icon: auction,
    title: "Brand Authority",
    desc: [
      "SEO can help to build brand authority and establish your business as a leader in your industry.",
    ],
    bg: "#31A8FE",
  },
  {
    icon: roiIcon,
    title: "Long-Term Results",
    desc: [
      "SEO is a long-term strategy that can provide sustainable results for your business.",
    ],
    bg: "#EA7D30",
  },
];

function SEOBenefitsSection() {
  return (
    <section className="seo-section">
      <div className="seo-container">
        <h2 className="seo-heading">
          Dominate Dubai’s Competitive Market with Expert SEO Solutions
        </h2>
        <p className="seo-paragraph">
          In Dubai’s fast-paced digital landscape, standing out among
          competitors is a challenge. Businesses struggle with high competition,
          shifting search algorithms, and the need for a strong online presence
          to attract local and international customers.
        </p>
        <p className="seo-paragraph">
          As a leading SEO company in Dubai, we specialize in tailored Dubai SEO
          services that drive measurable growth. With years of experience
          optimizing businesses in diverse industries, we understand the unique
          challenges of the Dubai market. Our data-driven strategies ensure your
          brand ranks higher, attracts the right audience, and achieves
          long-term success.
        </p>

        <h3 className="seo-subheading">Importance of SEO in Dubai</h3>

        <div className="seo-grid">
          {benefits.map((item, index) => (
            <div key={index} className="seo-card">
              <div
                className="seo-icon-box"
                style={{ backgroundColor: item.bg }}
              >
                <img src={item.icon} alt={item.title} className="seo-icon" />
              </div>
              <h4 className="seo-card-title">{item.title}</h4>
              <div className="seo-card-desc">
                {item.desc.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h3 className="seo-subheading">Benefits of SEO</h3>

        <div className="seo-grid">
          {seoBenefits.map((item, index) => (
            <div key={index} className="seo-card">
              <div
                className="seo-icon-box"
                style={{ backgroundColor: item.bg }}
              >
                <img src={item.icon} alt={item.title} className="seo-icon" />
              </div>
              <h4 className="seo-card-title">{item.title}</h4>
              <div className="seo-card-desc">
                {item.desc.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SEOBenefitsSection;
