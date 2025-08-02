// src/App.js
import React from "react";
import HeroBanner from "./components/HeroBanner";
import SEOBenefitsSection from "./components/SEOBenefitsSection";
import SEOServices from "./components/SEOServices";
import WhyChoose from "./components/WhyChoose";
import ComprehensiveSEO from "./components/ComprehensiveSEO";
import ClientsSay from "./components/ClientsSay";
import SocialMedia from "./components/SocialMedia";
import ServingBusiness from "./components/ServingBusiness";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <SEOBenefitsSection />
      <SEOServices />
      <WhyChoose />
      <ComprehensiveSEO />
      <ClientsSay />
      <SocialMedia />
      <ServingBusiness />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
