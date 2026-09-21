import React, { useEffect, useState } from "react";
import "./Hero.css";
import Select from "react-select";
import { Country } from "country-state-city";

import {
  FaPlay,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

/* =========================================================
   COUNTRIES
========================================================= */

const countryOptions = Country.getAllCountries().map((country) => ({
  value: country.name,
  label: country.name,
}));

/* =========================================================
   HERO SLIDES
========================================================= */

const heroSlides = [
  {
    title: "Maldives",
    subtitle: "Private Island Paradise",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Dubai",
    subtitle: "Luxury Desert Escape",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Switzerland",
    subtitle: "Snow Mountain Adventure",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Bali",
    subtitle: "Tropical Luxury Retreat",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
  },
];

/* =========================================================
   HERO COMPONENT
========================================================= */

const Hero = () => {
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const currentSlide = heroSlides[activeSlide];

  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = () => {
    if (!selectedCountry) {
      alert("Please select destination");
      return;
    }

    const country = selectedCountry.value
      .toLowerCase()
      .replace(/\s+/g, "-");

    navigate(`/tours/${country}`);
  };

  /* =======================================================
     DESTINATION
  ======================================================= */

  const handleDestination = () => {
    const destination = currentSlide.title
      .toLowerCase()
      .replace(/\s+/g, "-");

    navigate(`/tours/${destination}`);
  };

  /* =======================================================
     SLIDER
  ======================================================= */

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <section
        className="modernHero"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
        }}
      >
        <div className="modernHero__overlay"></div>

        <div className="modernHero__container">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="modernHero__left">

            <div className="modernHero__badge">
              Luxury Travel Collection
            </div>

            <h1 className="modernHero__title">
              Discover
              <span>Beautiful</span>
              Destinations
            </h1>

            <p className="modernHero__text">
              Experience luxury vacations, premium stays and
              unforgettable journeys around the world.
            </p>

            {/* SEARCH */}

            <div className="modernHero__searchWrapper">

              <Select
                options={countryOptions}
                placeholder="Search destinations..."
                value={selectedCountry}
                onChange={setSelectedCountry}
                className="modernHero__select"
                classNamePrefix="modernSelect"
                isSearchable
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

              <button
                type="button"
                className="modernHero__searchBtn"
                onClick={handleSearch}
                aria-label="Search destination"
              >
                <FaSearch />
              </button>

            </div>

            {/* BUTTONS */}

            <div className="modernHero__buttons">

              {/* EXPLORE TOURS */}

              <button
                type="button"
                className="modernHero__exploreBtn"
                onClick={handleSearch}
              >
                <span>Explore Tours</span>
                <FaArrowRight />
              </button>

              {/* WATCH VIDEO */}

              <button
                type="button"
                className="modernHero__videoBtn"
                onClick={() => setShowVideo(true)}
              >
                <span className="modernHero__play">
                  <FaPlay />
                </span>

                <span>Watch Video</span>
              </button>

            </div>

            {/* STATS */}

            <div className="modernHero__stats">

              <div className="modernHero__statCard">
                <strong>25K+</strong>
                <span>Happy Travelers</span>
              </div>

              <div className="modernHero__statCard">
                <strong>350+</strong>
                <span>Luxury Tours</span>
              </div>

              <div className="modernHero__statCard">
                <strong>4.9</strong>

                <div className="modernHero__rating">
                  <FaStar />
                  <span>Ratings</span>
                </div>
              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="modernHero__right">

            <div className="modernHero__card">

              <img
                src={currentSlide.image}
                alt={currentSlide.title}
              />

              <div className="modernHero__cardOverlay"></div>

              <div className="modernHero__cardTop">
                <span>EXPLORE</span>
              </div>

              <div className="modernHero__cardContent">

                <small>Featured Destination</small>

                <h2>{currentSlide.title}</h2>

                <p>{currentSlide.subtitle}</p>

                <button
                  type="button"
                  onClick={handleDestination}
                  aria-label={`Explore ${currentSlide.title}`}
                >
                  <FaArrowRight />
                </button>

              </div>

            </div>

            {/* NAVIGATION */}

            <div className="modernHero__nav">

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          LOCAL VIDEO MODAL
      ===================================================== */}

      {showVideo && (
        <div
          className="modernHero__videoModal"
          onClick={() => setShowVideo(false)}
        >

          <div
            className="modernHero__videoContent"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="modernHero__closeVideo"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
            >
              <FaTimes />
            </button>

            {/* LOCAL VIDEO */}

            <video
              className="modernHero__localVideo"
              src="/video/asap-family-video.mp4"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>

          </div>

        </div>
      )}
    </>
  );
};

export default Hero;