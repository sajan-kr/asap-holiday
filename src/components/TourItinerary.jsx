import React, { useEffect, useRef, useState } from "react";
import "./TourItinerary.css";

/* =========================================================
   ICON
========================================================= */

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

    play: <path d="m9 6 10 6-10 6V6Z" />,

    pause: (
      <>
        <path d="M8 5v14" />
        <path d="M16 5v14" />
      </>
    ),

    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
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

    print: (
      <>
        <path d="M6 9V4h12v5" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v7H6z" />
      </>
    ),

    arrowRight: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    arrowLeft: (
      <>
        <path d="M19 12H5" />
        <path d="m11 18-6-6 6-6" />
      </>
    ),

    check: <path d="m5 12 4 4L19 6" />,

    chevron: <path d="m6 9 6 6 6-6" />,
  };

  return (
    <svg
      className="itineraryIcon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
};


/* =========================================================
   INFO ITEM
========================================================= */

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="itineraryInfoItem">

      <div className="itineraryInfoIcon">
        <Icon type={icon} />
      </div>

      <div className="itineraryInfoContent">

        <span className="itineraryInfoLabel">
          {label}
        </span>

        <strong className="itineraryInfoValue">
          {value}
        </strong>

      </div>

    </div>
  );
};


/* =========================================================
   TOUR ITINERARY
========================================================= */

