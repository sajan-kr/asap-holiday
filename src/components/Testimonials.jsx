import React, { useEffect, useState } from "react";
import "./Testimonials.css";

import {
  Star,
  Quote,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Maldives Honeymoon",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",

    review:
      "Everything was perfectly organized — luxury resorts, airport transfers and beautiful experiences. ASAP Holidays made our honeymoon unforgettable.",
  },

  {
    name: "Sneha Kapoor",
    role: "Switzerland Tour",

    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",

    review:
      "The itinerary was seamless and premium from start to finish. The support team was available throughout our entire journey.",
  },

  {
    name: "Aman Verma",
    role: "Bali Luxury Escape",

    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",

    review:
      "Amazing hotels, smooth planning and exclusive experiences. ASAP Holidays exceeded our expectations in every way possible.",
  },
];

const Testimonials = () => {

  const [current, setCurrent] = useState(0);

  // AUTO SLIDER

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide();

    }, 5000);

    return () => clearInterval(interval);

  }, [current]);

  // NEXT

  const nextSlide = () => {

    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  };

  // PREV

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  };

  return (
    <section className="testimonial-section">

      {/* TOP */}

      <div className="section-top">

        <span className="section-badge">
          TESTIMONIALS
        </span>

        <h2>
          Travelers Love
          <span> ASAP Holidays</span>
        </h2>

        <p>
          Real stories from travelers who explored the world with us.
        </p>

      </div>

      {/* MAIN SLIDER */}

      <div className="testimonial-wrapper">

        {/* LEFT IMAGE */}

        <div className="image-side">

          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
          />

          <div className="image-overlay"></div>

          {/* FLOATING */}

          <div className="floating-box">

            <div className="mini-stars">

              <Star size={13} fill="#fbbf24" />
              <Star size={13} fill="#fbbf24" />
              <Star size={13} fill="#fbbf24" />
              <Star size={13} fill="#fbbf24" />
              <Star size={13} fill="#fbbf24" />

            </div>

            <span>
              4.9 Rated Experiences
            </span>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="content-side">

          {/* QUOTE */}

          <div className="quote-box">

            <Quote size={24} />

          </div>

          {/* REVIEW */}

          <p className="review">
            {testimonials[current].review}
          </p>

          {/* USER */}

          <div className="user-info">

            <h3>
              {testimonials[current].name}
            </h3>

            <span>
              {testimonials[current].role}
            </span>

          </div>

          {/* CONTROLS */}

          <div className="bottom-row">

            {/* DOTS */}

            <div className="dots">

              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={
                    current === index
                      ? "dot active"
                      : "dot"
                  }
                  onClick={() => setCurrent(index)}
                ></span>
              ))}

            </div>

            {/* BUTTONS */}

            <div className="slider-buttons">

              <button onClick={prevSlide}>

                <ChevronLeft size={18} />

              </button>

              <button onClick={nextSlide}>

                <ChevronRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* CTA */}

      <div className="cta-box">

        <div>

          <h3>
            Ready For Your Next Luxury Escape?
          </h3>

          <p>
            Explore curated international holidays crafted by experts.
          </p>

        </div>

        <button>

          Explore Tours

          <ArrowRight size={18} />

        </button>

      </div>

    </section>
  );
};

export default Testimonials;