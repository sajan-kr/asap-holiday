import React, { useState } from "react";

import {
  FaChevronDown,
} from "react-icons/fa";

import "./DestinationFAQ.css";

const DestinationFAQ = ({ destination }) => {

  // ------------------------------------------------
  // Active FAQ
  //
  // null = all closed
  // 0    = first question open
  // 1    = second question open
  // etc.
  // ------------------------------------------------
  const [activeFaq, setActiveFaq] = useState(0);


  // ------------------------------------------------
  // FAQ DATA
  //
  // These can later be moved to destinationsData.js
  // for destination-specific questions.
  // ------------------------------------------------
  const faqs = [
    {
      question: "What is included in the package?",

      answer:
        "Our travel packages can include accommodation, transportation assistance, sightseeing and travel support depending on the package you select. Your travel expert will provide a complete itinerary before booking.",
    },

    {
      question: "Can I customize my travel package?",

      answer:
        "Yes. You can discuss your preferred hotels, duration, activities, transportation and other requirements with our travel experts. We can help create an itinerary based on your travel preferences.",
    },

    {
      question: "Do you provide support during the trip?",

      answer:
        "Yes. ASAP Holidays provides travel assistance to help you throughout your journey. Our team can assist with questions, changes and general travel support.",
    },

    {
      question: "How early should I book my trip?",

      answer:
        "For the best availability and pricing, we recommend planning your trip in advance. Your travel expert can help you choose suitable dates and available options.",
    },

    {
      question: "Can I travel with family or a group?",

      answer:
        "Absolutely. We can help plan family holidays, couple trips and group travel. Share your group size and requirements with our travel team and we can recommend suitable options.",
    },
  ];


  // ------------------------------------------------
  // Toggle FAQ
  // ------------------------------------------------
  const handleFaqToggle = (index) => {

    setActiveFaq(
      activeFaq === index
        ? null
        : index
    );

  };


  return (
    <section
      id="destination-faq"
      className="destination-faq"
    >

      <div className="destination-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}
        <div className="destination-section-header">

          <span className="destination-section-eyebrow">
            HAVE QUESTIONS?
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Everything you need to know before planning
            your {destination.name} trip.
          </p>

        </div>


        {/* =================================================
            FAQ LAYOUT
        ================================================= */}
        <div className="destination-faq__layout">


          {/* =================================================
              LEFT INTRO
          ================================================= */}
          <div className="destination-faq__intro">

            <div className="destination-faq__intro-badge">
              FAQ
            </div>

            <h3>
              Planning Your Trip?
            </h3>

            <p>
              Find answers to some of the most common
              questions travelers ask before booking
              their holiday.
            </p>


            {/* Small support card */}
            <div className="destination-faq__support">

              <span>
                Still have questions?
              </span>

              <a href="/contact">
                Talk To A Travel Expert
              </a>

            </div>

          </div>


          {/* =================================================
              FAQ ACCORDION
          ================================================= */}
          <div className="destination-faq__list">

            {faqs.map((faq, index) => {

              const isActive =
                activeFaq === index;

              return (
                <div
                  className={`
                    destination-faq__item
                    ${
                      isActive
                        ? "is-active"
                        : ""
                    }
                  `}
                  key={faq.question}
                >

                  {/* Question */}
                  <button
                    type="button"
                    className="destination-faq__question"
                    onClick={() =>
                      handleFaqToggle(index)
                    }
                    aria-expanded={isActive}
                  >

                    <span className="destination-faq__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="destination-faq__question-text">
                      {faq.question}
                    </span>

                    <span className="destination-faq__icon">
                      <FaChevronDown />
                    </span>

                  </button>


                  {/* Answer */}
                  <div
                    className="destination-faq__answer-wrapper"
                  >

                    <div className="destination-faq__answer">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default DestinationFAQ;