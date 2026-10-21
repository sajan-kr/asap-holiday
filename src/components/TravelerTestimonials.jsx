import React, { useEffect, useMemo, useState } from "react";
import {
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import destinationTestimonialsData from "../data/destinationTestimonialsData";
import "./TravelerTestimonials.css";

const normalizeSlug = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const getDestinationImage = (destination) => {
  const galleryImage = Array.isArray(destination?.gallery)
    ? destination.gallery[0]
    : null;

  const image =
    destination?.image ||
    destination?.heroImage ||
    destination?.bannerImage ||
    destination?.coverImage ||
    (typeof galleryImage === "string"
      ? galleryImage
      : galleryImage?.image || galleryImage?.url);

  return typeof image === "string" ? image : image?.url || image?.src || "";
};

export default function TravelerTestimonials({ destination }) {
  const name = destination?.title || destination?.name || "Your destination";
  const slug = normalizeSlug(destination?.slug || destination?.id || name);

  const reviews = useMemo(() => {
    const supplied = destination?.testimonials || destination?.reviews;
    const source =
      Array.isArray(supplied) && supplied.length
        ? supplied
        : destinationTestimonialsData[slug] || [];

    return source
      .filter((item) => item.text || item.review || item.comment)
      .map((item, index) => ({
        ...item,
        id: item.id ?? `${slug}-${index}`,
        name: item.name || item.author || "Traveler",
        location: item.location || item.city || "Traveler",
        rating: Math.min(5, Math.max(1, Number(item.rating) || 5)),
        text: item.text || item.review || item.comment,
        trip: item.trip || item.packageName || `${name} Holiday`,
      }));
  }, [destination, slug, name]);

  const [active, setActive] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setActive(0);
    setImageFailed(false);
  }, [slug]);

  if (!reviews.length) return null;

  const review = reviews[active] || reviews[0];
  const image = getDestinationImage(destination);

  const changeReview = (step) => {
    setActive((current) => (current + step + reviews.length) % reviews.length);
  };

  const initials = review.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <section className="traveler-reviews" aria-label="Traveler testimonials">
      <div className="traveler-reviews__container">
        <header className="traveler-reviews__header">
          <div>
            <span className="traveler-reviews__eyebrow">
              <span className="traveler-reviews__eyebrow-line" />
              REAL STORIES, REAL JOURNEYS
            </span>
            <h2>
              Memories made.
              <br />
              <em>Stories shared.</em>
            </h2>
          </div>
          <p>
            A destination is more than a place.
            <br />
            It is the memories you bring home.
          </p>
        </header>

        <div className="traveler-reviews__layout">
          <div className="traveler-reviews__photo">
            {image && !imageFailed ? (
              <img
                src={image}
                alt={`${name} travel scenery`}
                loading="lazy"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="traveler-reviews__photo-fallback">
                <FiMapPin />
                <span>Discover</span>
                <strong>{name}</strong>
              </div>
            )}

            <div className="traveler-reviews__photo-shade" />

            <div className="traveler-reviews__photo-label">
              <span>YOUR NEXT CHAPTER</span>
              <strong>{name}</strong>
            </div>
          </div>

          <article className="traveler-reviews__card" key={review.id}>
            <div className="traveler-reviews__card-top">
              <div
                className="traveler-reviews__stars"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < review.rating
                        ? "traveler-reviews__star--filled"
                        : "traveler-reviews__star--empty"
                    }
                  />
                ))}
              </div>

              <span className="traveler-reviews__verified">
                TRAVELER REVIEW
              </span>
            </div>

            <FaQuoteLeft className="traveler-reviews__quote-icon" />

            <blockquote>{review.text}</blockquote>

            <div className="traveler-reviews__trip">
              <span>THE JOURNEY</span>
              <strong>{review.trip}</strong>
            </div>

            <footer className="traveler-reviews__footer">
              <div className="traveler-reviews__traveler">
                <div className="traveler-reviews__avatar">{initials}</div>

                <div className="traveler-reviews__traveler-info">
                  <strong>{review.name}</strong>
                  <span>{review.location}</span>
                </div>
              </div>

              <div className="traveler-reviews__controls">
                <span className="traveler-reviews__count">
                  {String(active + 1).padStart(2, "0")}
                  <span> / </span>
                  {String(reviews.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() => changeReview(-1)}
                  disabled={reviews.length < 2}
                  aria-label="Previous testimonial"
                >
                  <FaArrowLeft />
                </button>

                <button
                  type="button"
                  onClick={() => changeReview(1)}
                  disabled={reviews.length < 2}
                  aria-label="Next testimonial"
                >
                  <FaArrowRight />
                </button>
              </div>
            </footer>
          </article>
        </div>

        <div className="traveler-reviews__bottom">
          <span>MADE FOR YOUR KIND OF JOURNEY</span>
          <span className="traveler-reviews__bottom-line" />
          <span>ASAP HOLIDAYS</span>
        </div>
      </div>
    </section>
  );
}