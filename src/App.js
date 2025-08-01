// src/App.js
import React from "react";
import HeroBanner from "./components/HeroBanner";
import SEOBenefitsSection from "./components/SEOBenefitsSection";
import SEOServices from "./components/SEOServices";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <SEOBenefitsSection />
      <SEOServices />
      <WhyChoose />
    </div>
  );
}

export default App;
