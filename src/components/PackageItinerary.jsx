import React, { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  ChevronDown,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";

import "./PackageItinerary.css";

const PackageItinerary = ({ item }) => {
  const [expandedDay, setExpandedDay] = useState(0);

  if (!item || !Array.isArray(item.itinerary) || !item.itinerary.length) {
    return null;
  }

  const itinerary = item.itinerary;

  const toggleDay = (index) => {
    setExpandedDay((current) => (current === index ? -1 : index));
  };

  return (
    <section className="package-itinerary">
      {/* Section Heading */}
      <div className="package-itinerary-header">
        <div>
          <span className="package-itinerary-eyebrow">
            <CalendarDays size={15} />
            YOUR TRAVEL PLAN
          </span>

          <h2>
            Your Journey,
            <br />
            <span>Day by Day.</span>
          </h2>

          <p>
            Every day brings a new experience. Explore your planned itinerary
            and discover what awaits you in {item.location}.
          </p>
        </div>

        <div className="package-itinerary-summary">
          <span className="package-itinerary-summary-icon">
            <Clock size={22} />
          </span>

          <div>
            <strong>{item.duration}</strong>
            <span>Planned Experience</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="package-itinerary-timeline">
        {itinerary.map((plan, index) => {
          const isExpanded = expandedDay === index;

          return (
            <article
              className={`package-itinerary-day ${
                isExpanded ? "is-expanded" : ""
              }`}
              key={`${plan.day || index}-${plan.title || index}`}
            >
              {/* Timeline Marker */}
              <div className="package-itinerary-marker">
                <span className="package-itinerary-marker-dot">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Day Content */}
              <div className="package-itinerary-day-card">
                <button
                  type="button"
                  className="package-itinerary-day-toggle"
                  onClick={() => toggleDay(index)}
                  aria-expanded={isExpanded}
                >
                  <div className="package-itinerary-day-heading">
                    <span className="package-itinerary-day-label">
                      {plan.day || `Day ${index + 1}`}
                    </span>

                    <h3>{plan.title || "Explore Your Destination"}</h3>

                    <span className="package-itinerary-location">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>

                  <span className="package-itinerary-chevron">
                    <ChevronDown size={19} />
                  </span>
                </button>

                {/* Expandable Details */}
                <div
                  className={`package-itinerary-details ${
                    isExpanded ? "is-visible" : ""
                  }`}
                >
                  <div className="package-itinerary-details-inner">
                    <p>
                      {plan.text ||
                        "Enjoy a memorable experience as you discover the beauty of your destination."}
                    </p>

                    <div className="package-itinerary-experience">
                      <div className="package-itinerary-experience-item">
                        <span className="package-itinerary-experience-icon">
                          <Sun size={16} />
                        </span>

                        <div>
                          <strong>Daytime</strong>
                          <span>Explore & Discover</span>
                        </div>
                      </div>

                      <div className="package-itinerary-experience-item">
                        <span className="package-itinerary-experience-icon evening">
                          <Moon size={16} />
                        </span>

                        <div>
                          <strong>Experience</strong>
                          <span>Memories to Treasure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="package-itinerary-footer">
        <span>
          <Sparkles size={17} />
        </span>

        <p>
          <strong>Your adventure, thoughtfully planned.</strong>
          <small>
            Contact our travel team if you need help understanding your
            itinerary.
          </small>
        </p>
      </div>
    </section>
  );
};

export default PackageItinerary;