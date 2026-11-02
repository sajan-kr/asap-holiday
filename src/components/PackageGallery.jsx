
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Download,
  Share2,
  Images,
  MapPin,
  Heart,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

import "./PackageGallery.css";

const PackageGallery = ({ item }) => {
  const [activeImage, setActiveImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [failedImages, setFailedImages] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const [touchStart, setTouchStart] = useState(null);

  const images = useMemo(() => {
    const gallery = [
      ...(item?.image ? [item.image] : []),
      ...(Array.isArray(item?.gallery) ? item.gallery : []),
    ];

    return [...new Set(gallery.filter(Boolean))];
  }, [item?.image, item?.gallery]);

  const currentImage = images[activeImage];

  const openImage = useCallback((index) => {
    setActiveImage(index);
  }, []);

  const closeViewer = useCallback(() => {
    setActiveImage(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveImage((current) =>
      current === null ? 0 : (current + 1) % images.length
    );
  }, [images.length]);

  const showPrevious = useCallback(() => {
    setActiveImage((current) =>
      current === null
        ? 0
        : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  // Reset gallery when destination changes
  useEffect(() => {
    setActiveImage(null);
    setShowAll(false);
    setIsFavorite(false);
    setLoadedImages({});
    setFailedImages({});
  }, [item?.slug, item?.title, item?.image]);

  // Keyboard navigation and modal scroll locking
  useEffect(() => {
    if (activeImage === null && !showAll) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeViewer();
        setShowAll(false);
      }

      if (activeImage !== null && event.key === "ArrowRight") {
        showNext();
      }

      if (activeImage !== null && event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, showAll, closeViewer, showNext, showPrevious]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleImageError = (index) => {
    setFailedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  // Download image
  const downloadImage = async () => {
    if (!currentImage) return;

    setIsDownloading(true);

    try {
      const response = await fetch(currentImage);

      if (!response.ok) {
        throw new Error("Image download failed");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = `${item?.slug || "destination"}-${activeImage + 1}.jpg`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(currentImage, "_blank", "noopener,noreferrer");
    } finally {
      setIsDownloading(false);
    }
  };

  // Share image
  const shareImage = async () => {
    if (!currentImage) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: item?.title || "ASAP Holidays",
          text: `Explore ${item?.title || "this destination"} with ASAP Holidays.`,
          url: currentImage,
        });
      } else {
        await navigator.clipboard.writeText(currentImage);
        alert("Image link copied!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Share failed:", error);
      }
    }
  };

  // Mobile swipe
  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) > 60) {
      difference > 0 ? showNext() : showPrevious();
    }

    setTouchStart(null);
  };

  if (!images.length) return null;

  return (
    <>
      <section className="package-gallery">
        {/* Heading */}
        <div className="package-gallery-top">
          <div className="package-gallery-heading">
            <span className="package-gallery-eyebrow">
              <Camera size={15} />
              DESTINATION COLLECTION
            </span>

            <h2>
              Moments worth
              <span> remembering.</span>
            </h2>

            <p>
              Discover breathtaking landscapes, beautiful places,
              and unforgettable moments waiting for you.
            </p>
          </div>

          <div className="package-gallery-stat">
            <div className="package-gallery-stat-icon">
              <Images size={20} />
            </div>

            <div>
              <strong>{String(images.length).padStart(2, "0")}</strong>
              <span>Beautiful views</span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="package-gallery-grid">
          {images.slice(0, 5).map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              className={`package-gallery-item package-gallery-item-${index + 1}`}
              onClick={() => openImage(index)}
              aria-label={`Open photo ${index + 1}`}
            >
              {!loadedImages[index] && !failedImages[index] && (
                <span className="package-gallery-skeleton">
                  <LoaderCircle size={22} />
                </span>
              )}

              {failedImages[index] ? (
                <span className="package-gallery-fallback">
                  <AlertCircle size={25} />
                  <span>Image unavailable</span>
                </span>
              ) : (
                <img
                  src={image}
                  alt={`${item?.title || "Destination"} photo ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                />
              )}

              <span className="package-gallery-image-overlay" />

              <span className="package-gallery-expand">
                <Maximize2 size={17} />
              </span>

              {index === 0 && (
                <span className="package-gallery-featured-label">
                  <MapPin size={12} />
                  Featured destination
                </span>
              )}

              {index === 4 && images.length > 5 && (
                <span className="package-gallery-more">
                  <Images size={22} />
                  <strong>+{images.length - 5}</strong>
                  <span>Explore more photos</span>
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="package-gallery-footer">
          <div className="package-gallery-footer-text">
            <span className="package-gallery-footer-dot" />
            <span>Captured moments. Extraordinary journeys.</span>
          </div>

          <button
            type="button"
            className="package-gallery-view-all"
            onClick={() => setShowAll(true)}
          >
            <Images size={17} />
            Explore all photos
            <span>{images.length}</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* All photos modal */}
      {showAll && (
        <div
          className="package-gallery-all-modal"
          onClick={() => setShowAll(false)}
        >
          <div
            className="package-gallery-all-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="package-gallery-all-header">
              <div>
                <span className="package-gallery-eyebrow">
                  <Images size={15} />
                  COMPLETE COLLECTION
                </span>

                <h3>{item?.title || "Destination Gallery"}</h3>
                <p>{images.length} photographs to explore</p>
              </div>

              <button
                type="button"
                className="package-gallery-all-close"
                onClick={() => setShowAll(false)}
                aria-label="Close gallery"
              >
                <X size={23} />
              </button>
            </div>

            <div className="package-gallery-all-grid">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => {
                    setShowAll(false);
                    openImage(index);
                  }}
                >
                  <img
                    src={image}
                    alt={`${item?.title || "Destination"} photo ${index + 1}`}
                    loading="lazy"
                  />

                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen viewer */}
      {activeImage !== null && (
        <div
          className="package-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Destination photo viewer"
          onClick={closeViewer}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top toolbar */}
          <div className="package-gallery-lightbox-top">
            <div className="package-gallery-lightbox-brand">
              <Camera size={18} />
              <span>ASAP HOLIDAYS</span>
            </div>

            <div className="package-gallery-lightbox-actions">
              <button
                type="button"
                onClick={downloadImage}
                disabled={isDownloading}
                aria-label="Download image"
              >
                {isDownloading ? (
                  <LoaderCircle size={19} />
                ) : (
                  <Download size={19} />
                )}
              </button>

              <button
                type="button"
                onClick={shareImage}
                aria-label="Share image"
              >
                <Share2 size={19} />
              </button>

              <button
                type="button"
                onClick={() => setIsFavorite((prev) => !prev)}
                className={isFavorite ? "is-favorite" : ""}
                aria-label="Favorite image"
              >
                <Heart
                  size={19}
                  fill={isFavorite ? "currentColor" : "none"}
                />
              </button>

              <button
                type="button"
                onClick={closeViewer}
                aria-label="Close viewer"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Main image */}
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

            <div className="package-gallery-lightbox-image-wrap">
              <img
                key={currentImage}
                src={currentImage}
                alt={`${item?.title || "Destination"} photo ${activeImage + 1}`}
                className="package-gallery-lightbox-image"
              />
            </div>

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
          </div>

          {/* Bottom toolbar */}
          <div
            className="package-gallery-lightbox-bottom"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="package-gallery-lightbox-caption">
              <span>{item?.location || "ASAP Holidays"}</span>
              <h3>{item?.title || "Discover the world"}</h3>
            </div>

            <div className="package-gallery-lightbox-counter">
              <strong>{String(activeImage + 1).padStart(2, "0")}</strong>
              <span>/</span>
              {String(images.length).padStart(2, "0")}
            </div>

            <div className="package-gallery-thumbnails">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={`${image}-${index}`}
                  className={activeImage === index ? "active" : ""}
                  onClick={() => openImage(index)}
                  aria-label={`Go to photo ${index + 1}`}
                >
                  <img src={image} alt="" />
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
