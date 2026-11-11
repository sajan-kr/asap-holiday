
import React, { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Star,
  Check,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  Compass,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

import "./PackageOverview.css";

const PackageOverview = ({ item, onEnquire }) => {
  const [expanded, setExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  if (!item) return null;

  const title = item.title || "Your Holiday Experience";
  const location = item.location || "Destination";
  const duration = item.duration || "Flexible Duration";
  const description =
    item.description ||
    `Discover the beauty of ${location} with a thoughtfully planned holiday experience.`;

  const rating = Number(item.rating);
  const hasRating = Number.isFinite(rating) && rating > 0 && rating <= 5;

  const highlights = Array.isArray(item.highlights)
    ? item.highlights
        .map((value) =>
          typeof value === "string"
            ? value
            : value?.title || value?.name || ""
        )
        .filter(Boolean)
    : [];

  const visibleHighlights = showAll
    ? highlights
    : highlights.slice(0, 6);

  const isLongDescription = description.length > 260;

  return (
    <section className="po-section">
      <div className="po-header">
        <div className="po-heading">
          <div className="po-eyebrow">
            <span className="po-eyebrow-line" />
            <Sparkles size={14} />
            DISCOVER YOUR JOURNEY
          </div>

          <h2>
            Your Journey, <em>At a Glance.</em>
          </h2>

          <p>
            Explore the details that make this holiday
            experience worth looking forward to.
          </p>
        </div>

        <div className="po-header-mark">
          <Compass size={25} strokeWidth={1.4} />
        </div>
      </div>

      <div className="po-summary">
        <div className="po-summary-title">
          <span className="po-summary-kicker">
            PACKAGE OVERVIEW
          </span>
          <h3>{title}</h3>
        </div>

        <div className="po-facts">
          <div className="po-fact">
            <div className="po-fact-icon">
              <MapPin size={20} />
            </div>
            <div>
              <span>DESTINATION</span>
              <strong>{location}</strong>
            </div>
          </div>

          <div className="po-fact">
            <div className="po-fact-icon">
              <CalendarDays size={20} />
            </div>
            <div>
              <span>DURATION</span>
              <strong>{duration}</strong>
            </div>
          </div>

          {hasRating && (
            <div className="po-fact">
              <div className="po-fact-icon">
                <Star size={20} />
              </div>
              <div>
                <span>GUEST RATING</span>
                <strong>{rating.toFixed(1)} / 5</strong>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="po-body">
        <div className="po-section-heading">
          <div>
            <span className="po-section-kicker">
              GET TO KNOW YOUR TRIP
            </span>
            <h3>About This Experience</h3>
          </div>
          <span className="po-section-index">01</span>
        </div>

        <div className="po-description">
          <p className={!expanded ? "po-clamped" : ""}>
            {description}
          </p>

          {isLongDescription && (
            <button
              type="button"
              className="po-text-button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? "Show Less" : "Read Full Overview"}
              <ChevronDown
                size={16}
                className={expanded ? "po-rotate" : ""}
              />
            </button>
          )}
        </div>

        {highlights.length > 0 && (
          <div className="po-highlights">
            <div className="po-section-heading">
              <div>
                <span className="po-section-kicker">
                  THE BEST OF YOUR TRIP
                </span>
                <h3>Experience Highlights</h3>
              </div>
              <span className="po-section-index">02</span>
            </div>

            <div className="po-highlights-grid">
              {visibleHighlights.map((highlight, index) => (
                <div className="po-highlight" key={index}>
                  <span className="po-highlight-check">
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {highlights.length > 6 && (
              <button
                type="button"
                className="po-text-button"
                onClick={() => setShowAll(!showAll)}
                aria-expanded={showAll}
              >
                {showAll
                  ? "Show Fewer Highlights"
                  : `View All ${highlights.length} Highlights`}
                <ChevronDown
                  size={16}
                  className={showAll ? "po-rotate" : ""}
                />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="po-footer">
        <div className="po-footer-left">
          <span className="po-footer-icon">
            <BadgeCheck size={23} strokeWidth={1.8} />
          </span>

          <div>
            <strong>Ready to explore {location}?</strong>
            <p>
              Have questions? Our travel team is here to help
              you plan your holiday.
            </p>
          </div>
        </div>

        {typeof onEnquire === "function" && (
          <button
            type="button"
            className="po-enquire-btn"
            onClick={() => onEnquire(item)}
          >
            Plan My Trip
            <ArrowUpRight size={18} />
          </button>
        )}
      </div>
    </section>
  );
};

export default PackageOverview;
