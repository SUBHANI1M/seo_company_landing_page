// WhyChoose.js
import React from "react";
import "./WhyChoose.css";
import sampleImg from "../assets/auction.png";
import earth from "../assets/earth.png";
import lineChart from "../assets/line-chart.png";
import search from "../assets/search.png";
import target from "../assets/target.png";
import employe from "../assets/employe.png";

const cardsData = [
  {
    id: 1,
    type: "card1",
    title: "Local Expertise in Dubai’s Market",
    content:
      "Deep understanding of Dubai’s business environment, search trends and customer behavior. Specialized strategies for local businesses, e-commerce, and industries like real estate, hospitality, and healthcare.",
    image: earth,
  },
  {
    id: 2,
    type: "card2",
    title: "Proven Results with Data-Driven SEO",
    content:
      "100+ successful SEO campaigns across various industries. Client success stories with significant traffic growth and higher conversion rates.",
    image: lineChart,
  },
  {
    id: 3,
    type: "card1",
    title: "Transparent & Insightful Reporting",
    content:
      "Monthly performance reports with key insights and actionable recommendations. 24/7 access to real-time analytics dashboards for full transparency.",
    image: search,
  },
  {
    id: 4,
    type: "card2",
    title: "Customized SEO Strategies",
    content:
      "Tailor-made SEO solutions—no one-size-fits-all approach. Strategies built around your business goals, target audience, and competition.",
    image: target,
  },
  {
    id: 5,
    type: "card1",
    title: "Dedicated Team of SEO Experts",
    content:
      "Certified SEO professionals with years of experience in Dubai SEO services. Continuous learning and adaptation to Google algorithm updates.",
    image: employe,
  },
  {
    id: 6,
    type: "card2",
    title: "Partner with us and dominate search rankings in Dubai!",
    content: "Get a Free SEO Audit",
    button: true,
  },
];

const WhyChoose = () => {
  return (
    <div className="whyContainer">
      <h2 className="why-heading">
        Why Choose Us as Your SEO Partner in Dubai?
      </h2>
      <p className="why-subheading">
        At Brandstory, we don’t just offer SEO services—we deliver real,
        measurable results that help businesses thrive in Dubai’s competitive
        digital landscape. Here’s why top brands trust us:
      </p>
      <div className="temp-grid">
        {cardsData.map(({ id, type, title, content, image, button }) => {
          const isCard1 = type === "card1";
          const contentList = content
            .split(".")
            .map((line) => line.trim())
            .filter((line) => line.length > 0)
            .slice(0, 2);

          return (
            <div className="card-wrapper" key={id}>
              {!button && (
                <>
                  <div
                    className={` regular-hexagon-border card${id}   ${
                      isCard1 ? "left" : "right"
                    }`}
                  />
                  <div
                    className={`regular-hexagon-inner  ${
                      isCard1 ? "left" : "right"
                    }`}
                  >
                    <div className="imageCotainer">
                      <img src={image} alt="icon" className="hex-img" />
                      <h3 className="hex-heading">{title}</h3>
                    </div>
                  </div>
                </>
              )}

              <div className={`long-hexagon-border card${id}`} />

              <div
                className={`long-hexagon-inner ${isCard1 ? "left" : "right"} ${
                  button ? "final-card" : ""
                }`}
              >
                <div>
                  {button ? (
                    <>
                      <p className="extra-para">{title}</p>
                      <button className="cta-button">{content}</button>
                    </>
                  ) : (
                    <ul className="content-list">
                      {contentList.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChoose;
