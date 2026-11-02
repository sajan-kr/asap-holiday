
import React, { useEffect, useMemo, useState, useCallback } from "react";
import "./PackageGallery.css";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80";

const getImageUrl = (image) => {
  if (typeof image === "string") return image;
  if (image && typeof image === "object") {
    return image.url || image.src || image.image || "";
  }
  return "";
};

const PackageGallery = ({ item = {} }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAllPhotosOpen, setIsAllPhotosOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [failedImages, setFailedImages] = useState({});
  const [isSharing, setIsSharing] = useState(false);

  const images = useMemo(() => {
    const sourceImages = [
      item?.image,
      ...(Array.isArray(item?.gallery) ? item.gallery : []),
    ];

    const uniqueImages = [];
    const seen = new Set();

    sourceImages.forEach((image) => {
      const url = getImageUrl(image);

      if (url && !seen.has(url)) {
        seen.add(url);
        uniqueImages.push({
          url,
          alt:
            typeof image === "object" && image?.alt
              ? image.alt
              : `${item?.title || "Holiday package"} destination`,
        });
      }
    });

    return uniqueImages.length
      ? uniqueImages
      : [{ url: FALLBACK_IMAGE, alt: "Holiday destination" }];
  }, [item?.image, item?.gallery, item?.title]);

  const totalImages = images.length;
  const currentImage = images[activeImage] || images[0];

  const getSafeImage = (index) => {
    if (failedImages[index]) return FALLBACK_IMAGE;
    return images[index]?.url || FALLBACK_IMAGE;
  };

  const handleImageError = (index) => {
    setFailedImages((previous) => ({
      ...previous,
      [index]: true,
    }));
  };

  const openLightbox = (index = 0) => {
    setActiveImage(index);
    setIsLightboxOpen(true);
    setIsAllPhotosOpen(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = useCallback(() => {
    setActiveImage((previous) => (previous + 1) % totalImages);
  }, [totalImages]);

  const previousImage = useCallback(() => {
    setActiveImage(
      (previous) => (previous - 1 + totalImages) % totalImages
    );
  }, [totalImages]);

  useEffect(() => {
    if (!isLightboxOpen && !isAllPhotosOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
        setIsAllPhotosOpen(false);
      }

      if (isLightboxOpen && event.key === "ArrowRight") {
        nextImage();
      }

      if (isLightboxOpen && event.key === "ArrowLeft") {
        previousImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, isAllPhotosOpen, nextImage, previousImage]);

  useEffect(() => {
    document.body.style.overflow =
      isLightboxOpen || isAllPhotosOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen, isAllPhotosOpen]);

  const toggleFavorite = (index) => {
    setFavorites((previous) =>
      previous.includes(index)
        ? previous.filter((favorite) => favorite !== index)
        : [...previous, index]
    );
  };

  const downloadImage = async () => {
    try {
      const response = await fetch(currentImage.url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `asap-holidays-${activeImage + 1}.jpg`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(currentImage.url, "_blank", "noopener,noreferrer");
    }
  };

  const shareImage = async () => {
    const shareData = {
      title: item?.title || "ASAP Holidays",
      text: `Explore ${item?.title || "this holiday destination"} with ASAP Holidays`,
      url: currentImage.url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentImage.url);
        setIsSharing(true);
        setTimeout(() => setIsSharing(false), 2000);
      } else {
        window.prompt("Copy image URL:", currentImage.url);
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error("Unable to share image:", error);
      }
    }
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    event.currentTarget.dataset.touchStartX = touch.clientX;
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const startX = Number(event.currentTarget.dataset.touchStartX);
    const difference = startX - touch.clientX;

    if (Math.abs(difference) < 50) return;

    if (difference > 0) {
      nextImage();
    } else {
      previousImage();
    }
  };

  return (
    <>
      <section className="package-gallery-section">
        <div className="package-gallery-container">
          <div className="package-gallery-heading">
            <div className="package-gallery-heading-content">
              <span className="package-gallery-eyebrow">
                <span className="package-gallery-eyebrow-line" />
                YOUR JOURNEY IN PICTURES
              </span>

              <h2>
                Explore the <span>Experience</span>
              </h2>

              <p>
                Discover the beauty, moments, and unforgettable experiences
                waiting for you.
              </p>
            </div>

            <button
              type="button"
              className="package-gallery-view-all"
              onClick={() => setIsAllPhotosOpen(true)}
              aria-label={`View all ${totalImages} photos`}
            >
              <span>View all photos</span>
              <span className="package-gallery-photo-count">
                {totalImages}
              </span>
              <span className="package-gallery-arrow">↗</span>
            </button>
          </div>

          <div className="package-gallery-grid">
            {/* Main image */}
            <div
              className="package-gallery-main"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") openLightbox(0);
              }}
              aria-label="Open main gallery image"
            >
              <img
                src={getSafeImage(0)}
                alt={images[0]?.alt}
                onError={() => handleImageError(0)}
              />

              <div className="package-gallery-image-overlay" />

              <div className="package-gallery-main-label">
                <span className="package-gallery-label-dot" />
                DESTINATION HIGHLIGHT
              </div>

              <div className="package-gallery-main-caption">
                <span>{item?.location || "Explore your destination"}</span>
                <h3>{item?.title || "Your next unforgettable journey"}</h3>
              </div>

              <button
                type="button"
                className={`package-gallery-favorite ${
                  favorites.includes(0) ? "is-favorite" : ""
                }`}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleFavorite(0);
                }}
                aria-label={
                  favorites.includes(0)
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                {favorites.includes(0) ? "♥" : "♡"}
              </button>

              <div className="package-gallery-expand">
                <span>↗</span>
              </div>
            </div>

            {/* Secondary image */}
            {totalImages > 1 && (
              <div
                className="package-gallery-secondary"
                onClick={() => openLightbox(1)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter") openLightbox(1);
                }}
                aria-label="Open second gallery image"
              >
                <img
                  src={getSafeImage(1)}
                  alt={images[1]?.alt}
                  onError={() => handleImageError(1)}
                />

                <div className="package-gallery-image-overlay" />

                <button
                  type="button"
                  className={`package-gallery-favorite ${
                    favorites.includes(1) ? "is-favorite" : ""
                  }`}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleFavorite(1);
                  }}
                  aria-label={
                    favorites.includes(1)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  {favorites.includes(1) ? "♥" : "♡"}
                </button>

                <div className="package-gallery-expand">
                  <span>↗</span>
                </div>
              </div>
            )}

            {/* Third image */}
            {totalImages > 2 && (
              <div
                className="package-gallery-small package-gallery-third"
                onClick={() => openLightbox(2)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter") openLightbox(2);
                }}
                aria-label="Open third gallery image"
              >
                <img
                  src={getSafeImage(2)}
                  alt={images[2]?.alt}
                  onError={() => handleImageError(2)}
                />

                <div className="package-gallery-image-overlay" />

                <div className="package-gallery-expand">
                  <span>↗</span>
                </div>
              </div>
            )}

            {/* Fourth image */}
            {totalImages > 3 && (
              <div
                className="package-gallery-small package-gallery-fourth"
                onClick={() => openLightbox(3)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter") openLightbox(3);
                }}
                aria-label="Open fourth gallery image"
              >
                <img
                  src={getSafeImage(3)}
                  alt={images[3]?.alt}
                  onError={() => handleImageError(3)}
                />

                <div className="package-gallery-image-overlay" />

                <div className="package-gallery-expand">
                  <span>↗</span>
                </div>
              </div>
            )}

            {/* More photos */}
            {totalImages > 4 && (
              <button
                type="button"
                className="package-gallery-more"
                onClick={() => setIsAllPhotosOpen(true)}
              >
                <img
                  src={getSafeImage(4)}
                  alt={images[4]?.alt}
                  onError={() => handleImageError(4)}
                />

                <div className="package-gallery-more-overlay">
                  <span className="package-gallery-more-icon">▦</span>
                  <strong>+{totalImages - 4}</strong>
                  <span>More photos</span>
                </div>
              </button>
            )}
          </div>

          <div className="package-gallery-bottom">
            <div className="package-gallery-bottom-info">
              <span className="package-gallery-bottom-icon">✦</span>
              <span>
                {totalImages} curated moments from your destination
              </span>
            </div>

            <button
              type="button"
              className="package-gallery-bottom-link"
              onClick={() => setIsAllPhotosOpen(true)}
            >
              Explore gallery <span>↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      {isLightboxOpen && (
        <div
          className="package-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={closeLightbox}
        >
          <div
            className="package-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="package-gallery-lightbox-header">
              <div className="package-gallery-lightbox-brand">
                <span className="package-gallery-lightbox-brand-icon">✦</span>
                <div>
                  <strong>ASAP HOLIDAYS</strong>
                  <span>Discover. Explore. Experience.</span>
                </div>
              </div>

              <div className="package-gallery-lightbox-actions">
                <button
                  type="button"
                  onClick={downloadImage}
                  aria-label="Download image"
                  title="Download image"
                >
                  ↓
                </button>

                <button
                  type="button"
                  onClick={shareImage}
                  aria-label="Share image"
                  title="Share image"
                >
                  ↗
                </button>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close viewer"
                  title="Close"
                  className="package-gallery-lightbox-close"
                >
                  ×
                </button>
              </div>
            </div>

            {isSharing && (
              <div className="package-gallery-share-message">
                Image link copied!
              </div>
            )}

            <div
              className="package-gallery-lightbox-stage"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                type="button"
                className="package-gallery-lightbox-nav package-gallery-lightbox-prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                ‹
              </button>

              <img
                src={getSafeImage(activeImage)}
                alt={currentImage?.alt}
                onError={() => handleImageError(activeImage)}
                className="package-gallery-lightbox-image"
              />

              <button
                type="button"
                className="package-gallery-lightbox-nav package-gallery-lightbox-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className="package-gallery-lightbox-footer">
              <div className="package-gallery-lightbox-caption">
                <span>{item?.location || "ASAP Holidays"}</span>
                <h3>{item?.title || "Discover your next destination"}</h3>
              </div>

              <div className="package-gallery-lightbox-counter">
                <strong>{String(activeImage + 1).padStart(2, "0")}</strong>
                <span>/</span>
                {String(totalImages).padStart(2, "0")}
              </div>
            </div>

            <div className="package-gallery-lightbox-thumbnails">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={`${image.url}-${index}`}
                  className={`package-gallery-thumbnail ${
                    activeImage === index ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={getSafeImage(index)}
                    alt={image.alt}
                    onError={() => handleImageError(index)}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Photos Modal */}
      {isAllPhotosOpen && (
        <div
          className="package-gallery-all-modal"
          role="dialog"
          aria-modal="true"
          aria-label="All destination photos"
          onClick={() => setIsAllPhotosOpen(false)}
        >
          <div
            className="package-gallery-all-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="package-gallery-all-header">
              <div>
                <span className="package-gallery-eyebrow">
                  DESTINATION COLLECTION
                </span>
                <h2>
                  All <span>Photos</span>
                </h2>
                <p>{totalImages} beautiful moments to explore</p>
              </div>

              <button
                type="button"
                className="package-gallery-all-close"
                onClick={() => setIsAllPhotosOpen(false)}
                aria-label="Close all photos"
              >
                ×
              </button>
            </div>

            <div className="package-gallery-all-grid">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={`${image.url}-${index}`}
                  className="package-gallery-all-item"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={getSafeImage(index)}
                    alt={image.alt}
                    onError={() => handleImageError(index)}
                    loading="lazy"
                  />

                  <span className="package-gallery-all-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="package-gallery-all-item-arrow">↗</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackageGallery;
