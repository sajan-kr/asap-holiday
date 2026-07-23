import React from "react";
import "./WhyChooseTour.css";
import whyChooseData from "../data/whyChooseData";

import {
  FaPlaneDeparture,
  FaHeart,
} from "react-icons/fa";

const WhyChooseTour = () => {
  return (
    <section className="whyChoose">
      {/* Background Decoration */}
      <div className="why-bg-circle one"></div>
      <div className="why-bg-circle two"></div>

      {/* Heading */}
      <div className="why-heading">

        <span className="why-subtitle">
          <span></span>
          WHY CHOOSE US?
          <span></span>
        </span>

        <h2>
          Travel Made Easy,
          <br />
          <em>Memories Made Forever</em>
        </h2>

        <div className="why-divider">
          <span></span>
          <FaHeart />
          <span></span>
        </div>

        <p>
          Experience seamless journeys with our expert care,
          trusted by thousands of travelers.
        </p>

      </div>

      {/* Cards */}
      <div className="why-grid">

        {whyChooseData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              className="why-card"
              key={item.id}
              style={{
                "--accent": item.color,
              }}
            >

              {/* Number */}
              <span className="card-number">
                {item.id}
              </span>

              {/* Icon */}
              <div className="icon-wrapper">

                <div className="icon-ring"></div>

                <div className="icon-circle">
                  <Icon />
                </div>

              </div>

              {/* Content */}
              <div className="card-content">

                <h3>{item.title}</h3>

                <div className="small-line"></div>

                <p>{item.description}</p>

              </div>

              {/* Bottom Accent */}
              <div className="bottom-line"></div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default WhyChooseTour;