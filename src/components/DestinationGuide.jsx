
import React, { useId, useRef, useState } from "react";

import {
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaLanguage,
  FaHotel,
  FaCar,
  FaLightbulb,
  FaPlane,
  FaArrowRight,
  FaCompass,
  FaUsers,
  FaWallet,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaHome,
  FaSuitcase,
  FaRegCircle,
  FaChevronRight,
  FaMapMarkerAlt,
  FaClipboardCheck,
} from "react-icons/fa";

import { getDestinationGuide } from "../data/destinationGuideData";
import "./DestinationGuide.css";

const tabs = [
  {
    id: "overview",
    label: "Trip Essentials",
    icon: FaCompass,
  },
  {
    id: "stay",
    label: "Places to Stay",
    icon: FaHotel,
  },
  {
    id: "transport",
    label: "Getting Around",
    icon: FaCar,
  },
  {
    id: "tips",
    label: "Smart Travel Tips",
    icon: FaLightbulb,
  },
];

const overviewItems = [
  {
    key: "bestTime",
    label: "BEST TIME TO VISIT",
    icon: FaCalendarAlt,
    color: "orange",
  },
  {
    key: "duration",
    label: "RECOMMENDED DURATION",
    icon: FaClock,
    color: "blue",
  },
  {
    key: "currency",
    label: "LOCAL CURRENCY",
    icon: FaMoneyBillWave,
    color: "green",
  },
  {
    key: "language",
    label: "LANGUAGE",
    icon: FaLanguage,
    color: "purple",
  },
];

const optionIcons = {
  luxury: FaHotel,
  home: FaHome,
  budget: FaWallet,
  plane: FaPlane,
  car: FaCar,
  local: FaMapMarkedAlt,
};

const defaultChecklist = [
  "Check the weather forecast",
  "Confirm accommodation",
  "Plan transport and transfers",
  "Keep travel documents ready",
];

