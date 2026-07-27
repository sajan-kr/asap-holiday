import React from "react";
import "./TourItinerary.css";

const TourItinerary = ({ tour }) => {
  return (
    <section className="tourItinerary">

      <div className="itineraryHeading">

        <span>DAY WISE PLAN</span>

        <h2>Tour Itinerary</h2>

        <p>
          Explore your complete day-by-day travel experience.
        </p>

      </div>

      <div className="timeline">

        {tour.itinerary.map((day, index) => (

          <div
            className="timelineItem"
            key={index}
          >

            <div className="timelineCircle">
              {index + 1}
            </div>

            <div className="timelineContent">

              <span className="timelineDay">
                {day.day}
              </span>

              <h3>{day.title}</h3>

              <p>{day.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TourItinerary;