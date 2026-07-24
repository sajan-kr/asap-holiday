import React from "react";
import "./TourCTA.css";
import { FaPhoneAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";

const TourCTA = () => {

  const phone = "+919205129996";
  const whatsapp = "919205129996";

  return (
    <section className="tourCTA">

      <div className="ctaLeft">
        <span className="offer">🔥 Limited Time Offer</span>

        <h3>Ready for Your Dream Holiday?</h3>

        <p>
          Get exclusive deals with expert planning and instant support.
        </p>
      </div>

      <div className="ctaRight">

        <button className="bookBtn" onClick={() => alert("Redirect to Booking Page")}>
          Book Now
          <FaArrowRight />
        </button>

        <a href={`tel:${phone}`} className="iconBtn callBtn">
          <FaPhoneAlt />
        </a>

        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="iconBtn whatsappBtn">
          <FaWhatsapp />
        </a>

      </div>

    </section>
  );
};

export default TourCTA;