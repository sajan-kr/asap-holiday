
import React, { useId, useRef, useState } from "react";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaCar,
  FaCheck,
  FaCheckCircle,
  FaChevronRight,
  FaClock,
  FaCompass,
  FaGlobeAsia,
  FaHotel,
  FaHome,
  FaLanguage,
  FaLightbulb,
  FaMapMarkerAlt,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaPlane,
  FaSuitcase,
  FaWallet,
} from "react-icons/fa";

import { getDestinationGuide } from "../data/destinationGuideData";
import "./DestinationGuide.css";

const GUIDE_TABS = [
  {
    id: "overview",
    label: "Trip essentials",
    number: "01",
    icon: FaCompass,
  },
  {
    id: "stay",
    label: "Where to stay",
    number: "02",
    icon: FaHotel,
  },
  {
    id: "transport",
    label: "Getting around",
    number: "03",
    icon: FaCar,
  },
  {
    id: "tips",
    label: "Travel smart",
    number: "04",
    icon: FaLightbulb,
  },
];

const OVERVIEW_ITEMS = [
  {
    key: "bestTime",
    label: "BEST TIME TO VISIT",
    icon: FaCalendarAlt,
    tone: "orange",
  },
  {
    key: "duration",
    label: "IDEAL DURATION",
    icon: FaClock,
    tone: "blue",
  },
  {
    key: "currency",
    label: "LOCAL CURRENCY",
    icon: FaMoneyBillWave,
    tone: "green",
  },
  {
    key: "language",
    label: "LANGUAGE",
    icon: FaLanguage,
    tone: "purple",
  },
];

const OPTION_ICONS = {
  hotel: FaHotel,
  home: FaHome,
  budget: FaWallet,
  plane: FaPlane,
  car: FaCar,
  local: FaMapMarkedAlt,
};

const CHECKLIST_ITEMS = [
  "Check the weather",
  "Confirm accommodation",
  "Plan transport",
  "Prepare travel documents",
];

