import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import packagesData from "../data/packagesData";
import { MapPin, Star, Clock, Plane, Hotel, Camera, Calendar, ChevronRight, } from "lucide-react";
import "./PackageDetails.css";

export default function PackageDetails() {

    const { slug } = useParams();

    const navigate = useNavigate();

    const item = packagesData[slug];

    if (!item) {

        return (

            <div className="not-found">

                <h1>Package Not Found</h1>
                <button onClick={() => navigate("/")}>
                    Go Back Home
                </button>

            </div>

        );

    }

    return (

        <section className="package-details">

            {/* HERO */}

            <div className="details-hero">

                <img src={item.image} alt={item.title}/>

                <div className="hero-overlay">
                    <div className="hero-content">

                        {/* BREADCRUMB */}

                        <div className="breadcrumb">

                            <span onClick={() => navigate("/")}>
                                Home
                            </span>

                            <ChevronRight size={15} />

                            <span className="active-page">
                                {item.title}
                            </span>
                        </div>

                        {/* TAG */}

                        <span className="top-tag">
                            Premium Holiday Package
                        </span>

                        {/* TITLE */}

                        <h1>{item.title}</h1>

                        {/* INFO */}

                        <div className="hero-info">

                            <span>
                                <MapPin size={18} />
                                {item.location}
                            </span>

                            <span>
                                <Star size={18} fill="#ffb400" color="#ffb400"/>
                                {item.rating}
                            </span>

                            <span>
                                <Clock size={18} />
                                {item.duration}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN */}

            <div className="details-container">

                {/* LEFT */}

                <div className="details-left">

                    {/* GALLERY */}

                    <div className="gallery-grid">

                        {item.gallery.map(
                            (img, index) => (

                                <img key={index} src={img} alt=""/>

                            )
                        )}

                    </div>

                    {/* ABOUT */}

                    <div className="details-card">
                        <h2>About This Trip</h2>
                        <p>{item.description}</p>
                    </div>

                    {/* ITINERARY */}

                    <div className="details-card">
                        <h2>Travel Itinerary</h2>
                        {item.itinerary.map(
                            (plan, index) => (

                                <div className="itinerary-item" key={index} >
                                    <div className="day">
                                        {plan.day}
                                    </div>

                                    <div className="content">
                                        <h4>
                                            {plan.title}
                                        </h4>
                                        <p>
                                            {plan.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}

                    </div>

                    {/* REVIEWS */}

                    <div className="details-card">
                        <h2>Traveller Reviews</h2>
                        <div className="review-box">
                            <div className="review-top">
                                <img src="https://i.pravatar.cc/100?img=12" alt="" />

                                <div>
                                    <h4>Rahul Sharma</h4>
                                    <div className="stars">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>

                            <p>
                                Amazing experience! Everything
                                was perfectly planned and
                                organized.
                            </p>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="details-right">

                    {/* BOOKING */}

                    <div className="booking-card">
                        <h3>{item.price}</h3>
                        <p>{item.duration}</p>
                        <button>
                            Book Now
                        </button>
                    </div>

                    {/* INCLUDED */}

                    <div className="details-card">
                        <h2>Included</h2>
                        <ul className="included-list">
                            <li>
                                <Plane size={18} />
                                Flight Included
                            </li>

                            <li>
                                <Hotel size={18} />
                                Luxury Hotel Stay
                            </li>

                            <li>
                                <Camera size={18} />
                                Sightseeing Tours
                            </li>

                            <li>
                                <Calendar size={18} />
                                Daily Breakfast
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}