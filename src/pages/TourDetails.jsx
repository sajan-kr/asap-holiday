import React from "react";
import { useParams } from "react-router-dom";
import toursData from "../data/toursData";

import "./TourDetails.css";

import TourHeroBanner from "../components/TourHeroBanner";
import TourBreadcrumb from "../components/TourBreadcrumb";
import TourOverview from "../components/TourOverview";
import BookingSidebar from "../components/BookingSidebar";
import TourHighlights from "../components/TourHighlights";
import TourGalleryDetails from "../components/TourGalleryDetails";
import TourItinerary from "../components/TourItinerary";
import TourReviews from "../components/TourReviews";
import RelatedTours from "../components/RelatedTours";
import TourCTA from "../components/TourCTA";

const TourDetails = () => {
    const { slug } = useParams();

    const tour = toursData.find((item) => item.slug === slug);

    if (!tour) {
        return (
            <div
                style={{
                    padding: "120px 20px",
                    textAlign: "center",
                }}
            >
                <h1>Tour Not Found</h1>
                <p>Sorry, the requested tour could not be found.</p>
            </div>
        );
    }

    return (
        <div className="tourDetailsPage">

            {/* Hero Banner */}
            <TourHeroBanner tour={tour} />

            {/* Breadcrumb */}
            <TourBreadcrumb tour={tour} />

            {/* Overview + Booking Sidebar */}
            <section className="tourMainContainer">

                <div className="tourLeftContent">
                    <TourOverview tour={tour} />
                </div>

                <div
                    className="tourRightContent"
                    id="bookingSidebar"
                >
                    <BookingSidebar tour={tour} />
                </div>

            </section>

            {/* Highlights */}
            <TourHighlights tour={tour} />

            {/* Gallery */}
            <TourGalleryDetails tour={tour} />

            {/* Itinerary */}
            <TourItinerary tour={tour} />

            {/* Reviews */}
            <TourReviews tour={tour} />

            {/* Related Tours */}
            <RelatedTours currentSlug={tour.slug} />

            {/* CTA */}
            <TourCTA />

        </div>
    );
};

export default TourDetails;