const DestinationGuide = ({ destination = {} }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [checkedItems, setCheckedItems] = useState([]);
  const tabRefs = useRef({});
  const id = useId();

  const guide = getDestinationGuide(destination);

  const destinationName =
    destination.name ||
    destination.title ||
    "your destination";

  const destinationLocation =
    destination.country ||
    destination.location ||
    "Travel inspiration";

  const enquiryUrl =
    destination.enquiryUrl ||
    destination.bookingUrl ||
    "/contact";

  const progress = Math.round(
    (checkedItems.length / CHECKLIST_ITEMS.length) * 100
  );

  const activeTabId = `${id}-tab-${activeTab}`;
  const activePanelId = `${id}-panel-${activeTab}`;

  const selectTab = (tabId, moveFocus = false) => {
    setActiveTab(tabId);

    if (moveFocus) {
      tabRefs.current[tabId]?.focus();
    }
  };

  const handleTabKeyDown = (event, index) => {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % GUIDE_TABS.length;
        break;

      case "ArrowLeft":
        nextIndex =
          (index - 1 + GUIDE_TABS.length) % GUIDE_TABS.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = GUIDE_TABS.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    selectTab(GUIDE_TABS[nextIndex].id, true);
  };

  const toggleChecklist = (item) => {
    setCheckedItems((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
  };

  const renderOptions = (items = []) => (
    <div className="destination-guide__options">
      {items.map((item, index) => {
        const Icon = OPTION_ICONS[item.icon] || FaCompass;

        return (
          <article
            className="destination-guide__option"
            key={`${item.title}-${index}`}
          >
            <div className="destination-guide__option-top">
              <span className="destination-guide__option-icon">
                <Icon aria-hidden="true" />
              </span>

              <span className="destination-guide__option-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {item.tag && (
              <span className="destination-guide__option-tag">
                {item.tag}
              </span>
            )}

            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );

  return (
    <section
      className="destination-guide"
      id="destination-guide"
      aria-labelledby={`${id}-heading`}
    >
      <div className="destination-container">
        {/* Editorial introduction */}
        <header className="destination-guide__header">
          <span className="destination-guide__eyebrow">
            <FaGlobeAsia aria-hidden="true" />
            THE TRAVEL PLAYBOOK
          </span>

          <h2 id={`${id}-heading`}>
            The art of travelling
            <span> well.</span>
          </h2>

          <p>
            Discover the details, plan your route and get ready
            for a memorable journey to {destinationName}.
          </p>

          <div className="destination-guide__location">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{destinationName}</span>
            <span className="destination-guide__location-divider" />
            <span>{destinationLocation}</span>
          </div>
        </header>

        {/* Guide application */}
        <div className="destination-guide__wrapper">
          {/* Navigation */}
          <nav
            className="destination-guide__tabs"
            role="tablist"
            aria-label="Travel guide sections"
          >
            {GUIDE_TABS.map((tab, index) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  ref={(element) => {
                    tabRefs.current[tab.id] = element;
                  }}
                  id={`${id}-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`${id}-panel-${tab.id}`}
                  tabIndex={active ? 0 : -1}
                  className={`destination-guide__tab ${
                    active ? "is-active" : ""
                  }`}
                  onClick={() => selectTab(tab.id)}
                  onKeyDown={(event) =>
                    handleTabKeyDown(event, index)
                  }
                >
                  <span className="destination-guide__tab-number">
                    {tab.number}
                  </span>

                  <span className="destination-guide__tab-icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="destination-guide__tab-label">
                    {tab.label}
                  </span>

                  <FaChevronRight
                    className="destination-guide__tab-arrow"
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>

          {/* Active content */}
          <div
            id={activePanelId}
            className="destination-guide__content"
            role="tabpanel"
            aria-labelledby={activeTabId}
            tabIndex={0}
          >
            {activeTab === "overview" && (
              <div className="destination-guide__panel">
                <div className="destination-guide__panel-heading">
                  <span className="destination-guide__section-kicker">
                    BEFORE YOU SET OFF
                  </span>

                  <h3>Know before you go.</h3>

                  <p>
                    Four essentials to help you plan your
                    {` ${destinationName}`} trip with confidence.
                  </p>
                </div>

                <div className="destination-guide__info-grid">
                  {OVERVIEW_ITEMS.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        className={`destination-guide__info-card tone-${item.tone}`}
                        key={item.key}
                      >
                        <span className="destination-guide__info-icon">
                          <Icon aria-hidden="true" />
                        </span>

                        <div className="destination-guide__info-copy">
                          <span>{item.label}</span>
                          <strong>
                            {guide[item.key] || "Check before travelling"}
                          </strong>
                        </div>

                        <span
                          className="destination-guide__info-marker"
                          aria-hidden="true"
                        >
                          <FaCheckCircle />
                        </span>
                      </article>
                    );
                  })}
                </div>

                <div className="destination-guide__budget-note">
                  <span className="destination-guide__budget-icon">
                    <FaWallet aria-hidden="true" />
                  </span>

                  <div>
                    <span>SMART TRAVEL TIP</span>
                    <strong>Make your budget work for you.</strong>
                    <p>
                      {guide.budget ||
                        "Choose a budget that fits your travel style."}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "stay" && (
              <div className="destination-guide__panel">
                <div className="destination-guide__panel-heading">
                  <span className="destination-guide__section-kicker">
                    FIND YOUR HAPPY PLACE
                  </span>

                  <h3>Stay your way.</h3>

                  <p>
                    Discover different accommodation styles and
                    choose what suits your kind of adventure.
                  </p>
                </div>

                {renderOptions(guide.stays)}
              </div>
            )}

            {activeTab === "transport" && (
              <div className="destination-guide__panel">
                <div className="destination-guide__panel-heading">
                  <span className="destination-guide__section-kicker">
                    EVERY MILE MATTERS
                  </span>

                  <h3>Enjoy the journey.</h3>

                  <p>
                    Think ahead about transfers and local travel
                    to make exploring easier.
                  </p>
                </div>

                {renderOptions(guide.transport)}
              </div>
            )}

            {activeTab === "tips" && (
              <div className="destination-guide__panel">
                <div className="destination-guide__panel-heading">
                  <span className="destination-guide__section-kicker">
                    THE PRE-TRIP EDIT
                  </span>

                  <h3>Travel smart. Enjoy more.</h3>

                  <p>
                    A few practical reminders to help you prepare
                    for {destinationName}.
                  </p>
                </div>

                <div className="destination-guide__tips">
                  {guide.tips.map((tip, index) => (
                    <article
                      className="destination-guide__tip"
                      key={`${tip.title}-${index}`}
                    >
                      <span className="destination-guide__tip-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h4>{tip.title}</h4>
                        <p>{tip.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Interactive preparation checklist */}
                <div className="destination-guide__checklist">
                  <div className="destination-guide__checklist-heading">
                    <span className="destination-guide__checklist-icon">
                      <FaSuitcase aria-hidden="true" />
                    </span>

                    <div>
                      <h4>Your adventure checklist</h4>
                      <p>
                        {checkedItems.length} of {CHECKLIST_ITEMS.length}{" "}
                        completed
                      </p>
                    </div>

                    <strong>{progress}%</strong>
                  </div>

                  <div
                    className="destination-guide__progress"
                    role="progressbar"
                    aria-label="Trip preparation progress"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progress}
                  >
                    <span style={{ width: `${progress}%` }} />
                  </div>

                  <div className="destination-guide__checklist-items">
                    {CHECKLIST_ITEMS.map((item) => {
                      const checked = checkedItems.includes(item);

                      return (
                        <label
                          key={item}
                          className={`destination-guide__checklist-item ${
                            checked ? "is-checked" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleChecklist(item)}
                          />

                          <span className="destination-guide__checkbox">
                            {checked && <FaCheck aria-hidden="true" />}
                          </span>

                          <span>{item}</span>
                        </label>
                      );
                    })}
                  </div>

                  {progress === 100 && (
                    <p
                      className="destination-guide__complete-message"
                      role="status"
                    >
                      <FaCheckCircle aria-hidden="true" />
                      All checked! You are ready for the next step.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Enquiry footer */}
          <footer className="destination-guide__footer">
            <div className="destination-guide__footer-copy">
              <span className="destination-guide__footer-icon">
                <FaSuitcase aria-hidden="true" />
              </span>

              <div>
                <span className="destination-guide__footer-kicker">
                  YOUR NEXT CHAPTER
                </span>

                <h3>Let's make this trip happen.</h3>

                <p>
                  Get in touch with ASAP Holidays to plan
                  your {destinationName} getaway.
                </p>
              </div>
            </div>

            <a
              className="destination-guide__cta"
              href={enquiryUrl}
              aria-label={`Plan a trip to ${destinationName}`}
            >
              Plan my trip
              <FaArrowRight aria-hidden="true" />
            </a>
          </footer>
        </div>

        <p className="destination-guide__bottom-note">
          <FaCompass aria-hidden="true" />
          Great trips start with thoughtful planning.
        </p>
      </div>
    </section>
  );
};

export default DestinationGuide;
