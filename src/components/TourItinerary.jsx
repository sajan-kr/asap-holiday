import React, { useState } from "react";
import "./TourItinerary.css";

const Icon = ({ type }) => {
  const icons = {
    clock: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),

    location: (
      <svg viewBox="0 0 24 24">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),

    meal: (
      <svg viewBox="0 0 24 24">
        <path d="M7 3v7" />
        <path d="M4 3v7a3 3 0 0 0 3 3v8" />
        <path d="M10 3v7" />
        <path d="M17 3v18" />
        <path d="M17 3c3 1 3 5 0 7" />
      </svg>
    ),

    hotel: (
      <svg viewBox="0 0 24 24">
        <path d="M3 20V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14" />
        <path d="M3 14h18" />
        <path d="M7 10h3" />
        <path d="M14 10h3" />
      </svg>
    ),

    car: (
      <svg viewBox="0 0 24 24">
        <path d="M5 16l1-6h12l1 6" />
        <path d="M3 16h18v3H3z" />
        <circle cx="7" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
    ),

    camera: (
      <svg viewBox="0 0 24 24">
        <path d="M4 7h4l2-2h4l2 2h4v12H4z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),

    arrow: (
      <svg viewBox="0 0 24 24">
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),

    check: (
      <svg viewBox="0 0 24 24">
        <path d="m5 12 4 4L19 6" />
      </svg>
    )
  };

  return (
    <span className="tourIcon">
      {icons[type]}
    </span>
  );
};


const TourItinerary = ({ tour }) => {

  const [activeDay, setActiveDay] = useState(0);

  const itinerary = tour?.itinerary || [];

  if (!itinerary.length) return null;

  const day = itinerary[activeDay];

  const image =
    day.image ||
    day.img ||
    day.imageUrl ||
    tour?.image ||
    tour?.bannerImage ||
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85";


  const goPrevious = () => {
    setActiveDay((current) =>
      Math.max(current - 1, 0)
    );
  };


  const goNext = () => {
    setActiveDay((current) =>
      Math.min(current + 1, itinerary.length - 1)
    );
  };


  return (
    <section className="ultimateItinerary">

      {/* ==========================================
          HEADER
      ========================================== */}

      <header className="itineraryIntro">

        <div className="introEyebrow">
          <span />
          JOURNEY DETAILS
          <span />
        </div>

        <h2>
          Your Holiday,
          <br />
          <em>Beautifully Planned.</em>
        </h2>

        <p>
          Follow your journey day by day and discover the
          experiences, places and moments waiting for you.
        </p>

      </header>


      {/* ==========================================
          DAY NAVIGATION
      ========================================== */}

      <div className="itineraryDays">

        <div className="daysLine" />

        {itinerary.map((item, index) => {

          const isActive = activeDay === index;
          const isComplete = index < activeDay;

          return (
            <button
              key={index}
              className={`itineraryDay ${
                isActive ? "active" : ""
              } ${isComplete ? "complete" : ""}`}
              onClick={() => setActiveDay(index)}
            >

              <span className="dayCircle">
                {isComplete ? (
                  <Icon type="check" />
                ) : (
                  String(index + 1).padStart(2, "0")
                )}
              </span>

              <span className="dayName">
                {item.day || `Day ${index + 1}`}
              </span>

            </button>
          );
        })}

      </div>


      {/* ==========================================
          MAIN JOURNEY CARD
      ========================================== */}

      <div className="journeyExperience">


        {/* ========================================
            IMAGE
        ======================================== */}

        <div className="journeyPhoto">

          <img
            key={image}
            src={image}
            alt={day.title}
          />

          <div className="photoGradient" />


          <div className="photoDay">

            <span>DAY</span>

            <strong>
              {String(activeDay + 1).padStart(2, "0")}
            </strong>

          </div>


          <div className="photoBottom">

            <span>
              {day.day || `Day ${activeDay + 1}`}
            </span>

            <h3>
              {day.title}
            </h3>

          </div>

        </div>


        {/* ========================================
            CONTENT
        ======================================== */}

        <div className="journeyInformation">

          <div className="informationTop">

            <div>

              <span className="informationEyebrow">
                DAY {String(activeDay + 1).padStart(2, "0")}
              </span>

              <h3>
                {day.title}
              </h3>

            </div>

            <div className="largeDayNumber">
              {String(activeDay + 1).padStart(2, "0")}
            </div>

          </div>


          {/* Description */}

          <div className="journeyStory">

            <span className="sectionMiniTitle">
              THE EXPERIENCE
            </span>

            <p>
              {day.description}
            </p>

          </div>


          {/* Journey Info */}

          <div className="journeyInfoGrid">

            <div className="journeyInfoItem">

              <Icon type="clock" />

              <div>
                <small>DURATION</small>
                <strong>
                  {day.duration || "Full Day"}
                </strong>
              </div>

            </div>


            <div className="journeyInfoItem">

              <Icon type="location" />

              <div>
                <small>LOCATION</small>
                <strong>
                  {day.location || "As Per Itinerary"}
                </strong>
              </div>

            </div>


            <div className="journeyInfoItem">

              <Icon type="meal" />

              <div>
                <small>MEALS</small>
                <strong>
                  {day.meals || "As Per Plan"}
                </strong>
              </div>

            </div>


            <div className="journeyInfoItem">

              <Icon type="hotel" />

              <div>
                <small>STAY</small>
                <strong>
                  {day.stay || "As Per Package"}
                </strong>
              </div>

            </div>

          </div>


          {/* Highlights */}

          <div className="journeyHighlights">

            <span className="sectionMiniTitle">
              HIGHLIGHTS
            </span>

            <div className="highlightList">

              {(day.highlights || [
                "Sightseeing",
                "Local Experiences",
                "Photography"
              ]).map((item, index) => (

                <span key={index}>
                  <Icon type="check" />
                  {item}
                </span>

              ))}

            </div>

          </div>


          {/* Traveler Tip */}

          <div className="travelerTip">

            <div className="tipIcon">
              <Icon type="camera" />
            </div>

            <div>

              <span>TRAVELER TIP</span>

              <p>
                Keep your camera ready — this day is
                filled with moments worth remembering.
              </p>

            </div>

          </div>


          {/* Bottom */}

          <div className="journeyFooter">

            <div className="journeyCounter">

              <strong>
                {String(activeDay + 1).padStart(2, "0")}
              </strong>

              <span>
                / {String(itinerary.length).padStart(2, "0")}
              </span>

            </div>


            <div className="journeyControls">

              <button
                onClick={goPrevious}
                disabled={activeDay === 0}
                aria-label="Previous day"
              >
                ←
              </button>

              <button
                onClick={goNext}
                disabled={
                  activeDay === itinerary.length - 1
                }
                aria-label="Next day"
              >
                <Icon type="arrow" />
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ==========================================
          BOTTOM SUMMARY
      ========================================== */}

      <div className="itinerarySummary">

        <div>
          <strong>{itinerary.length}</strong>
          <span>Days</span>
        </div>

        <div>
          <strong>01</strong>
          <span>Beautiful Journey</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Memories</span>
        </div>

      </div>

    </section>
  );
};

export default TourItinerary;