const TourItinerary = ({ tour }) => {

  const itinerary = tour?.itinerary || [];

  const [activeDay, setActiveDay] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [copied, setCopied] = useState(false);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);


  /* =======================================================
     URL DAY
  ======================================================= */

  useEffect(() => {
    if (!itinerary.length) return;

    const hash = window.location.hash;

    if (!hash.startsWith("#day-")) return;

    const number = parseInt(
      hash.replace("#day-", ""),
      10
    );

    const index = number - 1;

    if (
      !Number.isNaN(index) &&
      index >= 0 &&
      index < itinerary.length
    ) {
      setActiveDay(index);
    }
  }, [itinerary.length]);


  /* =======================================================
     CHANGE DAY
  ======================================================= */

  const changeDay = (index) => {
    if (
      index < 0 ||
      index >= itinerary.length
    ) {
      return;
    }

    setActiveDay(index);

    window.history.replaceState(
      null,
      "",
      `#day-${index + 1}`
    );
  };


  /* =======================================================
     NEXT
  ======================================================= */

  const nextDay = () => {
    if (!itinerary.length) return;

    const next =
      activeDay < itinerary.length - 1
        ? activeDay + 1
        : 0;

    changeDay(next);
  };


  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousDay = () => {
    if (activeDay > 0) {
      changeDay(activeDay - 1);
    }
  };


  /* =======================================================
     AUTOPLAY
  ======================================================= */

  useEffect(() => {
    if (
      !autoPlay ||
      itinerary.length <= 1
    ) {
      return;
    }

    const timer = setInterval(() => {

      setActiveDay((current) => {

        const next =
          current < itinerary.length - 1
            ? current + 1
            : 0;

        window.history.replaceState(
          null,
          "",
          `#day-${next + 1}`
        );

        return next;
      });

    }, 5000);

    return () => clearInterval(timer);

  }, [
    autoPlay,
    itinerary.length,
  ]);


  /* =======================================================
     KEYBOARD
  ======================================================= */

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

  });


  /* =======================================================
     TOUCH
  ======================================================= */

  const handleTouchStart = (event) => {
    touchStart.current =
      event.touches[0].clientX;
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
      touchStart.current -
      touchEnd.current;

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


  /* =======================================================
     COPY
  ======================================================= */

  const copyItinerary = async () => {

    const text = itinerary
      .map((day, index) => {

        const schedule =
          day.schedule || [];

        const scheduleText =
          schedule
            .map(
              (item) =>
                `${item.time}: ${item.title}`
            )
            .join("\n");

        return `
Day ${index + 1}: ${day.title || ""}

${day.description || ""}

${scheduleText}
        `.trim();

      })
      .join("\n\n");


    try {

      await navigator.clipboard.writeText(
        text
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error(error);
    }
  };


  /* =======================================================
     SHARE
  ======================================================= */

  const shareItinerary = async () => {

    const shareData = {
      title:
        tour?.title ||
        "Tour Itinerary",

      text:
        "Check out this travel itinerary.",

      url:
        window.location.href,
    };


    try {

      if (navigator.share) {

        await navigator.share(
          shareData
        );

      } else {

        await copyItinerary();

      }

    } catch (error) {

      if (
        error?.name !==
        "AbortError"
      ) {
        console.error(error);
      }

    }
  };


  /* =======================================================
     PRINT
  ======================================================= */

  const printItinerary = () => {
    window.print();
  };


  /* =======================================================
     EMPTY
  ======================================================= */

  if (!itinerary.length) {
    return null;
  }


  /* =======================================================
     CURRENT DAY
  ======================================================= */

  const day =
    itinerary[activeDay];


  /* =======================================================
     IMAGE
  ======================================================= */

  const image =
    day.image ||
    day.img ||
    day.imageUrl ||
    tour?.image ||
    tour?.bannerImage ||
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85";


  /* =======================================================
     HIGHLIGHTS
  ======================================================= */

  const highlights =
    day.highlights || [
      "Sightseeing",
      "Local Experiences",
      "Photography",
    ];


  /* =======================================================
     SCHEDULE
  ======================================================= */

  const schedule =
    day.schedule || [
      {
        time: "Morning",
        title: "Explore & Discover",
        description:
          "Begin your day with planned sightseeing and memorable experiences.",
      },

      {
        time: "Afternoon",
        title: "Local Experience",
        description:
          "Enjoy the destination and experience its local charm.",
      },

      {
        time: "Evening",
        title: "Relax & Unwind",
        description:
          "End your day at leisure and enjoy your surroundings.",
      },
    ];


  /* =======================================================
     RENDER
  ======================================================= */

  return (

    <section
      className="premiumItinerary"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="itineraryHeader">

        <div className="itineraryHeaderLeft">

          <span className="itineraryEyebrow">
            ITINERARY
          </span>

          <h2>
            Your Journey
          </h2>

        </div>

        <p className="itineraryHeaderText">
          Explore your trip day by day.
        </p>

      </header>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <div className="itineraryToolbar">

        <nav className="itineraryDays">

          {itinerary.map(
            (item, index) => {

              const isActive =
                activeDay === index;

              return (
                <button
                  key={index}
                  type="button"
                  className={
                    isActive
                      ? "itineraryDay active"
                      : "itineraryDay"
                  }
                  onClick={() =>
                    changeDay(index)
                  }
                >

                  <strong>
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </strong>

                  <span>
                    {item.day ||
                      `Day ${
                        index + 1
                      }`}
                  </span>

                </button>
              );
            }
          )}

        </nav>


        <div className="itineraryTools">

          <button
            type="button"
            title={
              autoPlay
                ? "Pause"
                : "Auto play"
            }
            onClick={() =>
              setAutoPlay(
                !autoPlay
              )
            }
          >
            <Icon
              type={
                autoPlay
                  ? "pause"
                  : "play"
              }
            />
          </button>


          <button
            type="button"
            title="Copy itinerary"
            onClick={
              copyItinerary
            }
          >
            <Icon type="copy" />
          </button>


          <button
            type="button"
            title="Share itinerary"
            onClick={
              shareItinerary
            }
          >
            <Icon type="share" />
          </button>


          <button
            type="button"
            title="Print itinerary"
            onClick={
              printItinerary
            }
          >
            <Icon type="print" />
          </button>

        </div>

      </div>


      {/* =================================================
          MAIN EXPERIENCE
      ================================================= */}

      <div className="itineraryExperience">


        {/* =================================================
            IMAGE
        ================================================= */}

        <div className="itineraryVisual">

          <img
            key={image}
            src={image}
            alt={
              day.title ||
              "Travel itinerary"
            }
          />

          <div className="visualOverlay" />


          <div className="visualDay">

            <span>DAY</span>

            <strong>
              {String(
                activeDay + 1
              ).padStart(2, "0")}
            </strong>

          </div>


          <div className="visualCaption">

            <span>
              {day.day ||
                `Day ${
                  activeDay + 1
                }`}
            </span>

            <h3>
              {day.title}
            </h3>

          </div>

        </div>


        {/* =================================================
            DETAILS
        ================================================= */}

        <div className="itineraryDetails">


          {/* TITLE */}

          <div className="detailsHeading">

            <div>

              <span className="detailsEyebrow">
                DAY{" "}
                {String(
                  activeDay + 1
                ).padStart(2, "0")}
              </span>

              <h3>
                {day.title}
              </h3>

            </div>


            <div className="dayNumber">

              <strong>
                {String(
                  activeDay + 1
                ).padStart(2, "0")}
              </strong>

              <span>
                /{String(
                  itinerary.length
                ).padStart(2, "0")}
              </span>

            </div>

          </div>


          {/* DESCRIPTION */}

          {day.description && (
            <p className="dayDescription">
              {day.description}
            </p>
          )}


          {/* INFO */}

          <div className="infoStrip">

            <InfoItem
              icon="clock"
              label="Duration"
              value={
                day.duration ||
                "Full Day"
              }
            />

            <InfoItem
              icon="location"
              label="Location"
              value={
                day.location ||
                "As Per Itinerary"
              }
            />

            <InfoItem
              icon="meal"
              label="Meals"
              value={
                day.meals ||
                "As Per Plan"
              }
            />

            <InfoItem
              icon="hotel"
              label="Stay"
              value={
                day.stay ||
                "As Per Package"
              }
            />

          </div>


          {/* PLAN */}

          <div className="dayPlan">

            <div className="planHeading">

              <span>
                TODAY'S PLAN
              </span>

              <div />

              <button
                type="button"
                onClick={() =>
                  setExpanded(
                    !expanded
                  )
                }
              >
                {expanded
                  ? "Hide"
                  : "Show"}

                <Icon type="chevron" />

              </button>

            </div>


            {expanded && (

              <div className="planItems">

                {schedule
                  .slice(0, 3)
                  .map(
                    (
                      item,
                      index
                    ) => (

                      <article
                        className="planItem"
                        key={index}
                      >

                        <div className="planItemNumber">
                          0{index + 1}
                        </div>

                        <div className="planItemContent">

                          <span>
                            {item.time}
                          </span>

                          <h4>
                            {item.title}
                          </h4>

                          <p>
                            {
                              item.description
                            }
                          </p>

                        </div>

                      </article>

                    )
                  )}

              </div>

            )}

          </div>


          {/* HIGHLIGHTS */}

          <div className="highlightRow">

            <span className="highlightTitle">
              HIGHLIGHTS
            </span>

            <div className="highlightList">

              {highlights
                .slice(0, 5)
                .map(
                  (
                    item,
                    index
                  ) => (

                    <span
                      key={index}
                      className="highlightTag"
                    >

                      <Icon type="check" />

                      {item}

                    </span>

                  )
                )}

            </div>

          </div>


          {/* FOOTER */}

          <div className="itineraryFooter">

            <button
              type="button"
              disabled={
                activeDay === 0
              }
              onClick={
                previousDay
              }
              className="previousButton"
            >

              <Icon type="arrowLeft" />

              Previous

            </button>


            <div className="progressLine">

              <span
                style={{
                  width: `${
                    ((activeDay + 1) /
                      itinerary.length) *
                    100
                  }%`,
                }}
              />

            </div>


            <button
              type="button"
              onClick={
                nextDay
              }
              className="nextButton"
            >

              {activeDay ===
              itinerary.length - 1
                ? "Start Again"
                : "Next Day"}

              <Icon type="arrowRight" />

            </button>

          </div>


          {copied && (
            <div className="copyMessage">
              Itinerary copied
            </div>
          )}

        </div>

      </div>

    </section>
  );
};


export default TourItinerary;