import React from "react";

import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

import "./TravelerTestimonials.css";

const TravelerTestimonials = ({ destination }) => {

  // ------------------------------------------------
  // Testimonials
  //
  // These can later be moved to destinationsData.js
  // if you want destination-specific reviews.
  // ------------------------------------------------
  const testimonials = [
    {
      name: "Emma Watson",
      role: "Verified Traveler",
      initials: "EW",
      rating: 5,
      text:
        "Everything was perfectly organized from start to finish. The destination was beautiful and the entire experience was completely stress-free.",
    },

    {
      name: "John Smith",
      role: "Verified Traveler",
      initials: "JS",
      rating: 5,
      text:
        "ASAP Holidays made our trip incredibly easy. The hotel, transportation and overall planning were excellent. We would definitely travel with them again.",
    },

    {
      name: "Alex Brown",
      role: "Verified Traveler",
      initials: "AB",
      rating: 5,
      text:
        "One of the best travel experiences we have had. Everything was smooth, comfortable and well planned. Highly recommended for anyone visiting this destination.",
    },
  ];


  return (
    <section
      id="destination-testimonials"
      className="destination-testimonials"
    >

      <div className="destination-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}
        <div className="destination-section-header">

          <span className="destination-section-eyebrow">
            TRAVELER STORIES
          </span>

          <h2>
            What Our Travelers Say
          </h2>

          <p>
            Real experiences from travelers who explored
            amazing destinations with ASAP Holidays.
          </p>

        </div>


        {/* =================================================
            TESTIMONIAL GRID
        ================================================= */}
        <div className="destination-testimonials__grid">

          {testimonials.map((testimonial, index) => (

            <article
              className="destination-testimonial-card"
              key={`${testimonial.name}-${index}`}
            >

              {/* Quote icon */}
              <div className="destination-testimonial-card__quote">
                <FaQuoteLeft />
              </div>


              {/* Rating */}
              <div className="destination-testimonial-card__rating">

                {Array.from({
                  length: testimonial.rating,
                }).map((_, starIndex) => (

                  <FaStar key={starIndex} />

                ))}

              </div>


              {/* Review */}
              <p className="destination-testimonial-card__text">
                “{testimonial.text}”
              </p>


              {/* Traveler */}
              <div className="destination-testimonial-card__traveler">

                <div className="destination-testimonial-card__avatar">
                  {testimonial.initials}
                </div>

                <div className="destination-testimonial-card__details">

                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.role}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            BOTTOM TRUST LINE
        ================================================= */}
        <div className="destination-testimonials__trust">

          <div className="destination-testimonials__trust-rating">

            <strong>
              4.9
            </strong>

            <div>

              <div className="destination-testimonials__trust-stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <span>
                Excellent traveler rating
              </span>

            </div>

          </div>


          <div className="destination-testimonials__trust-divider" />


          <div className="destination-testimonials__trust-text">

            <strong>
              12,000+
            </strong>

            <span>
              Happy Travelers
            </span>

          </div>


          <div className="destination-testimonials__trust-divider" />


          <div className="destination-testimonials__trust-text">

            <strong>
              250+
            </strong>

            <span>
              Trips Planned
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TravelerTestimonials;