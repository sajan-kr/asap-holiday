import React, { useEffect, useState } from "react";
import "./Hero.css";
import Select from "react-select";
import { Country } from "country-state-city";
import { FaPlay, FaArrowRight, FaChevronLeft, FaChevronRight, FaStar, FaSearch, FaTimes, } from "react-icons/fa";
import { useNavigate, } from "react-router-dom"

/* =========================  COUNTRIES ========================= */

const countryOptions = Country.getAllCountries().map(
  (country) => ({
    value: country.name,
    label: country.name,
  })
);

/* ========================= HERO SLIDES ========================= */

const heroSlides = [
  {
    title: "Maldives",
    subtitle: "Private Island Paradise",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Dubai",
    subtitle: "Luxury Desert Escape",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Switzerland",
    subtitle: "Snow Mountain Adventure",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Bali",
    subtitle: "Tropical Luxury Retreat",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  /* =========================  AUTO SLIDER ========================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === heroSlides.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ========================= SEARCH  ========================= */

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

  /* =========================  VIDEO ========================= */

  const handleVideo = () => {
    setShowVideo(true);
  };

  /* ========================= SLIDER ========================= */

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === heroSlides.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0
        ? heroSlides.length - 1
        : prev - 1
    );
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <>
      <section className="modernHero" style={{ backgroundImage: `url(${currentSlide.image})`, }} >
        {/* OVERLAY */}
        <div className="modernHero__overlay"></div>

        {/* CONTAINER */}
        <div className="modernHero__container">
          {/* LEFT */}
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
              Experience luxury vacations,
              premium stays and unforgettable
              journeys around the world.
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

              <button className="modernHero__searchBtn" onClick={handleSearch}>
                <FaSearch />
              </button>
            </div>

            {/* BUTTONS */}
            <div className="modernHero__buttons">
              <button className="modernHero__exploreBtn" onClick={handleSearch}>
                Explore Tours
              </button>

              <button className="modernHero__videoBtn" onClick={handleVideo}>
                <div className="modernHero__play">
                  <FaPlay />
                </div>

                <span>Watch Video</span>
              </button>
            </div>

            {/* STATS */}
            <div className="modernHero__stats">
              <div className="modernHero__statCard">
                <h2>25K+</h2>
                <p>Happy Travelers</p>
              </div>

              <div className="modernHero__statCard">
                <h2>350+</h2>
                <p>Luxury Tours</p>
              </div>

              <div className="modernHero__statCard">
                <h2>4.9</h2>

                <div className="modernHero__rating">
                  <FaStar />
                  <span>Ratings</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="modernHero__right">
            <div className="modernHero__card">
              <img src={currentSlide.image} alt={currentSlide.title}/>
              <div className="modernHero__cardOverlay"></div>

              <div className="modernHero__cardContent">
                <span>
                  Featured Destination
                </span>

                <h2>{currentSlide.title}</h2>

                <p>{currentSlide.subtitle}</p>

                <button
                  onClick={() =>
                    navigate(
                      `/tours/${currentSlide.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* NAVIGATION */}

            <div className="modernHero__nav">
              <button onClick={prevSlide}>
                <FaChevronLeft />
              </button>

              <button onClick={nextSlide}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}

      {showVideo && (
        <div className="modernHero__videoModal" onClick={() => setShowVideo(false)}>
          <div className="modernHero__videoContent" onClick={(e) =>  e.stopPropagation()}>
            <button className="modernHero__closeVideo" onClick={() => setShowVideo(false)}>
              <FaTimes />
            </button>

            <iframe
              src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1"
              title="Travel Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;