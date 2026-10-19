import React, { useId, useMemo, useRef, useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCar,
  FaCheck,
  FaChevronRight,
  FaClock,
  FaCompass,
  FaGlobeAsia,
  FaHotel,
  FaLanguage,
  FaLightbulb,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaPlane,
  FaSuitcase,
  FaWallet,
} from "react-icons/fa";
import { getDestinationGuide } from "../data/destinationGuideData";
import "./DestinationGuide.css";

const TABS = [
  { id: "overview", number: "01", label: "Trip essentials", icon: FaCompass },
  { id: "stay", number: "02", label: "Where to stay", icon: FaHotel },
  { id: "transport", number: "03", label: "Getting around", icon: FaCar },
  { id: "tips", number: "04", label: "Travel smart", icon: FaLightbulb },
];

const ESSENTIALS = [
  { key: "bestTime", label: "BEST TIME TO VISIT", icon: FaCalendarAlt },
  { key: "duration", label: "IDEAL DURATION", icon: FaClock },
  { key: "currency", label: "LOCAL CURRENCY", icon: FaMoneyBillWave },
  { key: "language", label: "LANGUAGE", icon: FaLanguage },
];

const ICONS = {
  hotel: FaHotel,
  home: FaHotel,
  budget: FaWallet,
  plane: FaPlane,
  car: FaCar,
  local: FaCompass,
};

const CHECKLIST = [
  "Check the weather",
  "Confirm accommodation",
  "Plan local transport",
  "Prepare travel documents",
];

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85",
];

function getImages(destination) {
  const supplied = [
    ...(Array.isArray(destination.images) ? destination.images : []),
    destination.image,
    destination.gallery?.[0]?.image,
  ].filter((image) => typeof image === "string" && image.trim());

  const unique = [...new Set(supplied)];
  return [
    unique[0] || FALLBACK_IMAGES[0],
    unique[1] || unique[0] || FALLBACK_IMAGES[1],
    unique[2] || unique[1] || FALLBACK_IMAGES[2],
  ];
}

