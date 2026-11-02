import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Heart,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Users,
  X,
  AlertCircle,
} from "lucide-react";

import "./PackageBookingCard.css";

const WHATSAPP_NUMBER = "919205129996";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  travelDate: "",
  travelers: "2",
  message: "",
};

const PackageBookingCard = ({ item, onBookNow }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const packageTitle = item?.title || "Holiday Package";
  const destination = item?.location || packageTitle;
  const duration = item?.duration || "Contact for details";
  const price = item?.price || "Price on request";
  const rating = item?.rating || "4.9";

  const today = new Date();
  const minTravelDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  // Prevent background scrolling when modal is open.
  useEffect(() => {
    if (!isBookingOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape" && !isSubmitting) {
        setIsBookingOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isBookingOpen, isSubmitting]);

  if (!item) return null;

  const openBookingModal = () => {
    setErrors({});
    setTouched({});
    setSubmitError("");
    setSubmitSuccess(false);
    setFormData(initialForm);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    if (isSubmitting) return;
    setIsBookingOpen(false);
    setSubmitError("");
  };

  const validateField = (name, value) => {
    const trimmed = String(value ?? "").trim();

    switch (name) {
      case "name":
        if (!trimmed) return "Please enter your full name.";
        if (trimmed.length < 2)
          return "Name must contain at least 2 characters.";
        if (!/^[\p{L}\s.'-]+$/u.test(trimmed))
          return "Please enter a valid name.";
        return "";

      case "email":
        if (!trimmed) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed))
          return "Please enter a valid email address.";
        return "";

      case "phone": {
        const digits = trimmed.replace(/\D/g, "");
        if (!digits) return "Please enter your phone number.";
        if (!/^[6-9]\d{9}$/.test(digits))
          return "Enter a valid 10-digit Indian mobile number.";
        return "";
      }

      case "travelDate":
        if (trimmed && trimmed < minTravelDate)
          return "Travel date cannot be in the past.";
        return "";

      case "travelers":
        if (!trimmed) return "Please select the number of travellers.";
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const fields = ["name", "email", "phone", "travelDate", "travelers"];
    const nextErrors = {};

    fields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) nextErrors[field] = error;
    });

    setErrors(nextErrors);

    setTouched({
      name: true,
      email: true,
      phone: true,
      travelDate: true,
      travelers: true,
    });

    return Object.keys(nextErrors).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const nextValue =
      name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((previous) => ({
      ...previous,
      [name]: nextValue,
    }));

    if (touched[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: validateField(name, nextValue),
      }));
    }

    setSubmitError("");
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value),
    }));
  };

  const handleWhatsApp = () => {
    const message = `Hi ASAP Holidays! I'm interested in this holiday package.

Package: ${packageTitle}
Destination: ${destination}
Duration: ${duration}
Price: ${price}

Please share itinerary, inclusions, availability and booking details.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleBookingSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmitError("Please correct the highlighted fields.");

      document
        .querySelector(
          ".booking-form-field input[aria-invalid='true'], .booking-form-field select[aria-invalid='true']"
        )
        ?.focus();

      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      if (typeof onBookNow === "function") {
        await onBookNow(item, formData);
        setSubmitSuccess(true);
        setIsBookingOpen(false);
        return;
      }

      const message = `Hi ASAP Holidays! I'd like to enquire about this package.

Package: ${packageTitle}
Destination: ${destination}
Duration: ${duration}
Price: ${price}

Name: ${formData.name}
Email: ${formData.email}
Phone: +91 ${formData.phone}
Travel date: ${formData.travelDate || "Flexible"}
Travellers: ${formData.travelers}

Additional requirements:
${formData.message || "No additional requirements"}

Please contact me with more details.`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setSubmitSuccess(true);
      setIsBookingOpen(false);
    } catch (error) {
      console.error("Booking enquiry failed:", error);

      setSubmitError(
        "Unable to submit your enquiry. Please try again or contact us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: packageTitle,
      text: `Check out this holiday package: ${packageTitle}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setShareMessage("Package link copied!");

        window.setTimeout(() => setShareMessage(""), 2500);
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        setShareMessage("Unable to share right now.");
      }
    }
  };

  const renderError = (field) => {
    if (!touched[field] || !errors[field]) return null;

    return (
      <span
        id={`booking-${field}-error`}
        className="booking-field-error"
        role="alert"
      >
        <AlertCircle size={13} />
        {errors[field]}
      </span>
    );
  };

  return (
    <>
      {/* Booking sidebar card */}
      <aside className="package-booking-card" id="package-booking">
        <div className="booking-card-accent" />

        <div className="booking-card-header">
          <div>
            <span className="booking-card-eyebrow">
              <Sparkles size={14} />
              YOUR JOURNEY STARTS HERE
            </span>

            <h3 className="booking-card-heading">Make it memorable.</h3>
            <p className="booking-card-description">
              Your perfect getaway is just a few steps away.
            </p>
          </div>

          <div className="booking-card-header-icon">
            <Sparkles size={21} />
          </div>
        </div>

        <div className="booking-package-preview">
          {item.image ? (
            <img
              src={item.image}
              alt={packageTitle}
              className="booking-package-image"
              loading="lazy"
            />
          ) : (
            <div className="booking-package-image-placeholder">
              <MapPin size={30} />
              <span>{destination}</span>
            </div>
          )}

          <div className="booking-package-image-overlay">
            <span className="booking-destination-tag">
              <MapPin size={13} />
              {destination}
            </span>
          </div>

          <button
            type="button"
            className={`booking-image-action booking-favorite-btn ${
              isFavorite ? "is-favorite" : ""
            }`}
            aria-label="Toggle favorite"
            aria-pressed={isFavorite}
            onClick={() => setIsFavorite((previous) => !previous)}
          >
            <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
          </button>

          <button
            type="button"
            className="booking-image-action booking-share-btn"
            aria-label="Share package"
            onClick={handleShare}
          >
            <Share2 size={17} />
          </button>
        </div>

        {shareMessage && (
          <div className="booking-share-feedback" role="status">
            {shareMessage}
          </div>
        )}

        <div className="booking-quick-facts">
          <div className="booking-quick-fact">
            <span className="booking-fact-label">Duration</span>
            <strong>
              <Clock3 size={14} />
              {duration}
            </strong>
          </div>

          <div className="booking-quick-fact">
            <span className="booking-fact-label">Guest rating</span>
            <strong className="booking-rating-value">
              <Star size={14} fill="currentColor" />
              {rating}
            </strong>
          </div>
        </div>

        <div className="booking-price-section">
          <div className="booking-price-heading">
            <span>Package price</span>

            <span className="booking-price-badge">
              <BadgeCheck size={12} />
              Best value
            </span>
          </div>

          <div className="booking-price-row">
            <h2>{price}</h2>
            {item.price && (
              <span className="booking-price-unit">onwards</span>
            )}
          </div>

          <p className="booking-price-note">
            Final price depends on travel dates and availability.
          </p>
        </div>

        <button
          type="button"
          className="booking-primary-btn"
          onClick={openBookingModal}
        >
          <span>Enquire About This Trip</span>
          <ArrowRight size={18} />
        </button>

        <button
          type="button"
          className="booking-whatsapp-btn"
          onClick={handleWhatsApp}
        >
          <MessageCircle size={18} />
          <span>Chat on WhatsApp</span>
        </button>

        <div className="booking-trust-message">
          <ShieldCheck size={16} />
          <span>No-pressure planning with dedicated travel support.</span>
        </div>

        <div className="booking-divider" />

        <div className="booking-benefits">
          <div className="booking-benefit">
            <CheckCircle2 size={16} />
            <span>Personalised travel planning</span>
          </div>

          <div className="booking-benefit">
            <CheckCircle2 size={16} />
            <span>Customise your itinerary</span>
          </div>

          <div className="booking-benefit">
            <CheckCircle2 size={16} />
            <span>Get itinerary and pricing details</span>
          </div>
        </div>

        <div className="booking-card-footer">
          <div className="booking-support-icon">
            <Users size={17} />
          </div>

          <div className="booking-support-content">
            <span className="booking-support-label">Need help planning?</span>
            <button type="button" onClick={handleWhatsApp}>
              Talk to our travel expert
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </aside>

      {/* Success toast */}
      {submitSuccess && (
        <div className="booking-success-toast" role="status">
          <CheckCircle2 size={18} />
          <span>Your enquiry has been initiated successfully.</span>

          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => setSubmitSuccess(false)}
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* Booking modal */}
      {isBookingOpen && (
        <div
          className="booking-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeBookingModal();
            }
          }}
        >
          <div
            className="booking-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            {/* Fixed modal header */}
            <div className="booking-modal-header">
              <div>
                <span className="booking-modal-eyebrow">
                  <Sparkles size={13} />
                  PLAN YOUR HOLIDAY
                </span>

                <h2 id="booking-modal-title">Let&apos;s plan your trip</h2>

                <p>
                  Share your details and our travel team will help you plan
                  your getaway.
                </p>
              </div>

              <button
                type="button"
                className="booking-modal-close"
                onClick={closeBookingModal}
                aria-label="Close booking form"
                disabled={isSubmitting}
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable modal body */}
            <div className="booking-modal-body">
              <div className="booking-modal-package">
                <MapPin size={17} />

                <div>
                  <strong>{packageTitle}</strong>
                  <span className="booking-modal-package-details">
                    {destination} · {duration}
                  </span>
                </div>
              </div>

              {submitError && (
                <div className="booking-form-alert" role="alert">
                  <AlertCircle size={17} />
                  <span>{submitError}</span>
                </div>
              )}

              <form
                id="package-booking-form"
                className="booking-modal-form"
                onSubmit={handleBookingSubmit}
                noValidate
              >
                <div className="booking-form-grid">
                  {/* Name */}
                  <label className="booking-form-field">
                    <span>
                      <User size={14} />
                      Full name <b>*</b>
                    </span>

                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.name && errors.name)}
                      aria-describedby={
                        touched.name && errors.name
                          ? "booking-name-error"
                          : undefined
                      }
                      className={
                        touched.name && errors.name ? "has-error" : ""
                      }
                    />

                    {renderError("name")}
                  </label>

                  {/* Email */}
                  <label className="booking-form-field">
                    <span>
                      <Mail size={14} />
                      Email address <b>*</b>
                    </span>

                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={
                        touched.email && errors.email
                          ? "booking-email-error"
                          : undefined
                      }
                      className={
                        touched.email && errors.email ? "has-error" : ""
                      }
                    />

                    {renderError("email")}
                  </label>

                  {/* Phone */}
                  <label className="booking-form-field">
                    <span>
                      <Phone size={14} />
                      Phone number <b>*</b>
                    </span>

                    <div
                      className={`booking-phone-input ${
                        touched.phone && errors.phone ? "has-error" : ""
                      }`}
                    >
                      <span className="booking-phone-prefix">+91</span>

                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel-national"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(touched.phone && errors.phone)}
                      />
                    </div>

                    {renderError("phone")}
                  </label>

                  {/* Date */}
                  <label className="booking-form-field">
                    <span>
                      <CalendarDays size={14} />
                      Preferred travel date
                    </span>

                    <input
                      type="date"
                      name="travelDate"
                      min={minTravelDate}
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(
                        touched.travelDate && errors.travelDate
                      )}
                      className={
                        touched.travelDate && errors.travelDate
                          ? "has-error"
                          : ""
                      }
                    />

                    {renderError("travelDate")}
                  </label>

                  {/* Travellers */}
                  <label className="booking-form-field">
                    <span>
                      <Users size={14} />
                      Number of travellers <b>*</b>
                    </span>

                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(
                        touched.travelers && errors.travelers
                      )}
                      className={
                        touched.travelers && errors.travelers
                          ? "has-error"
                          : ""
                      }
                    >
                      <option value="1">1 Traveller</option>
                      <option value="2">2 Travellers</option>
                      <option value="3">3 Travellers</option>
                      <option value="4">4 Travellers</option>
                      <option value="5">5 Travellers</option>
                      <option value="6">6 Travellers</option>
                      <option value="7">7 Travellers</option>
                      <option value="8">8 Travellers</option>
                      <option value="9">9 Travellers</option>
                      <option value="10+">10+ Travellers</option>
                    </select>

                    {renderError("travelers")}
                  </label>
                </div>

                {/* Additional message */}
                <label className="booking-form-field booking-form-message">
                  <span>Additional requirements (optional)</span>

                  <textarea
                    name="message"
                    placeholder="Tell us about your preferences, hotel choice, special requests..."
                    rows={4}
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleInputChange}
                  />

                  <span className="booking-character-count">
                    {formData.message.length}/1000
                  </span>
                </label>
              </form>
            </div>

            {/* Fixed modal footer */}
            <div className="booking-modal-footer">
              <p className="booking-modal-note">
                <ShieldCheck size={14} />
                Your details will be used to assist with this enquiry.
              </p>

              <button
                type="submit"
                form="package-booking-form"
                className="booking-modal-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle
                      size={18}
                      className="booking-submit-spinner"
                    />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackageBookingCard;