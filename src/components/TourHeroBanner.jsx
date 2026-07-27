import React from "react";
import "./TourHeroBanner.css";
import {
    FaStar,
    FaMapMarkerAlt,
    FaClock,
    FaDownload,
} from "react-icons/fa";

const TourHeroBanner = ({ tour }) => {
    return (
        <section className="tourHeroBanner"
            style={{
                backgroundImage: `url(${tour.image})`,
            }}
        >
            <div className="tourHeroOverlay">
                <div className="tourHeroContent">

                    <span className="tourBadge">
                        Best Seller
                    </span>

                    <h1>{tour.title}</h1>

                    <div className="tourMeta">

                        <span>
                            <FaStar />
                            4.9 (850 Reviews)
                        </span>

                        <span>
                            <FaMapMarkerAlt />
                            {tour.location}
                        </span>

                        <span>
                            <FaClock />
                            {tour.duration}
                        </span>

                    </div>

                    <h2>Starting From {tour.price} / Person</h2>

                    <p>
                        {tour.description}
                    </p>

                    <div className="heroButtons">

                        <button className="primaryBtn">
                            Book Now
                        </button>

                        <button className="secondaryBtn">
                            <FaDownload />
                            Download Brochure
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default TourHeroBanner;