import React from "react";

import {
  FaArrowRight,
  FaWhatsapp,
  FaHeadset,
  FaPlaneDeparture,
} from "react-icons/fa";

import "./DestinationCTA.css";

const DestinationCTA = ({ destination }) => {

  // ------------------------------------------------
  // WhatsApp configuration
  //
  // Replace this number if your production WhatsApp
  // number is different.
  // ------------------------------------------------
  const whatsappNumber = "919205129996";

  const whatsappMessage = encodeURIComponent(
    `Hi ASAP Holidays, I am interested in planning a trip to ${destination.name}. I would like to speak with a travel expert.`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


  return (
    <section
      id="destination-cta"
      className="destination-cta"
    >

      {/* Decorative background */}
      <div className="destination-cta__glow destination-cta__glow--one" />
      <div className="destination-cta__glow destination-cta__glow--two" />


      <div className="destination-container">

        <div className="destination-cta__wrapper">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="destination-cta__content">

            <div className="destination-cta__eyebrow">

              <FaPlaneDeparture />

              <span>
                YOUR NEXT ADVENTURE STARTS HERE
              </span>

            </div>


            <h2>
              Ready For Your Next{" "}
              <span>
                Adventure?
              </span>
            </h2>


            <p>
              Let ASAP Holidays help you turn your
              {` ${destination.name}`} travel plans into
              an unforgettable experience.
            </p>


            {/* Actions */}
            <div className="destination-cta__actions">

              <a
                href="/contact"
                className="destination-cta__primary-btn"
              >
                Book Your Trip

                <FaArrowRight />
              </a>


              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="destination-cta__whatsapp-btn"
              >
                <FaWhatsapp />

                Talk To A Travel Expert
              </a>

            </div>

          </div>


          {/* =================================================
              RIGHT SUPPORT CARD
          ================================================= */}
          <div className="destination-cta__support-card">

            <div className="destination-cta__support-icon">
              <FaHeadset />
            </div>


            <div className="destination-cta__support-content">

              <span>
                NEED HELP PLANNING?
              </span>

              <h3>
                Our Travel Experts Are Here For You
              </h3>

              <p>
                Get personalized guidance for hotels,
                flights, activities and your complete itinerary.
              </p>

            </div>


            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="destination-cta__support-link"
            >
              Chat With Us

              <FaArrowRight />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DestinationCTA;