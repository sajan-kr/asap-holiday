import React from "react";
import "./TourHighlights.css";

import {
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const TourHighlights = ({ tour }) => {
  return (
    <section className="tourHighlights">

      <div className="sectionHeading">

        <span>PACKAGE HIGHLIGHTS</span>

        <h2>Why You'll Love This Tour</h2>

        <p>
          Explore the best experiences included in your holiday package.
        </p>

      </div>

      <div className="highlightGrid">

        {tour.highlights.map((item, index) => (

          <div
            className="highlightCard"
            key={index}
          >

            <div className="highlightIcon">
              <FaStar />
            </div>

            <h3>{item}</h3>

            <p>
              Carefully selected experience included in this holiday package.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TourHighlights;