import React from "react";
import {
  Sparkles,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Compass,
} from "lucide-react";

import "./PackageOverview.css";

const PackageOverview = ({ item }) => {
  if (!item) return null;

  const highlights = [
    {
      icon: MapPin,
      title: "Beautiful Destination",
      description: `Explore the unforgettable sights of ${item.location}.`,
    },
    {
      icon: Clock,
      title: "Perfectly Planned",
      description: `${item.duration} of memorable travel experiences.`,
    },
    {
      icon: Star,
      title: "Exceptional Experience",
      description: `Discover a highly rated holiday experience, rated ${item.rating}/5.`,
    },
  ];

  return (
    <section className="package-overview">
      <div className="package-overview-top">
        <div className="package-overview-heading">
          <span className="package-overview-eyebrow">
            <Sparkles size={15} />
            YOUR JOURNEY, REIMAGINED
          </span>

          <h2>
            More Than a Trip.
            <br />
            <span>An Unforgettable Experience.</span>
          </h2>
        </div>

        <div className="package-overview-destination">
          <Compass size={20} />
          <div>
            <span>Discover</span>
            <strong>{item.location}</strong>
          </div>
        </div>
      </div>

      <div className="package-overview-description">
        <p>
          {item.description ||
            `Experience the beauty of ${item.location} with a thoughtfully planned holiday. From incredible destinations to memorable moments, ${item.title} brings together the experiences that make a journey truly special.`}
        </p>
      </div>

      <div className="package-overview-highlights">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;

          return (
            <article
              className="package-overview-highlight"
              key={highlight.title}
            >
              <div className="package-overview-highlight-top">
                <span className="package-overview-icon">
                  <Icon size={21} />
                </span>

                <span className="package-overview-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{highlight.title}</h3>

              <p>{highlight.description}</p>
            </article>
          );
        })}
      </div>

      <div className="package-overview-note">
        <span className="package-overview-note-icon">
          <CheckCircle2 size={19} />
        </span>

        <p>
          <strong>Thoughtfully curated for you.</strong>
          <span>
            Every journey is an opportunity to discover something extraordinary.
          </span>
        </p>
      </div>
    </section>
  );
};

export default PackageOverview;