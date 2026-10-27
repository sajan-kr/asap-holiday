import React, { useCallback, useEffect, useMemo, useState } from "react";
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

const WISHLIST_KEY = "asap-holidays-wishlist";
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85";

const readWishlist = () => {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(WISHLIST_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const PackageHero = ({ item = {}, navigate }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [notice, setNotice] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const packageId = String(item.id ?? item.slug ?? item.title ?? "holiday-package");
  const title = item.title || "Discover Your Next Adventure";
  const location = item.location || item.destination || "Discover the Destination";
  const image = imageFailed ? FALLBACK_IMAGE : item.image || FALLBACK_IMAGE;
  const rating = item.rating ?? "4.9";
  const duration = item.duration || "Flexible duration";
  const numericPrice = typeof item.price === "number" ? item.price : null;
  const formattedPrice = useMemo(() => {
    if (numericPrice !== null) return numericPrice.toLocaleString("en-IN");
    if (typeof item.price === "string" && item.price.trim()) {
      return item.price.trim().replace(/^(₹|Rs\.?\s*)/i, "");
    }
    return "";
  }, [item.price, numericPrice]);

  useEffect(() => {
    setIsSaved(readWishlist().some((id) => String(id) === packageId));
    setNotice("");
    setImageLoaded(false);
    setImageFailed(false);
  }, [packageId]);

  useEffect(() => {
    if (!notice) return undefined;
    const timeout = window.setTimeout(() => setNotice(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const scrollToFirstAvailable = useCallback((selectors) => {
    for (const selector of selectors) {
      const section = document.querySelector(selector);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
    }
    return false;
  }, []);

  const handleBooking = () => {
    const found = scrollToFirstAvailable([
      "#package-booking",
      ".package-booking",
      ".package-details-content",
      "#booking-form",
    ]);
    if (!found) setNotice("Booking details are not available on this page yet.");
  };

  const handleExplore = () => {
    const found = scrollToFirstAvailable([
      ".package-details-content",
      "#package-details",
      ".package-highlights",
      "#package-booking",
    ]);
    if (!found) setNotice("Package details are not available on this page yet.");
  };

  const handleBack = () => {
    if (typeof navigate === "function") {
      navigate(-1);
      return;
    }
    if (window.history.length > 1) window.history.back();
    else window.location.assign("/");
  };

  const handleWishlist = () => {
    try {
      const saved = readWishlist();
      const alreadySaved = saved.some((id) => String(id) === packageId);
      const updated = alreadySaved
        ? saved.filter((id) => String(id) !== packageId)
        : [...saved, packageId];
      window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
      setIsSaved(!alreadySaved);
      setNotice(alreadySaved ? "Removed from your saved packages." : "Package saved to your wishlist.");
      window.dispatchEvent(new CustomEvent("asap-wishlist-updated", { detail: updated }));
    } catch {
      setNotice("Unable to save this package in your browser.");
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
        setNotice("Share menu opened.");
        return;
      }
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareData.url);
        setNotice("Package link copied to clipboard.");
        return;
      }
      const textarea = document.createElement("textarea");
      textarea.value = shareData.url;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      setNotice(copied ? "Package link copied to clipboard." : "Copy the page URL to share this package.");
    } catch (error) {
      if (error?.name !== "AbortError") setNotice("Unable to share this package right now.");
    }
  };

  return (
    <section className="package-hero" aria-labelledby="package-hero-title">
      <div className="package-hero__background" aria-hidden="true">
        <img
          className={`package-hero__image ${imageLoaded ? "is-loaded" : ""}`}
          src={image}
          alt=""
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            if (!imageFailed) setImageFailed(true);
          }}
        />
        <div className="package-hero__overlay" />
        <div className="package-hero__glow" />
        <div className="package-hero__grain" />
      </div>

      <div className="package-hero__container">
        <nav className="package-hero__breadcrumb" aria-label="Breadcrumb">
          <button type="button" className="package-hero__back" onClick={handleBack} aria-label="Go back">
            <ArrowLeft size={16} />
          </button>
          <a href="/">Home</a>
          <span className="package-hero__breadcrumb-separator" aria-hidden="true">/</span>
          <a href="/tours">Holiday Packages</a>
          <span className="package-hero__breadcrumb-separator" aria-hidden="true">/</span>
          <span className="package-hero__breadcrumb-current" aria-current="page">{title}</span>
        </nav>

        <div className="package-hero__layout">
          <div className="package-hero__content">
            <div className="package-hero__eyebrow"><Sparkles size={15} /><span>YOUR NEXT GREAT ESCAPE</span></div>
            <h1 className="package-hero__title" id="package-hero-title">{title}</h1>
            <div className="package-hero__location"><MapPin size={17} /><span>{location}</span></div>
            <p className="package-hero__description">
              Discover remarkable places, unforgettable experiences, and thoughtfully planned holidays made around the way you love to travel.
            </p>

            <div className="package-hero__quick-info" aria-label="Package overview">
              <div className="package-hero__info-item">
                <span className="package-hero__info-icon"><Star size={17} fill="currentColor" /></span>
                <span className="package-hero__info-copy"><strong>{rating}</strong><small>Guest rating</small></span>
              </div>
              <span className="package-hero__detail-divider" aria-hidden="true" />
              <div className="package-hero__info-item">
                <span className="package-hero__info-icon"><Clock3 size={17} /></span>
                <span className="package-hero__info-copy"><strong>{duration}</strong><small>Trip duration</small></span>
              </div>
              <span className="package-hero__detail-divider package-hero__detail-divider--optional" aria-hidden="true" />
              <div className="package-hero__info-item">
                <span className="package-hero__info-icon"><Users size={17} /></span>
                <span className="package-hero__info-copy"><strong>Made for you</strong><small>Personalized travel</small></span>
              </div>
            </div>

            <div className="package-hero__actions">
              <button type="button" className="package-hero__button package-hero__button--primary" onClick={handleBooking}>
                <span>Plan My Trip</span><ArrowRight size={18} />
              </button>
              <button type="button" className="package-hero__button package-hero__button--secondary" onClick={handleExplore}>
                <span>Explore Details</span><ArrowDown size={17} />
              </button>
            </div>

            <div className="package-hero__trust">
              <ShieldCheck size={17} /><span>Personalized trips</span><span className="package-hero__trust-dot" />
              <Check size={16} /><span>Dedicated travel support</span>
            </div>
          </div>

          <aside className="package-hero__card" aria-label="Package summary">
            <div className="package-hero__card-top">
              <div><span className="package-hero__card-kicker">YOUR JOURNEY STARTS HERE</span><h2>Make it memorable.</h2></div>
              <span className="package-hero__card-icon"><Sparkles size={20} /></span>
            </div>
            <div className="package-hero__card-image-wrap">
              <img src={image} alt={`${location} destination`} className="package-hero__card-image" loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = FALLBACK_IMAGE; }} />
              <div className="package-hero__card-image-overlay" />
              <div className="package-hero__card-image-label"><MapPin size={14} /><span>{location}</span></div>
            </div>
            <div className="package-hero__card-details">
              <div className="package-hero__card-detail"><span>Duration</span><strong>{duration}</strong></div>
              <div className="package-hero__card-detail"><span>Guest rating</span><strong className="package-hero__card-rating"><Star size={15} fill="currentColor" />{rating}</strong></div>
            </div>
            <div className="package-hero__price-area">
              <div className="package-hero__price-copy"><span>Package price</span>
                {formattedPrice ? <strong className="package-hero__price">₹{formattedPrice}<small> onwards</small></strong> : <strong className="package-hero__price package-hero__price--custom">Let's plan it</strong>}
              </div>
              <button type="button" className={`package-hero__icon-button ${isSaved ? "is-saved" : ""}`} onClick={handleWishlist} aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"} aria-pressed={isSaved} title={isSaved ? "Remove from wishlist" : "Save package"}>
                <Heart size={19} fill={isSaved ? "currentColor" : "none"} />
              </button>
              <button type="button" className="package-hero__icon-button" onClick={handleShare} aria-label="Share this package" title="Share package"><Share2 size={18} /></button>
            </div>
            <button type="button" className="package-hero__card-cta" onClick={handleBooking}>Enquire About This Trip <ArrowRight size={17} /></button>
            <p className="package-hero__card-note"><ShieldCheck size={14} /><span>No-pressure planning with dedicated travel support.</span></p>
            {notice && <div className="package-hero__toast" role="status" aria-live="polite"><Check size={15} />{notice}</div>}
          </aside>
        </div>

        <button type="button" className="package-hero__scroll" onClick={handleExplore}>
          <span>SCROLL TO EXPLORE</span><ArrowDown size={15} />
        </button>
      </div>
    </section>
  );
};

export default PackageHero;
