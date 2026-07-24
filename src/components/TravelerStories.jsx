import React, { useState } from "react";
import "./TravelerStories.css";
import travelerStories from "../data/travelerStoriesData";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaUsers, FaGlobe, FaCamera, FaHeadset, FaMapMarkerAlt, FaPlay, FaStar, FaTimes, } from "react-icons/fa";

const TravelerStories = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="travelerStories">

      {/* Header will come in Step 2 */}

      {/* ========================= HEADER ========================= */}

      <div className="tsHeader">

        {/* Left Images */}

        <div className="tsPolaroids">

          <img src="/images/traveler1.jpg" alt="Traveler 1" className="p1"/>
          <img src="/images/traveler2.jpg" alt="Traveler 2" className="p2"/>
          <img src="/images/traveler3.jpg" alt="Traveler 3" className="p3"/>

          <div className="memoryText">
            Memories
            <br />
            that last forever ❤️
          </div>

        </div>

        {/* Center */}

        <div className="tsHeading">

          <span className="tsSubTitle">
            REAL STORIES. REAL PEOPLE. REAL MEMORIES.
          </span>

          <h2>
            Traveler <span>Stories</span>
          </h2>

          <p>
            Heartfelt experiences from our amazing travelers
            who explored the world with us.
          </p>

          <div className="headingLine"></div>

        </div>

        {/* Rating Card */}

        <div className="tsRating">

          <div className="ratingStars">

            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}

          </div>

          <h3>
            4.9
            <span>/5</span>
          </h3>

          <p>Overall Rating</p>

          <small>
            Based on 2,500+ Reviews
          </small>

        </div>

      </div>

      {/* ========================= STATS ========================= */}

      <div className="tsStats" ref={ref}>

        <div className="tsStatItem">

          <div className="tsIcon">
            {/* <FaUsers /> */}
            👥
          </div>

          <div className="tsContent">

            <h3>
              {/* {inView && <CountUp end={2500} duration={2} />}+ */}
              2500+
            </h3>

            <span>Loved Trips</span>

          </div>

        </div>

        <div className="tsStatItem">

          <div className="tsIcon">
            {/* <FaGlobe /> */}
            🌍
          </div>

          <div className="tsContent">

            <h3>
              {/* {inView && <CountUp end={50} duration={2} />}+ */}
              50+
            </h3>

            <span>Destinations</span>

          </div>

        </div>

        <div className="tsStatItem">

          <div className="tsIcon">
            {/* <FaCamera /> */}
            📷
          </div>

          <div className="tsContent">

            <h3>
              {/* {inView && <CountUp end={10} duration={2} />}K+ */}
              10K+
            </h3>

            <span>Photos Shared</span>

          </div>

        </div>

        <div className="tsStatItem">

          <div className="tsIcon">
            <FaHeadset />
          </div>

          <div className="tsContent">

            <h3>24/7</h3>

            <span>Support Loved</span>

          </div>

        </div>

      </div>

      {/* ================= STORY SLIDER ================= */}

      <div className="tsSlider">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {travelerStories.map((story) => (

            <SwiperSlide key={story.id}>

              <div className="storyCard">

                {/* IMAGE */}

                <div className="storyImage" style={{ backgroundImage: `url(${story.image})`, }} >
                  <div className="storyOverlay"></div>
                  <div className="locationTag">
                    <FaMapMarkerAlt />
                    <span>{story.destination}</span>
                  </div>

                  {story.featured && (

                    <div className="featured">
                      Featured
                    </div>

                  )}

                  <button className="playBtn" onClick={() => setSelectedVideo(story.video)}>
                    <FaPlay />
                  </button>

                </div>

                {/* CONTENT */}

                <div className="storyContent">
                  <div className="rating">
                    {[...Array(story.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <h3>{story.title}</h3>
                  <p>{story.review}</p>

                  <div className="storyFooter">
                    <div className="user">
                      <img src={story.avatar} alt={story.name}/>
                      <div>
                        <h4>{story.name}</h4>
                        <span>{story.location}</span>
                      </div>
                    </div>
                    <small>{story.date}</small>
                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}
        </Swiper>

      </div>

      {/* ================= VIDEO MODAL ================= */}

      {selectedVideo && (

        <div className="videoModal" onClick={() => setSelectedVideo(null)}>
          <div className="videoContainer" onClick={(e) => e.stopPropagation()}>
            <button className="closeVideo" onClick={() => setSelectedVideo(null)}>
              <FaTimes />
            </button>
            <video src={selectedVideo} controls autoPlay playsInline />
          </div>
        </div>

      )}

      {/* ================= SHARE STORY ================= */}

      {/* <div className="tsShareStory">

        <div className="tsShareContent">

          <span className="tsShareTag">
            YOUR NEXT STORY STARTS HERE
          </span>

          <h2>
            Share Your Travel
            <span> Experience</span>
          </h2>

          <p>
            Inspire future travelers by sharing your unforgettable memories
            and adventures with ASAP Holidays.
          </p>

        </div>

        <div className="tsShareButtons">

          <button className="primaryBtn">
            Share Your Story
          </button>

          <button className="secondaryBtn">
            View Gallery
          </button>

        </div>

      </div> */}

    </section>
  );
};

export default TravelerStories;