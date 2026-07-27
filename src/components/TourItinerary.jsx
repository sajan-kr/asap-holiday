import React from "react";
import "./TourItinerary.css";

const itinerary = [
    {
        day: "Day 1",
        title: "Arrival in Dubai",
        description:
            "Arrive at Dubai International Airport, private transfer to the hotel, check-in and relax. Enjoy a welcome dinner.",
    },
    {
        day: "Day 2",
        title: "Dubai City Tour",
        description:
            "Visit Burj Khalifa, Dubai Mall, Dubai Frame, Jumeirah Beach and Palm Jumeirah.",
    },
    {
        day: "Day 3",
        title: "Desert Safari",
        description:
            "Experience dune bashing, camel rides, BBQ dinner and live cultural performances.",
    },
    {
        day: "Day 4",
        title: "Marina Cruise",
        description:
            "Spend the morning shopping and enjoy an evening Marina Dinner Cruise.",
    },
    {
        day: "Day 5",
        title: "Leisure Day",
        description:
            "Enjoy optional activities, shopping or relax at the hotel.",
    },
    {
        day: "Day 6",
        title: "Departure",
        description:
            "Check out from the hotel and transfer to the airport for your return flight.",
    },
];

const TourItinerary = () => {
    return (
        <section className="tourItinerary">

            <div className="itineraryHeading">
                <span>TRAVEL PLAN</span>
                <h2>Day Wise Itinerary</h2>
                <p>
                    A carefully planned schedule to make the most of your holiday.
                </p>
            </div>

            <div className="timeline">

                {itinerary.map((item, index) => (
                    <div className="timelineItem" key={index}>

                        <div className="timelineCircle">
                            {index + 1}
                        </div>

                        <div className="timelineContent">

                            <span className="timelineDay">
                                {item.day}
                            </span>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default TourItinerary;