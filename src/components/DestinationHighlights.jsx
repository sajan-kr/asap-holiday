import React from "react";

import {
  FaStar,
  FaMountain,
  FaGlobeAmericas,
} from "react-icons/fa";

import "./DestinationHighlights.css";

const DestinationHighlights = ({ destination }) => {
  return (
    <section
      id="destination-highlights"
      className="destination-highlights"
    >

      <div className="destination-container">

        {/* Section heading */}
        <div className="destination-section-header">

          <span className="destination-section-eyebrow">
            WHY TRAVELERS LOVE IT
          </span>

          <h2>
            Experience More Than Just A Destination
          </h2>

          <p>
            Discover what makes {destination.name}
            special and worth exploring.
          </p>

        </div>


        {/* Highlight cards */}
        <div className="destination-highlights__grid">

          {/* Card 01 */}
          <article className="destination-highlight-card">

            <div className="destination-highlight-card__icon">
              <FaStar />
            </div>

            <span className="destination-highlight-card__number">
              01
            </span>

            <h3>
              Luxury Lifestyle
            </h3>

            <p>
              Enjoy premium stays, beautiful surroundings
              and memorable travel experiences.
            </p>

          </article>


          {/* Card 02 */}
          <article className="destination-highlight-card">

            <div className="destination-highlight-card__icon">
              <FaMountain />
            </div>

            <span className="destination-highlight-card__number">
              02
            </span>

            <h3>
              Amazing Experiences
            </h3>

            <p>
              Explore exciting attractions, activities
              and unforgettable adventures.
            </p>

          </article>


          {/* Card 03 */}
          <article className="destination-highlight-card">

            <div className="destination-highlight-card__icon">
              <FaGlobeAmericas />
            </div>

            <span className="destination-highlight-card__number">
              03
            </span>

            <h3>
              Local Culture
            </h3>

            <p>
              Experience local traditions, food, people
              and authentic destination culture.
            </p>

          </article>

        </div>

      </div>

    </section>
  );
};

export default DestinationHighlights;