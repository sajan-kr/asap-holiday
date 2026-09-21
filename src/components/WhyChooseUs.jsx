import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  Headphones,
  MapPin,
  Pause,
  Play,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import "./WhyChooseUs.css";

const experiences = [
  {
    id: 1,
    tab: "Luxury",
    category: "Luxury Escapes",
    location: "Maldives",
    title: "Escape into extraordinary luxury.",
    description:
      "Private beaches, premium resorts and unforgettable experiences designed around you.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1800&auto=format&fit=crop",
    icon: Sparkles,
    benefits: [
      "Premium resorts",
      "Personalized planning",
      "Exclusive experiences",
    ],
    travelers: "10K+",
    travelerLabel: "Luxury travelers",
  },

  {
    id: 2,
    tab: "Family",
    category: "Family Holidays",
    location: "Dubai",
    title: "Create memories everyone remembers.",
    description:
      "Comfortable stays, exciting attractions and family-friendly experiences planned for every generation.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1800&auto=format&fit=crop",
    icon: Users,
    benefits: [
      "Family-friendly stays",
      "Curated activities",
      "Easy trip planning",
    ],
    travelers: "45K+",
    travelerLabel: "Family travelers",
  },

  {
    id: 3,
    tab: "Romantic",
    category: "Romantic Getaways",
    location: "Bali",
    title: "Two hearts. One unforgettable journey.",
    description:
      "Beautiful stays, private experiences and romantic moments created for couples and special celebrations.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1800&auto=format&fit=crop",
    icon: Heart,
    benefits: [
      "Romantic stays",
      "Couple itineraries",
      "Honeymoon planning",
    ],
    travelers: "18K+",
    travelerLabel: "Couples travelled",
  },

  {
    id: 4,
    tab: "Adventure",
    category: "Adventure Journeys",
    location: "Switzerland",
    title: "Go beyond the ordinary.",
    description:
      "Breathtaking landscapes and memorable experiences for travelers looking for something different.",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1800&auto=format&fit=crop",
    icon: Plane,
    benefits: [
      "Adventure experiences",
      "Expert guidance",
      "Flexible itineraries",
    ],
    travelers: "25K+",
    travelerLabel: "Adventure travelers",
  },
];

