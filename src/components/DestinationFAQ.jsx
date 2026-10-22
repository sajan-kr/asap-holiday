
import React, { useEffect, useId, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { getDestinationFAQs } from "../data/destinationFAQData";
import "./DestinationFAQ.css";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85";

const DestinationFAQ = ({ destination = {} }) => {
  const uid = useId();

  const destinationName =
    destination.name || destination.title || "Your destination";

  const destinationSlug =
    destination.slug || destination.id || destinationName;

  const destinationLocation =
    destination.location || destination.country || "Your next adventure";

  const faqs = useMemo(
    () => getDestinationFAQs(destination),
    [
      destination.slug,
      destination.id,
      destination.name,
      destination.title,
      destination.faqs,
    ]
  );

  const imageSrc =
    destination.image ||
    destination.heroImage ||
    destination.bannerImage ||
    destination.coverImage ||
    destination.gallery?.[0]?.image ||
    (typeof destination.gallery?.[0] === "string"
      ? destination.gallery[0]
      : "") ||
    FALLBACK_IMAGE;

  const [activeFaq, setActiveFaq] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setActiveFaq(faqs.length > 0 ? 0 : null);
  }, [destinationSlug, faqs.length]);

  useEffect(() => {
    setImageFailed(false);
  }, [imageSrc]);

  const contactUrl = `/contact?destination=${encodeURIComponent(
    destinationSlug
  )}`;

  return (
    <section
      className="destination-faq"
      id="destination-faq"
      aria-labelledby={`${uid}-heading`}
    >
      <div className="destination-faq__container">
        {/* Editorial heading */}
        <header className="destination-faq__header">
          <div className="destination-faq__heading-copy">
            <span className="destination-faq__eyebrow">
              <span className="destination-faq__eyebrow-line" />
              THE TRAVEL EDIT
            </span>

            <h2 id={`${uid}-heading`}>
              Every detail,
              <br />
              <span>before departure.</span>
            </h2>
          </div>

          <p className="destination-faq__intro">
            A little preparation goes a long way. Find useful answers before
            setting off for <strong>{destinationName}</strong>.
          </p>
        </header>

        {/* Photography and FAQ */}
        <div className="destination-faq__layout">
          <figure className="destination-faq__visual">
            {!imageFailed ? (
              <img
                className="destination-faq__image"
                src={imageSrc}
                alt={`${destinationName} travel destination`}
                loading="lazy"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="destination-faq__image-fallback">
                <FaMapMarkerAlt aria-hidden="true" />
                <span>{destinationName}</span>
              </div>
            )}

            <div className="destination-faq__image-shade" />

            <div className="destination-faq__image-top">
              <span>YOUR NEXT CHAPTER</span>
              <span className="destination-faq__image-dot" />
            </div>

            <figcaption className="destination-faq__image-caption">
              <span className="destination-faq__location">
                <FaMapMarkerAlt aria-hidden="true" />
                {destinationLocation}
              </span>

              <h3>{destinationName}</h3>

              <p>
                Make room for new places, fresh perspectives and memorable
                moments.
              </p>
            </figcaption>

            <span className="destination-faq__image-index">
              ASAP HOLIDAYS <span> / </span> TRAVEL GUIDE
            </span>
          </figure>

          <div className="destination-faq__content">
            <div className="destination-faq__list-heading">
              <div>
                <span className="destination-faq__section-label">
                  GOOD TO KNOW
                </span>
                <h3>Frequently asked questions</h3>
              </div>

              <span className="destination-faq__count">
                {String(faqs.length).padStart(2, "0")}
              </span>
            </div>

            {faqs.length > 0 ? (
              <div className="destination-faq__list">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  const questionId = `${uid}-question-${index}`;
                  const answerId = `${uid}-answer-${index}`;

                  return (
                    <article
                      key={`${faq.question}-${index}`}
                      className={`destination-faq__item ${
                        isOpen ? "is-open" : ""
                      }`}
                    >
                      <h4 className="destination-faq__question-heading">
                        <button
                          type="button"
                          id={questionId}
                          className="destination-faq__question"
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() =>
                            setActiveFaq((current) =>
                              current === index ? null : index
                            )
                          }
                        >
                          <span className="destination-faq__number">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="destination-faq__question-text">
                            {faq.question}
                          </span>

                          <span className="destination-faq__toggle">
                            <FaChevronDown aria-hidden="true" />
                          </span>
                        </button>
                      </h4>

                      <div
                        id={answerId}
                        className="destination-faq__answer-wrap"
                        role="region"
                        aria-labelledby={questionId}
                        aria-hidden={!isOpen}
                        inert={!isOpen}
                      >
                        <div className="destination-faq__answer">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="destination-faq__empty">
                <h4>Planning your visit?</h4>
                <p>
                  Our travel team can help with questions about{" "}
                  {destinationName}.
                </p>
              </div>
            )}

            <div className="destination-faq__contact">
              <div>
                <span className="destination-faq__contact-label">
                  NEED A LITTLE MORE HELP?
                </span>
                <p>Let’s plan a trip that feels right for you.</p>
              </div>

              <a href={contactUrl} aria-label={`Plan a trip to ${destinationName}`}>
                <FaArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <footer className="destination-faq__footer">
          <span>TRAVEL WELL. DISCOVER MORE.</span>
          <span>ASAP HOLIDAYS</span>
        </footer>
      </div>
    </section>
  );
};

export default DestinationFAQ;
