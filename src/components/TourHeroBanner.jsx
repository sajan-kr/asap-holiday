import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TourHeroBanner.css";

import TourBookingCard from "./TourBookingCard";

import {
  FaArrowRight,
  FaChevronRight,
  FaClock,
  FaDownload,
  FaHeart,
  FaHotel,
  FaMapMarkerAlt,
  FaPlay,
  FaRegHeart,
  FaShareAlt,
  FaStar,
  FaTimes,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

import { generateBrochure } from "../utils/generateBrochure";

const TourHeroBanner = ({ tour }) => {
  const [liked, setLiked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [shared, setShared] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!tour) return null;

  const {
    title = "Discover Your Next Adventure",
    image = "",
    video = "",
    price = "₹0",
    description = "",
    rating = "4.8",
    reviews = "120+",
    location = "International Destination",
    duration = "6 Days / 5 Nights",
    groupSize = "2 - 20 People",
    category = "International Tour",
    badge = "Popular Choice",
    hotel = "5 Star",
    meals = "Included",
  } = tour;

  /* =========================================================
     BOOKING
  ========================================================= */

  const openBooking = () => {
    const booking =
      document.getElementById("bookingSidebar") ||
      document.getElementById("tour-booking-area");

    if (booking) {
      booking.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      setShowBooking(true);
    }
  };

  /* =========================================================
     SHARE
  ========================================================= */

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: `Explore ${title}`,
          url,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);

        setShared(true);

        setTimeout(() => {
          setShared(false);
        }, 1800);
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error("Share error:", error);
      }
    }
  };

  /* =========================================================
     BROCHURE
  ========================================================= */

  const handleBrochure = async () => {
    if (downloading) return;

    try {
      setDownloading(true);

      await Promise.resolve(
        generateBrochure(tour)
      );
    } catch (error) {
      console.error("Brochure error:", error);
    } finally {
      setDownloading(false);
    }
  };

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowVideo(false);
        setShowBooking(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    const locked =
      showVideo || showBooking;

    document.body.style.overflow =
      locked ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showVideo, showBooking]);

  /* =========================================================
     TOUR FACTS
  ========================================================= */

  const tourFacts = [
    {
      icon: <FaClock />,
      label: "Duration",
      value: duration,
    },
    {
      icon: <FaUsers />,
      label: "Group Size",
      value: groupSize,
    },
    {
      icon: <FaHotel />,
      label: "Stay",
      value: hotel,
    },
    {
      icon: <FaUtensils />,
      label: "Meals",
      value: meals,
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="asapTourHero"
        style={{
          "--tour-image": `url("${image}")`,
        }}
      >

        {/* Background */}

        <div className="asapHeroImage" />

        <div className="asapHeroOverlay" />


        {/* ===================================================
            HERO HEADER
        =================================================== */}

        <header className="asapHeroHeader">

          <div className="asapHeroContainer">

            <div className="asapBreadcrumb">

              <Link to="/">
                Home
              </Link>

              <FaChevronRight />

              <Link to="/tours">
                Tours
              </Link>

              <FaChevronRight />

              <span>
                {location}
              </span>

            </div>


            <div className="asapHeroHeaderActions">

              {/* Wishlist */}

              <button
                type="button"
                className={`heroIconButton ${
                  liked ? "is-liked" : ""
                }`}
                onClick={() =>
                  setLiked((value) => !value)
                }
                aria-label="Add to wishlist"
              >

                {liked ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}

              </button>


              {/* Share */}

              <button
                type="button"
                className="heroIconButton"
                onClick={handleShare}
                aria-label="Share tour"
              >

                {shared ? (
                  <span className="shareSuccess">
                    ✓
                  </span>
                ) : (
                  <FaShareAlt />
                )}

              </button>

            </div>

          </div>

        </header>


        {/* ===================================================
            HERO MAIN
        =================================================== */}

        <div className="asapHeroContainer">

          <div className="asapHeroMain">


            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="asapHeroContent">

              <div className="heroCategory">

                <span className="categoryLine" />

                <span>
                  {category}
                </span>

                {badge && (
                  <b>
                    {badge}
                  </b>
                )}

              </div>


              <h1>
                {title}
              </h1>


              <div className="heroLocation">

                <span className="locationIcon">
                  <FaMapMarkerAlt />
                </span>

                <span>
                  {location}
                </span>

              </div>


              <p className="heroDescription">

                {description ||
                  "Discover remarkable places, memorable experiences and carefully selected stays with a holiday planned around the way you want to travel."}

              </p>


              {/* Rating */}

              <div className="heroReview">

                <span className="heroReviewStar">
                  <FaStar />
                </span>

                <strong>
                  {rating}
                </strong>

                <span>
                  {reviews} reviews
                </span>

              </div>


              {/* CTA Buttons */}

              <div className="heroButtons">

                <button
                  type="button"
                  className="heroMainButton"
                  onClick={openBooking}
                >

                  <span>
                    Check Availability
                  </span>

                  <FaArrowRight />

                </button>


                {video && (
                  <button
                    type="button"
                    className="heroWatchButton"
                    onClick={() =>
                      setShowVideo(true)
                    }
                  >

                    <span className="watchIcon">
                      <FaPlay />
                    </span>

                    <span>
                      Watch Experience
                    </span>

                  </button>
                )}

              </div>


              {/* Brochure */}

              <button
                type="button"
                className="heroDownload"
                onClick={handleBrochure}
                disabled={downloading}
              >

                <FaDownload />

                <span>
                  {downloading
                    ? "Preparing..."
                    : "Download itinerary"}
                </span>

                <i />

                <small>
                  {duration}
                </small>

              </button>

            </div>


            {/* =================================================
                BOOKING CARD
            ================================================= */}

            <aside className="heroBookingCard">

              <div className="heroBookingTop">

                <div>

                  <span>
                    PLAN YOUR TRIP
                  </span>

                  <h2>
                    Make it yours
                  </h2>

                </div>


                <div className="heroBookingRating">

                  <FaStar />

                  <strong>
                    {rating}
                  </strong>

                </div>

              </div>


              <div className="heroBookingImage">

                <img
                  src={image}
                  alt={title}
                />

                <div className="heroBookingImageOverlay" />


                {video && (
                  <button
                    type="button"
                    className="heroBookingPlay"
                    onClick={() =>
                      setShowVideo(true)
                    }
                    aria-label="Watch video"
                  >

                    <FaPlay />

                  </button>
                )}


                <div className="heroBookingPlace">

                  <FaMapMarkerAlt />

                  <span>
                    {location}
                  </span>

                </div>

              </div>


              <div className="heroBookingBody">

                <div className="heroPrice">

                  <span>
                    Starting from
                  </span>

                  <div>

                    <strong>
                      {price}
                    </strong>

                    <small>
                      / person
                    </small>

                  </div>

                </div>


                <button
                  type="button"
                  className="heroBookingButton"
                  onClick={openBooking}
                >

                  <span>
                    Start Planning
                  </span>

                  <FaArrowRight />

                </button>


                <p>
                  No payment required to check availability
                </p>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          PREMIUM FACTS RAIL
      ===================================================== */}

      <section className="tourFactsSection">

        <div className="asapHeroContainer">

          <div className="tourFactsRail">

            {tourFacts.map((fact) => (

              <div
                className="tourFact"
                key={fact.label}
              >

                <div className="tourFactIcon">
                  {fact.icon}
                </div>


                <div className="tourFactContent">

                  <span>
                    {fact.label}
                  </span>

                  <strong>
                    {fact.value}
                  </strong>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOOKING MODAL
      ===================================================== */}

      {showBooking && (

        <div
          className="heroModalBackdrop"
          onClick={() =>
            setShowBooking(false)
          }
        >

          <div
            className="heroBookingDrawer"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="drawerHandle" />


            <div className="drawerHeader">

              <div>

                <span>
                  ASAP HOLIDAYS
                </span>

                <h2>
                  Plan your trip
                </h2>

              </div>


              <button
                type="button"
                onClick={() =>
                  setShowBooking(false)
                }
                aria-label="Close"
              >

                <FaTimes />

              </button>

            </div>


            <div
              className="drawerContent"
              id="tour-booking-area"
            >

              <TourBookingCard
                tour={tour}
              />

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {showVideo && video && (

        <div
          className="heroVideoBackdrop"
          onClick={() =>
            setShowVideo(false)
          }
        >

          <div
            className="heroVideoModal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="videoCloseButton"
              onClick={() =>
                setShowVideo(false)
              }
              aria-label="Close video"
            >

              <FaTimes />

            </button>


            <video
              src={video}
              controls
              autoPlay
              playsInline
            />

          </div>

        </div>

      )}


      {/* =====================================================
          MOBILE STICKY CTA
      ===================================================== */}

      <div className="mobileHeroCTA">

        <div>

          <span>
            Starting from
          </span>

          <strong>
            {price}
          </strong>

        </div>


        <button
          type="button"
          onClick={() =>
            setShowBooking(true)
          }
        >

          Check Availability

          <FaArrowRight />

        </button>

      </div>

    </>
  );
};

export default TourHeroBanner;