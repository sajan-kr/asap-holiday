import React from "react";
import "./RelatedTours.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

const tours = [
    {
        slug: "maldives-luxury-escape",
        title: "Maldives Luxury Escape",
        image: "/images/maldives.jpg",
        location: "Maldives",
        duration: "6 Days / 5 Nights",
        price: "₹1,89,000",
        rating: 4.9,
    },
    {
        slug: "bali-luxury-retreat",
        title: "Bali Luxury Retreat",
        image: "/images/bali.jpg",
        location: "Bali",
        duration: "5 Days / 4 Nights",
        price: "₹98,000",
        rating: 4.8,
    },
    {
        slug: "switzerland-alps-tour",
        title: "Switzerland Alps Tour",
        image: "/images/switzerland.jpg",
        location: "Switzerland",
        duration: "8 Days / 7 Nights",
        price: "₹2,45,000",
        rating: 5.0,
    },
];

const RelatedTours = () => {
    return (
        <section className="relatedTours">

            <div className="relatedHeading">
                <span>YOU MAY ALSO LIKE</span>
                <h2>Related Tours</h2>
                <p>
                    Explore more exciting destinations and holiday packages.
                </p>
            </div>

            <div className="relatedGrid">

                {tours.map((tour) => (
                    <div className="relatedCard" key={tour.slug}>

                        <img src={tour.image} alt={tour.title} />

                        <div className="relatedContent">

                            <div className="rating">
                                <FaStar />
                                {tour.rating}
                            </div>

                            <h3>{tour.title}</h3>

                            <p>
                                <FaMapMarkerAlt />
                                {tour.location}
                            </p>

                            <p>
                                <FaClock />
                                {tour.duration}
                            </p>

                            <div className="bottomRow">

                                <h4>{tour.price}</h4>

                                <Link to={`/tour/${tour.slug}`}>
                                    View Details
                                </Link>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default RelatedTours;