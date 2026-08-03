import React from "react";
import "./TourFeatureBar.css";

import {
  FaClock,
  FaUsers,
  FaHotel,
  FaUtensils,
  FaPlaneDeparture,
  FaBus,
  FaPassport,
  FaSuitcaseRolling,
} from "react-icons/fa";

const TourFeatureBar = ({ tour }) => {
  return (
    <div className="tourFeatureBar">

      <div className="featureItem">
        <FaClock />
        <div>
          <small>Duration</small>
          <h4>{tour.duration}</h4>
        </div>
      </div>

      <div className="featureItem">
        <FaUsers />
        <div>
          <small>Group Size</small>
          <h4>{tour.groupSize || "2 - 20 People"}</h4>
        </div>
      </div>

      <div className="featureItem">
        <FaHotel />
        <div>
          <small>Hotel</small>
          <h4>{tour.hotel || "5 Star"}</h4>
        </div>
      </div>

      <div className="featureItem">
        <FaUtensils />
        <div>
          <small>Meals</small>
          <h4>{tour.meals || "Included"}</h4>
        </div>
      </div>

      <div className="featureItem">
        <FaPlaneDeparture />
        <div>
          <small>Flights</small>
          <h4>{tour.flights || "Included"}</h4>
        </div>
      </div>

      <div className="featureItem">
        <FaBus />
        <div>
          <small>Transfers</small>
          <h4>{tour.transfers || "Private"}</h4>
        </div>
      </div>

      <div className="featureItem">
        <FaPassport />
        <div>
          <small>Visa</small>
          <h4>{tour.visa || "Assistance"}</h4>
        </div>
      </div>

      <div className="featureItem">
        <FaSuitcaseRolling />
        <div>
          <small>Tour Type</small>
          <h4>{tour.category || "Luxury"}</h4>
        </div>
      </div>

    </div>
  );
};

export default TourFeatureBar;