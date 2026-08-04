import React from "react";
import "./TourBookingCard.css";
import { FaCalendarCheck, FaDownload, FaPhoneAlt, FaShieldAlt, FaStar, } from "react-icons/fa";
import { generateBrochure } from "../utils/generateBrochure";

const TourBookingCard = ({ tour }) => {

    const handleBookNow = () => {
        const booking = document.getElementById("bookingSidebar");

        if (booking) {
            booking.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleEnquiry = () => {
        const message = `Hi ASAP Holidays,

            I'm interested in the ${tour.title} package.

            Please share:
            • Complete itinerary
            • Inclusions & Exclusions
            • Best Available Price
            • Available Travel Dates

            Thank you.`;

        window.open(
            `https://wa.me/919205129996?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <div className="tourBookingCard">

            <div className="bookingTop">

                <span className="bookingOffer">

                    {tour.offer || "Best Deal"}

                </span>

                <h2>{tour.price}</h2>

                <p>Per Person</p>

            </div>

            <button className="bookingBtn" onClick={handleBookNow}>
                <FaCalendarCheck />
                Book Now
            </button>

            <button
                className="enquiryBtn"
                onClick={handleEnquiry}
            >
                <FaPhoneAlt />
                Enquiry Now
            </button>

            <button
                className="brochureBtn"
                onClick={() => generateBrochure(tour)}
            >
                <FaDownload />
                Download Brochure
            </button>

            <div className="bookingDivider"></div>

            <div className="bookingInfo">

                <div>

                    <FaStar />

                    <span>

                        {tour.rating} ({tour.reviews} Reviews)

                    </span>

                </div>

                <div>

                    <FaShieldAlt />

                    <span>

                        Best Price Guarantee

                    </span>

                </div>

            </div>

            <div className="bookingSupport">

                <small>Need Help?</small>

                <h3>{tour.phone || "+91 9205129996"}</h3>

            </div>

        </div>
    );
};

export default TourBookingCard;