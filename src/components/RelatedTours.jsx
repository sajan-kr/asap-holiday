
import React from "react";
import "./RelatedTours.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaStar, FaArrowRight } from "react-icons/fa";

const tours = [
  {
    title: "Maldives Luxury Escape",
    image: "/images/maldives.jpg",
    location: "Maldives",
    duration: "6 Days / 5 Nights",
    price: "₹1,89,000",
    rating: "4.9",
    reviews: "128 Reviews",
    slug: "maldives-luxury-escape",
    tag: "Luxury Pick",
  },
  {
    title: "Bali Luxury Retreat",
    image: "/images/bali.jpg",
    location: "Bali, Indonesia",
    duration: "5 Days / 4 Nights",
    price: "₹98,000",
    rating: "4.8",
    reviews: "96 Reviews",
    slug: "bali-luxury-retreat",
    tag: "Best Seller",
  },
  {
    title: "Switzerland Alps Tour",
    image: "/images/switzerland.jpg",
    location: "Switzerland",
    duration: "8 Days / 7 Nights",
    price: "₹2,45,000",
    rating: "5.0",
    reviews: "84 Reviews",
    slug: "switzerland-alps-tour",
    tag: "Premium",
  },
];

const RelatedTours = () => {
  return (
    <section className="relatedTours">
      <div className="relatedToursContainer">

        {/* Section Header */}
        <div className="relatedToursHeader">
          <div>
            <span className="relatedEyebrow">MORE TO EXPLORE</span>

            <h2>
              Continue Your <span>Journey</span>
            </h2>

            <p>
              Discover more handpicked holiday experiences designed for
              unforgettable moments.
            </p>
          </div>

          <Link to="/tours" className="viewAllTours">
            View All Tours
            <FaArrowRight />
          </Link>
        </div>

        {/* Tours */}
        <div className="relatedToursGrid">
          {tours.map((tour) => (
            <article className="tourCard" key={tour.slug}>

              {/* Image */}
              <div className="tourCardImage">
                <img src={tour.image} alt={tour.title} />

                <span className="tourTag">{tour.tag}</span>

                <div className="tourLocation">
                  <FaMapMarkerAlt />
                  <span>{tour.location}</span>
                </div>

                <div className="tourRating">
                  <FaStar />
                  <strong>{tour.rating}</strong>
                </div>
              </div>

              {/* Content */}
              <div className="tourCardContent">

                <div className="tourDuration">
                  <FaClock />
                  <span>{tour.duration}</span>
                </div>

                <h3>{tour.title}</h3>

                <div className="tourCardBottom">

                  <div className="tourPrice">
                    <small>Starting from</small>
                    <strong>{tour.price}</strong>
                  </div>

                  <Link
                    to={`/tours/${tour.slug}`}
                    className="tourExploreBtn"
                  >
                    Explore
                    <FaArrowRight />
                  </Link>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedTours;