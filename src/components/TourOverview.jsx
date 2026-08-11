
import React, { useState } from "react";
import "./TourOverview.css";

import {
  FaMapMarkerAlt,
  FaClock,
  FaPlaneDeparture,
  FaStar,
  FaShareAlt,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaTag,
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";

const TourOverview = ({ tour }) => {
  const [showAll, setShowAll] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!tour) return null;

  const highlights = Array.isArray(tour.highlights)
    ? tour.highlights
    : [];

  const visibleHighlights = showAll
    ? highlights
    : highlights.slice(0, 6);

  /* =========================
     SHARE TOUR
  ========================= */

  const handleShare = async () => {
    const shareData = {
      title: tour.title,
      text: `Explore ${tour.title} - ${tour.location}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          window.location.href
        );

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  /* =========================
     BOOK TOUR
  ========================= */

  const handleBookNow = () => {
    const bookingSection =
      document.getElementById("tour-booking");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="tourOverview">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="overviewMainHeader">

        <div className="overviewHeading">

          <div className="overviewEyebrow">
            <span></span>
            ABOUT THIS TOUR
          </div>

          <h2>{tour.title}</h2>

          <div className="overviewLocation">

            <FaMapMarkerAlt />

            <span>
              {tour.location}
            </span>

            <i></i>

            <FaClock />

            <span>
              {tour.duration}
            </span>

          </div>

        </div>


        {/* SHARE */}

        <button
          type="button"
          className="overviewShare"
          onClick={handleShare}
        >
          <FaShareAlt />

          <span>
            {copied ? "Link Copied!" : "Share Tour"}
          </span>
        </button>

      </div>


      {/* =====================================
          DESCRIPTION
      ===================================== */}

      <div className="overviewDescriptionBox">

        <p>
          {tour.description}
        </p>

      </div>


      {/* =====================================
          TOUR SNAPSHOT
      ===================================== */}

      <div className="tourSnapshot">


        {/* DURATION */}

        <div className="snapshotItem">

          <div className="snapshotIcon">
            <FaClock />
          </div>

          <div>

            <span>
              Duration
            </span>

            <strong>
              {tour.duration}
            </strong>

          </div>

        </div>


        {/* RATING */}

        <div className="snapshotItem">

          <div className="snapshotIcon ratingIcon">
            <FaStar />
          </div>

          <div>

            <span>
              Guest Rating
            </span>

            <strong className="ratingValue">

              {tour.rating}

              <small>
                / 5
              </small>

            </strong>

            <em>
              {tour.reviews} reviews
            </em>

          </div>

        </div>


        {/* PRICE */}

        <div className="snapshotItem priceSnapshot">

          <div className="snapshotIcon priceIcon">
            <FaTag />
          </div>

          <div>

            <span>
              Starting From
            </span>

            <strong className="tourPrice">
              {tour.price}
            </strong>

            <em>
              Per person
            </em>

          </div>

        </div>


        {/* DEPARTURE */}

        <div className="snapshotItem">

          <div className="snapshotIcon departureIcon">
            <FaPlaneDeparture />
          </div>

          <div>

            <span>
              Departure
            </span>

            <strong>
              Delhi • Mumbai • Bangalore
            </strong>

          </div>

        </div>

      </div>


      {/* =====================================
          OFFER
      ===================================== */}

      {tour.offer && (

        <div className="overviewOffer">

          <div className="offerLeft">

            <div className="offerIcon">
              <FaTag />
            </div>

            <div>

              <strong>
                Special Travel Offer
              </strong>

              <span>
                Save more when you book this package
              </span>

            </div>

          </div>


          <div className="offerRight">

            <div className="offerValue">
              {tour.offer}
            </div>

            <button
              type="button"
              className="overviewBookButton"
              onClick={handleBookNow}
            >
              Book This Tour

              <FaArrowRight />

            </button>

          </div>

        </div>

      )}


      {/* =====================================
          HIGHLIGHTS
      ===================================== */}

      <div className="highlightsSection">

        <div className="highlightsHeader">

          <div>

            <div className="sectionMiniTitle">
              EXPERIENCE INCLUDED
            </div>

            <h3>
              Package Highlights
            </h3>

            <p>
              Discover the experiences included
              in your holiday.
            </p>

          </div>


          <div className="highlightTotal">

            <strong>
              {highlights.length}
            </strong>

            <span>
              Highlights
            </span>

          </div>

        </div>


        {/* HIGHLIGHTS */}

        {highlights.length > 0 ? (

          <div className="highlightsGrid">

            {visibleHighlights.map(
              (item, index) => (

                <div
                  className="highlightCard"
                  key={`${item}-${index}`}
                >

                  <div className="highlightNumber">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="highlightCheck">
                    <FaCheck />
                  </div>

                  <div className="highlightText">
                    {item}
                  </div>

                </div>

              )
            )}

          </div>

        ) : (

          <div className="noHighlights">
            No package highlights available.
          </div>

        )}


        {/* VIEW ALL */}

        {highlights.length > 6 && (

          <button
            type="button"
            className="showHighlights"
            onClick={() =>
              setShowAll(!showAll)
            }
          >

            <span>

              {showAll
                ? "Show Less"
                : `View All ${highlights.length} Highlights`}

            </span>

            {showAll ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}

          </button>

        )}

      </div>


      {/* =====================================
          TRUST BAR
      ===================================== */}

      <div className="overviewTrustBar">

        <div>
          <FaCheck />
          <span>
            Handpicked Experiences
          </span>
        </div>

        <div>
          <FaUsers />
          <span>
            Expert Assistance
          </span>
        </div>

        <div>
          <FaPlaneDeparture />
          <span>
            Comfortable Travel
          </span>
        </div>

        <div>
          <FaCheck />
          <span>
            24/7 Support
          </span>
        </div>

      </div>

    </section>
  );
};

export default TourOverview;
