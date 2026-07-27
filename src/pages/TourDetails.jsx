import React from "react";
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
    return (
        <div className="tourDetailsPage">

            <TourHeroBanner />

            <TourBreadcrumb />

            <section className="tourMainContainer">

                <div className="tourLeftContent">
                    <TourOverview />
                </div>

                <div className="tourRightContent">
                    <BookingSidebar />
                </div>

            </section>

            <TourHighlights />

            <TourGalleryDetails />

            <TourItinerary />

            <TourReviews />

            <RelatedTours />

            <TourCTA />

        </div>
    );
};

export default TourDetails;