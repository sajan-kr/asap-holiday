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
/* =========================  CUSTOM TOUR DATA ========================= */

const toursData = {
  maldives: {
    title: "Maldives Luxury Escape",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",
    video: "/video/maldives.mp4",
    price: "₹1,89,000",
    duration: "6 Nights / 7 Days",
  },

  dubai: {
    title: "Dubai Premium Tour",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    video: "/video/dubai.mp4",
    price: "₹1,25,000",
    duration: "5 Nights / 6 Days",
  },

  bali: {
    title: "Bali Luxury Retreat",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    video: "/video/bali.mp4",
    price: "₹98,000",
    duration: "5 Nights / 6 Days",
  },

  switzerland: {
    title: "Swiss Alps Experience",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    video: "/video/switzerland.mp4",
    price: "₹2,45,000",
    duration: "8 Nights / 9 Days",
  },
};

/* ========================= COMPONENT ========================= */

const Tours = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  /* =========================  DYNAMIC FALLBACK ========================= */

  const tour = toursData[country] || {
    title: country.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
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