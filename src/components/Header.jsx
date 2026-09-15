import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Icon = ({ name, size = 18 }) => {
  const paths = {
    home: <><path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9"/><path d="M9 21v-6h6v6"/></>,
    plane: <><path d="m3 13 18-8"/><path d="m11 9-3-6"/><path d="m13 8 3 6"/><path d="m7 15 3 3"/></>,
    ship: <><path d="M3 16h18"/><path d="m5 16 2-7h10l2 7"/><path d="M9 9V5h6v4"/><path d="M4 19c1.4 1.1 2.8 1.1 4.2 0 1.4 1.1 2.8 1.1 4.2 0 1.4 1.1 2.8 1.1 4.2 0 1.4 1.1 2.8 1.1 4.2 0"/></>,
    visa: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M7 14h5"/></>,
    tag: <><path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9Z"/><circle cx="8" cy="8" r="1"/></>,
    phone: <path d="M6.5 3.5 9 3l2 5-2.1 1.8a14.4 14.4 0 0 0 5.8 5.8l1.8-2.1 5 2-.5 2.5c-.3 1.4-1.6 2.4-3 2.2C11 19.4 4.6 13 2.8 5.9c-.3-1.4.6-2.7 2-2.4Z"/>,
    search: <><circle cx="10.7" cy="10.7" r="6.7"/><path d="m16 16 5 5"/></>,
    chevron: <path d="m7 9 5 5 5-5"/>,
    arrow: <><path d="M4 12h16"/><path d="m14 6 6 6-6 6"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.5 3.7 5.5 3.7 9s-1.2 6.5-3.7 9c-2.5-2.5-3.7-6.5-3.7-9S9.5 5.5 12 3Z"/></>,
    heart: <path d="M20.8 8.8c0 5.4-8.8 10.2-8.8 10.2S3.2 14.2 3.2 8.8A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 2.4Z"/>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 11a3 3 0 1 0 0-6"/><path d="M18 14a5 5 0 0 1 3 6"/></>,
    hotel: <><path d="M4 20V5h16v15"/><path d="M4 11h16"/><path d="M8 8h2M14 8h2M8 15h2M14 15h2"/></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.2 8.5-8 10-4.8-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    support: <><path d="M4 13a8 8 0 0 1 16 0"/><path d="M4 13v4h3v-4H4ZM20 13v4h-3v-4h3Z"/><path d="M17 20h-5"/></>,
    close: <><path d="m6 6 12 12"/><path d="M18 6 6 18"/></>,
    facebook: <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v5h3v-5h2.2l.5-3H13V9c0-.6.4-1 1-1Z"/>,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none"/></>,
    linkedin: <><path d="M5 8v11"/><path d="M5 5.2v.1"/><path d="M10 19V8"/><path d="M10 13a4 4 0 0 1 8 0v6"/><path d="M18 19v-5"/></>,
  };
  return <svg className="ah-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

const destinationGroups = [
  {
    title: "International Destinations",
    short: "Explore worldwide",
    icon: "globe",
    links: [
      ["Thailand", "Beaches, culture & nightlife", "/tours/thailand", "plane"],
      ["Dubai", "Modern luxury & experiences", "/tours/dubai", "hotel"],
      ["Singapore", "City of possibilities", "/tours/singapore", "hotel"],
      ["Maldives", "Crystal-clear island escapes", "/tours/maldives", "heart"],
      ["Europe", "Historic & scenic journeys", "/tours/europe", "globe"],
      ["Vietnam", "Nature, food & culture", "/tours/vietnam", "plane"],
      ["Australia", "Iconic cities & wildlife", "/tours/australia", "globe"],
    ],
  },
  {
    title: "Domestic Destinations",
    short: "Discover India",
    icon: "globe",
    links: [
      ["Goa", "Sun, sand & fun", "/tours/goa", "heart"],
      ["Kashmir", "Mountains & lakes", "/tours/kashmir", "heart"],
      ["Kerala", "Backwaters & nature", "/tours/kerala", "hotel"],
      ["Ladakh", "Adventure & monasteries", "/tours/ladakh", "globe"],
      ["Manali", "Mountain getaways", "/tours/manali", "globe"],
      ["Andaman", "Tropical island holidays", "/tours/andaman", "ship"],
    ],
  },
  {
    title: "Holiday Types",
    short: "Travel your way",
    icon: "heart",
    links: [
      ["Honeymoon Packages", "Romantic getaways", "/tours?style=honeymoon", "heart"],
      ["Family Holidays", "Memories together", "/tours?style=family", "users"],
      ["Luxury Experiences", "Travel in style", "/tours?style=luxury", "hotel"],
      ["Adventure Tours", "Thrill awaits", "/tours?style=adventure", "plane"],
      ["Group Packages", "Bigger adventures", "/tours?style=group", "users"],
      ["Weekend Getaways", "Short trips, big memories", "/tours?style=weekend", "heart"],
      ["Festival Specials", "Celebrate the world", "/tours?style=festival", "tag"],
      ["Customized Holidays", "Tailor made for you", "/tours?style=custom", "tag"],
    ],
  },
  {
    title: "Travel Essentials",
    short: "Everything you need",
    icon: "suitcase",
    links: [
      ["Flight Booking", "Best fare options", "/flights", "plane"],
      ["Hotel Booking", "Comfortable stays", "/hotels", "hotel"],
      ["Cruise Packages", "Sail in style", "/cruise", "ship"],
      ["Visa Assistance", "Simple & guided", "/visa", "visa"],
      ["Travel Insurance", "Travel with confidence", "/travel-insurance", "shield"],
      ["Track Booking", "Check your trip", "/track-booking", "search"],
      ["Special Offers", "Latest holiday deals", "/offers", "tag"],
    ],
  },
];

const mobileDestinations = destinationGroups.slice(0, 2);
const mobileTypes = destinationGroups[2];
const mobileEssentials = destinationGroups[3];

function MegaColumn({ group, close }) {
  return (
    <section className="mega-column">
      <div className="mega-column-head">
        <span className="mega-column-icon"><Icon name={group.icon} size={18} /></span>
        <div>
          <h3>{group.title}</h3>
          <p>{group.short}</p>
        </div>
      </div>

      <div className="mega-column-links">
        {group.links.map(([title, description, to, icon]) => (
          <Link key={title} to={to} className="mega-link" onClick={close}>
            <span className="mega-link-icon"><Icon name={icon} size={15} /></span>
            <span className="mega-link-text">
              <b>{title}</b>
              <small>{description}</small>
            </span>
            <span className="mega-link-arrow">›</span>
          </Link>
        ))}
      </div>

      <Link className="mega-view-all" to="/tours" onClick={close}>
        Explore all <Icon name="arrow" size={13} />
      </Link>
    </section>
  );
}

function MobileSubmenu({ title, icon, groups, open, setOpen, close }) {
  return (
    <div className={`mobile-submenu ${open ? "open" : ""}`}>
      <button type="button" className="mobile-submenu-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="mobile-submenu-leading">
          <span className="mobile-menu-icon"><Icon name={icon} size={19} /></span>
          <span>{title}</span>
        </span>
        <Icon name="chevron" size={17} />
      </button>

      <div className="mobile-submenu-body">
        {groups.map((group) => (
          <div className="mobile-group" key={group.title}>
            <div className="mobile-group-title">
              <span className="mobile-group-icon"><Icon name={group.icon} size={16} /></span>
              <span>
                <b>{group.title}</b>
                <small>{group.short}</small>
              </span>
            </div>

            {group.links.map(([name, desc, to, itemIcon]) => (
              <Link key={name} to={to} className="mobile-destination" onClick={close}>
                <span className="mobile-destination-icon"><Icon name={itemIcon} size={15} /></span>
                <span><b>{name}</b><small>{desc}</small></span>
                <span className="mobile-arrow">›</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const shellRef = useRef(null);
  const searchInputRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMegaOpen, setDesktopMegaOpen] = useState(false);
  const [mobileHolidaysOpen, setMobileHolidaysOpen] = useState(false);
  const [mobileInternationalOpen, setMobileInternationalOpen] = useState(true);
  const [mobileDomesticOpen, setMobileDomesticOpen] = useState(false);
  const [mobileTypesOpen, setMobileTypesOpen] = useState(false);
  const [mobileEssentialsOpen, setMobileEssentialsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState(() => localStorage.getItem("asap-currency") || "INR");
  const [paymentOpen, setPaymentOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMegaOpen(false);
    setMobileHolidaysOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handlePointer = (event) => {
      if (!shellRef.current?.contains(event.target)) {
        setDesktopMegaOpen(false);
        setSearchOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setDesktopMegaOpen(false);
        setMobileHolidaysOpen(false);
        setSearchOpen(false);
        setPaymentOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("ah-scroll-lock", mobileOpen || paymentOpen);
    return () => document.body.classList.remove("ah-scroll-lock");
  }, [mobileOpen, paymentOpen]);

  useEffect(() => {
    if (searchOpen) requestAnimationFrame(() => searchInputRef.current?.focus());
  }, [searchOpen]);

  const closeMenus = () => {
    setMobileOpen(false);
    setDesktopMegaOpen(false);
    setMobileHolidaysOpen(false);
    setSearchOpen(false);
  };

  const toggleDesktopMega = () => {
    setDesktopMegaOpen((value) => !value);
    setSearchOpen(false);
  };

  const toggleMobile = () => {
    setMobileOpen((value) => !value);
    setDesktopMegaOpen(false);
    setSearchOpen(false);
  };

  const toggleMobileHolidays = () => {
    setMobileHolidaysOpen((value) => !value);
    setSearchOpen(false);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    const query = search.trim();
    navigate(query ? `/tours?search=${encodeURIComponent(query)}` : "/tours");
    closeMenus();
  };

  const changeCurrency = (event) => {
    const value = event.target.value;
    setCurrency(value);
    localStorage.setItem("asap-currency", value);
  };

  const loadRazorpay = () => new Promise((resolve, reject) => {
    if (window.Razorpay) { resolve(true); return; }
    const existing = document.querySelector("script[data-razorpay]");
    if (existing) {
      existing.addEventListener("load", () => resolve(true), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.dataset.razorpay = "true";
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Unable to load Razorpay Checkout"));
    document.body.appendChild(script);
  });

  const payNow = async () => {
    const key = import.meta.env.VITE_RAZORPAY_KEY_ID;

    if (!key) {
      alert("Razorpay key is missing. Add VITE_RAZORPAY_KEY_ID to your .env file and restart Vite.");
      return;
    }

    try {
      await loadRazorpay();

      if (!window.Razorpay) throw new Error("Razorpay Checkout is unavailable");

      const options = {
        key,
        amount: 50000,
        currency: currency || "INR",
        name: "ASAP Holidays",
        description: "Travel Booking Payment",
        image: "/asaplogo.png",
        prefill: {
          name: "ASAP Holidays Customer",
          email: "info@asapholidays.com",
          contact: "9205129996",
        },
        notes: { source: "ASAP Holidays website" },
        theme: { color: "#ff5b0a" },
        modal: {
          ondismiss: () => setPaymentOpen(false),
        },
        handler: (response) => {
          setPaymentOpen(false);
          alert(`Payment successful\nPayment ID: ${response.razorpay_payment_id}`);
        },
      };

      const checkout = new window.Razorpay(options);
      checkout.on("payment.failed", (response) => {
        alert(response?.error?.description || "Payment failed. Please try again.");
      });
      checkout.open();
    } catch (error) {
      console.error(error);
      alert("Unable to open Razorpay Checkout. Check your internet connection and Razorpay key.");
    }
  };

  return (
    <div ref={shellRef} className="ah-shell">
      <div className="ah-topbar">
        <div className="ah-container ah-topbar-inner">
          <div className="ah-top-left">
            <span className="ah-country"><Icon name="globe" size={13} /> India</span>
            <select value={currency} onChange={changeCurrency} aria-label="Currency">
              <option value="INR">INR ₹</option>
              <option value="USD">USD $</option>
              <option value="AED">AED د.إ</option>
              <option value="EUR">EUR €</option>
            </select>
            <span className="ah-divider" />
            <a href="tel:+919205129996"><Icon name="phone" size={12} /> +91 92051 29996</a>
            <span className="ah-divider" />
            <a className="ah-email" href="mailto:info@asapholidays.com">info@asapholidays.com</a>
          </div>

          <div className="ah-top-message">
            <span>Travel with confidence</span>
            <b>Handpicked holidays · Expert support · Easy booking</b>
          </div>

          <div className="ah-top-right">
            <Link to="/track-booking">Track Booking</Link>
            <Link to="/offers">Offers</Link>
            <Link to="/support">Support</Link>
            <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}><Icon name="facebook" size={12} /></a>
            <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}><Icon name="instagram" size={12} /></a>
            <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><Icon name="linkedin" size={12} /></a>
          </div>
        </div>
      </div>

      <header className={`ah-header ${desktopMegaOpen ? "mega-open" : ""}`}>
        {desktopMegaOpen && <button className="ah-desktop-backdrop" type="button" aria-label="Close holidays menu" onClick={() => setDesktopMegaOpen(false)} />}

        <div className="ah-container ah-header-inner">
          <Link className="ah-logo" to="/" onClick={closeMenus} aria-label="ASAP Holidays Home">
            <img src="/asaplogo.png" alt="ASAP Holidays" />
          </Link>

          <nav id="primary-navigation" className={`ah-desktop-nav ${mobileOpen ? "mobile-open" : ""}`} aria-label="Primary navigation">
            <ul>
              <li>
                <Link className={location.pathname === "/" ? "active" : ""} to="/" onClick={closeMenus}><Icon name="home" size={17} />Home</Link>
              </li>
              <li className="ah-holidays-item">
                <button type="button" className={`ah-holidays-trigger ${desktopMegaOpen ? "active" : ""}`} aria-expanded={desktopMegaOpen} onClick={toggleDesktopMega}>
                  <span><Icon name="tag" size={17} /> Holidays</span><Icon name="chevron" size={14} />
                </button>

                <div className="ah-desktop-mega" aria-hidden={!desktopMegaOpen}>
                  <div className="ah-mega-container">
                    <div className="ah-mega-topline">
                      <div>
                        <span>PLAN YOUR ESCAPE</span>
                        <h2>Where will you go next?</h2>
                      </div>
                      <Link to="/tours" onClick={closeMenus}>View all holidays <Icon name="arrow" size={14} /></Link>
                    </div>

                    <div className="ah-mega-layout">
                      {destinationGroups.map((group) => <MegaColumn key={group.title} group={group} close={closeMenus} />)}

                      <Link className="ah-mega-promo" to="/tours/maldives" onClick={closeMenus}>
                        <img src="/grass-sunset.jpg" alt="Maldives" />
                        <span className="ah-promo-shade" />
                        <div className="ah-promo-content">
                          <small>FEATURED ESCAPE</small>
                          <h3>Maldives</h3>
                          <p>Crystal-clear waters, private islands and unforgettable experiences.</p>
                          <b>Explore Now <Icon name="arrow" size={14} /></b>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li><Link to="/flights" onClick={closeMenus}><Icon name="plane" size={17} />Flights</Link></li>
              <li><Link to="/cruise" onClick={closeMenus}><Icon name="ship" size={17} />Cruise</Link></li>
              <li><Link to="/visa" onClick={closeMenus}><Icon name="visa" size={17} />Visa</Link></li>
              <li><Link to="/offers" onClick={closeMenus}><Icon name="tag" size={17} />Offers</Link></li>
              <li><Link to="/contact" onClick={closeMenus}><Icon name="phone" size={17} />Contact</Link></li>
            </ul>

            <div className="ah-mobile-nav-head">
              <span>Explore ASAP Holidays</span>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><Icon name="close" size={18} /></button>
            </div>

            <div className="ah-mobile-menu-content">
              <Link className="ah-mobile-main-link" to="/" onClick={closeMenus}><span><Icon name="home" size={19} />Home</span><span>›</span></Link>

              <div className={`ah-mobile-holidays ${mobileHolidaysOpen ? "open" : ""}`}>
                <button type="button" className="ah-mobile-holiday-trigger" onClick={toggleMobileHolidays} aria-expanded={mobileHolidaysOpen}>
                  <span><Icon name="tag" size={19} />Holidays</span><Icon name="chevron" size={17} />
                </button>

                <div className="ah-mobile-holiday-panel">
                  <MobileSubmenu title="International Destinations" icon="globe" groups={mobileDestinations.slice(0, 1)} open={mobileInternationalOpen} setOpen={setMobileInternationalOpen} close={closeMenus} />
                  <MobileSubmenu title="Domestic Destinations" icon="globe" groups={mobileDestinations.slice(1, 2)} open={mobileDomesticOpen} setOpen={setMobileDomesticOpen} close={closeMenus} />
                  <MobileSubmenu title="Holiday Types" icon="heart" groups={[mobileTypes]} open={mobileTypesOpen} setOpen={setMobileTypesOpen} close={closeMenus} />
                  <MobileSubmenu title="Travel Essentials" icon="suitcase" groups={[mobileEssentials]} open={mobileEssentialsOpen} setOpen={setMobileEssentialsOpen} close={closeMenus} />

                  <Link className="ah-mobile-promo" to="/tours/maldives" onClick={closeMenus}>
                    <img src="/grass-sunset.jpg" alt="Maldives holiday" />
                    <span />
                    <strong>Discover Amazing Holidays</strong>
                    <small>Special deals on unforgettable escapes</small>
                    <b>Explore Now <Icon name="arrow" size={14} /></b>
                  </Link>
                </div>
              </div>

              <Link className="ah-mobile-main-link" to="/flights" onClick={closeMenus}><span><Icon name="plane" size={19} />Flights</span><span>›</span></Link>
              <Link className="ah-mobile-main-link" to="/cruise" onClick={closeMenus}><span><Icon name="ship" size={19} />Cruise</span><span>›</span></Link>
              <Link className="ah-mobile-main-link" to="/visa" onClick={closeMenus}><span><Icon name="visa" size={19} />Visa</span><span>›</span></Link>
              <Link className="ah-mobile-main-link" to="/contact" onClick={closeMenus}><span><Icon name="phone" size={19} />Contact</span><span>›</span></Link>
              <Link className="ah-mobile-main-link" to="/offers" onClick={closeMenus}><span><Icon name="tag" size={19} />Offers</span><span>›</span></Link>

              <div className="ah-mobile-quick-actions">
                <Link to="/track-booking" onClick={closeMenus}><Icon name="search" size={17} />Track Booking</Link>
                <Link to="/support" onClick={closeMenus}><Icon name="support" size={17} />Support</Link>
                <button type="button" onClick={() => { setMobileOpen(false); setPaymentOpen(true); }}><Icon name="shield" size={17} />Pay Online</button>
                <a href="tel:+919205129996"><Icon name="phone" size={17} />Call Us</a>
              </div>
            </div>
          </nav>

          <div className="ah-header-actions">
            <div className="ah-search-wrap">
              <button className="ah-search-button" type="button" onClick={() => { setSearchOpen((v) => !v); setDesktopMegaOpen(false); }} aria-label="Search holidays" aria-expanded={searchOpen}>
                <Icon name="search" size={20} />
              </button>
              {searchOpen && (
                <form className="ah-search-panel" onSubmit={submitSearch}>
                  <Icon name="search" size={17} />
                  <input ref={searchInputRef} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search destinations, holidays..." aria-label="Search destinations" />
                  <button type="submit">Search</button>
                </form>
              )}
            </div>

            <a className="ah-call-box" href="tel:+919205129996">
              <span><Icon name="phone" size={18} /></span>
              <small>Talk to our experts</small>
              <b>+91 92051 29996</b>
            </a>

            <button className="ah-pay-button" type="button" onClick={() => setPaymentOpen(true)}>Pay Online</button>

            <button className={`ah-menu-button ${mobileOpen ? "open" : ""}`} type="button" onClick={toggleMobile} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="primary-navigation">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {paymentOpen && (
        <div className="ah-payment-overlay" onClick={() => setPaymentOpen(false)}>
          <div className="ah-payment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ah-payment-close" type="button" onClick={() => setPaymentOpen(false)} aria-label="Close payment"><Icon name="close" size={18} /></button>
            <span className="payment-eyebrow">ASAP HOLIDAYS</span>
            <h2>Choose Payment Method</h2>
            <p>Safe · Secure · Instant payment</p>
            <div className="payment-grid">
              <div className="payment-card"><img src="/sankash.png" alt="UPI QR"/><h3>Scan & Pay by UPI</h3><small>VMS TRAVEL TECH INDIA PVT LTD</small><button type="button" onClick={payNow}>Pay Now</button></div>
              <div className="payment-card"><img src="/icici-UPI.png" alt="ICICI UPI"/><h3>Pay by Easy EMI</h3><small>VMS TRAVEL TECH INDIA PVT LTD</small><button type="button" onClick={payNow}>Pay Now</button></div>
            </div>
            <div className="payment-bank-grid">
              <div><img src="/cc-avenue.png" alt="CC Avenue"/><button type="button" onClick={payNow}>Continue Payment</button></div>
              <div><img src="/ICICI_Bank_Logo.png" alt="ICICI Bank"/><button type="button" onClick={payNow}>Continue Payment</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