function GuideOptions({ items = [] }) {
  if (!items.length) {
    return (
      <div className="dg-editorial__empty">
        <FaCompass aria-hidden="true" />
        <p>Ask our travel team to recommend options for your trip.</p>
      </div>
    );
  }

  return (
    <div className="dg-editorial__option-grid">
      {items.map((item, index) => {
        const Icon = ICONS[item.icon] || FaCompass;
        return (
          <article className="dg-editorial__option" key={`${item.title}-${index}`}>
            <div className="dg-editorial__option-top">
              <span className="dg-editorial__option-icon"><Icon aria-hidden="true" /></span>
              <span className="dg-editorial__index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            {item.tag && <span className="dg-editorial__tag">{item.tag}</span>}
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export default function DestinationGuide({ destination = {} }) {
  const uid = useId();
  const [activeTab, setActiveTab] = useState("overview");
  const [checkedItems, setCheckedItems] = useState([]);
  const tabRefs = useRef({});
  const guide = getDestinationGuide(destination);
  const name = destination.name || destination.title || "your destination";
  const location = destination.country || destination.location || "Travel inspiration";
  const enquiryUrl = destination.enquiryUrl || destination.bookingUrl || "/contact";
  const images = useMemo(() => getImages(destination), [destination]);
  const progress = Math.round((checkedItems.length / CHECKLIST.length) * 100);
  const activeTabData = TABS.find((tab) => tab.id === activeTab) || TABS[0];

  const chooseTab = (id, focus = false) => {
    setActiveTab(id);
    if (focus) tabRefs.current[id]?.focus();
  };

  const onTabKeyDown = (event, index) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % TABS.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = TABS.length - 1;
    else return;
    event.preventDefault();
    chooseTab(TABS[next].id, true);
  };

  const toggleItem = (item) => {
    setCheckedItems((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item]
    );
  };

  return (
    <section className="destination-guide dg-editorial" id="destination-guide" aria-labelledby={`${uid}-title`}>
      <div className="dg-editorial__container">
        <div className="dg-editorial__topline">
          <span className="dg-editorial__eyebrow"><FaGlobeAsia aria-hidden="true" /> THE ASAP TRAVEL JOURNAL</span>
          <span className="dg-editorial__edition">A GUIDE TO GOING WELL</span>
        </div>

        <div className="dg-editorial__intro">
          <div className="dg-editorial__intro-copy">
            <p className="dg-editorial__overline"><span /> YOUR NEXT GREAT STORY STARTS HERE</p>
            <h2 id={`${uid}-title`}>Get to know <em>{name}.</em></h2>
            <p className="dg-editorial__lead">
              Less guesswork, more discovery. A thoughtful guide to help you experience {name} your way.
            </p>
            <div className="dg-editorial__place">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{name}</span><i aria-hidden="true" /> <span>{location}</span>
            </div>
          </div>

          <div className="dg-editorial__photo-story" aria-label={`${name} destination photographs`}>
            <figure className="dg-editorial__photo-main">
              <img src={images[0]} alt={`${name} travel scenery`} loading="lazy" onError={(event) => { event.currentTarget.src = FALLBACK_IMAGES[0]; }} />
              <figcaption><span>THE DESTINATION EDIT</span><strong>{name}</strong></figcaption>
            </figure>
            <figure className="dg-editorial__photo-small dg-editorial__photo-small--top">
              <img src={images[1]} alt={`${name} places to explore`} loading="lazy" onError={(event) => { event.currentTarget.src = FALLBACK_IMAGES[1]; }} />
            </figure>
            <figure className="dg-editorial__photo-small dg-editorial__photo-small--bottom">
              <img src={images[2]} alt={`${name} travel inspiration`} loading="lazy" onError={(event) => { event.currentTarget.src = FALLBACK_IMAGES[2]; }} />
              <span className="dg-editorial__photo-note">GO AT YOUR OWN PACE ↗</span>
            </figure>
            <span className="dg-editorial__photo-stamp">ASAP<br />HOLIDAYS</span>
          </div>
        </div>

        <div className="dg-editorial__guide">
          <aside className="dg-editorial__nav-wrap">
            <p className="dg-editorial__nav-label">INSIDE THIS GUIDE</p>
            <nav className="dg-editorial__tabs" role="tablist" aria-label="Destination guide sections">
              {TABS.map((tab, index) => {
                const Icon = tab.icon;
                const selected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    ref={(node) => { tabRefs.current[tab.id] = node; }}
                    type="button"
                    role="tab"
                    id={`${uid}-tab-${tab.id}`}
                    aria-selected={selected}
                    aria-controls={`${uid}-panel`}
                    tabIndex={selected ? 0 : -1}
                    className={`dg-editorial__tab ${selected ? "is-active" : ""}`}
                    onClick={() => chooseTab(tab.id)}
                    onKeyDown={(event) => onTabKeyDown(event, index)}
                  >
                    <span className="dg-editorial__tab-number">{tab.number}</span>
                    <Icon aria-hidden="true" />
                    <span className="dg-editorial__tab-label">{tab.label}</span>
                    <FaChevronRight className="dg-editorial__tab-arrow" aria-hidden="true" />
                  </button>
                );
              })}
            </nav>
            <div className="dg-editorial__aside-note">
              <span className="dg-editorial__aside-mark">“</span>
              <p>The best trips leave room for a little wonder.</p>
              <span>THE TRAVEL JOURNAL</span>
            </div>
          </aside>

          <div className="dg-editorial__panel" id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${activeTab}`} tabIndex={0}>
            <div className="dg-editorial__panel-heading">
              <div>
                <span className="dg-editorial__panel-kicker">CHAPTER {activeTabData.number} / 04</span>
                <h3>
                  {activeTab === "overview" && <>The details that <em>matter.</em></>}
                  {activeTab === "stay" && <>Find your kind of <em>comfort.</em></>}
                  {activeTab === "transport" && <>Make the journey <em>part of it.</em></>}
                  {activeTab === "tips" && <>A little planning goes <em>a long way.</em></>}
                </h3>
              </div>
              <span className="dg-editorial__chapter-mark">{activeTabData.number}</span>
            </div>

            {activeTab === "overview" && (
              <>
                <p className="dg-editorial__panel-intro">A few useful essentials to help you plan your {name} escape with confidence.</p>
                <div className="dg-editorial__essentials">
                  {ESSENTIALS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <article className="dg-editorial__essential" key={item.key}>
                        <span className="dg-editorial__essential-icon"><Icon aria-hidden="true" /></span>
                        <span className="dg-editorial__essential-label">{item.label}</span>
                        <strong>{guide?.[item.key] || "Check before travelling"}</strong>
                      </article>
                    );
                  })}
                </div>
                <div className="dg-editorial__tip">
                  <span className="dg-editorial__tip-icon"><FaLightbulb aria-hidden="true" /></span>
                  <div><span>THE SMARTER WAY TO TRAVEL</span><h4>Plan a little. Explore a lot.</h4><p>{guide?.budget || "Set a comfortable daily budget and leave a little room for unexpected discoveries."}</p></div>
                </div>
              </>
            )}

            {activeTab === "stay" && (
              <>
                <p className="dg-editorial__panel-intro">From practical stays to memorable hideaways, choose the style that fits your trip.</p>
                <GuideOptions items={guide?.stays || []} />
              </>
            )}

            {activeTab === "transport" && (
              <>
                <p className="dg-editorial__panel-intro">Think through the route before you go, so getting there feels like part of the adventure.</p>
                <GuideOptions items={guide?.transport || []} />
              </>
            )}

            {activeTab === "tips" && (
              <>
                <p className="dg-editorial__panel-intro">Keep these destination-specific reminders close while planning your time in {name}.</p>
                <div className="dg-editorial__tips-list">
                  {(guide?.tips || []).map((tip, index) => (
                    <article className="dg-editorial__tip-row" key={`${tip.title}-${index}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div><h4>{tip.title}</h4><p>{tip.description}</p></div>
                    </article>
                  ))}
                </div>
                <div className="dg-editorial__checklist">
                  <div className="dg-editorial__checklist-head">
                    <div><span>BEFORE YOU LEAVE</span><h4>Your trip checklist</h4><p>{checkedItems.length} of {CHECKLIST.length} completed</p></div>
                    <strong>{progress}%</strong>
                  </div>
                  <div className="dg-editorial__progress" role="progressbar" aria-label="Trip preparation progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ width: `${progress}%` }} /></div>
                  <div className="dg-editorial__check-items">
                    {CHECKLIST.map((item) => {
                      const checked = checkedItems.includes(item);
                      return (
                        <label className={`dg-editorial__check-item ${checked ? "is-checked" : ""}`} key={item}>
                          <input type="checkbox" checked={checked} onChange={() => toggleItem(item)} />
                          <span className="dg-editorial__check-box">{checked && <FaCheck aria-hidden="true" />}</span>
                          <span>{item}</span>
                        </label>
                      );
                    })}
                  </div>
                  {progress === 100 && <p className="dg-editorial__complete" role="status">You're ready to start planning your adventure.</p>}
                </div>
              </>
            )}
          </div>
        </div>

        <footer className="dg-editorial__footer">
          <div className="dg-editorial__footer-copy">
            <span className="dg-editorial__footer-kicker">YOUR STORY, YOUR WAY</span>
            <h3>Ready to make {name} happen?</h3>
            <p>Let's turn your travel ideas into a trip worth remembering.</p>
          </div>
          <a className="dg-editorial__cta" href={enquiryUrl} aria-label={`Plan a trip to ${name}`}>
            Plan your trip <FaArrowRight aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
}
