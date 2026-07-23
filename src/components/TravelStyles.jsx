import React from "react";
import "./TravelStyles.css";

import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {  FaStar,  FaHeart, FaClock, FaSuitcaseRolling, FaArrowRight, } from "react-icons/fa";

import travelStylesData from "../data/travelStylesData";

const TravelStyles = () => {

  const navigate = useNavigate();

  return (

    <section className="travelV3">
      <div className="travelV3Container">
        {/* Heading */}
        <div className="travelV3Heading">
          <span>EXPLORE BY CATEGORY</span>
          <h2>
            Find Your Perfect
            <strong> Travel Style</strong>
          </h2>

          <p>
            Choose from our carefully designed holiday experiences
            for every traveler.
          </p>

        </div>

        {/* Slider */}

        <Swiper

          modules={[Navigation, Pagination]}

          navigation

          pagination={{ clickable: true }}

          loop={true}

          spaceBetween={30}

          breakpoints={{

            320:{

              slidesPerView:1

            },

            576:{

              slidesPerView:1.2

            },

            768:{

              slidesPerView:2

            },

            992:{

              slidesPerView:3

            },

            1200:{

              slidesPerView:4

            }

          }}

        >

          {

            travelStylesData.map((item)=>{

              const Icon=item.icon;

              return(

                <SwiperSlide key={item.id}>

                  <div className="travelCardV3" onClick={()=>navigate(`/travel-style/${item.slug}`)}>

                    {/* Image */}

                    <img src={item.image} alt={item.title} className="travelCardImage" />

                    {/* Dark Overlay */}

                    <div className="travelCardOverlay"></div>

                    {/* Badge */}

                    <div className="travelBadge">
                      {item.badge}
                    </div>

                    {/* Rating */}

                    <div className="travelRating">
                      <FaStar/>
                      {item.rating}
                    </div>

                    {/* Wishlist */}

                    <div className="travelWish">
                      <FaHeart/>
                    </div>

                    {/* Bottom Glass Panel */}

                    <div className="travelGlass">
                      <div className="travelIcon" style={{ background:item.color }} >
                        <Icon/>
                      </div>

                      <small>
                        {item.subtitle}
                      </small>

                      <h3>
                        {item.title}
                      </h3>

                      <div className="travelInfo">
                        <span>
                          <FaSuitcaseRolling/>
                          {item.tours}
                        </span>

                        <span>
                          <FaClock/>
                          {item.duration}
                        </span>
                      </div>

                      <div className="travelPrice">
                        <label>
                          Starting From
                        </label>
                        <h4>
                          {item.price}
                        </h4>
                      </div>

                      <button className="travelBtn" onClick={(e)=>{ e.stopPropagation(); navigate(`/travel-style/${item.slug}`); }}>
                        Explore Holiday
                        <span>
                          <FaArrowRight/>
                        </span>
                      </button>

                    </div>
                  </div>
                </SwiperSlide>

              );

            })

          }

        </Swiper>

      </div>

    </section>

  );

};

export default TravelStyles;