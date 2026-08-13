import React from "react";
import "./TourHighlights.css";

import {
  FaStar,
  FaCheck,
  FaMapMarkerAlt,
  FaHotel,
  FaUtensils,
  FaCamera,
  FaPlane,
  FaUmbrellaBeach,
  FaShip,
  FaShoppingBag,
  FaMountain,
  FaTicketAlt,
  FaArrowRight,
} from "react-icons/fa";

const TourHighlights = ({ tour }) => {

  const highlights = tour?.highlights || [];

  const getIcon = (text = "") => {
    const value = text.toLowerCase();

    if (
      value.includes("airport") ||
      value.includes("transfer") ||
      value.includes("flight")
    )
      return <FaPlane />;

    if (
      value.includes("hotel") ||
      value.includes("resort") ||
      value.includes("villa")
    )
      return <FaHotel />;

    if (
      value.includes("breakfast") ||
      value.includes("meal") ||
      value.includes("dinner") ||
      value.includes("food")
    )
      return <FaUtensils />;

    if (
      value.includes("beach") ||
      value.includes("island") ||
      value.includes("snorkel") ||
      value.includes("water")
    )
      return <FaUmbrellaBeach />;

    if (
      value.includes("cruise") ||
      value.includes("boat") ||
      value.includes("lake")
    )
      return <FaShip />;

    if (
      value.includes("shopping") ||
      value.includes("mall")
    )
      return <FaShoppingBag />;

    if (
      value.includes("mount") ||
      value.includes("alps") ||
      value.includes("titlis") ||
      value.includes("jungfrau")
    )
      return <FaMountain />;

    if (
      value.includes("entry") ||
      value.includes("ticket") ||
      value.includes("studio")
    )
      return <FaTicketAlt />;

    if (
      value.includes("tour") ||
      value.includes("visit") ||
      value.includes("temple")
    )
      return <FaCamera />;

    if (value.includes("guide"))
      return <FaMapMarkerAlt />;

    return <FaStar />;
  };


  if (!highlights.length) {
    return null;
  }


  return (
    <section className="tourHighlights">

      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================= */}

      <div className="th-bg-circle th-circle-one"></div>
      <div className="th-bg-circle th-circle-two"></div>


      {/* =========================================
          HEADER
      ========================================= */}

      <div className="th-header">

        <div className="th-header-left">

          <div className="th-label">
            <span></span>
            PACKAGE HIGHLIGHTS
          </div>

          <h2>
            Moments You'll
            <br />
            <span>Remember Forever.</span>
          </h2>

          <p>
            From iconic attractions to unforgettable experiences,
            discover what's included in your {tour?.location || "holiday"}.
          </p>

        </div>


        <div className="th-header-right">

          <div className="th-total">
            <strong>{highlights.length}</strong>

            <div>
              <span>Premium</span>
              <small>Experiences</small>
            </div>
          </div>

          <div className="th-rating">
            <div className="th-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <span>Handpicked for you</span>
          </div>

        </div>

      </div>


      {/* =========================================
          HIGHLIGHTS
      ========================================= */}

      <div className="th-grid">

        {highlights.map((item, index) => {

          const isFeatured = index === 0;

          return (
            <article
              className={`th-card ${isFeatured ? "th-featured" : ""
                }`}
              key={`${item}-${index}`}
            >

              {/* CARD NUMBER */}

              <div className="th-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* FEATURED LABEL */}

              {isFeatured && (
                <div className="th-featured-label">
                  <FaStar />
                  TOP EXPERIENCE
                </div>
              )}


              {/* ICON */}

              <div className="th-icon">
                {getIcon(item)}
              </div>


              {/* CONTENT */}

              <div className="th-card-content">

                <span className="th-included">
                  INCLUDED
                </span>

                <h3>{item}</h3>

                <div className="th-line"></div>

                <p>
                  Enjoy this carefully selected experience
                  as part of your holiday package.
                </p>

              </div>


              {/* BOTTOM */}

              <div className="th-card-footer">

                <div className="th-check">
                  <FaCheck />
                </div>

                <span>Included in package</span>

                <FaArrowRight className="th-arrow" />

              </div>

            </article>
          );
        })}

      </div>


      {/* =========================================
          BOTTOM CTA / INFO
      ========================================= */}

      <div className="th-bottom">

        <div className="th-bottom-content">

          <div className="th-bottom-icon">
            <FaCheck />
          </div>

          <div>
            <h3>
              Your holiday, thoughtfully planned.
            </h3>

            <p>
              Every experience is selected to make your journey
              comfortable, exciting and memorable.
            </p>
          </div>

        </div>


        <div className="th-bottom-badge">

          <FaMapMarkerAlt />

          <span>
            {tour?.location || "Your Destination"}
          </span>

        </div>

      </div>

    </section>
  );
};

export default TourHighlights;