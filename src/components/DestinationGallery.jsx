
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaImages,
  FaCamera,
  FaCompass,
} from "react-icons/fa";

import "./DestinationGallery.css";

const DestinationGallery = ({ destination }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [paused, setPaused] = useState(false);

  const thumbnailRefs = useRef([]);
  const touchStartX = useRef(null);

  const name =
    destination?.name || destination?.title || "Destination";

  const images = useMemo(() => {
    const source = [
      destination?.image,
      ...(Array.isArray(destination?.images)
        ? destination.images
        : []),
    ];

    return [
      ...new Set(
        source.filter(
          (image) =>
            typeof image === "string" && image.trim().length > 0
        )
      ),
    ];
  }, [destination?.image, destination?.images]);

  const total = images.length;
  const country = destination?.country;

  const current = String(activeImage + 1).padStart(2, "0");
  const count = String(total).padStart(2, "0");

  // Reset when the destination changes.
  useEffect(() => {
    setActiveImage(0);
    setPaused(false);
    thumbnailRefs.current = [];
  }, [destination?.slug, destination?.image]);

  // Keep the selected index valid.
  useEffect(() => {
    if (total === 0) {
      setActiveImage(0);
    } else if (activeImage >= total) {
      setActiveImage(0);
    }
  }, [activeImage, total]);

  // Automatic slideshow.
  useEffect(() => {
    if (total <= 1 || paused) return;

    const timer = window.setInterval(() => {
      setActiveImage((index) => (index + 1) % total);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [total, paused]);

  // Keep the selected thumbnail visible.
  useEffect(() => {
    thumbnailRefs.current[activeImage]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [activeImage]);

  const nextImage = () => {
    if (total <= 1) return;

    setActiveImage((index) => (index + 1) % total);
  };

  const previousImage = () => {
    if (total <= 1) return;

    setActiveImage(
      (index) => (index - 1 + total) % total
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const distance =
      event.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(distance) > 45) {
      if (distance < 0) {
        nextImage();
      } else {
        previousImage();
      }
    }

    touchStartX.current = null;
  };

  if (!destination || total === 0) return null;

  return (
    <section
      className="destination-gallery"
      id="destination-gallery"
      aria-label={`${name} photo gallery`}
    >
      <div className="destination-gallery__container">

        {/* Section heading */}
        <header className="dg-heading">
          <span className="dg-eyebrow">
            <span className="dg-eyebrow__line" />
            EXPLORE THE DESTINATION
            <span className="dg-eyebrow__line" />
          </span>

          <h2>See The Journey Before You Go</h2>

          <p>
            Take a visual tour of {name} and get inspired
            for your next adventure.
          </p>
        </header>

        {/* Featured image */}
        <div
          className="dg-featured"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget)
            ) {
              setPaused(false);
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={images[activeImage]}
            className="dg-featured__image"
            src={images[activeImage]}
            alt={`${name} travel scenery ${activeImage + 1}`}
            fetchPriority="high"
          />

          <div className="dg-featured__overlay" />

          {/* Destination location */}
          <div className="dg-location">
            <FaMapMarkerAlt />
            <span>
              {country ? `${name}, ${country}` : name}
            </span>
          </div>

          {/* Image counter */}
          <div className="dg-counter" aria-live="polite">
            <strong>{current}</strong>
            <span>/</span>
            <span>{count}</span>
          </div>

          {/* Previous and next */}
          {total > 1 && (
            <>
              <button
                type="button"
                className="dg-nav dg-nav--prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                className="dg-nav dg-nav--next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* Image caption */}
          <div className="dg-featured__caption">
            <span>YOUR NEXT ADVENTURE</span>
            <h3>{name}</h3>
            <p>
              Beautiful places, meaningful experiences,
              and memories that last.
            </p>
          </div>

          {/* Image progress */}
          <div className="dg-progress">
            <span
              style={{
                width: `${((activeImage + 1) / total) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Thumbnail gallery */}
        {total > 1 && (
          <div className="dg-gallery-rail">
            <div className="dg-rail-heading">
              <span>PHOTO GALLERY</span>
              <span>
                {current} <i>/ {count}</i>
              </span>
            </div>

            <div className="dg-thumbnails">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  ref={(element) => {
                    thumbnailRefs.current[index] = element;
                  }}
                  className={`dg-thumb ${
                    activeImage === index ? "is-active" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                  aria-pressed={activeImage === index}
                >
                  <img
                    src={image}
                    alt={`${name} thumbnail ${index + 1}`}
                    loading="lazy"
                  />

                  <span className="dg-thumb__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div
              className="dg-pagination"
              aria-label="Gallery pagination"
            >
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={
                    activeImage === index ? "is-active" : ""
                  }
                  onClick={() => setActiveImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={
                    activeImage === index ? "true" : undefined
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom feature strip */}
        <div className="dg-benefits">
          <div className="dg-benefit">
            <span className="dg-benefit__icon">
              <FaImages />
            </span>
            <div>
              <strong>Stunning Views</strong>
              <p>Real moments, real beauty</p>
            </div>
          </div>

          <div className="dg-benefit">
            <span className="dg-benefit__icon">
              <FaCamera />
            </span>
            <div>
              <strong>Authentic Experiences</strong>
              <p>See what awaits you</p>
            </div>
          </div>

          <div className="dg-benefit">
            <span className="dg-benefit__icon">
              <FaCompass />
            </span>
            <div>
              <strong>Plan with Confidence</strong>
              <p>Explore before you go</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DestinationGallery;
