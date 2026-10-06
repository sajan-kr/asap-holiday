import React, { useEffect, useState } from "react";

import {
  FaMapMarkerAlt,
  FaPlay,
  FaArrowRight,
  FaStar,
  FaClock,
  FaCalendarAlt,
  FaHotel,
  FaPlane,
  FaUtensils,
  FaHeadset,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

import "./DestinationHero.css";

const DestinationHero = ({ destination }) => {
  const [showVideo, setShowVideo] = useState(false);

  /* =========================================================
     DESTINATION DATA
     Your data uses "title", not "name"
  ========================================================= */

  const destinationTitle =
    destination?.title || "Amazing Destination";

  const destinationImage =
    destination?.image || null;

  const destinationVideo =
    destination?.video || null;

  const destinationRating =
    destination?.rating || "4.9";

  const destinationPrice =
    destination?.price || "Contact Us";

  const destinationDuration =
    destination?.duration || "Custom Trip";

  const destinationLocation =
    destination?.location || destination?.country || "Explore Now";

  const destinationDescription =
    destination?.description ||
    "Discover unforgettable experiences, beautiful places and amazing moments with ASAP Holidays.";

  /* =========================================================
     VIDEO MODAL
  ========================================================= */

  const openVideo = () => {
    setShowVideo(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setShowVideo(false);
    document.body.style.overflow = "";
  };

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    if (showVideo) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showVideo]);

  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  const handleExplore = () => {
    const target =
      document.getElementById("destination-highlights") ||
      document.getElementById("destination-guide");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =========================================================
     SCROLL TO GUIDE
  ========================================================= */

  const handleScrollDown = () => {
    const target =
      document.getElementById("destination-highlights") ||
      document.getElementById("destination-guide");

    target?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /* =========================================================
     SAFETY
  ========================================================= */

  if (!destination) {
    return null;
  }

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="destination-hero">

        {/* ===================================================
            HERO BACKGROUND
        =================================================== */}

        <div className="destination-hero__background">

          {/* -----------------------------------------------
              IMAGE DESTINATIONS
              Example:
              Ladakh
              Bali
              Dubai
              Kashmir
              etc.
          ------------------------------------------------ */}

          {destinationImage && (
            <div
              className="destination-hero__image"
              style={{
                backgroundImage: `url("${destinationImage}")`,
              }}
            />
          )}

          {/* -----------------------------------------------
              VIDEO DESTINATIONS
              Example:
              Himachal Pradesh
              Japan
          ------------------------------------------------ */}

          {!destinationImage && destinationVideo && (
            <video
              className="destination-hero__video-background"
              src={destinationVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          {/* -----------------------------------------------
              FALLBACK
          ------------------------------------------------ */}

          {!destinationImage && !destinationVideo && (
            <div className="destination-hero__fallback" />
          )}
        </div>

        {/* ===================================================
            OVERLAY
        =================================================== */}

        <div className="destination-hero__overlay" />

        <div className="destination-hero__bottom-overlay" />


        {/* ===================================================
            CONTENT CONTAINER
        =================================================== */}

        <div className="destination-container destination-hero__container">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="destination-hero__content">

            {/* Location */}
            <div className="destination-hero__location">

              <FaMapMarkerAlt />

              <span>
                {destinationLocation}
              </span>

            </div>


            {/* =================================================
                TITLE
            ================================================= */}

            <h1>
              Explore{" "}
              <span>{destinationTitle}</span>
            </h1>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="destination-hero__description">
              {destinationDescription}
            </p>


            {/* =================================================
                QUICK DESTINATION INFO
            ================================================= */}

            <div className="destination-hero__quick-info">

              <div>
                <FaCalendarAlt />
                <span>{destinationDuration}</span>
              </div>

              <div>
                <FaStar />
                <span>{destinationRating} Rating</span>
              </div>

            </div>


            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div className="destination-hero__actions">

              <button
                type="button"
                className="destination-hero__primary-btn"
                onClick={handleExplore}
              >
                <span>
                  Explore Destination
                </span>

                <FaArrowRight />
              </button>


              {/* Video button only when video exists */}

              {destinationVideo && (
                <button
                  type="button"
                  className="destination-hero__video-btn"
                  onClick={openVideo}
                >
                  <span className="destination-hero__play">
                    <FaPlay />
                  </span>

                  <span>
                    Watch Video
                  </span>
                </button>
              )}

            </div>


            {/* =================================================
                STATS
            ================================================= */}

            <div className="destination-hero__stats">

              <div className="destination-hero__stat">

                <div className="destination-hero__stat-icon">
                  <FaStar />
                </div>

                <div>
                  <strong>
                    {destinationRating}
                  </strong>

                  <small>
                    Guest Rating
                  </small>
                </div>

              </div>


              <div className="destination-hero__stat">

                <div className="destination-hero__stat-icon">
                  <FaClock />
                </div>

                <div>
                  <strong>
                    {destinationDuration}
                  </strong>

                  <small>
                    Trip Duration
                  </small>
                </div>

              </div>


              <div className="destination-hero__stat">

                <div className="destination-hero__stat-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <strong>
                    {destination.cities?.length || 1}+
                  </strong>

                  <small>
                    Places
                  </small>
                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              BOOKING CARD
          ================================================= */}

          <div className="destination-hero__booking">

            {/* Top label */}

            <div className="destination-hero__booking-top">

              <span>
                PLAN YOUR JOURNEY
              </span>

              <div className="destination-hero__live">
                <span />
                Available
              </div>

            </div>


            {/* Title */}

            <h2>
              {destinationTitle}
            </h2>


            <p className="destination-hero__booking-description">
              Plan your perfect holiday with
              personalized travel assistance from
              ASAP Holidays.
            </p>


            {/* =================================================
                PRICE
            ================================================= */}

            <div className="destination-hero__price">

              <div>
                <span>
                  Starting From
                </span>

                <strong>
                  {destinationPrice}
                </strong>
              </div>

              <div className="destination-hero__price-duration">
                <FaClock />
                <span>
                  {destinationDuration}
                </span>
              </div>

            </div>


            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="destination-hero__features">

              <div className="destination-hero__feature">

                <div className="destination-hero__feature-icon">
                  <FaHotel />
                </div>

                <div>
                  <strong>
                    Hotels
                  </strong>

                  <span>
                    Comfortable stays
                  </span>
                </div>

              </div>


              <div className="destination-hero__feature">

                <div className="destination-hero__feature-icon">
                  <FaPlane />
                </div>

                <div>
                  <strong>
                    Flights
                  </strong>

                  <span>
                    Flight assistance
                  </span>
                </div>

              </div>


              <div className="destination-hero__feature">

                <div className="destination-hero__feature-icon">
                  <FaUtensils />
                </div>

                <div>
                  <strong>
                    Meals
                  </strong>

                  <span>
                    Meal options
                  </span>
                </div>

              </div>


              <div className="destination-hero__feature">

                <div className="destination-hero__feature-icon">
                  <FaHeadset />
                </div>

                <div>
                  <strong>
                    Support
                  </strong>

                  <span>
                    24/7 assistance
                  </span>
                </div>

              </div>

            </div>


            {/* =================================================
                CTA
            ================================================= */}

            <a
              href="/contact"
              className="destination-hero__booking-btn"
            >
              <span>
                Plan My Trip
              </span>

              <FaArrowRight />
            </a>


            {/* Trust */}

            <div className="destination-hero__trust">

              <FaStar />

              <span>
                Trusted by thousands of travelers
              </span>

            </div>

          </div>

        </div>


        {/* ===================================================
            DESTINATION HIGHLIGHTS MINI BAR
        =================================================== */}

        {destination.highlights?.length > 0 && (
          <div className="destination-hero__highlights">

            <div className="destination-hero__highlights-inner">

              {destination.highlights
                .slice(0, 4)
                .map((item, index) => (
                  <div
                    className="destination-hero__highlight"
                    key={`${item}-${index}`}
                  >
                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {item}
                    </strong>
                  </div>
                ))}

            </div>

          </div>
        )}


        {/* ===================================================
            SCROLL BUTTON
        =================================================== */}

        <button
          type="button"
          className="destination-hero__scroll"
          onClick={handleScrollDown}
          aria-label="Scroll down"
        >
          <span>
            <FaChevronDown />
          </span>

          <small>
            Explore
          </small>
        </button>

      </section>


      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {showVideo && destinationVideo && (

        <div
          className="destination-video-modal"
          onClick={closeVideo}
        >

          <div
            className="destination-video-modal__content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* Close */}

            <button
              type="button"
              className="destination-video-modal__close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <FaTimes />
            </button>


            {/* Video */}

            <video
              src={destinationVideo}
              controls
              autoPlay
              playsInline
            />

          </div>

        </div>

      )}

    </>
  );
};

export default DestinationHero;