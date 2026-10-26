import React from "react";
import {
  Check,
  Plane,
  Hotel,
  Camera,
  Coffee,
  Car,
  ShieldCheck,
  Map,
  Sparkles,
  CircleCheck,
} from "lucide-react";

import "./PackageInclusions.css";

const DEFAULT_INCLUSIONS = [
  {
    icon: Plane,
    title: "Flight Assistance",
    description: "Flight arrangements as specified in your package.",
  },
  {
    icon: Hotel,
    title: "Hotel Accommodation",
    description: "Comfortable accommodation during your stay.",
  },
  {
    icon: Car,
    title: "Transfers",
    description: "Airport and local transfers as per your itinerary.",
  },
  {
    icon: Map,
    title: "Sightseeing",
    description: "Selected sightseeing experiences included in the itinerary.",
  },
  {
    icon: Coffee,
    title: "Meals",
    description: "Meals according to your selected package plan.",
  },
  {
    icon: Camera,
    title: "Travel Experiences",
    description: "Activities and experiences listed in your itinerary.",
  },
];

const PackageInclusions = ({ item, inclusions }) => {
  if (!item) return null;

  const packageInclusions =
    Array.isArray(inclusions) && inclusions.length > 0
      ? inclusions
      : DEFAULT_INCLUSIONS;

  return (
    <section className="package-inclusions">
      {/* Header */}
      <div className="package-inclusions-header">
        <div>
          <span className="package-inclusions-eyebrow">
            <Sparkles size={15} />
            EVERYTHING CONSIDERED
          </span>

          <h2>
            What's Included
            <br />
            <span>In Your Journey?</span>
          </h2>

          <p>
            Enjoy greater peace of mind with the services and experiences
            planned for your {item.location} holiday.
          </p>
        </div>

        <div className="package-inclusions-trust">
          <span className="package-inclusions-trust-icon">
            <ShieldCheck size={25} />
          </span>

          <div>
            <strong>Travel with Confidence</strong>
            <span>Clear package information</span>
          </div>
        </div>
      </div>

      {/* Inclusion Cards */}
      <div className="package-inclusions-grid">
        {packageInclusions.map((inclusion, index) => {
          const Icon = inclusion.icon || [
            Plane,
            Hotel,
            Car,
            Map,
            Coffee,
            Camera,
          ][index % 6];

          return (
            <article
              className="package-inclusions-card"
              key={inclusion.title || index}
            >
              <div className="package-inclusions-card-top">
                <span className="package-inclusions-icon">
                  <Icon size={22} />
                </span>

                <span className="package-inclusions-check">
                  <Check size={15} />
                </span>
              </div>

              <h3>{inclusion.title}</h3>

              <p>
                {inclusion.description ||
                  inclusion.text ||
                  "Included according to your selected holiday package."}
              </p>

              <div className="package-inclusions-status">
                <CircleCheck size={14} />
                <span>Package inclusion</span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Important Information */}
      <div className="package-inclusions-note">
        <span className="package-inclusions-note-icon">
          <ShieldCheck size={20} />
        </span>

        <div>
          <strong>A little clarity goes a long way.</strong>

          <p>
            Exact inclusions, meal plans, transfers and activities depend on
            your selected package and confirmed booking. Please verify the
            final inclusions with our travel team before booking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackageInclusions;