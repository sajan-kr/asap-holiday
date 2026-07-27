import React from "react";
import "./TourOverview.css";

import {
    FaMapMarkedAlt,
    FaClock,
    FaPlaneDeparture,
    FaUsers,
} from "react-icons/fa";

const TourOverview = () => {
    return (
        <section className="tourOverview">

            <div className="overviewHeader">
                <span>ABOUT THIS TOUR</span>
                <h2>Tour Overview</h2>
            </div>

            <p className="overviewDescription">
                Experience an unforgettable holiday with carefully selected hotels,
                exciting sightseeing, delicious meals, and seamless transportation.
                This package is designed for families, couples, honeymooners, and
                adventure lovers looking for a comfortable and memorable travel
                experience.
            </p>

            <div className="overviewCards">

                <div className="overviewCard">
                    <FaMapMarkedAlt />
                    <div>
                        <h4>Destination</h4>
                        <p>Dubai, UAE</p>
                    </div>
                </div>

                <div className="overviewCard">
                    <FaClock />
                    <div>
                        <h4>Duration</h4>
                        <p>5 Nights / 6 Days</p>
                    </div>
                </div>

                <div className="overviewCard">
                    <FaPlaneDeparture />
                    <div>
                        <h4>Departure</h4>
                        <p>Delhi, Mumbai, Bangalore</p>
                    </div>
                </div>

                <div className="overviewCard">
                    <FaUsers />
                    <div>
                        <h4>Suitable For</h4>
                        <p>Family, Couple & Friends</p>
                    </div>
                </div>

            </div>

            <div className="tourInfoBox">
                <h3>Why You'll Love This Tour</h3>

                <ul>
                    <li>✔ Luxury hotel accommodation</li>
                    <li>✔ Daily breakfast included</li>
                    <li>✔ Airport transfers</li>
                    <li>✔ Guided sightseeing tours</li>
                    <li>✔ Professional travel assistance</li>
                </ul>
            </div>

        </section>
    );
};

export default TourOverview;