import React from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import toursData from "../data/toursData";

import "./FeaturedTours.css";

const FeaturedTours = () => {
  const navigate = useNavigate();

  return (
    <section id="featuredTours" className="featuredTours">
      <div className="container">

        <div className="sectionHeading">
          <h2>Featured Tours</h2>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {toursData.map((tour) => (
            <SwiperSlide key={tour.id}>
              <div className="tourCard" onClick={() => navigate(`/tour/${tour.slug}`)}>
                <div className="tourImage">
                  <img src={tour.image} alt={tour.title} />
                  <span className="offerBadge">{tour.offer}</span>
                </div>

                <div className="tourContent">

                  <h3>{tour.title}</h3>

                  <p>{tour.duration}</p>

                  <div className="tourRating">
                    <FaStar />
                    <span>{tour.rating}</span>
                    <small>({tour.reviews})</small>
                  </div>

                  <div className="tourBottom">

                    <h4>{tour.price}</h4>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/tour/${tour.slug}`);
                      }}
                    >
                      View Details →
                    </button>

                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default FeaturedTours;