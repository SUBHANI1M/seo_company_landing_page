import React, { useState } from "react";
import "./FaqSection.css";

const faqData = {
  general: [
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy, and results depend on several factors, including industry competition, website history, and the effectiveness of the SEO strategy. Typically, you may start seeing noticeable improvements in rankings, traffic, and conversions within 3 to 6 months. However, more competitive industries may take 6 to 12 months or longer for significant results. Consistency and quality in SEO efforts are key to sustained growth.",
    },
    {
      question: "How do you measure the success of your SEO campaigns?",
      answer: `We track SEO success using key performance indicators (KPIs), such as:
        • Organic Traffic: Visitors from search engines.
        • Keyword Rankings: Improvements in targeted keyword positions.
        • Click-Through Rate (CTR): Percentage of users clicking.
        • Domain Authority & Backlinks: Quality and quantity of backlinks.
       Conversions & ROI: The impact on leads, sales, or other business goals.
            We use tools like Google Analytics, Google Search Console, SEMrush and Ahrefs to monitor performance and provide detailed reports.`,
    },
    {
      question: "What is the difference between on-page and off-page SEO?",
      answer: `
        • On-Page SEO refers to optimizations made on the website itself, such as keyword optimization, content quality, meta tags, internal linking
        and page speed. Think of it as optimizing the "inside" of your store.
        • Off-Page SEO involves external factors that influence your rankings, such as backlinks, social media signals, and brand mentions.
        It's like building your store's reputation through word-of-mouth and partnerships.
        Both are essential for a well-rounded SEO strategy.`,
    },
    {
      question: "Do you provide technical SEO audits?",
      answer: `Yes, we offer comprehensive technical SEO audits to identify and resolve issues that may affect search rankings. Our audits include:
        • Website speed and performance analysis
        • Mobile-friendliness and Core Web Vitals assessment
        • Indexing and crawlability checks
        • Structured data and schema implementation
        • Fixing broken links, redirects and duplicate content
       Our team ensures your website is technically optimized for better search engine visibility.`,
    },
    {
      question:
        "Do you offer content marketing services as part of your SEO packages?",
      answer: `Yes, content marketing is an essential part of our SEO strategy. We provide:
        • SEO-optimized blog writing to improve organic traffic
        • Website content optimization for better engagement and rankings
        • Infographics, videos, and visual content to enhance user experience
        • Content strategy development based on keyword research and competitor analysis
        High-quality content plays a crucial role in ranking well on search engines, and we integrate it seamlessly with our SEO efforts.`,
    },
    {
      question: " What kind of reporting do you provide?",
      answer: ` We provide detailed, transparent, and data-driven reports, including:
        • Monthly SEO performance reports with traffic, rankings and conversions
        • Google Analytics & Search Console insights
        • Backlink analysis and competitor comparisons
        • Recommendations for ongoing optimization
        Our reports ensure you understand how your SEO campaign is progressing and where improvements can be made.`,
    },
    {
      question: " Do you offer SEO for E-commerce websites?",
      answer: ` Yes, we specialize in E-commerce SEO to help online stores improve visibility and sales. Our services include:
        • Product page optimization for better rankings
        • Technical SEO for platforms like Shopify, WooCommerce, and Magento
        • Schema markup for rich snippets (e.g., product reviews, pricing)
        • Conversion rate optimization (CRO) for better sales performance
        We tailor our strategies to maximize organic traffic and revenue for e-commerce businesses.`,
    },
  ],
  dubai: [
    {
      question: "Do you provide technical SEO audits?",
      answer: `Yes, we offer comprehensive technical SEO audits to identify and resolve issues that may affect search rankings. Our audits include:
        • Website speed and performance analysis
        • Mobile-friendliness and Core Web Vitals assessment
        • Indexing and crawlability checks
        • Structured data and schema implementation
        • Fixing broken links, redirects and duplicate content
       Our team ensures your website is technically optimized for better search engine visibility.`,
    },
    {
      question:
        "Do you offer content marketing services as part of your SEO packages?",
      answer: `Yes, content marketing is an essential part of our SEO strategy. We provide:
        • SEO-optimized blog writing to improve organic traffic
        • Website content optimization for better engagement and rankings
        • Infographics, videos, and visual content to enhance user experience
        • Content strategy development based on keyword research and competitor analysis
        High-quality content plays a crucial role in ranking well on search engines, and we integrate it seamlessly with our SEO efforts.`,
    },
  ],
  pricing: [
    {
      question: " What kind of reporting do you provide?",
      answer: ` We provide detailed, transparent, and data-driven reports, including:
        • Monthly SEO performance reports with traffic, rankings and conversions
        • Google Analytics & Search Console insights
        • Backlink analysis and competitor comparisons
        • Recommendations for ongoing optimization
        Our reports ensure you understand how your SEO campaign is progressing and where improvements can be made.`,
    },
    {
      question: " Do you offer SEO for E-commerce websites?",
      answer: ` Yes, we specialize in E-commerce SEO to help online stores improve visibility and sales. Our services include:
        • Product page optimization for better rankings
        • Technical SEO for platforms like Shopify, WooCommerce, and Magento
        • Schema markup for rich snippets (e.g., product reviews, pricing)
        • Conversion rate optimization (CRO) for better sales performance
        We tailor our strategies to maximize organic traffic and revenue for e-commerce businesses.`,
    },
  ],
  company: [
    {
      question: "Do you provide technical SEO audits?",
      answer: `Yes, we offer comprehensive technical SEO audits to identify and resolve issues that may affect search rankings. Our audits include:
        • Website speed and performance analysis
        • Mobile-friendliness and Core Web Vitals assessment
        • Indexing and crawlability checks
        • Structured data and schema implementation
        • Fixing broken links, redirects and duplicate content
       Our team ensures your website is technically optimized for better search engine visibility.`,
    },
    {
      question:
        "Do you offer content marketing services as part of your SEO packages?",
      answer: `Yes, content marketing is an essential part of our SEO strategy. We provide:
        • SEO-optimized blog writing to improve organic traffic
        • Website content optimization for better engagement and rankings
        • Infographics, videos, and visual content to enhance user experience
        • Content strategy development based on keyword research and competitor analysis
        High-quality content plays a crucial role in ranking well on search engines, and we integrate it seamlessly with our SEO efforts.`,
    },
  ],
};

const tabLabels = [
  { key: "general", label: "General FAQ" },
  { key: "dubai", label: "Dubai-Specific SEO FAQs" },
  { key: "pricing", label: "Pricing & Process FAQs" },
  { key: "company", label: "Company & Expertise FAQs" },
];

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-tabs">
        {tabLabels.map((tab) => (
          <button
            key={tab.key}
            className={`faq-tab ${activeTab === tab.key ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="faq-content">
        {faqData[activeTab].map((item, index) => (
          <div key={index} className="faq-card">
            <h4 className="faq-question">{item.question}</h4>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
