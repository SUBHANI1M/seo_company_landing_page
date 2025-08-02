import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./ServingBusiness.css";
import locationImg1 from "../assets/locationImg1.png";
import locationImg2 from "../assets/locationImg2.png";
import locationImg3 from "../assets/locationImg3.png";
import locationImg4 from "../assets/locationImg4.png";

// Locations data with images
const locations = [
  {
    name: "Dubai Marina",
    lat: 25.0776,
    lng: 55.136,
    description: "SEO for hospitality, real estate, and tourism businesses",
    image: locationImg1, // Add real image URL here
  },
  {
    name: "Downtown Dubai",
    lat: 25.1972,
    lng: 55.2744,
    description: "E-commerce SEO for high-end brands and shopping outlets",
    image: locationImg2, // Add real image URL here
  },
  {
    name: "Business Bay",
    lat: 25.1856,
    lng: 55.2515,
    description: "Corporate SEO solutions for large enterprises",
    image: locationImg3,
  },
  {
    name: "Jumeirah Beach",
    lat: 25.2048,
    lng: 55.2522,
    description: "SEO for lifestyle brands and leisure businesses",
    image: locationImg4,
  },
  {
    name: "Al Quoz",
    lat: 25.1531,
    lng: 55.2321,
    description: "SEO for creative industries and art galleries",
    image: locationImg2,
  },
];

const ServingBusiness = () => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false); // To check if map is loaded
  const [selectedMarker, setSelectedMarker] = useState(null); // Track the selected marker

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 500); // Wait for 500ms before rendering the map to ensure it loads properly
    return () => clearTimeout(timer);
  }, []);

  // Function to handle location card clicks
  const handleLocationClick = (index) => {
    setActiveLocation(index);
    setSelectedMarker(index); // Highlight marker when card is clicked
  };

  // Map container style
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "8px",
  };

  // Map center based on first location by default
  const center = {
    lat: locations[0].lat,
    lng: locations[0].lng,
  };

  const zoom = 12; // Default zoom level

  return (
    <div className="serving-business-container" id="ServingBusiness">
      <header className="serving-business-header">
        <h1>Serving Businesses Across Dubai</h1>
        <p>
          As a leading SEO company in Dubai, we understand the unique digital
          landscape of the city’s diverse business hubs. Whether you’re a luxury
          retailer in Downtown Dubai, a tech startup in Business Bay, or a
          restaurant in Dubai Marina, our Dubai-focused SEO strategies ensure
          you stand out in local search results.
        </p>

        <h2>Our Key Service Areas in Dubai</h2>
      </header>

      <section className="location-cards">
        <div className="location-map">
          {isMapLoaded ? (
            <LoadScript googleMapsApiKey="AIzaSyCnpx5Xlt7RwerXBamxhUAsKc1508cbLsI">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={zoom}
                onLoad={() => console.log("Google Map Loaded")}
              >
                {locations.map((location, index) => (
                  <Marker
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                    onClick={() => handleLocationClick(index)}
                    icon={{
                      url:
                        selectedMarker === index
                          ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                          : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    }}
                  >
                    {selectedMarker === index && (
                      <InfoWindow>
                        <div>
                          <h4>{location.name}</h4>
                          <p>{location.description}</p>
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                ))}
              </GoogleMap>
            </LoadScript>
          ) : (
            <div>Loading map...</div>
          )}
        </div>
        <div className="locations">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`location-card ${
                activeLocation === index ? "active" : ""
              }`}
              onClick={() => handleLocationClick(index)}
            >
              <img src={location.image} alt={location.name} />
              <div className="card-content">
                <h3>{location.name}</h3>
                <p>{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <p className="buttonAboveLine">
        We tailor our SEO strategies to the needs of Dubai’s dynamic market,
        helping businesses achieve top search rankings and drive local traffic.
      </p>
      <button className="seo-audit-button">Get a Free SEO Audit</button>

      <section className="seo-info-card">
        <div className="seo-info-content">
          <h2>Ready to Grow Your Business with SEO in Dubai?</h2>
          <p>
            Don’t let your competitors outrank you. Take the first step toward
            higher rankings, more traffic, and increased revenue with our expert
            SEO services.
          </p>
          <div className="seo-audit-info">
            <p>Get a Free SEO Audit Today!</p>
            <ul>
              <li>Personalized strategy for your business</li>
              <li>Competitor analysis & keyword opportunities</li>
              <li>No-obligation consultation with an SEO expert</li>
            </ul>
          </div>
          <div className="seo-contact">
            <p>
              <a href="tel:+971522831655">+971 52 283 1655</a>{" "}
              <a href="mailto:info@brandstory.ae">info@brandstory.ae</a>
            </p>
            <p>
              Visit us at: G5, Al Meheri Plaza, opp DBC Building, Al Khabaisi
              Area, Deira Dubai - 81577, United Arab Emirates
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServingBusiness;
