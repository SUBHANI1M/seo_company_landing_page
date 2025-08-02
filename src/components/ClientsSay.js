import React, { useState, useEffect } from "react";
import "./ClientsSay.css";
import system from "../assets/system.jpg";
import shoping from "../assets/shopping.jpg";

const clientCards = [
  {
    title: "E-Commerce SEO in Downtown Dubai",
    client: "Leading Fashion Retailer in Dubai",
    results: [
      "150% increase in organic traffic within 6 months",
      "85% boost in online sales",
      '#1 ranking for "luxury fashion in Dubai"',
    ],
    quote:
      "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies! ",
    author: "Mighty Warner",
    image: shoping,
  },
  {
    title: "Healthcare SEO Campaign",
    client: "Dubai-based Clinic",
    results: [
      "120% growth in appointment bookings",
      "Increased Google Maps visibility",
      "Ranked #1 for “family doctor Dubai”",
    ],
    quote: "Incredible ROI from SEO. Patients doubled!",
    author: "Dr. Laila Clinic",
    image: system,
  },
  {
    title: "Local SEO for Restaurant",
    client: "Fine Dining in JLT",
    results: [
      "2x online reservations in 3 months",
      "TripAdvisor traffic up 60%",
      "Top 3 ranking for 'romantic restaurants Dubai'",
    ],
    quote: "Best investment we've made in marketing.",
    author: "Chef Ravi",
    image: shoping,
  },
  {
    title: "Real Estate Website Optimization",
    client: "Premium Property Portal",
    results: [
      "Organic leads up 140%",
      "Page speed improved by 80%",
      "Top 5 position for 10+ keywords",
    ],
    quote: "We started getting quality leads every week!",
    author: "Desert Villas",
    image: system,
  },
  {
    title: "Tech Startup SEO",
    client: "Dubai-based SaaS Company",
    results: [
      "300% growth in trial signups",
      "Doubled website traffic in 4 months",
      "Featured in local tech blogs",
    ],
    quote: "SEO helped us break into the market fast.",
    author: "Ztech Founder",
    image: shoping,
  },
  {
    title: "Boutique Fashion SEO",
    client: "Online Clothing Store",
    results: [
      "Instagram traffic converted 40% more",
      "Boosted Shopify SEO",
      "Ranked for 15+ fashion keywords",
    ],
    quote: "Our sales and visibility exploded!",
    author: "StyleHive",
    image: system,
  },
];

const ClientsSay = () => {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((index + 1) % clientCards.length);
  const prevCard = () =>
    setIndex((index - 1 + clientCards.length) % clientCards.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % clientCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-wrapper">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <p className="testimonial-subtitle">
        Real businesses. Real results. See how our Dubai SEO strategies have
        helped brands grow.
      </p>

      <div className="testimonial-slider">
        <button className="nav-arrow left-arrow" onClick={prevCard}>
          &#10094;
        </button>

        <div className="testimonial-card">
          <img
            src={clientCards[index].image}
            alt="Client"
            className="testimonial-image"
          />
          <div className="testimonial-content">
            <h3 className="testimonial-title">{clientCards[index].title}</h3>
            <p className="testimonial-client">
              <strong>Client:</strong> {clientCards[index].client}
            </p>
            <ul className="testimonial-results">
              {clientCards[index].results.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <blockquote className="testimonial-quote">
              “{clientCards[index].quote}”
            </blockquote>
            <p className="testimonial-author">{clientCards[index].author}</p>
          </div>
        </div>

        <button className="nav-arrow right-arrow" onClick={nextCard}>
          &#10095;
        </button>
      </div>

      <div className="testimonial-dots">
        {clientCards.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      <div className="testimonial-cta">
        <p>Want to see similar results for your business?</p>
        <button className="testimonial-button">Get a Free SEO Audit</button>
      </div>
    </section>
  );
};

export default ClientsSay;