const stats = [
  {
    number: "150K+",
    label: "Happy Travelers",
    icon: Users,
  },
  {
    number: "100+",
    label: "Destinations",
    icon: MapPin,
  },
  {
    number: "95%",
    label: "Visa Success",
    icon: ShieldCheck,
  },
  {
    number: "24/7",
    label: "Travel Support",
    icon: Headphones,
  },
];

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const current = experiences[active];
  const CurrentIcon = current.icon;

  const nextIndex =
    (active + 1) % experiences.length;

  const previousIndex =
    (active - 1 + experiences.length) %
    experiences.length;

  const changeSlide = useCallback((index) => {
    setActive(index);
  }, []);

  const nextSlide = useCallback(() => {
    setActive((prev) =>
      (prev + 1) % experiences.length
    );
  }, []);

  const previousSlide = useCallback(() => {
    setActive((prev) =>
      (prev - 1 + experiences.length) %
      experiences.length
    );
  }, []);

  /* ==========================================
     AUTO PLAY
  ========================================== */

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6500);

    return () => clearInterval(timer);
  }, [paused, nextSlide]);

  /* ==========================================
     KEYBOARD
  ========================================== */

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [nextSlide, previousSlide]);

  /* ==========================================
     TOUCH SWIPE
  ========================================== */

  const handleTouchStart = (event) => {
    touchStart.current =
      event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEnd.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStart.current === null ||
      touchEnd.current === null
    ) {
      return;
    }

    const distance =
      touchStart.current -
      touchEnd.current;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  /* ==========================================
     EXPLORE BUTTON
  ========================================== */

  const handleExplore = () => {
    const section =
      document.getElementById("featured-tours") ||
      document.getElementById("packages") ||
      document.getElementById("trending-packages");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/packages");
    }
  };

  return (
    <section
      className="asapWhy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="asapWhy__container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="asapWhy__header">

          <div className="asapWhy__heading">

            <div className="asapWhy__eyebrow">
              <span />
              WHY CHOOSE ASAP HOLIDAYS
            </div>

            <h2>
              More than a holiday.
              <em>It's your story.</em>
            </h2>

          </div>

          <div className="asapWhy__intro">

            <p>
              Thoughtfully designed journeys with
              handpicked experiences, expert planning
              and support from departure to return.
            </p>

            <div className="asapWhy__travelMark">
              <span className="mark-line" />

              <strong>
                Travel
                <br />
                Better
              </strong>

              <Plane size={17} />
            </div>

          </div>

        </div>


        {/* =========================================
            NAVIGATION
        ========================================= */}

        <div className="asapWhy__navigation">

          <div className="asapWhy__tabs">

            {experiences.map(
              (item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={
                    active === index
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    changeSlide(index)
                  }
                >
                  <small>
                    0{index + 1}
                  </small>

                  {item.tab}
                </button>
              )
            )}

          </div>


          <div className="asapWhy__controls">

            <button
              type="button"
              className="pauseBtn"
              onClick={() =>
                setPaused((value) => !value)
              }
              aria-label={
                paused
                  ? "Play"
                  : "Pause"
              }
            >
              {paused ? (
                <Play size={12} />
              ) : (
                <Pause size={12} />
              )}
            </button>

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous"
            >
              <ArrowLeft size={15} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next"
            >
              <ArrowRight size={15} />
            </button>

          </div>

        </div>


        {/* =========================================
            MAIN STORY
        ========================================= */}

        <div className="asapWhy__main">

          {/* IMAGE */}

          <div className="asapWhy__image">

            <img
              key={current.image}
              src={current.image}
              alt={current.location}
              draggable="false"
            />

            <div className="asapWhy__imageOverlay" />


            <div className="asapWhy__location">

              <MapPin size={13} />

              {current.location}

            </div>


            <div className="asapWhy__imageCounter">

              <strong>
                0{active + 1}
              </strong>

              <span>
                / 0{experiences.length}
              </span>

            </div>


            <div className="asapWhy__imageContent">

              <span>
                {current.category}
              </span>

              <h3>
                {current.title}
              </h3>

              <p>
                {current.description}
              </p>

            </div>


            <div className="asapWhy__travellers">

              <strong>
                {current.travelers}
              </strong>

              <span>
                {current.travelerLabel}
              </span>

            </div>

          </div>


          {/* CONTENT */}

          <div className="asapWhy__content">
            <div className="asapWhy__category">
              <span>
                <CurrentIcon size={17} />
              </span>
              {current.category}
            </div>

            <div className="asapWhy__contentInner">
              <div className="asapWhy__contentTop">
                <div className="asapWhy__benefits">

                  {current.benefits.map(
                    (benefit) => (
                      <div
                        className="asapWhy__benefit"
                        key={benefit}
                      >

                        <span>
                          <Check size={11} />
                        </span>

                        <p>
                          {benefit}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </div>

              <div className="asapWhy__quote">

                <span className="quoteMark">
                  “
                </span>

                <p>
                  Not just destinations,
                  but a better version
                  of your journey.
                </p>

                <span className="quoteLine" />

              </div>
            </div>
            <button type="button" className="asapWhy__cta" onClick={handleExplore}>
              Explore journey
              <ArrowUpRight size={16} />
            </button>
          </div>

        </div>


        {/* =========================================
            DESTINATION PREVIEW STRIP
        ========================================= */}

        <div className="asapWhy__destinations">

          {experiences.map(
            (item, index) => (
              <button
                key={item.id}
                type="button"
                className={
                  active === index
                    ? "destination active"
                    : "destination"
                }
                onClick={() =>
                  changeSlide(index)
                }
              >

                <div className="destination__image">

                  <img
                    src={item.image}
                    alt={item.location}
                  />

                  <div />

                </div>

                <div className="destination__text">

                  <small>
                    0{index + 1}
                  </small>

                  <div>
                    <strong>
                      {item.location}
                    </strong>

                    <span>
                      {item.tab}
                    </span>
                  </div>

                </div>

                <span className="destination__arrow">
                  <ArrowUpRight size={14} />
                </span>

              </button>
            )
          )}

        </div>


        {/* =========================================
            STATS
        ========================================= */}

        <div className="asapWhy__stats">

          {stats.map(
            (item) => {
              const StatIcon = item.icon;

              return (
                <div
                  className="asapWhy__stat"
                  key={item.label}
                >

                  <div className="statIcon">
                    <StatIcon size={20} />
                  </div>

                  <div>
                    <strong>
                      {item.number}
                    </strong>

                    <span>
                      {item.label}
                    </span>
                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;