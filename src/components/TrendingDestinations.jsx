import React, { useState } from "react";
import "./TrendingDestinations.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
} from "swiper/modules";

import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

/* =========================
   INDIA DATA
========================= */

const indiaData = [
  {
    id: 1,
    slug: "himachal-pradesh",
    title: "Himachal\nPradesh",
    location: "India",
    price: "₹64,000",
    image:
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    slug: "ladakh",
    title: "Ladakh",
    location: "India",
    price: "₹58,000",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    slug: "nepal",
    title: "Nepal",
    location: "Nepal",
    price: "₹73,500",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    slug: "sikkim",
    title: "Sikkim",
    location: "India",
    price: "₹73,500",
    image:
      "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: 5,
    slug: "kailash-mansarovar",
    title: "Kailash\nMansarovar",
    location: "Tibet",
    price: "₹64,000",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    slug: "bhutan",
    title: "Bhutan",
    location: "Bhutan",
    price: "₹55,000",
    image:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    slug: "goa",
    title: "Goa",
    location: "India",
    price: "₹42,000",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 8,
    slug: "kerala",
    title: "Kerala",
    location: "India",
    price: "₹68,000",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 9,
    slug: "kashmir",
    title: "Kashmir",
    location: "India",
    price: "₹92,000",
    image:
      "https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: 10,
    slug: "andaman",
    title: "Andaman",
    location: "India",
    price: "₹88,000",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop",
  },
];

/* =========================
   INTERNATIONAL DATA
========================= */

const internationalData = [
  {
    id: 1,
    slug: "bali",
    title: "Bali",
    location: "Indonesia",
    price: "₹89,000",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    slug: "dubai",
    title: "Dubai",
    location: "UAE",
    price: "₹1,20,000",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    slug: "maldives",
    title: "Maldives",
    location: "Maldives",
    price: "₹1,50,000",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    slug: "thailand",
    title: "Thailand",
    location: "Thailand",
    price: "₹78,000",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    slug: "switzerland",
    title: "Switzerland",
    location: "Europe",
    price: "₹2,10,000",
    image:
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    slug: "singapore",
    title: "Singapore",
    location: "Singapore",
    price: "₹95,000",
    image:
      "https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    slug: "paris",
    title: "Paris",
    location: "France",
    price: "₹1,85,000",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 8,
    slug: "turkey",
    title: "Turkey",
    location: "Turkey",
    price: "₹1,10,000",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 9,
    slug: "vietnam",
    title: "Vietnam",
    location: "Vietnam",
    price: "₹82,000",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 10,
    slug: "japan",
    title: "Japan",
    location: "Japan",
    price: "₹2,40,000",
    image:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1200&auto=format&fit=crop",
  },
];

const TrendingDestinations = () => {

  const [activeTab, setActiveTab] =
    useState("india");

  const destinations =
    activeTab === "india"
      ? indiaData
      : internationalData;

  return (

    <section className="trending-section">

      <div className="container">

        <div className="trending-top">

          <h2>
            Trending Holiday Destinations
          </h2>

          <div className="tabs">

            <button
              className={
                activeTab === "india"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("india")
              }
            >
              India & Around
            </button>

            <button
              className={
                activeTab ===
                "international"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab(
                  "international"
                )
              }
            >
              International
            </button>

          </div>

        </div>

        <Swiper
          modules={[Navigation]}

          navigation={true}

          loop={true}

          speed={1000}

          allowTouchMove={true}

          observer={true}
          observeParents={true}

          spaceBetween={24}

          slidesPerView={5.5}

          breakpoints={{

            320: {
              slidesPerView: 2.1,
            },

            576: {
              slidesPerView: 2.5,
            },

            768: {
              slidesPerView: 3.5,
            },

            992: {
              slidesPerView: 4.5,
            },

            1200: {
              slidesPerView: 5.5,
            },

          }}

          className="destination-swiper"
        >

          {destinations.map((item) => (

            <SwiperSlide key={item.id}>

              <Link
                to={`/destination/${item.slug}`}
                className="destination-link"
              >

                <div className="destination-card">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="overlay"></div>

                  <div className="destination-content">

                    <div className="destination-top-content">

                      <h3>

                        {item.title
                          .split("\n")
                          .map(
                            (
                              line,
                              index
                            ) => (
                              <span
                                key={index}
                              >
                                {line}
                                <br />
                              </span>
                            )
                          )}

                      </h3>

                      <p>
                        {item.location}
                      </p>

                    </div>

                    <div className="hover-content">

                      <div className="price-content">

                        <span>
                          Starting From
                        </span>

                        <h4>
                          {item.price}
                        </h4>

                      </div>

                      <button>
                        ↗
                      </button>

                    </div>

                  </div>

                </div>

              </Link>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );
};

export default TrendingDestinations;