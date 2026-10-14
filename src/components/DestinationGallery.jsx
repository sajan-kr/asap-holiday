import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaExpand,
  FaTimes,
  FaDownload,
} from "react-icons/fa";
import "./DestinationGallery.css";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop";

const readImage = (item) => {
  if (typeof item === "string") return item.trim();
  if (!item || typeof item !== "object") return "";
  const candidate = item.image || item.url || item.src || item.imageUrl || item.thumbnail;
  return typeof candidate === "string" ? candidate.trim() : "";
};

export default function DestinationGallery({ destination }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const thumbRail = useRef(null);
  const thumbRefs = useRef([]);

  const title = destination?.title || destination?.name || "Destination";
  const location = [destination?.location, destination?.country]
    .filter((part, index, arr) => part && arr.indexOf(part) === index)
    .join(", ");

  const images = useMemo(() => {
    const candidates = [
      ...(Array.isArray(destination?.images) ? destination.images : []),
      ...(Array.isArray(destination?.galleryImages) ? destination.galleryImages : []),
      ...(Array.isArray(destination?.gallery) ? destination.gallery : []),
      destination?.image,
      destination?.coverImage,
    ];
    const seen = new Set();
    return candidates.map(readImage).filter((url) => {
      if (!url) return false;
      const key = url.split("?")[0];
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [destination]);

  const safeImages = images.length ? images : [FALLBACK_IMAGE];
  const activeImage = safeImages[Math.min(activeIndex, safeImages.length - 1)];
  const goTo = (index) => {
    setActiveIndex((index + safeImages.length) % safeImages.length);
  };
  const previous = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  useEffect(() => {
    setActiveIndex(0);
    setLightboxOpen(false);
    setImageErrors({});
    thumbRail.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [destination?.slug, destination?.image]);

  useEffect(() => {
    const rail = thumbRail.current;
    const thumb = thumbRefs.current[activeIndex];
    if (!rail || !thumb) return;
    const left = thumb.offsetLeft - (rail.clientWidth - thumb.clientWidth) / 2;
    rail.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [activeIndex]);

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, activeIndex, safeImages.length]);

  const handleDownload = async () => {
    try {
      const response = await fetch(activeImage);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-photo-${activeIndex + 1}.jpg`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(activeImage, "_blank", "noopener,noreferrer");
    }
  };

  const onImageError = (url) => setImageErrors((old) => ({ ...old, [url]: true }));
  const shownImage = imageErrors[activeImage] ? FALLBACK_IMAGE : activeImage;

  return (
    <section className="destination-gallery" aria-label={`${title} photo gallery`}>
      <div className="destination-gallery__container">
        <header className="dg-editorial-heading">
          <div>
            <span className="dg-eyebrow">A CLOSER LOOK</span>
            <h2>Moments from <em>{title}</em></h2>
            <p>Explore the views, places and little details that make this destination special.</p>
          </div>
          <div className="dg-editorial-count" aria-live="polite">
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            <span>/ {String(safeImages.length).padStart(2, "0")}</span>
          </div>
        </header>

        <div className="dg-editorial-layout">
          <div
            className="dg-editorial-stage"
            onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = event.changedTouches[0].clientX - touchStart;
              if (Math.abs(distance) > 45) (distance > 0 ? previous : next)();
              setTouchStart(null);
            }}
          >
            <img
              className="dg-editorial-image"
              src={shownImage}
              alt={`${title} view ${activeIndex + 1}`}
              onError={() => onImageError(activeImage)}
            />
            <div className="dg-editorial-gradient" />
            <div className="dg-editorial-location">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{location || title}</span>
            </div>
            <button className="dg-editorial-expand" type="button" onClick={() => setLightboxOpen(true)} aria-label="Open full-screen gallery">
              <FaExpand /> <span>View photo</span>
            </button>
            <div className="dg-editorial-caption">
              <span>DESTINATION GALLERY</span>
              <h3>{title}</h3>
              <p>{destination?.description || "Find your next favourite view."}</p>
            </div>
            <div className="dg-editorial-controls">
              <button type="button" onClick={previous} aria-label="Previous photo"><FaChevronLeft /></button>
              <button type="button" onClick={next} aria-label="Next photo"><FaChevronRight /></button>
            </div>
          </div>

          <aside className="dg-editorial-aside">
            <div className="dg-editorial-aside__top">
              <span>THE COLLECTION</span>
              <p>Swipe through the gallery to see more of {title}.</p>
            </div>
            <div className="dg-editorial-mini-grid">
              {safeImages.slice(0, 4).map((url, index) => (
                <button
                  className={`dg-editorial-mini ${index === activeIndex ? "is-active" : ""}`}
                  type="button"
                  key={`${url}-${index}`}
                  onClick={() => goTo(index)}
                  aria-label={`Show photo ${index + 1}`}
                  aria-pressed={index === activeIndex}
                >
                  <img src={imageErrors[url] ? FALLBACK_IMAGE : url} alt={`${title} thumbnail ${index + 1}`} loading="lazy" onError={() => onImageError(url)} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
            {safeImages.length > 4 && (
              <button
                className="dg-editorial-view-all"
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label={`View all ${safeImages.length} photos`}
              >
                <span>View all photos</span>
                <strong>{String(safeImages.length).padStart(2, "0")}</strong>
                <FaChevronRight aria-hidden="true" />
              </button>
            )}
            <div className="dg-editorial-aside__bottom">
              <span>PHOTO STORY</span>
              <strong>{String(safeImages.length).padStart(2, "0")} views to explore</strong>
              <div className="dg-editorial-progress"><span style={{ width: `${((activeIndex + 1) / safeImages.length) * 100}%` }} /></div>
            </div>
          </aside>
        </div>

        <div className="dg-editorial-filmstrip" ref={thumbRail} aria-label="Choose a gallery photo">
          {safeImages.map((url, index) => (
            <button
              type="button"
              key={`${url}-film-${index}`}
              ref={(node) => { thumbRefs.current[index] = node; }}
              className={`dg-editorial-thumb ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-pressed={index === activeIndex}
            >
              <img src={imageErrors[url] ? FALLBACK_IMAGE : url} alt="" loading="lazy" onError={() => onImageError(url)} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="dg-editorial-lightbox" role="dialog" aria-modal="true" aria-label={`${title} full-screen gallery`} onClick={() => setLightboxOpen(false)}>
          <button className="dg-editorial-lightbox__close" type="button" onClick={() => setLightboxOpen(false)} aria-label="Close gallery"><FaTimes /></button>
          <button className="dg-editorial-lightbox__download" type="button" onClick={(event) => { event.stopPropagation(); handleDownload(); }} aria-label="Download photo"><FaDownload /></button>
          <button className="dg-editorial-lightbox__nav dg-editorial-lightbox__nav--prev" type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous photo"><FaChevronLeft /></button>
          <img src={shownImage} alt={`${title} view ${activeIndex + 1}`} onClick={(event) => event.stopPropagation()} onError={() => onImageError(activeImage)} />
          <button className="dg-editorial-lightbox__nav dg-editorial-lightbox__nav--next" type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next photo"><FaChevronRight /></button>
          <div className="dg-editorial-lightbox__caption">{title} · {activeIndex + 1} of {safeImages.length}</div>
        </div>
      )}
    </section>
  );
}
