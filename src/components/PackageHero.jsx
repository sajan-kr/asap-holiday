import React from "react";
import {
  MapPin,
  Star,
  Clock,
  ChevronRight,
  Sparkles,
  ArrowDown,
} from "lucide-react";

import "./PackageHero.css";

const PackageHero = ({ item, navigate }) => {
  if (!item) return null;

  const scrollToBooking = () => {
    document.getElementById("package-booking")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="package-hero">
      {/* Background Image */}
      <div className="package-hero-background">
        <img
          src={item.image}
          alt={item.title}
          className="package-hero-image"
        />

        <div className="package-hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="package-hero-container">
        {/* Breadcrumb */}
        <nav className="package-hero-breadcrumb" aria-label="Breadcrumb">
          <button
            type="button"
            onClick={() => navigate?.("/")}
            className="package-hero-home"
          >
            Home
          </button>

          <ChevronRight size={15} />

          <span>Holiday Packages</span>

          <ChevronRight size={15} />

          <span className="package-hero-current">{item.title}</span>
        </nav>

        {/* Premium Badge */}
        <div className="package-hero-badge">
          <Sparkles size={15} />
          <span>CURATED HOLIDAY EXPERIENCE</span>
        </div>

        {/* Title */}
        <h1 className="package-hero-title">{item.title}</h1>

        <p className="package-hero-description">
          Discover unforgettable destinations, extraordinary experiences,
          and thoughtfully planned holidays designed just for you.
        </p>

        {/* Package Information */}
        <div className="package-hero-meta">
          <div className="package-hero-meta-item">
            <span className="package-hero-meta-icon">
              <MapPin size={18} />
            </span>

            <div>
              <span className="package-hero-meta-label">Destination</span>
              <strong>{item.location}</strong>
            </div>
          </div>

          <span className="package-hero-divider" />

          <div className="package-hero-meta-item">
            <span className="package-hero-meta-icon package-hero-star">
              <Star size={18} />
            </span>

            <div>
              <span className="package-hero-meta-label">Guest Rating</span>
              <strong>{item.rating} / 5</strong>
            </div>
          </div>

          <span className="package-hero-divider" />

          <div className="package-hero-meta-item">
            <span className="package-hero-meta-icon">
              <Clock size={18} />
            </span>

            <div>
              <span className="package-hero-meta-label">Duration</span>
              <strong>{item.duration}</strong>
            </div>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="package-hero-actions">
          <div className="package-hero-price">
            <span>Starting from</span>
            <strong>{item.price}</strong>
            <small>per person</small>
          </div>

          <button
            type="button"
            className="package-hero-cta"
            onClick={scrollToBooking}
          >
            Explore Package
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        className="package-hero-scroll"
        onClick={() =>
          document
            .querySelector(".package-details-content")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to package details"
      >
        <ArrowDown size={17} />
        <span>Discover your journey</span>
      </button>
    </section>
  );
};

export default PackageHero;