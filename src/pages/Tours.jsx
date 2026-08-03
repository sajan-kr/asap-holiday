import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import TourHero from "../components/TourHero";
import TourSearch from "../components/TourSearch";
import TrendingDestinations from "../components/TrendingDestinations";
import PopularDestinations from "../components/PopularDestinations";
import FeaturedTours from "../components/FeaturedTours";
import TravelStyles from "../components/TravelStyles";
import WhyChooseTour from "../components/WhyChooseTour";
import TravelerStories from "../components/TravelerStories";
import TourGallery from "../components/TourGallery";
import TourCTA from "../components/TourCTA";
import toursData from "../data/toursData";
/* =========================  CUSTOM TOUR DATA ========================= */


/* ========================= COMPONENT ========================= */

const Tours = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  /* =========================  DYNAMIC FALLBACK ========================= */
  const tour =
    toursData.find(
      (item) =>
        item.slug.toLowerCase() === (country || "").toLowerCase()
    ) || {
      title: country
        ? country
          .split("-")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join(" ")
        : "International Tours",

      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",

      video: "/video/international.mp4",

      price: "₹1,20,000",

      duration: "5 Nights / 6 Days",
    };

  return (
    <>
      <TourHero tour={tour} />
      <TourSearch />
      <section className="tour-trending-section">
        <TrendingDestinations />
      </section>
      {/* <PopularDestinations /> */}
      <FeaturedTours />
      <TravelStyles />
      <WhyChooseTour />
      <TravelerStories />
      <TourGallery />
      <TourCTA />
    </>
  );
};

export default Tours;