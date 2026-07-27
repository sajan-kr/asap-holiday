import React from "react";
import "./TourHeroBanner.css";
import {
    FaStar,
    FaMapMarkerAlt,
    FaClock,
    FaDownload,
} from "react-icons/fa";

const TourHeroBanner = () => {
    return (
        <section
            className="tourHeroBanner"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop')",
            }}
        >
            <div className="tourHeroOverlay">
                <div className="tourHeroContent">

                    <span className="tourBadge">
                        Best Seller
                    </span>

                    <h1>Dubai Premium Tour</h1>

                    <div className="tourMeta">

                        <span>
                            <FaStar />
                            4.9 (850 Reviews)
                        </span>

                        <span>
                            <FaMapMarkerAlt />
                            Dubai, UAE
                        </span>

                        <span>
                            <FaClock />
                            5 Nights / 6 Days
                        </span>

                    </div>

                    <h2>Starting From ₹1,25,000 / Person</h2>

                    <p>
                        Discover the best of Dubai with luxury hotels,
                        Burj Khalifa, Desert Safari, Marina Cruise,
                        shopping and unforgettable experiences.
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