import React, { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Honeymoon Traveler",
    destination: "Maldives",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    review: "Everything was beautifully organized. The resort, transfers and experiences were absolutely perfect.",
  },
  {
    name: "Sneha Kapoor",
    role: "International Traveler",
    destination: "Switzerland",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    review: "The entire Switzerland itinerary was seamless. We could simply relax and enjoy every part of the journey.",
  },
  {
    name: "Aman Verma",
    role: "Luxury Traveler",
    destination: "Bali",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    review: "From premium hotels to unique experiences, everything felt personal and exceeded our expectations.",
  },
  {
    name: "Priya Mehta",
    role: "Family Traveler",
    destination: "Dubai",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    review: "Planning a family vacation can be stressful, but ASAP Holidays made everything incredibly simple.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(1);

  const next = () => {
    setActive((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);

    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset) => {
    return (
      (active + offset + testimonials.length) %
      testimonials.length
    );
  };

  const left = testimonials[getIndex(-1)];
  const center = testimonials[getIndex(0)];
  const right = testimonials[getIndex(1)];

  const renderStars = () => (
    <div className="voice-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
          fill="currentColor"
        />
      ))}
    </div>
  );

  const Card = ({ item, type }) => (
    <article
      className={`voice-card voice-card-${type}`}
    >

      <div className="voice-card-top">

        <span className="voice-destination">
          <MapPin size={12} />
          {item.destination}
        </span>

        {type === "center" && (
          <div className="voice-verified">
            Verified
          </div>
        )}

      </div>

      {type === "center" && (
        <div className="voice-big-quote">
          <Quote size={35} />
        </div>
      )}

      <p className="voice-review">
        “{item.review}”
      </p>

      <div className="voice-author">

        <img
          src={item.image}
          alt={item.name}
        />

        <div>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </div>

      </div>

      <div className="voice-card-rating">
        {renderStars()}
        <span>5.0</span>
      </div>

    </article>
  );

  return (
    <section className="traveler-voices">

      <div className="voices-background-text">
        STORIES
      </div>

      <div className="voices-container">

        {/* HEADER */}

        <header className="voices-header">

          <div>

            <span className="voices-eyebrow">
              <i />
              TRAVELER VOICES
            </span>

            <h2>
              Loved by travelers,
              <br />
              <span>remembered forever.</span>
            </h2>

          </div>

          <p>
            Real experiences from travelers who trusted
            ASAP Holidays to create unforgettable journeys.
          </p>

        </header>

        {/* CARDS */}

        <div className="voices-carousel">

          <Card
            item={left}
            type="side"
          />

          <Card
            item={center}
            type="center"
          />

          <Card
            item={right}
            type="side"
          />

        </div>

        {/* CONTROLS */}

        <div className="voices-controls">

          <div className="voices-progress">

            <span>
              0{active + 1}
            </span>

            <div className="voices-progress-line">

              <span
                style={{
                  width: `${
                    ((active + 1) /
                      testimonials.length) *
                    100
                  }%`,
                }}
              />

            </div>

            <span>
              0{testimonials.length}
            </span>

          </div>

          <div className="voices-arrows">

            <button
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

        {/* BOTTOM TRUST */}

        <div className="voices-trust">

          <div className="voices-trust-rating">

            <strong>4.9</strong>

            <div>

              <div className="voice-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={13}
                    fill="currentColor"
                  />
                ))}
              </div>

              <span>
                Average traveler rating
              </span>

            </div>

          </div>

          <div className="voices-trust-line" />

          <span>
            10,000+ journeys made memorable
          </span>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;