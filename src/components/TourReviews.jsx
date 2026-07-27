import React from "react";
import "./TourReviews.css";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        name: "Rahul Sharma",
        image: "/avatars/avatar1.jpg",
        location: "Delhi",
        rating: 5,
        review:
            "Amazing trip! Everything was perfectly organised. Hotels, sightseeing and transfers were excellent.",
    },
    {
        name: "Priya Verma",
        image: "/avatars/avatar2.jpg",
        location: "Mumbai",
        rating: 5,
        review:
            "Dubai was beautiful and the itinerary was well planned. Highly recommend ASAP Holiday.",
    },
    {
        name: "Amit Singh",
        image: "/avatars/avatar3.jpg",
        location: "Bangalore",
        rating: 4,
        review:
            "Very good experience. Great customer support and smooth travel arrangements.",
    },
];

const TourReviews = () => {
    return (
        <section className="tourReviews">

            <div className="reviewHeading">
                <span>TRAVELLER REVIEWS</span>
                <h2>What Our Travellers Say</h2>
                <p>
                    Real experiences shared by travellers who explored with us.
                </p>
            </div>

            <div className="reviewGrid">

                {reviews.map((review, index) => (
                    <div className="reviewCard" key={index}>

                        <div className="reviewTop">

                            <img src={review.image} alt={review.name} />

                            <div>
                                <h3>{review.name}</h3>
                                <span>{review.location}</span>
                            </div>

                        </div>

                        <div className="stars">
                            {[...Array(review.rating)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>

                        <p>{review.review}</p>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default TourReviews;