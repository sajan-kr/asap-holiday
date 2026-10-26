import React from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Star,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import "./PackageBookingCard.css";

const PackageBookingCard = ({ item, onBookNow }) => {
  if (!item) return null;

  const handleBooking = () => {
    if (typeof onBookNow === "function") {
      onBookNow(item);
      return;
    }

    const bookingSection = document.getElementById("package-booking-form");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    const message = `Hi, I'm interested in the ${item.title} package. Please share more details.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the ${item.title} package.
Destination: ${item.location || item.title}
Duration: ${item.duration || "Please share details"}
Price: ${item.price || "Please share price"}

Please share more details.`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <aside className="package-booking-card" id="package-booking">
      <div className="package-booking-card-top">
        <span className="package-booking-label">
          <span className="package-booking-label-dot" />
          YOUR NEXT GETAWAY
        </span>

        <div className="package-booking-rating">
          <Star size={15} fill="currentColor" />
          <strong>{item.rating || "4.9"}</strong>
          <span>Top rated</span>
        </div>
      </div>

      <div className="package-booking-price-area">
        <span className="package-booking-price-caption">
          Starting from
        </span>

        <div className="package-booking-price-row">
          <h3>{item.price || "Price on request"}</h3>

          {item.price && (
            <span className="package-booking-price-unit">
              / person
            </span>
          )}
        </div>

        <p className="package-booking-price-note">
          Final pricing may vary depending on travel dates and availability.
        </p>
      </div>

      <div className="package-booking-details">
        <div className="package-booking-detail">
          <div className="package-booking-detail-icon">
            <MapPin size={18} />
          </div>

          <div>
            <span>Destination</span>
            <strong>{item.location || item.title}</strong>
          </div>
        </div>

        <div className="package-booking-detail">
          <div className="package-booking-detail-icon">
            <Clock3 size={18} />
          </div>

          <div>
            <span>Trip duration</span>
            <strong>{item.duration || "Contact for details"}</strong>
          </div>
        </div>

        <div className="package-booking-detail">
          <div className="package-booking-detail-icon">
            <CalendarDays size={18} />
          </div>

          <div>
            <span>Travel dates</span>
            <strong>Flexible dates</strong>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="package-booking-primary-btn"
        onClick={handleBooking}
      >
        <span>Plan My Trip</span>
        <ArrowRight size={18} />
      </button>

      <button
        type="button"
        className="package-booking-whatsapp-btn"
        onClick={handleWhatsApp}
      >
        <MessageCircle size={18} />
        <span>Enquire on WhatsApp</span>
      </button>

      <div className="package-booking-trust">
        <ShieldCheck size={17} />

        <span>Personalised travel assistance</span>
      </div>

      <div className="package-booking-divider" />

      <div className="package-booking-benefit">
        <CheckCircle2 size={17} />
        <span>Customise your travel experience</span>
      </div>

      <div className="package-booking-benefit">
        <CheckCircle2 size={17} />
        <span>Get itinerary and pricing details</span>
      </div>

      <div className="package-booking-bottom-note">
        Have questions?
        <button type="button" onClick={handleWhatsApp}>
          Talk to our travel team
        </button>
      </div>
    </aside>
  );
};

export default PackageBookingCard;