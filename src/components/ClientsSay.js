import React, { useState, useEffect } from "react";
import "./ClientsSay.css";
import system from "../assets/system.jpg";
const testimonials = new Array(6).fill({
  title: "E-Commerce SEO in Downtown Dubai",
  client: "Leading Fashion Retailer in Dubai",
  results: [
    "150% increase in organic traffic within 6 months",
    "85% boost in online sales through targeted SEO campaigns",
    "#1 ranking for high-competition keywords like “luxury fashion in Dubai”",
  ],
  quote:
    "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
  author: "Mighty Warner",
  image: system,
});

const ClientsSay = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // auto scroll every 4s
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="clients-container">
      <h2 className="title">What Our Clients Say</h2>
      <p className="subtitle">
        Real businesses. Real results. See how our Dubai SEO strategies have
        helped brands grow.
      </p>

      <div className="slider">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="card">
          <img src={testimonials[current].image} alt="Client" />
          <div className="card-content">
            <h3>{testimonials[current].title}</h3>
            <p>
              <strong>Client:</strong> {testimonials[current].client}
            </p>
            <div className="results">
              <strong>Results:</strong>
              <ul>
                {testimonials[current].results.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <blockquote>“{testimonials[current].quote}”</blockquote>
            <p className="author">{testimonials[current].author}</p>
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>

      <div className="cta">
        <p>Want to see similar results for your business?</p>
        <button className="audit-btn">Get a Free SEO Audit</button>
      </div>
    </div>
  );
};

export default ClientsSay;
