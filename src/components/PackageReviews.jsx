import React from "react";
import { Star, Quote, MessageCircle, ShieldCheck } from "lucide-react";
import "./PackageReviews.css";

// Demo reviews: replace with verified customer reviews before publishing.
const demoReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi, India",
    date: "Recent traveller",
    rating: 5,
    title: "A beautiful travel experience",
    review:
      "The destination was beautiful, and the overall experience was memorable. The trip offered a wonderful opportunity to relax and explore.",
    initials: "PS",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai, India",
    date: "Recent traveller",
    rating: 5,
    title: "Worth experiencing",
    review:
      "A lovely holiday experience with beautiful surroundings and plenty of opportunities to enjoy the destination.",
    initials: "RM",
  },
  {
    id: 3,
    name: "Ananya Verma",
    location: "Jaipur, India",
    date: "Recent traveller",
    rating: 4,
    title: "A memorable getaway",
    review:
      "The destination was impressive, and the trip gave us a refreshing break from our everyday routine.",
    initials: "AV",
  },
];

const PackageReviews = ({ item, reviews }) => {
  const reviewList = Array.isArray(reviews) ? reviews : demoReviews;

  const averageRating =
    reviewList.length > 0
      ? (
          reviewList.reduce(
            (total, review) => total + Number(review.rating || 0),
            0
          ) / reviewList.length
        ).toFixed(1)
      : Number(item?.rating || 0).toFixed(1);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={15}
        strokeWidth={1.8}
        className={`package-review-star ${
          index < Math.round(Number(rating || 0))
            ? "is-filled"
            : "is-empty"
        }`}
        aria-hidden="true"
      />
    ));

  return (
    <section
      className="package-reviews-section"
      id="package-reviews"
      aria-labelledby="package-reviews-title"
    >
      <div className="package-reviews-heading">
        <div className="package-reviews-heading-copy">
          <span className="package-reviews-eyebrow">
            <span className="package-reviews-eyebrow-line" />
            TRAVELLER EXPERIENCES
          </span>

          <h2 id="package-reviews-title">
            Stories that make
            <br />
            <span>you want to travel.</span>
          </h2>

          <p>
            Every destination has a story. Discover what travellers love
            about experiences like this one.
          </p>
        </div>

        <div className="package-reviews-rating-card">
          <div className="package-reviews-rating-top">
            <span className="package-reviews-rating-number">
              {averageRating}
            </span>

            <div className="package-reviews-rating-details">
              <div className="package-reviews-stars">
                {renderStars(averageRating)}
              </div>

              <span>
                {reviewList.length > 0
                  ? `${reviewList.length} review${reviewList.length !== 1 ? "s" : ""}`
                  : "Package rating"}
              </span>
            </div>
          </div>

          <div className="package-reviews-rating-divider" />

          <div className="package-reviews-rating-footer">
            <ShieldCheck size={17} />
            <span>Choose your next adventure</span>
          </div>
        </div>
      </div>

      {reviewList.length > 0 ? (
        <div className="package-reviews-grid">
          {reviewList.map((review, index) => (
            <article
              className="package-review-card"
              key={review.id ?? `${review.name}-${index}`}
            >
              <div className="package-review-card-top">
                <div className="package-review-quote-icon">
                  <Quote size={21} strokeWidth={1.7} />
                </div>

                <div className="package-review-stars">
                  {renderStars(review.rating)}
                </div>
              </div>

              <h3 className="package-review-title">
                {review.title || "A memorable experience"}
              </h3>

              <p className="package-review-text">
                {review.review || review.text || ""}
              </p>

              <div className="package-review-divider" />

              <div className="package-review-author">
                {review.avatar ? (
                  <img
                    className="package-review-avatar"
                    src={review.avatar}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <div className="package-review-avatar package-review-avatar-initials">
                    {review.initials ||
                      String(review.name || "Traveller")
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                  </div>
                )}

                <div className="package-review-author-info">
                  <strong>{review.name || "Traveller"}</strong>
                  <span>
                    {review.location || "Traveller"}
                    {review.date ? ` · ${review.date}` : ""}
                  </span>
                </div>

                {review.verified && (
                  <span
                    className="package-review-verified"
                    title="Verified traveller"
                  >
                    <ShieldCheck size={17} />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="package-reviews-empty">
          <div className="package-reviews-empty-icon">
            <MessageCircle size={24} />
          </div>

          <h3>Your travel story could be next.</h3>

          <p>
            Reviews for this package will appear here when they become
            available.
          </p>
        </div>
      )}

      <div className="package-reviews-bottom">
        <span className="package-reviews-bottom-dot" />

        <p>
          Looking for your next escape?
          <strong> Your journey starts with the right destination.</strong>
        </p>
      </div>
    </section>
  );
};

export default PackageReviews;