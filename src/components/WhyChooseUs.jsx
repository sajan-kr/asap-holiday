import React from "react";
import "./WhyChooseUs.css";

import {
  Sparkles,
  ShieldCheck,
  Headphones,
  Users,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: <BriefcaseBusiness size={24} />,
    number: "100%",
    title: "Customized Trips",
    desc: "Tailor-made holidays crafted around your travel style.",
  },

  {
    icon: <Headphones size={24} />,
    number: "24/7",
    title: "Travel Concierge",
    desc: "Dedicated support before and during your journey.",
  },

  {
    icon: <ShieldCheck size={24} />,
    number: "95%",
    title: "Visa Success",
    desc: "Reliable visa assistance for stress-free travel.",
  },

  {
    icon: <Users size={24} />,
    number: "150K+",
    title: "Happy Travelers",
    desc: "Trusted by thousands across the globe.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      {/* BACKGROUND GLOW */}

      <div className="bg-glow one"></div>
      <div className="bg-glow two"></div>

      {/* TOP */}

      <div className="why-top">

        <span className="section-badge">
          WHY CHOOSE ASAP HOLIDAYS
        </span>

        <h2>
          Luxury Journeys
          <span> Crafted Perfectly</span>
        </h2>

        <p>
          Discover curated travel experiences with premium stays,
          expert planning and unforgettable destinations worldwide.
        </p>

      </div>

      {/* MAIN */}

      <div className="why-wrapper">

        {/* LEFT SIDE */}

        <div className="features-grid">

          {features.map((item, index) => (
            <div className="feature-card" key={index}>

              <div className="card-top">

                <div className="icon-box">
                  {item.icon}
                </div>

                <ArrowUpRight size={20} className="arrow-icon" />

              </div>

              <h3>{item.number}</h3>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}

        <div className="award-card">

          {/* MINI BADGE */}

          <div className="award-badge">

            <Sparkles size={16} />

            AWARD WINNING BRAND

          </div>

          {/* TITLE */}

          <h2>
            India’s Leading
            <br />
            Luxury Holiday
            <span> Experience</span>
          </h2>

          {/* DESCRIPTION */}

          <p>
            From premium resorts to personalized itineraries,
            ASAP Holidays delivers world-class journeys
            designed for modern travelers.
          </p>

          {/* IMAGE */}

          <div className="award-image">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop" alt="Luxury Travel"/>
            <div className="image-overlay">
              <div className="overlay-box">
                <h3>10K+</h3>
                <span>
                  Luxury Tours Booked
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;