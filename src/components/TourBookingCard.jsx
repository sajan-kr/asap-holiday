import React from "react";
import "./TourBookingCard.css";
import {
    FaCalendarCheck,
    FaDownload,
    FaPhoneAlt,
    FaShieldAlt,
    FaStar,
} from "react-icons/fa";

const TourBookingCard = ({ tour }) => {
    return (
        <div className="tourBookingCard">

            <div className="bookingTop">

                <span className="bookingOffer">

                    {tour.offer || "Best Deal"}

                </span>

                <h2>{tour.price}</h2>

                <p>Per Person</p>

            </div>

            <button className="bookingBtn">

                <FaCalendarCheck />

                Book Now

            </button>

            <button className="enquiryBtn">

                <FaPhoneAlt />

                Enquiry Now

            </button>

            <button className="brochureBtn">

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