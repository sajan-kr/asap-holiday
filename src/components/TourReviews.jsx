import React, { useEffect, useState } from "react";
import "./TourReviews.css";

import {
    FaStar,
    FaQuoteLeft,
    FaArrowLeft,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";

const reviews = [
    {
        name: "Rahul Sharma",
        location: "Delhi, India",
        image: "/avatars/avatar1.jpg",
        rating: 5,
        trip: "Dubai Holiday",
        review:
            "Amazing trip! Everything was perfectly organised. The hotels, sightseeing and transfers were excellent. We didn't have to worry about anything throughout the journey.",
    },
    {
        name: "Priya Verma",
        location: "Mumbai, India",
        image: "/avatars/avatar2.jpg",
        rating: 5,
        trip: "Bali Escape",
        review:
            "The entire Bali experience was beautifully planned. From airport transfers to sightseeing, everything was smooth and stress-free. Truly an unforgettable holiday.",
    },
    {
        name: "Pooja Singh",
        location: "Bangalore, India",
        image: "/avatars/avatar3.jpg",
        rating: 4,
        trip: "Thailand Experience",
        review:
            "Very good experience from beginning to end. The support team was helpful and all our travel arrangements were handled smoothly.",
    },
];

const TourReviews = () => {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalReviews = reviews.length;

    const nextReview = () => {
        setActive((current) =>
            current === totalReviews - 1 ? 0 : current + 1
        );
    };

    const previousReview = () => {
        setActive((current) =>
            current === 0 ? totalReviews - 1 : current - 1
        );
    };

    const selectReview = (index) => {
        setActive(index);
    };

    /* =========================
       AUTO SLIDER
    ========================= */

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActive((current) =>
                current === totalReviews - 1 ? 0 : current + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, totalReviews]);

    return (
        <section className="tourReviews">

            <div className="reviewsContainer">

                {/* =================================
                    SECTION HEADER
                ================================= */}

                <div className="reviewsHeader">

                    <div className="reviewsTitle">

                        <span className="reviewsEyebrow">
                            TRAVELLER EXPERIENCES
                        </span>

                        <h2>
                            Memories made.
                            <br />
                            <span>Stories shared.</span>
                        </h2>

                    </div>

                    <div className="reviewsHeaderRight">

                        <p>
                            Real experiences from travellers who turned
                            their holiday plans into unforgettable memories.
                        </p>

                        <div className="overallRating">

                            <strong>4.9</strong>

                            <div>

                                <div className="overallStars">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>

                                <span>
                                    500+ verified traveller reviews
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================
                    SLIDER
                ================================= */}

                <div
                    className="reviewsSlider"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >

                    <div
                        className="reviewsTrack"
                        style={{
                            transform: `translateX(-${active * 100}%)`,
                        }}
                    >

                        {reviews.map((review, index) => (

                            <div
                                className="reviewSlide"
                                key={review.name}
                            >

                                <div className="reviewContent">

                                    {/* LEFT */}

                                    <div className="reviewLeft">

                                        <div className="quoteIcon">
                                            <FaQuoteLeft />
                                        </div>

                                        <div className="reviewMeta">

                                            <span>
                                                {review.trip}
                                            </span>

                                            <div className="cardStars">

                                                {[...Array(5)].map(
                                                    (_, starIndex) => (
                                                        <FaStar
                                                            key={starIndex}
                                                            className={
                                                                starIndex <
                                                                review.rating
                                                                    ? "starActive"
                                                                    : "starInactive"
                                                            }
                                                        />
                                                    )
                                                )}

                                            </div>

                                        </div>

                                        <div className="reviewTextWrapper">

                                            <p>
                                                “{review.review}”
                                            </p>

                                        </div>

                                        <div className="reviewAuthor">

                                            <img
                                                src={review.image}
                                                alt={review.name}
                                            />

                                            <div className="authorDetails">

                                                <strong>
                                                    {review.name}
                                                </strong>

                                                <span>
                                                    {review.location}
                                                </span>

                                            </div>

                                            <div className="verified">

                                                <FaCheckCircle />

                                                <span>
                                                    Verified Traveller
                                                </span>

                                            </div>

                                        </div>

                                    </div>


                                    {/* RIGHT */}

                                    <div className="reviewVisual">

                                        <div className="visualCircle">

                                            <img
                                                src={review.image}
                                                alt={review.name}
                                            />

                                        </div>

                                        <div className="visualDecoration decorationOne"></div>

                                        <div className="visualDecoration decorationTwo"></div>

                                        <div className="visualNumber">
                                            0{index + 1}
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* =================================
                        CONTROLS
                    ================================= */}

                    <div className="sliderControls">

                        <button
                            className="sliderArrow"
                            onClick={previousReview}
                            aria-label="Previous review"
                        >
                            <FaArrowLeft />
                        </button>

                        <div className="sliderDots">

                            {reviews.map((_, index) => (

                                <button
                                    key={index}
                                    className={
                                        active === index
                                            ? "sliderDot active"
                                            : "sliderDot"
                                    }
                                    onClick={() => selectReview(index)}
                                    aria-label={`Go to review ${index + 1}`}
                                ></button>

                            ))}

                        </div>

                        <button
                            className="sliderArrow"
                            onClick={nextReview}
                            aria-label="Next review"
                        >
                            <FaArrowRight />
                        </button>

                    </div>

                </div>


                {/* =================================
                    TRUST BAR
                ================================= */}

                <div className="reviewTrust">

                    <div className="trustItem">

                        <strong>4.9</strong>

                        <div>

                            <div className="trustStars">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </div>

                            <span>
                                Average rating
                            </span>

                        </div>

                    </div>

                    <div className="trustDivider"></div>

                    <div className="trustItem simple">

                        <strong>500+</strong>

                        <span>
                            Happy Travellers
                        </span>

                    </div>

                    <div className="trustDivider"></div>

                    <div className="trustItem simple">

                        <strong>25+</strong>

                        <span>
                            Destinations
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default TourReviews;