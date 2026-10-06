import React from "react";
import { useParams } from "react-router-dom";

import { destinationsData } from "../data/destinationsData";

// Destination page components
import DestinationHero from "../components/DestinationHero";
import DestinationHighlights from "../components/DestinationHighlights";
import DestinationGallery from "../components/DestinationGallery";
import DestinationGuide from "../components/DestinationGuide";
import TravelerTestimonials from "../components/TravelerTestimonials";
import DestinationFAQ from "../components/DestinationFAQ";
import DestinationCTA from "../components/DestinationCTA";

import "./DestinationDetails.css";

const DestinationDetails = () => {
  const { slug } = useParams();

  // Find destination from URL slug
  const destination = destinationsData.find(
    (item) => item.slug === slug
  );

  // If destination doesn't exist
  if (!destination) {
    return (
      <div className="destination-not-found">
        <div>
          <span>404</span>

          <h1>Destination Not Found</h1>

          <p>
            Sorry, we couldn't find this destination.
          </p>

          <a
            href="/"
            className="destination-back-btn"
          >
            Back To Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="destination-page">

      {/* 01. Destination Hero */}
      <DestinationHero
        destination={destination}
      />

      {/* 02. Destination Highlights */}
      <DestinationHighlights
        destination={destination}
      />

      {/* 03. Destination Gallery */}
      <DestinationGallery
        destination={destination}
      />

      {/* 04. Destination Travel Guide */}
      <DestinationGuide
        destination={destination}
      />

      {/* 05. Traveler Testimonials */}
      <TravelerTestimonials
        destination={destination}
      />

      {/* 06. Destination FAQ */}
      <DestinationFAQ
        destination={destination}
      />

      {/* 07. Final CTA */}
      <DestinationCTA
        destination={destination}
      />

    </main>
  );
};

export default DestinationDetails;