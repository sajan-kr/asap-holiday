import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./PopularDestinations.css";

const destinations = [
  // 🇮🇳 India
  {
    id: 1,
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
  },
  {
    id: 2,
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800",
  },
  {
    id: 3,
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
  },
  {
    id: 4,
    name: "Kerala",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
  },
  {
    id: 5,
    name: "Andaman",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
  {
    id: 6,
    name: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
  },
  {
    id: 7,
    name: "Shimla",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800",
  },
  {
    id: 8,
    name: "Ladakh",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
  },

  // 🌍 International
  {
    id: 9,
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    id: 10,
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
  },
  {
    id: 11,
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
  },
  {
    id: 12,
    name: "Thailand",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
  },
  {
    id: 13,
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
  },
  {
    id: 14,
    name: "Vietnam",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
  },
  {
    id: 15,
    name: "Turkey",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
  },
  {
    id: 16,
    name: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    id: 17,
    name: "Mauritius",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
  },
  {
    id: 18,
    name: "Seychelles",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
  {
    id: 19,
    name: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
  },
  {
    id: 20,
    name: "Europe",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
  },
];

const PopularDestinations = () => {
  return (
    <section className="pd-section">
      <div className="pd-container">
        {/* Header */}
        <div className="pd-header">
          <div>
            <span className="pd-subtitle">POPULAR DESTINATIONS</span>

            <h2 className="pd-title">
              Explore India's & International's Best Places
            </h2>

            <p className="pd-text">
              Discover hand-picked destinations across India and the world.
              From tropical beaches to snowy mountains, find your perfect
              holiday.
            </p>
          </div>

          <a href="/destinations" className="pd-view-btn">
            View All
            <span>→</span>
          </a>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          spaceBetween={25}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          className="pd-slider"
        >
          {destinations.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="pd-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="pd-image"
                />

                <div className="pd-overlay"></div>

                <div className="pd-content">
                  <span className="pd-tag">Top Destination</span>

                  <h3 className="pd-name">{item.name}</h3>

                  <button className="pd-btn">
                    Explore Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularDestinations;