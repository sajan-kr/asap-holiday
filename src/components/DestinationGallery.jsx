import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./DestinationGallery.css";

const DestinationGallery = ({ destination }) => {

  const [activeImage, setActiveImage] = useState(0);


  // ------------------------------------------------
  // Gallery images
  //
  // If destination.images exists:
  //   use those images.
  //
  // If it doesn't exist:
  //   fallback to destination.image.
  // ------------------------------------------------
  const galleryImages = useMemo(() => {

    return [
      destination.image,
      ...(destination.images || []),
    ].filter(Boolean);

  }, [
    destination.image,
    destination.images,
  ]);


  // ------------------------------------------------
  // Automatic slider
  // ------------------------------------------------
  useEffect(() => {

    if (galleryImages.length <= 1) {
      return;
    }

    const interval = setInterval(() => {

      setActiveImage((current) =>
        (current + 1) % galleryImages.length
      );

    }, 4000);

    return () => {
      clearInterval(interval);
    };

  }, [galleryImages]);


  // ------------------------------------------------
  // Next
  // ------------------------------------------------
  const nextImage = () => {

    setActiveImage(
      (current) =>
        (current + 1) % galleryImages.length
    );

  };


  // ------------------------------------------------
  // Previous
  // ------------------------------------------------
  const previousImage = () => {

    setActiveImage(
      (current) =>
        (current - 1 + galleryImages.length) %
        galleryImages.length
    );

  };


  return (
    <section
      id="destination-gallery"
      className="destination-gallery"
    >

      <div className="destination-container">

        {/* Heading */}
        <div className="destination-section-header">

          <span className="destination-section-eyebrow">
            EXPLORE THE DESTINATION
          </span>

          <h2>
            See The Journey Before You Go
          </h2>

          <p>
            Take a visual tour of {destination.name}.
          </p>

        </div>


        {/* Gallery */}
        <div className="destination-gallery__wrapper">

          <div className="destination-gallery__main">

            <img
              src={galleryImages[activeImage]}
              alt={`${destination.name} ${activeImage + 1}`}
            />


            {/* Counter */}
            <div className="destination-gallery__counter">

              <strong>
                {String(activeImage + 1).padStart(2, "0")}
              </strong>

              <span>/</span>

              <span>
                {String(galleryImages.length).padStart(2, "0")}
              </span>

            </div>


            {/* Navigation */}
            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="
                    destination-gallery__nav
                    destination-gallery__prev
                  "
                  onClick={previousImage}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>

                <button
                  type="button"
                  className="
                    destination-gallery__nav
                    destination-gallery__next
                  "
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

          </div>


          {/* Thumbnails */}
          <div className="destination-gallery__thumbs">

            {galleryImages.map((image, index) => (

              <button
                type="button"
                key={`${image}-${index}`}
                className={`
                  destination-gallery__thumb
                  ${
                    activeImage === index
                      ? "is-active"
                      : ""
                  }
                `}
                onClick={() => setActiveImage(index)}
              >

                <img
                  src={image}
                  alt={`${destination.name} thumbnail ${
                    index + 1
                  }`}
                />

              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default DestinationGallery;