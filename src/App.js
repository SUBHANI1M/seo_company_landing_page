// src/App.js
import React from "react";
import HeroBanner from "./components/HeroBanner";
import SEOBenefitsSection from "./components/SEOBenefitsSection";
import SEOServices from "./components/SEOServices";
import WhyChoose from "./components/WhyChoose";
import ComprehensiveSEO from "./components/ComprehensiveSEO";
import ClientsSay from "./components/ClientsSay";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <SEOBenefitsSection />
      <SEOServices />
      <WhyChoose />
      <ComprehensiveSEO />
      <ClientsSay />
    </div>
  );
}

export default App;