const DestinationGuide = ({ destination = {} }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [checkedItems, setCheckedItems] = useState([]);
  const tabRefs = useRef({});
  const id = useId();

  const guide = getDestinationGuide(destination);

  const destinationName =
    destination.title ||
    destination.name ||
    "your destination";

  const enquiryUrl =
    destination.bookingUrl ||
    destination.enquiryUrl ||
    "/contact";

  const destinationLocation =
    destination.country ||
    destination.location ||
    "Your next adventure";

  const activeTabId = `${id}-tab-${activeTab}`;
  const activePanelId = `${id}-panel-${activeTab}`;

  const checklistProgress = Math.round(
    (checkedItems.length / defaultChecklist.length) * 100
  );

  const toggleChecklistItem = (item) => {
    setCheckedItems((previous) =>
      previous.includes(item)
        ? previous.filter((entry) => entry !== item)
        : [...previous, item]
    );
  };

  const changeTab = (tabId, shouldFocus = false) => {
    setActiveTab(tabId);

    if (shouldFocus) {
      tabRefs.current[tabId]?.focus();
    }
  };

  const handleTabKeyDown = (event, index) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    changeTab(tabs[nextIndex].id, true);
  };

  const renderOptions = (items = []) => (
    <div className="destination-guide__options">
      {items.map((item, index) => {
        const Icon = optionIcons[item.icon] || FaCompass;

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
        {/* Section introduction */}
        <header className="destination-guide__header">
          <span className="destination-guide__eyebrow">
            <FaCompass aria-hidden="true" />
            THE TRAVEL PLAYBOOK
          </span>

          <h2 id={`${id}-heading`}>
            Your next adventure
            <span> starts here.</span>
          </h2>

          <p>
            A little planning goes a long way. Discover the
            essentials for your next journey to {destinationName}.
          </p>

          <div className="destination-guide__location">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{destinationLocation}</span>
            <span className="destination-guide__location-dot" />
            <span>Travel guide</span>
          </div>
        </header>

        {/* Guide card */}
        <div className="destination-guide__wrapper">
          {/* Interactive navigation */}
          <div
            className="destination-guide__tabs"
            role="tablist"
            aria-label="Destination guide sections"
          >
            {tabs.map((tab, index) => {
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
                  className={`destination-guide__tab ${active ? "is-active" : ""
                    }`}
                  onClick={() => changeTab(tab.id)}
                  onKeyDown={(event) =>
                    handleTabKeyDown(event, index)
                  }
                >
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
          </div>

          {/* Dynamic panel */}
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
                    YOUR TRIP, AT A GLANCE
                  </span>

                  <h3>Know before you go.</h3>

                  <p>
                    Get the important details sorted before
                    you set off for {destinationName}.
                  </p>
                </div>

                <div className="destination-guide__info-grid">
                  {overviewItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        className={`destination-guide__info-card tone-${item.color}`}
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

                        <FaCheckCircle
                          className="destination-guide__info-check"
                          aria-hidden="true"
                        />
                      </article>
                    );
                  })}
                </div>

                <div className="destination-guide__budget-note">
                  <span className="destination-guide__budget-icon">
                    <FaWallet aria-hidden="true" />
                  </span>

                  <div>
                    <strong>Plan your budget</strong>
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
                    From special getaways to practical stays,
                    choose the style that fits your trip.
                  </p>
                </div>

                {renderOptions(guide.stays)}
              </div>
            )}

            {activeTab === "transport" && (
              <div className="destination-guide__panel">
                <div className="destination-guide__panel-heading">
                  <span className="destination-guide__section-kicker">
                    THE JOURNEY MATTERS
                  </span>

                  <h3>Make getting around easy.</h3>

                  <p>
                    Think ahead about transfers and local travel
                    so you can spend more time exploring.
                  </p>
                </div>

                {renderOptions(guide.transport)}
              </div>
            )}

            {activeTab === "tips" && (
              <div className="destination-guide__panel">
                <div className="destination-guide__panel-heading">
                  <span className="destination-guide__section-kicker">
                    YOUR PRE-TRIP CHECKLIST
                  </span>

                  <h3>Travel smart. Enjoy more.</h3>

                  <p>
                    Use these reminders to get organised before
                    your {destinationName} adventure.
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

                      <div className="destination-guide__tip-copy">
                        <h4>{tip.title}</h4>
                        <p>{tip.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="destination-guide__checklist">
                  <div className="destination-guide__checklist-heading">
                    <span className="destination-guide__checklist-icon">
                      <FaClipboardCheck aria-hidden="true" />
                    </span>

                    <div>
                      <h4>My trip checklist</h4>
                      <p>
                        {checkedItems.length} of {defaultChecklist.length}{" "}
                        tasks completed
                      </p>
                    </div>

                    <strong>{checklistProgress}%</strong>
                  </div>

                  <div
                    className="destination-guide__progress"
                    role="progressbar"
                    aria-label="Trip checklist progress"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={checklistProgress}
                  >
                    <span
                      style={{ width: `${checklistProgress}%` }}
                    />
                  </div>

                  <div className="destination-guide__checklist-items">
                    {defaultChecklist.map((item) => {
                      const checked = checkedItems.includes(item);

                      return (
                        <label
                          className={`destination-guide__checklist-item ${checked ? "is-checked" : ""
                            }`}
                          key={item}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleChecklistItem(item)}
                          />

                          <span className="destination-guide__custom-check">
                            {checked ? (
                              <FaCheckCircle aria-hidden="true" />
                            ) : (
                              <FaRegCircle aria-hidden="true" />
                            )}
                          </span>

                          <span>{item}</span>
                        </label>
                      );
                    })}
                  </div>

                  {checkedItems.length === defaultChecklist.length && (
                    <p
                      className="destination-guide__complete-message"
                      role="status"
                    >
                      <FaCheckCircle aria-hidden="true" />
                      You're all set for your next adventure!
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Enquiry CTA */}
          <footer className="destination-guide__footer">
            <div className="destination-guide__footer-copy">
              <span className="destination-guide__footer-icon">
                <FaSuitcase aria-hidden="true" />
              </span>

              <div>
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
              Plan My Trip
              <FaArrowRight aria-hidden="true" />
            </a>
          </footer>
        </div>

        <p className="destination-guide__bottom-note">
          <FaLightbulb aria-hidden="true" />
          <span>
            Great trips start with a little planning and a lot
            of excitement.
          </span>
        </p>
      </div>
    </section>
  );
};

export default DestinationGuide;
