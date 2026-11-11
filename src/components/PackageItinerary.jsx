
import React, {
  useEffect,
  useRef,
  useState,
  useId,
} from "react";

import {
  Route,
  MapPin,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Hotel,
  UtensilsCrossed,
  Check,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "./PackageItinerary.css";

const PackageItinerary = ({ item }) => {
  const [expandedDays, setExpandedDays] = useState([0]);
  const dayRefs = useRef([]);
  const id = useId();

  const itinerary = Array.isArray(item?.itinerary)
    ? item.itinerary
    : [];

  useEffect(() => {
    setExpandedDays(itinerary.length ? [0] : []);
  }, [item?.itinerary]);

  if (!itinerary.length) return null;

  const allExpanded =
    expandedDays.length === itinerary.length;

  const toggleDay = (index) => {
    setExpandedDays((current) =>
      current.includes(index)
        ? current.filter((day) => day !== index)
        : [...current, index]
    );
  };

  const expandAll = () => {
    setExpandedDays(
      allExpanded
        ? []
        : itinerary.map((_, index) => index)
    );
  };

  const goToDay = (index) => {
    setExpandedDays([index]);

    // Wait for React to render the opened card
    requestAnimationFrame(() => {
      dayRefs.current[index]?.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "center",
      });
    });
  };

  const getActivities = (plan) => {
    if (!Array.isArray(plan.activities)) return [];

    return plan.activities.filter(
      (activity) =>
        typeof activity === "string" &&
        activity.trim()
    );
  };

  return (
    <section className="package-itinerary">
      {/* HEADER */}
      <div className="pi-header">
        <div className="pi-heading">
          <div className="pi-eyebrow">
            <span className="pi-eyebrow-icon">
              <Route size={16} />
            </span>
            EXPLORE YOUR JOURNEY
          </div>

          <h2>
            Every day, a new
            <span> discovery.</span>
          </h2>

          <p>
            Explore your carefully arranged travel
            itinerary and discover the experiences
            waiting for you along the way.
          </p>
        </div>

        <div className="pi-header-decoration">
          <Sparkles size={24} />
        </div>
      </div>

      {/* TRIP INFORMATION */}
      <div className="pi-trip-info">
        <div className="pi-trip-info-item">
          <div className="pi-trip-icon">
            <MapPin size={19} />
          </div>

          <div>
            <span>DESTINATION</span>
            <strong>
              {item.location || "Your Destination"}
            </strong>
          </div>
        </div>

        <div className="pi-trip-divider" />

        <div className="pi-trip-info-item">
          <div className="pi-trip-icon">
            <CalendarDays size={19} />
          </div>

          <div>
            <span>TOUR DURATION</span>
            <strong>
              {item.duration ||
                `${itinerary.length} Days`}
            </strong>
          </div>
        </div>
      </div>

      {/* DAY NAVIGATION */}
      <div className="pi-navigation">
        <div className="pi-navigation-header">
          <div>
            <span className="pi-section-label">
              YOUR DAILY PLAN
            </span>

            <h3>Explore day by day</h3>
          </div>

          <button
            className="pi-expand-button"
            type="button"
            onClick={expandAll}
          >
            {allExpanded
              ? "Collapse All"
              : "Expand All"}

            <ChevronDown
              size={16}
              className={
                allExpanded ? "is-rotated" : ""
              }
            />
          </button>
        </div>

        <div className="pi-day-navigation">
          {itinerary.map((plan, index) => (
            <button
              key={index}
              type="button"
              className={`pi-day-tab ${
                expandedDays.includes(index)
                  ? "is-active"
                  : ""
              }`}
              onClick={() => goToDay(index)}
              aria-label={`View day ${index + 1}`}
            >
              <span>DAY</span>
              <strong>
                {String(index + 1).padStart(2, "0")}
              </strong>
            </button>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="pi-timeline">
        {itinerary.map((plan, index) => {
          const isOpen = expandedDays.includes(index);
          const activities = getActivities(plan);
          const description =
            plan.text || plan.description || "";

          const location =
            plan.location || item.location;

          const panelId = `${id}-panel-${index}`;

          return (
            <article
              key={index}
              ref={(node) => {
                dayRefs.current[index] = node;
              }}
              className={`pi-day ${
                isOpen ? "is-open" : ""
              }`}
            >
              <div className="pi-timeline-marker">
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>
              </div>

              <div className="pi-day-card">
                <button
                  type="button"
                  className="pi-day-trigger"
                  onClick={() => toggleDay(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="pi-day-heading">
                    <span className="pi-day-label">
                      {plan.day ||
                        `DAY ${index + 1}`}
                    </span>

                    <h4>
                      {plan.title ||
                        "Explore Your Destination"}
                    </h4>

                    {location && (
                      <div className="pi-day-location">
                        <MapPin size={14} />
                        {location}
                      </div>
                    )}
                  </div>

                  <div className="pi-toggle-icon">
                    <ChevronDown size={19} />
                  </div>
                </button>

                <div
                  id={panelId}
                  className={`pi-day-details ${
                    isOpen ? "is-visible" : ""
                  }`}
                  inert={!isOpen}
                >
                  <div className="pi-day-details-inner">
                    <div className="pi-day-content">
                      {description && (
                        <div className="pi-description">
                          <div className="pi-content-icon">
                            <Sparkles size={17} />
                          </div>

                          <div>
                            <span className="pi-content-label">
                              DAY OVERVIEW
                            </span>

                            <p>{description}</p>
                          </div>
                        </div>
                      )}

                      {activities.length > 0 && (
                        <div className="pi-activities">
                          <span className="pi-content-label">
                            PLANNED EXPERIENCES
                          </span>

                          <div className="pi-activity-grid">
                            {activities.map(
                              (activity, i) => (
                                <div
                                  className="pi-activity"
                                  key={i}
                                >
                                  <span className="pi-check">
                                    <Check size={13} />
                                  </span>

                                  {activity}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {(plan.time ||
                        plan.meals ||
                        plan.stay) && (
                        <div className="pi-extra-info">
                          {plan.time && (
                            <div>
                              <Clock3 size={16} />
                              {plan.time}
                            </div>
                          )}

                          {plan.meals && (
                            <div>
                              <UtensilsCrossed size={16} />
                              {plan.meals}
                            </div>
                          )}

                          {plan.stay && (
                            <div>
                              <Hotel size={16} />
                              {plan.stay}
                            </div>
                          )}
                        </div>
                      )}

                      {!description &&
                        !activities.length &&
                        !plan.time &&
                        !plan.meals &&
                        !plan.stay && (
                          <p className="pi-empty">
                            More details about this day
                            will be provided by our team.
                          </p>
                        )}
                    </div>
                  </div>
                </div>

                {index < itinerary.length - 1 && (
                  <div className="pi-next">
                    <span>
                      NEXT: DAY {index + 2}
                    </span>
                    <ChevronRight size={14} />
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="pi-footer">
        <div className="pi-footer-icon">
          <Sparkles size={21} />
        </div>

        <div>
          <strong>
            Your adventure starts here.
          </strong>

          <p>
            Every day is an opportunity to create
            unforgettable memories. Actual timings
            and arrangements may vary.
          </p>
        </div>

        <ArrowUpRight
          size={20}
          className="pi-footer-arrow"
        />
      </div>
    </section>
  );
};

export default PackageItinerary;
