import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Heart,
  MapPin,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import "./PackageHero.css";

const PackageHero = ({ item, navigate }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const packageId = item?.id ?? item?.slug ?? item?.title ?? "holiday-package";

  const title = item?.title || "Discover Your Next Adventure";
  const location = item?.location || "Discover the Destination";
  const image =
    item?.image ||
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85";

  const rating = item?.rating ?? "4.9";
  const duration = item?.duration || "Flexible Duration";
  const price = item?.price;

  const formattedPrice =
    typeof price === "number"
      ? price.toLocaleString("en-IN")
      : typeof price === "string"
        ? price.replace(/^(₹|Rs\.?\s*)/i, "").trim()
        : null;

  // Restore saved state for the current package.
  useEffect(() => {
    setIsSaved(false);
    setShareMessage("");

    try {
      const savedPackages = JSON.parse(
        localStorage.getItem("asap-holidays-wishlist") || "[]"
      );

      setIsSaved(
        Array.isArray(savedPackages) &&
          savedPackages.some((id) => String(id) === String(packageId))
      );
    } catch {
      setIsSaved(false);
    }
  }, [packageId]);

  // Smoothly scroll to an existing section.
  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBooking = () => {
    const bookingSection = document.querySelector("#package-booking");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    // Keep compatibility with a page that uses a booking-details section.
    const alternativeSection = document.querySelector(
      ".package-booking, .package-details-content"
    );

    if (alternativeSection) {
      alternativeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleExplore = () => {
    scrollToSection(".package-details-content");
  };

  const handleWishlist = () => {
    try {
      const savedPackages = JSON.parse(
        localStorage.getItem("asap-holidays-wishlist") || "[]"
      );

      const validPackages = Array.isArray(savedPackages)
        ? savedPackages
        : [];

      const alreadySaved = validPackages.some(
        (id) => String(id) === String(packageId)
      );

      const updatedPackages = alreadySaved
        ? validPackages.filter((id) => String(id) !== String(packageId))
        : [...validPackages, packageId];

      localStorage.setItem(
        "asap-holidays-wishlist",
        JSON.stringify(updatedPackages)
      );

      setIsSaved(!alreadySaved);
      setShareMessage(
        alreadySaved ? "Removed from saved packages" : "Package saved!"
      );

      window.setTimeout(() => setShareMessage(""), 2200);
    } catch {
      setShareMessage("Unable to save this package in your browser.");
      window.setTimeout(() => setShareMessage(""), 2500);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title,
      text: `Explore ${title} with ASAP Holidays.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareData.url);
        setShareMessage("Package link copied!");
      } else {
        // Fallback for browsers without Clipboard API support.
        const textArea = document.createElement("textarea");
        textArea.value = shareData.url;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.select();

        const copied = document.execCommand("copy");
        document.body.removeChild(textArea);

        setShareMessage(
          copied
            ? "Package link copied!"
            : "Unable to copy the link. Please copy the page URL."
        );
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        setShareMessage("Unable to share this package right now.");
      }
    }

    window.setTimeout(() => setShareMessage(""), 2500);
  };

  return (
    <section className="package-hero">
      {/* Background image */}
      <div className="package-hero__background">
        <img
          className={`package-hero__image ${
            imageLoaded ? "is-loaded" : ""
          }`}
          src={image}
          alt={`${title} travel destination`}
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85";
          }}
        />

        <div className="package-hero__overlay" />
        <div className="package-hero__glow" />
      </div>

      <div className="package-hero__container">
        {/* Breadcrumb navigation */}
        <nav className="package-hero__breadcrumb" aria-label="Breadcrumb">
          <button
            type="button"
            className="package-hero__back"
            onClick={() => {
              if (typeof navigate === "function") {
                navigate(-1);
              } else {
                window.history.back();
              }
            }}
            aria-label="Go back"
          >
            <ArrowLeft size={15} />
          </button>

          <span>Home</span>
          <span className="package-hero__breadcrumb-separator">/</span>
          <span>Holiday Packages</span>
          <span className="package-hero__breadcrumb-separator">/</span>
          <span
            className="package-hero__breadcrumb-current"
            aria-current="page"
          >
            {title}
          </span>
        </nav>

        <div className="package-hero__layout">
          {/* Main destination content */}
          <div className="package-hero__content">
            <div className="package-hero__eyebrow">
              <Sparkles size={15} />
              <span>YOUR NEXT GREAT ESCAPE</span>
            </div>

            <h1 className="package-hero__title">{title}</h1>

            <div className="package-hero__location">
              <MapPin size={17} strokeWidth={2} />
              <span>{location}</span>
            </div>

            <p className="package-hero__description">
              Discover remarkable places, unforgettable experiences, and
              thoughtfully planned holidays made around the way you love to
              travel.
            </p>

            {/* Destination information */}
            <div className="package-hero__quick-info">
              <div className="package-hero__info-item">
                <span className="package-hero__info-icon">
                  <Star size={17} fill="currentColor" />
                </span>

                <span className="package-hero__info-copy">
                  <strong>{rating}</strong>
                  <small>Guest rating</small>
                </span>
              </div>

              <span
                className="package-hero__detail-divider"
                aria-hidden="true"
              />

              <div className="package-hero__info-item">
                <span className="package-hero__info-icon">
                  <Clock3 size={17} />
                </span>

                <span className="package-hero__info-copy">
                  <strong>{duration}</strong>
                  <small>Trip duration</small>
                </span>
              </div>

              <span
                className="package-hero__detail-divider package-hero__detail-divider--optional"
                aria-hidden="true"
              />

              <div className="package-hero__info-item">
                <span className="package-hero__info-icon">
                  <Users size={17} />
                </span>

                <span className="package-hero__info-copy">
                  <strong>Made for you</strong>
                  <small>Travel experiences</small>
                </span>
              </div>
            </div>

            {/* Main actions */}
            <div className="package-hero__actions">
              <button
                type="button"
                className="package-hero__button package-hero__button--primary"
                onClick={handleBooking}
              >
                <span>Book This Package</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="package-hero__button package-hero__button--secondary"
                onClick={handleExplore}
              >
                <span>Explore Details</span>
                <ArrowDown size={17} />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="package-hero__trust">
              <ShieldCheck size={17} />
              <span>Personalized trips</span>

              <span className="package-hero__trust-dot" />

              <Check size={16} />
              <span>Dedicated travel support</span>
            </div>
          </div>

          {/* Package highlights card */}
          <aside
            className="package-hero__card"
            aria-label="Package highlights"
          >
            <div className="package-hero__card-top">
              <div>
                <span className="package-hero__card-kicker">
                  YOUR JOURNEY STARTS HERE
                </span>

                <h2>Make it memorable.</h2>
              </div>

              <div className="package-hero__card-icon">
                <Sparkles size={20} />
              </div>
            </div>

            <div className="package-hero__card-image-wrap">
              <img
                src={image}
                alt=""
                className="package-hero__card-image"
                loading="lazy"
              />

              <div className="package-hero__card-image-overlay" />

              <div className="package-hero__card-image-label">
                <MapPin size={14} />
                <span>{location}</span>
              </div>
            </div>

            <div className="package-hero__card-details">
              <div className="package-hero__card-detail">
                <span>Duration</span>
                <strong>{duration}</strong>
              </div>

              <div className="package-hero__card-detail">
                <span>Guest rating</span>
                <strong className="package-hero__card-rating">
                  <Star size={15} fill="currentColor" />
                  {rating}
                </strong>
              </div>
            </div>

            <div className="package-hero__price-area">
              <div className="package-hero__price-copy">
                <span>Package price</span>

                {formattedPrice ? (
                  <strong className="package-hero__price">
                    ₹{formattedPrice}
                    <small> onwards</small>
                  </strong>
                ) : (
                  <strong className="package-hero__price">
                    Let's plan it
                  </strong>
                )}
              </div>

              <button
                type="button"
                className={`package-hero__icon-button ${
                  isSaved ? "is-saved" : ""
                }`}
                onClick={handleWishlist}
                aria-label={
                  isSaved ? "Remove from wishlist" : "Save to wishlist"
                }
                aria-pressed={isSaved}
                title={isSaved ? "Remove from wishlist" : "Save package"}
              >
                <Heart
                  size={19}
                  fill={isSaved ? "currentColor" : "none"}
                />
              </button>

              <button
                type="button"
                className="package-hero__icon-button"
                onClick={handleShare}
                aria-label="Share this package"
                title="Share package"
              >
                <Share2 size={18} />
              </button>
            </div>

            <button
              type="button"
              className="package-hero__card-cta"
              onClick={handleBooking}
            >
              Plan My Trip
              <ArrowRight size={17} />
            </button>

            <p className="package-hero__card-note">
              <ShieldCheck size={14} />
              <span>Let's make your next trip unforgettable.</span>
            </p>

            {shareMessage && (
              <div className="package-hero__toast" role="status">
                <Check size={15} />
                {shareMessage}
              </div>
            )}
          </aside>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          className="package-hero__scroll"
          onClick={handleExplore}
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </button>
      </div>
    </section>
  );
};

export default PackageHero;