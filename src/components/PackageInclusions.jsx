
import React, { useState, useEffect } from "react";
import {
  Plane,
  Hotel,
  Car,
  Map,
  Coffee,
  Camera,
  ShieldCheck,
  CheckCircle2,
  CheckCheck,
  Info,
  PackageCheck,
  MinusCircle,
  Wallet,
  BadgeCheck,
} from "lucide-react";

import "./PackageInclusions.css";

const ICON_MAP = {
  flight: Plane,
  flights: Plane,
  plane: Plane,
  hotel: Hotel,
  accommodation: Hotel,
  stay: Hotel,
  transfer: Car,
  transfers: Car,
  transport: Car,
  sightseeing: Map,
  map: Map,
  meals: Coffee,
  breakfast: Coffee,
  food: Coffee,
  activities: Camera,
  experiences: Camera,
  insurance: ShieldCheck,
  expenses: Wallet,
};

const getIcon = (entry) => {
  if (typeof entry.icon === "function") {
    return entry.icon;
  }

  if (typeof entry.icon === "string") {
    const icon =
      ICON_MAP[entry.icon.toLowerCase()];

    if (icon) return icon;
  }

  const title = String(entry.title || "")
    .toLowerCase();

  if (/flight|airfare|airline/.test(title))
    return Plane;

  if (/hotel|accommodation|stay/.test(title))
    return Hotel;

  if (/transfer|transport|vehicle/.test(title))
    return Car;

  if (/sightseeing|tour|excursion/.test(title))
    return Map;

  if (/meal|breakfast|lunch|dinner/.test(title))
    return Coffee;

  if (/activity|experience|attraction/.test(title))
    return Camera;

  if (/insurance/.test(title))
    return ShieldCheck;

  if (/expense|shopping|tips/.test(title))
    return Wallet;

  return PackageCheck;
};

const normalizeEntry = (entry) => {
  if (typeof entry === "string") {
    return {
      title: entry,
      description: "",
    };
  }

  if (!entry || typeof entry !== "object") {
    return null;
  }

  return {
    ...entry,
    title: entry.title || entry.name || "",
    description:
      entry.description || entry.text || "",
  };
};

const PackageInclusions = ({
  item,
  inclusions,
  exclusions,
}) => {
  const [activeTab, setActiveTab] =
    useState("included");

  useEffect(() => {
    setActiveTab("included");
  }, [item]);

  if (!item) return null;

  const includedSource = Array.isArray(inclusions)
    ? inclusions
    : Array.isArray(item.inclusions)
      ? item.inclusions
      : [];

  const excludedSource = Array.isArray(exclusions)
    ? exclusions
    : Array.isArray(item.exclusions)
      ? item.exclusions
      : [];

  const includedItems = includedSource
    .map(normalizeEntry)
    .filter((entry) => entry && entry.title);

  const excludedItems = excludedSource
    .map(normalizeEntry)
    .filter((entry) => entry && entry.title);

  const currentItems =
    activeTab === "included"
      ? includedItems
      : excludedItems;

  const isIncluded = activeTab === "included";

  return (
    <section className="package-inclusions">
      {/* HEADER */}
      <div className="inc-header">
        <div className="inc-heading">
          <span className="inc-eyebrow">
            <span className="inc-eyebrow-icon">
              <BadgeCheck size={16} />
            </span>
            PACKAGE ESSENTIALS
          </span>

          <h2>
            Everything that's part of
            <span> your escape.</span>
          </h2>

          <p>
            Discover the services and
            experiences associated with your
            {item.location
              ? ` ${item.location}`
              : ""}{" "}
            holiday package.
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="inc-layout">
        {/* LEFT PANEL */}
        <aside className="inc-feature-panel">
          <div className="inc-feature-top">
            <span className="inc-feature-icon">
              <ShieldCheck size={27} />
            </span>

            <span className="inc-brand-label">
              ASAP HOLIDAYS
            </span>
          </div>

          <div className="inc-feature-body">
            <span className="inc-feature-eyebrow">
              TRAVEL SMARTER
            </span>

            <h3>
              Know before
              <span> you go.</span>
            </h3>

            <p>
              Review your package inclusions
              and exclusions before booking,
              so you know what is arranged
              and what may require separate
              payment.
            </p>
          </div>

          <div className="inc-feature-points">
            <div>
              <CheckCircle2 size={17} />
              <span>
                Clear package breakdown
              </span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>
                Package-specific information
              </span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>
                Easy to review before booking
              </span>
            </div>
          </div>

          <div className="inc-feature-footer">
            <PackageCheck size={18} />

            <span>
              {includedItems.length} inclusions
              {" · "}
              {excludedItems.length} exclusions listed
            </span>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="inc-main">
          <div className="inc-main-header">
            <div>
              <span className="inc-section-label">
                YOUR PACKAGE AT A GLANCE
              </span>

              <h3>Package details</h3>
            </div>

            <span className="inc-total">
              {String(currentItems.length)
                .padStart(2, "0")}
            </span>
          </div>

          {/* TABS */}
          <div
            className="inc-tabs"
            role="tablist"
            aria-label="Package details"
          >
            <button
              type="button"
              role="tab"
              aria-selected={isIncluded}
              className={`inc-tab ${
                isIncluded ? "active" : ""
              }`}
              onClick={() =>
                setActiveTab("included")
              }
            >
              <CheckCircle2 size={16} />
              Included
              <span>{includedItems.length}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={!isIncluded}
              className={`inc-tab ${
                !isIncluded ? "active" : ""
              }`}
              onClick={() =>
                setActiveTab("excluded")
              }
            >
              <MinusCircle size={16} />
              Not Included
              <span>{excludedItems.length}</span>
            </button>
          </div>

          {/* LIST */}
          {currentItems.length > 0 ? (
            <div className="inc-list">
              {currentItems.map(
                (entry, index) => {
                  const Icon = getIcon(entry);

                  return (
                    <article
                      className={`inc-item ${
                        !isIncluded
                          ? "inc-item-excluded"
                          : ""
                      }`}
                      key={`${entry.title}-${index}`}
                    >
                      <span className="inc-item-icon">
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </span>

                      <div className="inc-item-content">
                        <h4>{entry.title}</h4>

                        {entry.description && (
                          <p>
                            {entry.description}
                          </p>
                        )}
                      </div>

                      <span className="inc-item-status">
                        {isIncluded ? (
                          <CheckCircle2 size={19} />
                        ) : (
                          <MinusCircle size={19} />
                        )}
                      </span>
                    </article>
                  );
                }
              )}
            </div>
          ) : (
            <div className="inc-empty">
              <Info size={23} />

              <strong>
                {isIncluded
                  ? "Inclusions not listed"
                  : "Exclusions not listed"}
              </strong>

              <p>
                Please contact our travel team
                for the confirmed package
                information before booking.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div className="inc-note">
        <span className="inc-note-icon">
          <Info size={19} />
        </span>

        <div>
          <strong>
            A quick note before booking
          </strong>

          <p>
            Package inclusions and exclusions
            may vary by destination, travel
            dates, and selected plan. Please
            review your final booking
            confirmation for exact details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackageInclusions;
