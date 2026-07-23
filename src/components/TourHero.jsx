import React, { useState } from "react";
import "./TourHero.css";
import { FaArrowRight, FaPlay, FaMapMarkerAlt, FaClock, FaTag, } from "react-icons/fa";

const TourHero = ({ tour }) => {

  const [showVideo, setShowVideo] = useState(false);

  const handleVideo = () => {
    setShowVideo(true);
  };

  return (
    <section className="tourHero" style={{ backgroundImage: `url(${tour.image})`, }} >
      {/* Overlay */}
      <div className="heroOverlay"></div>

      {/* Decorative Elements */}
      <div className="heroCircle heroCircle1"></div>
      <div className="heroCircle heroCircle2"></div>

      <div className="heroContainer">

        {/* ================= LEFT CONTENT ================= */}

        <div className="heroLeft">
          <span className="heroSubtitle">
            It's Time To Travel
          </span>

          <h1 className="heroTitle">
            {tour.title}
          </h1>

          <p className="heroDescription">
            Discover breathtaking destinations with expertly
            crafted holiday packages. Enjoy unforgettable
            experiences, luxury accommodations and seamless
            travel planning.
          </p>

          <div className="heroInfo">
            <div className="infoItem">
              <FaClock />
              <span>{tour.duration}</span>
            </div>
            <div className="infoItem">
              <FaTag />
              <span>Starting From {tour.price}</span>
            </div>
          </div>

          <div className="heroButtons">
            <button className="primaryBtn">
              Explore Tours
              <FaArrowRight />
            </button>
            <button className="secondaryBtn" onClick={handleVideo}>
              <FaPlay />
              Watch Video
            </button>
          </div>

          {/* Statistics */}

          <div className="heroStats">
            <div className="statBox">
              <h3>25K+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="statBox">
              <h3>350+</h3>
              <p>Destinations</p>
            </div>
            <div className="statBox">
              <h3>4.9</h3>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="heroRight">
          <div className="offerCard">
            <span className="offerBadge">
              Limited Time Offer
            </span>
            <h4>Save Up To</h4>
            <h2>30% OFF</h2>
            <p>
              Book today and enjoy exclusive discounts on
              selected destinations.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("featuredTours")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              View Offers
            </button>
            <img src={tour.image} alt={tour.title} />
          </div>

          {/* Floating Price Card */}

          <div className="floatingCard">
            <div className="floatingIcon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <small>Destination</small>
              <h5>{tour.title}</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}

      {showVideo && (
        <div className="videoModal" onClick={() => setShowVideo(false)} >
          <div className="videoBox" onClick={(e) => e.stopPropagation()} >
            <button className="closeVideo" onClick={() => setShowVideo(false)} >
              ✕
            </button>

            <video key={tour.video} className="heroVideo" src={tour.video} controls autoPlay>
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      )}

    </section>
  );
};

export default TourHero;