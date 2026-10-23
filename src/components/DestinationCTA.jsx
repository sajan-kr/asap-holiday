
import React from "react";
import {
  FaArrowRight,
  FaWhatsapp,
  FaHeadset,
  FaPlaneDeparture,
  FaCheck,
  FaHeart,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./DestinationCTA.css";

const DestinationCTA = ({ destination }) => {
  const destinationName =
    destination?.name ||
    destination?.title ||
    "Your Dream Destination";

  const whatsappNumber = "919205129996";

  const whatsappMessage = encodeURIComponent(
    `Hi ASAP Holidays! I am interested in planning a trip to ${destinationName}. I would like to speak with a travel expert.`
  );

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Use an existing destination image when available.
  const backgroundImage =
    destination?.image ||
    destination?.heroImage ||
    destination?.bannerImage ||
    destination?.coverImage ||
    "";

  const duration =
    destination?.duration ||
    destination?.days ||
    "Custom itinerary";

  const price =
    destination?.price ||
    destination?.startingPrice ||
    "";

  const highlights = Array.isArray(destination?.highlights)
    ? destination.highlights.slice(0, 4)
    : [
        "Personalised planning",
        "Expert guidance",
        "Handpicked experiences",
        "Flexible itinerary",
      ];

  return (
    <section
      id="destination-cta"
      className="destination-cta"
    >
      <div className="destination-cta__container">

        {/* CINEMATIC DESTINATION BACKGROUND */}
        <div
          className="destination-cta__hero"
          style={
            backgroundImage
              ? {
                  "--destination-cta-image":
                    `url("${backgroundImage}")`,
                }
              : undefined
          }
        >
          {/* Background overlays */}
          <div
            className="destination-cta__overlay"
            aria-hidden="true"
          />

          <div
            className="destination-cta__glow"
            aria-hidden="true"
          />

          {/* Top labels */}
          <div className="destination-cta__topbar">
            <span>ASAP HOLIDAYS</span>

            <span className="destination-cta__topbar-right">
              <span className="destination-cta__live-dot" />
              PERSONALIZED TRIP PLANNING
            </span>
          </div>

          {/* MAIN GRID */}
          <div className="destination-cta__layout">

            {/* LEFT CONTENT */}
            <div className="destination-cta__content">

              <div className="destination-cta__eyebrow">
                <span className="destination-cta__eyebrow-icon">
                  <FaPlaneDeparture />
                </span>

                YOUR NEXT ADVENTURE AWAITS
              </div>

              <h2 className="destination-cta__title">
                Don't just book
                <br />
                a trip.{" "}
                <span>Plan it.</span>
              </h2>

              <p className="destination-cta__description">
                Tell us what you want from your holiday.
                Our travel experts will help you discover
                {` ${destinationName}`} and create an experience
                tailored to you.
              </p>

              {/* ACTIONS */}
              <div className="destination-cta__actions">

                <a
                  href="/contact"
                  className="destination-cta__primary-btn"
                >
                  <span>Plan Your Journey</span>

                  <span className="destination-cta__button-icon">
                    <FaArrowRight />
                  </span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="destination-cta__whatsapp-btn"
                  aria-label="Contact ASAP Holidays on WhatsApp"
                >
                  <FaWhatsapp />
                  <span>Let's Talk</span>
                </a>

              </div>

              {/* TRUST POINTS */}
              <div className="destination-cta__trust">

                <span>
                  <FaCheck />
                  Personalised planning
                </span>

                <span>
                  <FaCheck />
                  No booking pressure
                </span>

              </div>

            </div>

            {/* RIGHT ENQUIRY CARD */}
            <aside className="destination-cta__card">

              <div className="destination-cta__card-header">
                <div>
                  <span className="destination-cta__card-eyebrow">
                    START YOUR ENQUIRY
                  </span>

                  <h3>
                    {destinationName}
                    <span> Experience</span>
                  </h3>
                </div>

                <div
                  className="destination-cta__card-heart"
                  aria-hidden="true"
                >
                  <FaHeart />
                </div>
              </div>

              {/* TRIP DETAILS */}
              <div className="destination-cta__stats">

                <div className="destination-cta__stat">
                  <span>Destination</span>

                  <strong>
                    <FaMapMarkerAlt />
                    {destinationName}
                  </strong>
                </div>

                <div className="destination-cta__stat">
                  <span>Duration</span>

                  <strong>
                    <FaClock />
                    {duration}
                  </strong>
                </div>

                <div className="destination-cta__stat">
                  <span>Planning</span>

                  <strong>Custom trip</strong>
                </div>

              </div>

              {/* HIGHLIGHTS */}
              <div className="destination-cta__highlights">
                {highlights.map((highlight, index) => {
                  const label =
                    typeof highlight === "string"
                      ? highlight
                      : highlight?.title ||
                        highlight?.name ||
                        "";

                  if (!label) return null;

                  return (
                    <div
                      className="destination-cta__highlight"
                      key={`${label}-${index}`}
                    >
                      <FaCheck />
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CARD ACTIONS */}
              <div className="destination-cta__card-actions">

                <a
                  href="/contact"
                  className="destination-cta__card-primary"
                >
                  <span>
                    <small>LET'S GET STARTED</small>
                    Plan my trip
                  </span>

                  <FaArrowRight />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="destination-cta__card-whatsapp"
                  aria-label="Chat with a travel expert on WhatsApp"
                >
                  <FaWhatsapp />
                </a>

              </div>

              {/* SUPPORT FOOTER */}
              <div className="destination-cta__card-footer">

                <a href={`tel:+${whatsappNumber}`}>
                  <FaPhoneAlt />
                  Need help? Talk to our experts
                </a>

                <span>
                  <FaHeadset />
                  Expert assistance
                </span>

              </div>

              {price && (
                <div className="destination-cta__price">
                  <span>Indicative package price</span>
                  <strong>{price}</strong>
                </div>
              )}

            </aside>

          </div>

          {/* BOTTOM BRAND STRIP */}
          <div className="destination-cta__bottom">
            <span>TRAVEL WELL. DISCOVER MORE.</span>

            <span className="destination-cta__bottom-line" />

            <span>YOUR NEXT CHAPTER STARTS HERE</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DestinationCTA;