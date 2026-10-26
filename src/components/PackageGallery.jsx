import React, { useState, useEffect } from "react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";

import "./PackageGallery.css";

const PackageGallery = ({ item }) => {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    ...(item?.image ? [item.image] : []),
    ...(Array.isArray(item?.gallery) ? item.gallery : []),
  ].filter(Boolean);

  // Remove duplicate image URLs
  const images = [...new Set(galleryImages)];

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveImage(
          (current) => (current - 1 + images.length) % images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage, images.length]);

  if (!images.length) return null;

  const openImage = (index) => {
    setActiveImage(index);
  };

  const showPrevious = (event) => {
    event.stopPropagation();

    setActiveImage(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  const showNext = (event) => {
    event.stopPropagation();

    setActiveImage((current) => (current + 1) % images.length);
  };

  return (
    <>
      <section className="package-gallery">
        <div className="package-gallery-heading">
          <div className="package-gallery-heading-left">
            <span className="package-gallery-eyebrow">
              <Camera size={15} />
              DESTINATION GALLERY
            </span>

            <h2>See the Experience</h2>

            <p>
              A glimpse of the beautiful places and memorable moments
              waiting for you.
            </p>
          </div>

          <div className="package-gallery-count">
            <span>{String(images.length).padStart(2, "0")}</span>
            <span>Photos</span>
          </div>
        </div>

        <div className="package-gallery-grid">
          {images.slice(0, 5).map((image, index) => (
            <button
              type="button"
              className={`package-gallery-item package-gallery-item-${index + 1}`}
              key={`${image}-${index}`}
              onClick={() => openImage(index)}
              aria-label={`View destination photo ${index + 1}`}
            >
              <img
                src={image}
                alt={`${item?.title || "Destination"} - photo ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />

              <span className="package-gallery-image-overlay" />

              <span className="package-gallery-expand">
                <Maximize2 size={18} />
              </span>

              {index === 0 && (
                <span className="package-gallery-featured-label">
                  Featured View
                </span>
              )}

              {index === 4 && images.length > 5 && (
                <span className="package-gallery-more">
                  +{images.length - 5} Photos
                </span>
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="package-gallery-view-all"
          onClick={() => openImage(0)}
        >
          <Camera size={17} />
          Explore All Photos
          <span>{images.length}</span>
        </button>
      </section>

      {/* Full-screen image viewer */}
      {activeImage !== null && (
        <div
          className="package-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Destination photo viewer"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="package-gallery-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image viewer"
          >
            <X size={24} />
          </button>

          <div
            className="package-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            {images.length > 1 && (
              <button
                type="button"
                className="package-gallery-nav package-gallery-prev"
                onClick={showPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft size={27} />
              </button>
            )}

            <img
              src={images[activeImage]}
              alt={`${item?.title || "Destination"} - photo ${activeImage + 1}`}
              className="package-gallery-lightbox-image"
            />

            {images.length > 1 && (
              <button
                type="button"
                className="package-gallery-nav package-gallery-next"
                onClick={showNext}
                aria-label="Next image"
              >
                <ChevronRight size={27} />
              </button>
            )}

            <div className="package-gallery-lightbox-caption">
              <div>
                <span>{item?.location || "Destination"}</span>
                <h3>{item?.title || "Explore the Destination"}</h3>
              </div>

              <span className="package-gallery-image-counter">
                {String(activeImage + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackageGallery;