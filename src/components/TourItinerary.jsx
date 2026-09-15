import React, { useEffect, useRef, useState } from "react";
import "./TourItinerary.css";

const Icon = ({ type }) => {
  const icons = {
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    meal: (
      <>
        <path d="M7 3v7" />
        <path d="M4 3v7a3 3 0 0 0 3 3v8" />
        <path d="M10 3v7" />
        <path d="M17 3v18" />
        <path d="M17 3c3 1 3 5 0 7" />
      </>
    ),

    hotel: (
      <>
        <path d="M3 20V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14" />
        <path d="M3 14h18" />
        <path d="M7 10h3" />
        <path d="M14 10h3" />
      </>
    ),

    car: (
      <>
        <path d="M5 16l1-6h12l1 6" />
        <path d="M3 16h18v3H3z" />
        <circle cx="7" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </>
    ),

    camera: (
      <>
        <path d="M4 7h4l2-2h4l2 2h4v12H4z" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),

    play: <path d="m9 6 10 6-10 6V6Z" />,

    pause: (
      <>
        <path d="M8 5v14" />
        <path d="M16 5v14" />
      </>
    ),

    share: (
      <>
        <circle cx="18" cy="5" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="19" r="2" />
        <path d="m8 11 8-5" />
        <path d="m8 13 8 5" />
      </>
    ),

    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),

    print: (
      <>
        <path d="M6 9V4h12v5" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v7H6z" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    chevron: <path d="m6 9 6 6 6-6" />,

    check: <path d="m5 12 4 4L19 6" />
  };

  return (
    <svg
      className="tourSvg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
};


const TourItinerary = ({ tour }) => {

  const itinerary = tour?.itinerary || [];

  const [activeDay, setActiveDay] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [copied, setCopied] = useState(false);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);


  /* =========================================
     LOAD DAY FROM URL
  ========================================= */

  useEffect(() => {

    const hash = window.location.hash;

    if (hash.startsWith("#day-")) {

      const dayNumber =
        parseInt(hash.replace("#day-", ""), 10) - 1;

      if (
        !Number.isNaN(dayNumber) &&
        dayNumber >= 0 &&
        dayNumber < itinerary.length
      ) {
        setActiveDay(dayNumber);
      }
    }

  }, [itinerary.length]);


  /* =========================================
     CHANGE DAY
  ========================================= */

  const changeDay = (index) => {

    if (index < 0 || index >= itinerary.length) return;

    setActiveDay(index);

    window.history.replaceState(
      null,
      "",
      `#day-${index + 1}`
    );

  };


  /* =========================================
     NEXT / PREVIOUS
  ========================================= */

  const nextDay = () => {

    if (activeDay < itinerary.length - 1) {
      changeDay(activeDay + 1);
    } else {
      changeDay(0);
    }

  };


  const previousDay = () => {

    if (activeDay > 0) {
      changeDay(activeDay - 1);
    }

  };


  /* =========================================
     AUTO PLAY
  ========================================= */

  useEffect(() => {

    if (!autoPlay || itinerary.length <= 1) return;

    const timer = setInterval(() => {
      nextDay();
    }, 5000);

    return () => clearInterval(timer);

  }, [autoPlay, activeDay, itinerary.length]);


  /* =========================================
     KEYBOARD
  ========================================= */

  useEffect(() => {

    const handleKeyboard = (event) => {

      if (event.key === "ArrowRight") {
        nextDay();
      }

      if (event.key === "ArrowLeft") {
        previousDay();
      }

      if (event.key === "Escape") {
        setExpanded(false);
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

  }, [activeDay, itinerary.length]);


  /* =========================================
     SWIPE
  ========================================= */

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };


  const handleTouchEnd = (event) => {

    touchEnd.current =
      event.changedTouches[0].clientX;

    if (
      touchStart.current === null ||
      touchEnd.current === null
    ) {
      return;
    }

    const distance =
      touchStart.current - touchEnd.current;

    if (Math.abs(distance) > 60) {

      if (distance > 0) {
        nextDay();
      } else {
        previousDay();
      }

    }

    touchStart.current = null;
    touchEnd.current = null;

  };


  /* =========================================
     COPY
  ========================================= */

  const copyItinerary = async () => {

    const text = itinerary
      .map(
        (day, index) =>
          `Day ${index + 1}: ${day.title}\n${day.description}`
      )
      .join("\n\n");

    try {

      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {

      console.error(
        "Unable to copy itinerary",
        error
      );

    }

  };


  /* =========================================
     SHARE
  ========================================= */

  const shareItinerary = async () => {

    const shareData = {
      title:
        tour?.title ||
        "Tour Itinerary",

      text:
        "Check out this amazing travel itinerary.",

      url: window.location.href
    };

    try {

      if (navigator.share) {

        await navigator.share(shareData);

      } else {

        await copyItinerary();

      }

    } catch (error) {

      if (error?.name !== "AbortError") {
        console.error(error);
      }

    }

  };


  /* =========================================
     PRINT
  ========================================= */

  const printItinerary = () => {
    window.print();
  };


  if (!itinerary.length) return null;

  const day = itinerary[activeDay];

  const image =
    day.image ||
    day.img ||
    day.imageUrl ||
    tour?.image ||
    tour?.bannerImage ||
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85";


  const highlights =
    day.highlights || [
      "Sightseeing",
      "Local Experiences",
      "Photography"
    ];


  const schedule =
    day.schedule || [
      {
        time: "Morning",
        title: "Explore & Discover",
        description:
          "Begin your day with planned sightseeing and memorable experiences."
      },
      {
        time: "Afternoon",
        title: "Local Experience",
        description:
          "Enjoy the destination and experience its local charm."
      },
      {
        time: "Evening",
        title: "Relax & Unwind",
        description:
          "End your day at leisure and enjoy your surroundings."
      }
    ];


  return (
    <section
      className="interactiveItinerary"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="interactiveHeader">

        <div className="headerEyebrow">
          <span />
          YOUR JOURNEY
          <span />
        </div>

        <h2>
          Experience Every
          <em> Moment</em>
        </h2>

        <p>
          Explore your complete journey, one unforgettable
          day at a time.
        </p>

      </div>


      {/* ==========================================
          TOOLBAR
      ========================================== */}

      <div className="itineraryToolbar">

        <div className="toolbarLeft">

          <span className="journeyLength">
            {itinerary.length} DAYS
          </span>

          <span className="toolbarDivider" />

          <span>
            Interactive Itinerary
          </span>

        </div>


        <div className="toolbarActions">

          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className={autoPlay ? "toolActive" : ""}
            title={
              autoPlay
                ? "Pause itinerary"
                : "Play itinerary"
            }
          >
            <Icon
              type={autoPlay ? "pause" : "play"}
            />

            <span>
              {autoPlay ? "Pause" : "Play"}
            </span>
          </button>


          <button
            onClick={copyItinerary}
            title="Copy itinerary"
          >
            <Icon type="copy" />

            <span>
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>


          <button
            onClick={shareItinerary}
            title="Share itinerary"
          >
            <Icon type="share" />

            <span>Share</span>
          </button>


          <button
            onClick={printItinerary}
            title="Print itinerary"
          >
            <Icon type="print" />

            <span>Print</span>
          </button>

        </div>

      </div>


      {/* ==========================================
          DAY NAVIGATION
      ========================================== */}

      <div className="dayRail">

        {itinerary.map((item, index) => (

          <button
            key={index}
            onClick={() => changeDay(index)}
            className={
              activeDay === index
                ? "railDay active"
                : "railDay"
            }
          >

            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <small>
              {item.day || `Day ${index + 1}`}
            </small>

          </button>

        ))}

      </div>


      {/* ==========================================
          MAIN
      ========================================== */}

      <div className="itineraryMain">


        {/* IMAGE */}

        <div className="itineraryHeroImage">

          <img
            key={image}
            src={image}
            alt={day.title}
          />

          <div className="imageShade" />

          <div className="imageDayBadge">

            <small>DAY</small>

            <strong>
              {String(activeDay + 1).padStart(2, "0")}
            </strong>

          </div>


          <div className="imageInformation">

            <span>
              {day.day || `Day ${activeDay + 1}`}
            </span>

            <h3>
              {day.title}
            </h3>

          </div>

        </div>


        {/* CONTENT */}

        <div className="itineraryContent">

          <div className="contentHeading">

            <div>

              <span className="contentEyebrow">
                DAY {String(activeDay + 1).padStart(2, "0")}
              </span>

              <h3>
                {day.title}
              </h3>

            </div>

            <strong className="backgroundNumber">
              {String(activeDay + 1).padStart(2, "0")}
            </strong>

          </div>


          {/* Description */}

          <div className="dayDescription">

            <p>
              {day.description}
            </p>

          </div>


          {/* Info */}

          <div className="dayInfo">

            <Info
              icon="clock"
              label="Duration"
              value={day.duration || "Full Day"}
            />

            <Info
              icon="location"
              label="Location"
              value={day.location || "As Per Itinerary"}
            />

            <Info
              icon="meal"
              label="Meals"
              value={day.meals || "As Per Plan"}
            />

            <Info
              icon="hotel"
              label="Stay"
              value={day.stay || "As Per Package"}
            />

          </div>


          {/* Schedule */}

          <div className="scheduleSection">

            <div className="sectionHeading">

              <span>
                DAY SCHEDULE
              </span>

              <button
                onClick={() =>
                  setExpanded(!expanded)
                }
              >

                {expanded
                  ? "Collapse"
                  : "View Schedule"}

                <Icon type="chevron" />

              </button>

            </div>


            {expanded && (

              <div className="scheduleList">

                {schedule.map((item, index) => (

                  <div
                    className="scheduleItem"
                    key={index}
                  >

                    <div className="scheduleTime">
                      {item.time}
                    </div>

                    <div className="scheduleDot" />

                    <div className="scheduleText">

                      <h4>
                        {item.title}
                      </h4>

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>


          {/* Highlights */}

          <div className="highlightSection">

            <span className="sectionHeadingText">
              HIGHLIGHTS
            </span>

            <div className="highlightTags">

              {highlights.map((item, index) => (

                <span key={index}>

                  <Icon type="check" />

                  {item}

                </span>

              ))}

            </div>

          </div>


          {/* Footer */}

          <div className="itineraryNavigation">

            <button
              onClick={previousDay}
              disabled={activeDay === 0}
              className="previousDay"
            >
              ←
              <span>Previous</span>
            </button>


            <div className="dayCounter">

              <strong>
                {String(activeDay + 1).padStart(2, "0")}
              </strong>

              <span>
                /
                {String(itinerary.length).padStart(2, "0")}
              </span>

            </div>


            <button
              onClick={nextDay}
              disabled={itinerary.length === 1}
              className="nextDay"
            >

              <span>Next Day</span>

              <Icon type="arrow" />

            </button>

          </div>

        </div>

      </div>


      {/* ==========================================
          FOOTER STATS
      ========================================== */}

      <div className="itineraryStats">

        <div>
          <strong>{itinerary.length}</strong>
          <span>Days</span>
        </div>

        <div>
          <strong>{highlights.length}+</strong>
          <span>Experiences</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Travel Support</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Memories</span>
        </div>

      </div>

    </section>
  );
};


const Info = ({ icon, label, value }) => (

  <div className="infoBox">

    <div className="infoIcon">
      <Icon type={icon} />
    </div>

    <div>
      <small>{label}</small>
      <strong>{value}</strong>
    </div>

  </div>

);


export default TourItinerary;