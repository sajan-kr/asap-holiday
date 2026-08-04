import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TourHeroBanner.css";

import TourBookingCard from "./TourBookingCard";
import TourFeatureBar from "./TourFeatureBar";

import { FaStar, FaMapMarkerAlt, FaClock, FaDownload, FaPlay, FaUsers, FaChevronRight, FaTimes, FaCheckCircle, } from "react-icons/fa";
import { generateBrochure } from "../utils/generateBrochure";

const TourHeroBanner = ({ tour }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        className="tourHeroBanner"
        style={{
          backgroundImage: `url(${tour.image})`,
        }}
      >
        <div className="tourHeroOverlay">

          <div className="tourHeroContent">

            <div className="tourHeroGrid">

              {/* LEFT CONTENT */}

              <div className="tourHeroLeft">

                {/* Breadcrumb */}

                <div className="tourBreadcrumbHero">

                  <Link to="/">
                    Home
                  </Link>

                  <FaChevronRight />

                  <Link to="/tours">
                    International Tours
                  </Link>

                  <FaChevronRight />

                  <Link to={`/tours/${tour.slug}`}>
                    {tour.location}
                  </Link>

                  <FaChevronRight />

                  <span className="activeBreadcrumb">
                    {tour.title}
                  </span>

                </div>

                {/* Badge */}

                <div className="tourTopBadge">

                  <span className="tourBadge">

                    ⭐ Best Seller

                  </span>

                </div>

                {/* Heading */}

                <h1 className="tourHeroTitle">

                  {tour.title}

                </h1>

                {/* Price */}

                <div className="tourPriceRow">

                  <span className="priceLabel">

                    Starting From

                  </span>

                  <h2>

                    {tour.price}

                  </h2>

                  <small>

                    Per Person

                  </small>

                </div>

                {/* Description */}

                <p className="tourDescription">

                  {tour.description}

                </p>

                {/* Information Cards */}

                <div className="tourInfoCards">

                  <div className="infoCard">

                    <FaStar />

                    <div>

                      <strong>

                        {tour.rating}

                      </strong>

                      <span>

                        {tour.reviews} Reviews

                      </span>

                    </div>

                  </div>

                  <div className="infoCard">

                    <FaMapMarkerAlt />

                    <div>

                      <strong>

                        Destination

                      </strong>

                      <span>

                        {tour.location}

                      </span>

                    </div>

                  </div>

                  <div className="infoCard">

                    <FaClock />

                    <div>

                      <strong>

                        Duration

                      </strong>

                      <span>

                        {tour.duration}

                      </span>

                    </div>

                  </div>

                  <div className="infoCard">

                    <FaUsers />

                    <div>

                      <strong>

                        Group Size

                      </strong>

                      <span>

                        {tour.groupSize || "2 - 20 People"}

                      </span>

                    </div>

                  </div>

                </div>

                {/* Trust Row */}

                <div className="tourTrustRow">

                  <div className="trustItem">

                    <FaCheckCircle />

                    <span>Best Price Guarantee</span>

                  </div>

                  <div className="trustItem">

                    <FaCheckCircle />

                    <span>Instant Confirmation</span>

                  </div>

                  <div className="trustItem">

                    <FaCheckCircle />

                    <span>24×7 Travel Support</span>

                  </div>

                </div>

                {/* Buttons */}

                <div className="heroButtons">

                  <button
                    className="primaryBtn"
                    onClick={() => {
                      const booking = document.getElementById("bookingSidebar");

                      if (booking) {
                        booking.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    Book Now
                  </button>

                  <button
                    className="secondaryBtn"
                    onClick={() => generateBrochure(tour)}
                  >
                    <FaDownload />
                    Download Brochure
                  </button>

                  <button
                    className="videoBtn"
                    onClick={() => setShowVideo(true)}
                  >

                    <FaPlay />

                    Watch Video

                  </button>

                </div>

              </div>

              {/* RIGHT SIDE */}

              <div className="tourHeroRight">

                <TourBookingCard
                  tour={tour}
                />

              </div>

            </div>

          </div>

        </div>

        {/* Floating Feature Bar */}

        <TourFeatureBar
          tour={tour}
        />

      </section>

      {/* ===========================
          VIDEO MODAL
      =========================== */}

      {showVideo && (

        <div
          className="videoModal"
          onClick={() => setShowVideo(false)}
        >

          <div
            className="videoBox"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="closeVideo"
              onClick={() => setShowVideo(false)}
            >

              <FaTimes />

            </button>

            <video
              src={tour.video}
              controls
              autoPlay
            />

          </div>

        </div>

      )}

    </>
  );
};

export default TourHeroBanner;