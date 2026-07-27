import React from "react";
import "./TourOverview.css";

import {
  FaMapMarkedAlt,
  FaClock,
  FaPlaneDeparture,
  FaUsers,
} from "react-icons/fa";

const TourOverview = ({ tour }) => {
  return (
    <section className="tourOverview">

      <div className="overviewHeader">
        <span>ABOUT THIS TOUR</span>

        <h2>{tour.title}</h2>
      </div>

      <p className="overviewDescription">
        {tour.description}
      </p>

      <div className="overviewCards">

        <div className="overviewCard">
          <FaMapMarkedAlt />

          <div>
            <h4>Destination</h4>
            <p>{tour.location}</p>
          </div>
        </div>

        <div className="overviewCard">
          <FaClock />

          <div>
            <h4>Duration</h4>
            <p>{tour.duration}</p>
          </div>
        </div>

        <div className="overviewCard">
          <FaPlaneDeparture />

          <div>
            <h4>Departure</h4>
            <p>Delhi • Mumbai • Bangalore</p>
          </div>
        </div>

        <div className="overviewCard">
          <FaUsers />

          <div>
            <h4>Suitable For</h4>
            <p>Family • Couples • Friends</p>
          </div>
        </div>

      </div>

      <div className="tourInfoBox">

        <h3>Package Highlights</h3>

        <ul>

          {tour.highlights.map((item, index) => (
            <li key={index}>
              ✔ {item}
            </li>
          ))}

        </ul>

      </div>

    </section>
  );
};

export default TourOverview;