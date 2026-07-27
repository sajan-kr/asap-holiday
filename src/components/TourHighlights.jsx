import React from "react";
import "./TourHighlights.css";

import {
    FaPlaneDeparture,
    FaHotel,
    FaUtensils,
    FaBus,
    FaPassport,
    FaHeadset,
    FaCamera,
    FaShieldAlt,
} from "react-icons/fa";

const highlights = [
    {
        icon: <FaPlaneDeparture />,
        title: "Flights Included",
        desc: "Round-trip flights with selected airlines.",
    },
    {
        icon: <FaHotel />,
        title: "Premium Hotels",
        desc: "Comfortable 4★ & 5★ accommodation.",
    },
    {
        icon: <FaUtensils />,
        title: "Meals",
        desc: "Daily breakfast and selected meals.",
    },
    {
        icon: <FaBus />,
        title: "Transfers",
        desc: "Airport and local transportation included.",
    },
    {
        icon: <FaPassport />,
        title: "Visa Assistance",
        desc: "Complete visa guidance and support.",
    },
    {
        icon: <FaCamera />,
        title: "Sightseeing",
        desc: "Visit famous attractions with guided tours.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Safe Travel",
        desc: "Reliable travel planning and assistance.",
    },
    {
        icon: <FaHeadset />,
        title: "24×7 Support",
        desc: "Dedicated travel expert throughout your trip.",
    },
];

const TourHighlights = () => {
    return (
        <section className="tourHighlights">

            <div className="sectionHeading">
                <span>PACKAGE BENEFITS</span>
                <h2>Tour Highlights</h2>
                <p>
                    Everything included to make your holiday enjoyable and hassle-free.
                </p>
            </div>

            <div className="highlightGrid">

                {highlights.map((item, index) => (
                    <div className="highlightCard" key={index}>

                        <div className="highlightIcon">
                            {item.icon}
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.desc}</p>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default TourHighlights;