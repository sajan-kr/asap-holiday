import React from "react";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowRight,
  FaChevronRight, FaPlane, FaHeadset, } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* ========== TOP CTA ========= */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <div className="footer-cta-text">
              <span className="footer-cta-label">
                YOUR NEXT JOURNEY STARTS HERE
              </span>
              <h2>
                Ready for your next adventure?
              </h2>
              <p>
                Let us help you create a holiday worth remembering.
              </p>
            </div>
            <a href="/" className="footer-expert-btn">
              <FaHeadset className="footer-icon" />
              <span>
                Talk to Travel Expert
              </span>
              <FaArrowRight className="expert-arrow" />
            </a>
          </div>
        </div>

        {/* ========== MAIN FOOTER ========= */}

        <div className="footer-main">
          {/* ========== BRAND ========= */}
          <div className="footer-brand">
            <a href="/" className="footer-logo-wrapper" aria-label="ASAP Holidays">
              <img src="/asaplogo.png" alt="ASAP Holidays" className="footer-logo"/>
            </a>
            <p className="footer-desc">
              Discover unforgettable journeys, handpicked holidays,
              premium stays and memorable travel experiences around
              the world.
            </p>
            <div className="footer-socials">
              <a href="/" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="/" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="/" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="/" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* ========== COMPANY ========= */}
          <div className="footer-links">
            <div className="footer-heading">
              <span className="heading-line"></span>
              <h3>
                Company
              </h3>
            </div>
            <ul>
              <li>
                <a href="/">
                  <FaChevronRight />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <FaChevronRight />
                  <span>Travel Blog</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <FaChevronRight />
                  <span>Payment Options</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <FaChevronRight />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ========== IMPORTANT LINKS ========= */}

          <div className="footer-links">
            <div className="footer-heading">
              <span className="heading-line"></span>
              <h3>
                Important Links
              </h3>
            </div>

            <ul>
              <li>
                <a href="/">
                  <FaChevronRight />
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <FaChevronRight />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <FaChevronRight />
                  <span>Terms &amp; Conditions</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <FaChevronRight />
                  <span>Sitemap</span>
                </a>
              </li>
            </ul>

          </div>

          {/* ========== CONTACT ========= */}

          <div className="footer-contact">
            <div className="footer-heading">
              <span className="heading-line"></span>
              <h3>
                Talk To Us
              </h3>
            </div>

            <a href="mailto:support@asapholidays.com" className="contact-item">
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              <span>
                support@asapholidays.com
              </span>
            </a>
            <a href="tel:+911140014001" className="contact-item">
              <span className="contact-icon">
                <FaPhoneAlt />
              </span>
              <span>
                +91-11-40014001
              </span>
            </a>
            <a href="tel:+919205129996" className="contact-item">
              <span className="contact-icon">
                <FaPhoneAlt />
              </span>
              <span> +91-9205129996 </span>
            </a>

            <div className="contact-item address-item">
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>
              <span>
                Unit 203-212, Second Floor, HL Wings, Dwarka Sector-11, Pocket-04, Delhi-110075
              </span>
            </div>
          </div>
        </div>

        {/* ========== NEWSLETTER ========= */}

        <div className="newsletter-box">
          <div className="newsletter-info">
            <div className="newsletter-icon">
              <FaPlane />
            </div>
            <div>
              <span className="newsletter-label">
                TRAVEL UPDATES
              </span>
              <h3>
                Get the latest travel deals
              </h3>
              <p>
                Subscribe for exclusive offers, holiday inspiration
                and destination updates.
              </p>
            </div>
          </div>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" aria-label="Email address"/>
            <button type="submit">
              <span>
                Subscribe
              </span>
              <FaArrowRight />
            </button>
          </form>
        </div>

        {/* ========== PAYMENT ========= */}

        <div className="payment-section">
          <div className="payment-left">
            <span className="payment-small">
              SECURE PAYMENTS
            </span>
            <span className="payment-title">
              We Accept
            </span>
          </div>

          <div className="payment-methods">
            <div className="payment-card">
              <img src="https://www.asapholidays.com/img/footer/cards/1.png" alt="Visa"/>
            </div>
            <div className="payment-card">
              <img src="https://www.asapholidays.com/img/footer/cards/2.png" alt="Mastercard"/>
            </div>
            <div className="payment-card">
              <img src="https://www.asapholidays.com/img/footer/cards/3.png" alt="Apple Pay"/>
            </div>
            <div className="payment-card">
              <img src="https://www.asapholidays.com/img/footer/cards/4.png" alt="Discover"/>
            </div>
            <div className="payment-card">
              <img src="https://www.asapholidays.com/img/footer/cards/5.png" alt="PayPal"/>
            </div>
            <div className="payment-card">
              <img src="https://www.asapholidays.com/img/footer/cards/6.png" alt="American Express"/>
            </div>
          </div>
        </div>

        {/* ========== BOTTOM ========= */}

        <div className="footer-bottom">
          <p>
            © 2026 VMS Travel Tech India Private Ltd.
            All Rights Reserved.
          </p>
          <div className="bottom-links">
            <a href="/">
              Privacy
            </a>
            <span></span>
            <a href="/">
              Terms
            </a>
            <span></span>
            <a href="/">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;