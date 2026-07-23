import React, {
  useState,
  useEffect,
} from "react";

import { useParams } from "react-router-dom";

import {
  FaMapMarkerAlt, FaPlay, FaArrowRight, FaStar, FaClock, FaCalendarAlt, FaHotel, FaPlane, FaUtensils, FaHeadset, FaChevronLeft, FaChevronRight, FaQuoteLeft,
} from "react-icons/fa";

import { destinationsData } from "../data/destinationsData";

import "./DestinationDetails.css";

const DestinationDetails = () => {

  const { slug } = useParams();

  const destination =
    destinationsData.find(
      (item) =>
        item.slug === slug
    );

  const [activeImage, setActiveImage] =
    useState(0);

  const [showVideo, setShowVideo] =
    useState(false);

  const [activeFaq, setActiveFaq] =
    useState(0);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setActiveImage(
          (prev) =>
            (prev + 1) % 4
        );

      }, 4000);

    return () =>
      clearInterval(interval);

  }, []);

  if (!destination) {

    return (
      <div className="not-found">

        <h2>
          Destination Not Found
        </h2>

      </div>
    );

  }

  const galleryImages = [

    destination.image,
    destination.image,
    destination.image,
    destination.image,

  ];

  const nextSlide = () => {

    setActiveImage(
      (prev) =>
        (prev + 1) %
        galleryImages.length
    );

  };

  const prevSlide = () => {

    setActiveImage(
      (prev) =>
        prev === 0
          ? galleryImages.length - 1
          : prev - 1
    );

  };

  return (

    <div className="destination-page">

      {/* HERO */}

      <section className="hero-section">

        {destination.video ? (

          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-bg"
          >

            <source
              src={destination.video}
              type="video/mp4"
            />

          </video>

        ) : (

          <img
            src={destination.image}
            alt=""
            className="hero-bg"
          />

        )}

        <div className="hero-overlay"></div>

        <div className="hero-container">

          {/* LEFT */}

          <div className="hero-left">

            <div className="hero-badge">

              <FaMapMarkerAlt />

              {destination.country}

            </div>

            <h1>

              Explore

              <span>
                {" "}
                {destination.title}
              </span>

            </h1>

            <p>
              Luxury curated travel experiences with premium hotels, unforgettable adventures and world-class destinations.
            </p>

            <div className="hero-actions">

              <button className="primary-btn">

                Explore Trip

                <FaArrowRight />

              </button>

              <button
                className="secondary-btn"

                onClick={() =>
                  setShowVideo(true)
                }
              >

                <FaPlay />

                Watch Video

              </button>

            </div>

            {/* STATS */}

            <div className="floating-stats">

              <div>

                <h3>
                  4.9
                </h3>

                <span>
                  Ratings
                </span>

              </div>

              <div>

                <h3>
                  12K+
                </h3>

                <span>
                  Travelers
                </span>

              </div>

              <div>

                <h3>
                  250+
                </h3>

                <span>
                  Tours
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hero-right">

            <div className="booking-card">

              <span className="booking-label">
                Starting From
              </span>

              <h2>

                {destination.price}

                <small>
                  /Person
                </small>

              </h2>

              <button className="book-btn">

                Book Now

              </button>

              <div className="booking-features">

                <div>

                  <FaHotel />

                  Luxury Hotels

                </div>

                <div>

                  <FaPlane />

                  Airport Pickup

                </div>

                <div>

                  <FaUtensils />

                  Daily Breakfast

                </div>

                <div>

                  <FaHeadset />

                  24/7 Support

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="experience-section">

        <div className="section-title">

          <span>
            EXPERIENCE
          </span>

          <h2>
            Why Travelers Love It
          </h2>

        </div>

        <div className="experience-grid">

          <div className="experience-card">

            <img
              src={destination.image}
              alt=""
            />

            <div className="experience-content">

              <h3>
                Luxury Lifestyle
              </h3>

              <p>
                Premium hotels and unforgettable travel moments.
              </p>

            </div>

          </div>

          <div className="experience-card">

            <img
              src={destination.image}
              alt=""
            />

            <div className="experience-content">

              <h3>
                Amazing Nature
              </h3>

              <p>
                Discover breathtaking landscapes and views.
              </p>

            </div>

          </div>

          <div className="experience-card">

            <img
              src={destination.image}
              alt=""
            />

            <div className="experience-content">

              <h3>
                Local Culture
              </h3>

              <p>
                Explore authentic traditions and cuisine.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="gallery-section">

        <div className="section-title">

          <span>
            GALLERY
          </span>

          <h2>
            Travel Moments
          </h2>

        </div>

        <div className="gallery-slider">

          <button
            className="slider-btn left"

            onClick={prevSlide}
          >

            <FaChevronLeft />

          </button>

          <img
            src={galleryImages[activeImage]}
            alt=""
            className="gallery-main-image"
          />

          <button
            className="slider-btn right"

            onClick={nextSlide}
          >

            <FaChevronRight />

          </button>

        </div>

        <div className="gallery-thumbs">

          {galleryImages.map(
            (img, index) => (

              <img
                key={index}
                src={img}
                alt=""
                className={
                  activeImage === index
                    ? "thumb active-thumb"
                    : "thumb"
                }

                onClick={() =>
                  setActiveImage(index)
                }
              />

            )
          )}

        </div>

      </section>

      {/* TESTIMONIAL */}

      <section className="testimonial-section">

        <div className="section-title">

          <span>
            TESTIMONIALS
          </span>

          <h2>
            What Travelers Say
          </h2>

        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <FaQuoteLeft />

            <p>
              Best luxury travel experience ever.
            </p>

            <h4>
              Emma Watson
            </h4>

          </div>

          <div className="testimonial-card">

            <FaQuoteLeft />

            <p>
              Amazing hotels and unforgettable memories.
            </p>

            <h4>
              John Smith
            </h4>

          </div>

          <div className="testimonial-card">

            <FaQuoteLeft />

            <p>
              Perfect destination and premium services.
            </p>

            <h4>
              Alex Brown
            </h4>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="faq-section">

        <div className="section-title">

          <span>
            FAQ
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

        </div>

        <div className="faq-wrapper">

          {[
            {
              q: "What is included?",
              a: "Hotels, breakfast, transfers and tours included."
            },

            {
              q: "Can I customize the package?",
              a: "Yes fully customizable travel packages available."
            },

            {
              q: "Do you provide support?",
              a: "24/7 support included during the trip."
            },

          ].map((item, index) => (

            <div
              key={index}

              className={
                activeFaq === index
                  ? "faq-item active-faq"
                  : "faq-item"
              }
            >

              <div
                className="faq-question"

                onClick={() =>
                  setActiveFaq(index)
                }
              >

                <h3>
                  {item.q}
                </h3>

                <span>
                  +
                </span>

              </div>

              <div className="faq-answer">

                <p>
                  {item.a}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>
          Ready For Your Next Adventure?
        </h2>

        <p>
          Book your dream destination now.
        </p>

        <button>
          Book Now
        </button>

      </section>

      {/* VIDEO MODAL */}

      {showVideo && (

        <div
          className="video-modal"

          onClick={() =>
            setShowVideo(false)
          }
        >

          <div
            className="video-box"

            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <video
              controls
              autoPlay
            >

              <source
                src={destination.video}
                type="video/mp4"
              />

            </video>

          </div>

        </div>

      )}

    </div>

  );

};

export default DestinationDetails;