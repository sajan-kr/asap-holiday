import React, { useEffect, useState } from "react";
import "./TourGalleryDetails.css";

const TourGalleryDetails = ({ tour }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const gallery = tour?.gallery || [];

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, gallery.length]);

  if (!gallery.length) {
    return null;
  }

  return (
    <section className="tourGalleryDetails">
      
      <div className="galleryHeading">
        <span className="gallerySubtitle">
          PHOTO GALLERY
        </span>

        <h2>{tour.title} Gallery</h2>

        <p>
          Discover unforgettable moments, breathtaking views,
          and beautiful experiences from this destination.
        </p>
      </div>

      <div className="galleryGrid">
        {gallery.map((image, index) => (
          <button
            key={index}
            className="galleryCard"
            onClick={() => setSelectedIndex(index)}
            aria-label={`View ${tour.title} image ${index + 1}`}
          >
            <img
              src={image}
              alt={`${tour.title} destination view ${index + 1}`}
              loading="lazy"
            />

            <div className="galleryOverlay">
              <span className="zoomIcon">⌕</span>
              <span>View Photo</span>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="galleryModal"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="galleryModalContent"
            onClick={(event) => event.stopPropagation()}
          >
            
            <button
              className="closeButton"
              onClick={closeModal}
              aria-label="Close gallery"
            >
              ×
            </button>

            <button
              className="galleryNav galleryPrev"
              onClick={previousImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="mainImageWrapper">
              <img
                src={gallery[selectedIndex]}
                alt={`${tour.title} ${selectedIndex + 1}`}
                className="modalImage"
              />

              <div className="imageCounter">
                {selectedIndex + 1} / {gallery.length}
              </div>
            </div>

            <button
              className="galleryNav galleryNext"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="galleryThumbnails">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${
                    selectedIndex === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Open image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default TourGalleryDetails;