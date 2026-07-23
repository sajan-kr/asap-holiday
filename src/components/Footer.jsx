import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
  FaChevronRight,
  FaPlane,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* =========================
            FOOTER TOP
        ========================= */}

        <div className="footer-grid">
          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img
                src="/asaplogo.png"
                alt="ASAP Holidays"
                className="footer-logo"
              />
            </div>

            <p className="footer-desc">
              Discover unforgettable journeys with premium travel experiences,
              luxury stays, and handcrafted holiday packages around the world.
            </p>

            <div className="footer-socials">
              <a href="/">
                <FaFacebookF />
              </a>

              <a href="/">
                <FaInstagram />
              </a>

              <a href="/">
                <FaTwitter />
              </a>

              <a href="/">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-links footer-links-divider">
            <h3>Company</h3>

            <ul>
              <li>
                <a href="/">
                  <FaChevronRight />
                  About Us
                </a>
              </li>

              <li>
                <a href="/">
                  <FaChevronRight />
                  Travel Blog
                </a>
              </li>

              <li>
                <a href="/">
                  <FaChevronRight />
                  Payment Options
                </a>
              </li>

              <li>
                <a href="/">
                  <FaChevronRight />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* IMPORTANT LINKS */}
          <div className="footer-links footer-links-divider">
            <h3>Important Links</h3>

            <ul>
              <li>
                <a href="/">
                  <FaChevronRight />
                  FAQ
                </a>
              </li>

              <li>
                <a href="/">
                  <FaChevronRight />
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/">
                  <FaChevronRight />
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="/">
                  <FaChevronRight />
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Talk To Us</h3>

            <div className="contact-item">
              <FaEnvelope />
              <span>support@asapholidays.com</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>+91-11-40014001</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>+91-9205129996</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />

              <span>
                Unit 203-212, Second Floor, HL Wings, Dwarka Sector-11,
                Pocket-04, Delhi-110075
              </span>
            </div>
          </div>
        </div>

        {/* =========================
            NEWSLETTER
        ========================= */}

        <div className="newsletter-box">
          <div className="newsletter-content">
            <div className="newsletter-left">
              <span className="newsletter-badge">
                Travel Deals & Updates
              </span>

              <h2>
                Subscribe Our <span>Newsletter</span>
              </h2>

              <p>
                Get exclusive travel deals, destination updates & holiday
                inspiration directly in your inbox.
              </p>
            </div>

            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
              />

              <button>
                Subscribe
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* =========================
            PAYMENT
        ========================= */}

        <div className="payment-wrapper">
          <div className="payment-title">
            <span></span>

            <p>
              <FaPlane />
              WE ACCEPT
            </p>

            <span></span>
          </div>

          <div className="payment-methods">
            <img
              src="https://www.asapholidays.com/img/footer/cards/1.png"
              alt="Visa"
            />

            <img
              src="https://www.asapholidays.com/img/footer/cards/2.png"
              alt="Mastercard"
            />

            <img
              src="https://www.asapholidays.com/img/footer/cards/3.png"
              alt="Apple Pay"
            />

            <img
              src="https://www.asapholidays.com/img/footer/cards/4.png"
              alt="Discover"
            />

            <img
              src="https://www.asapholidays.com/img/footer/cards/5.png"
              alt="Paypal"
            />

            <img
              src="https://www.asapholidays.com/img/footer/cards/6.png"
              alt="Amex"
            />
          </div>
        </div>

        {/* =========================
            FOOTER BOTTOM
        ========================= */}

        <div className="footer-bottom">
          <p>
            © 2026 VMS Travel Tech India Private Ltd. All Rights Reserved.
          </p>

          <div className="bottom-links">
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;