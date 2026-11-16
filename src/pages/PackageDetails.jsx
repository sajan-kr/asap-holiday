
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import packagesData from "../data/packagesData";

import PackageHero from "../components/PackageHero";
import PackageGallery from "../components/PackageGallery";
import PackageOverview from "../components/PackageOverview";
import PackageItinerary from "../components/PackageItinerary";
import PackageInclusions from "../components/PackageInclusions";
import PackageReviews from "../components/PackageReviews";
import PackageBookingCard from "../components/PackageBookingCard";
import RelatedPackages from "../components/RelatedPackages";

import "./PackageDetails.css";

const PackageDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const item = packagesData[slug];

  if (!item) {
    return (
      <main className="package-not-found">
        <div className="package-not-found-content">
          <span className="package-not-found-label">
            PACKAGE NOT FOUND
          </span>

          <h1>
            Looks like this journey took a wrong turn.
          </h1>

          <p>
            The travel package you're looking for may be
            unavailable or the link may be incorrect.
          </p>

          <button
            type="button"
            className="package-not-found-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  const packageReviews = Array.isArray(item.reviews)
    ? item.reviews
    : [];

  return (
    <div className="package-details-page">
      {/* 1. Hero */}
      <PackageHero item={item} navigate={navigate} />

      <main className="package-details-content">
        <div className="details-container">
          <div className="details-left">
            {/* 2. Gallery */}
            <PackageGallery item={item} />

            {/* 3. Overview */}
            <PackageOverview item={item} />

            {/* 4. Itinerary */}
            <PackageItinerary item={item} />

            {/* 5. Inclusions */}
            <PackageInclusions item={item} />

            {/* 6. Reviews */}
            <PackageReviews
              key={slug}
              item={item}
              reviews={packageReviews}
            />
          </div>

          <aside className="details-right">
            {/* 7. Booking Card */}
            <PackageBookingCard item={item} />
          </aside>
        </div>

        <div className="related-packages-wrapper">
          {/* 8. Related Packages */}
          <RelatedPackages
            currentSlug={slug}
            currentPackage={item}
            packagesData={packagesData}
          />
        </div>
      </main>
    </div>
  );
};

export default PackageDetails;
