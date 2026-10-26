import React from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Home,
  MapPin,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react";

import "./PackageHero.css";

const PackageHero = ({ item, navigate }) => {
  if (!item) return null;

  const title = item.title || "Discover Your Next Escape";
  const location = item.location || "Explore the destination";
  const image = item.image;
  const rating = item.rating || "4.9";
  const duration = item.duration || "Custom itinerary";
  const price = item.price;

  const handleBooking = () => {
    const bookingSection = document.querySelector("#package-booking");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleExplore = () => {
    const detailsSection = document.querySelector(
      ".package-details-content"
    );

    if (detailsSection) {
      detailsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleHome = () => {
    if (typeof navigate === "function") {
      navigate("/");
    } else {
      window.location.href = "/";
    }
  };

  const formattedPrice =
    price !== undefined &&
    price !== null &&
    price !== ""
      ? typeof price === "number"
        ? `₹${price.toLocaleString("en-IN")}`
        : String(price)
      : null;

  return (
    <section className="package-hero">
      {/* Background image */}
      <div className="package-hero__background">
        {image && (
          <img
            src={image}
            alt={title}
            className="package-hero__image"
            fetchPriority="high"
          />
        )}

        <div className="package-hero__overlay" />
        <div className="package-hero__accent" />
      </div>

      {/* Main content */}
      <div className="package-hero__container">
        {/* Breadcrumb */}
        <nav
          className="package-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <button
            type="button"
            className="package-hero__breadcrumb-home"
            onClick={handleHome}
            aria-label="Go to homepage"
          >
            <Home size={15} strokeWidth={1.8} />
            <span>Home</span>
          </button>

          <span className="package-hero__breadcrumb-divider">
            /
          </span>

          <span className="package-hero__breadcrumb-parent">
            Destinations
          </span>

          <span className="package-hero__breadcrumb-divider">
            /
          </span>

          <span
            className="package-hero__breadcrumb-current"
            title={title}
          >
            {title}
          </span>
        </nav>

        {/* Hero layout */}
        <div className="package-hero__main">
          <div className="package-hero__content">
            {/* Eyebrow */}
            <div className="package-hero__eyebrow">
              <span className="package-hero__eyebrow-line" />

              <Sparkles
                size={15}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <span>YOUR NEXT GREAT ESCAPE</span>
            </div>

            {/* Title */}
            <h1 className="package-hero__title">
              {title}
              <span className="package-hero__title-highlight">
                .
              </span>
            </h1>

            {/* Location */}
            <div className="package-hero__location">
              <MapPin size={17} strokeWidth={1.8} />

              <span>{location}</span>
            </div>

            {/* Description */}
            <p className="package-hero__description">
              Discover remarkable places, unforgettable
              experiences, and thoughtfully planned journeys
              designed around the way you love to travel.
            </p>

            {/* Package information */}
            <div className="package-hero__details">
              <div className="package-hero__detail">
                <span className="package-hero__detail-icon package-hero__detail-icon--star">
                  <Star size={17} fill="currentColor" />
                </span>

                <span className="package-hero__detail-copy">
                  <span className="package-hero__detail-label">
                    Guest rating
                  </span>

                  <span className="package-hero__detail-value">
                    {rating}
                    <span className="package-hero__rating-caption">
                      / 5
                    </span>
                  </span>
                </span>
              </div>

              <span
                className="package-hero__detail-divider"
                aria-hidden="true"
              />

              <div className="package-hero__detail">
                <span className="package-hero__detail-icon">
                  <Clock3 size={18} strokeWidth={1.7} />
                </span>

                <span className="package-hero__detail-copy">
                  <span className="package-hero__detail-label">
                    Duration
                  </span>

                  <span className="package-hero__detail-value">
                    {duration}
                  </span>
                </span>
              </div>

              <span
                className="package-hero__detail-divider package-hero__detail-divider--optional"
                aria-hidden="true"
              />

              <div className="package-hero__detail package-hero__detail--flexible">
                <span className="package-hero__detail-icon">
                  <CalendarDays
                    size={18}
                    strokeWidth={1.7}
                  />
                </span>

                <span className="package-hero__detail-copy">
                  <span className="package-hero__detail-label">
                    Travel style
                  </span>

                  <span className="package-hero__detail-value">
                    Made for you
                  </span>
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="package-hero__actions">
              <button
                type="button"
                className="package-hero__cta"
                onClick={handleBooking}
              >
                <span>Plan Your Trip</span>

                <span className="package-hero__cta-arrow">
                  <ArrowRight size={18} strokeWidth={2} />
                </span>
              </button>

              <button
                type="button"
                className="package-hero__discover"
                onClick={handleExplore}
              >
                <span className="package-hero__discover-icon">
                  <ArrowDown size={16} />
                </span>

                <span>Explore the journey</span>
              </button>
            </div>

            {/* Trust indicator */}
            <div className="package-hero__trust">
              <ShieldCheck size={16} strokeWidth={1.7} />

              <span>
                Thoughtfully planned. Personally experienced.
              </span>
            </div>
          </div>

          {/* Right-side editorial note */}
          <aside
            className="package-hero__side-note"
            aria-label="Travel inspiration"
          >
            <span className="package-hero__side-note-line" />

            <span className="package-hero__side-note-label">
              THE ART OF TRAVEL
            </span>

            <span className="package-hero__side-note-text">
              Go beyond
              <br />
              the ordinary.
            </span>
          </aside>
        </div>

        {/* Bottom information bar */}
        <div className="package-hero__bottom">
          <div className="package-hero__bottom-intro">
            <span className="package-hero__bottom-index">
              01
            </span>

            <span className="package-hero__bottom-heading">
              A journey worth remembering
            </span>
          </div>

          <div className="package-hero__bottom-right">
            {formattedPrice && (
              <div className="package-hero__bottom-price">
                <span className="package-hero__bottom-price-label">
                  Starting from
                </span>

                <span className="package-hero__bottom-price-value">
                  {formattedPrice}
                </span>
              </div>
            )}

            <button
              type="button"
              className="package-hero__bottom-link"
              onClick={handleExplore}
            >
              <span>Discover more</span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="package-hero__bottom-link-icon"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div
        className="package-hero__vertical-line"
        aria-hidden="true"
      />
    </section>
  );
};

export default PackageHero;