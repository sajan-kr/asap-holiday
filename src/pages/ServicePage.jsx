
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ServicePage.css";

const serviceContent = {
  "/flights": {
    title: "Flight Booking",
    eyebrow: "FLIGHT SERVICES",
    subtitle: "Find the right flight for your next journey.",
    description: "Tell us about your travel plans and our team can assist you with flight enquiries.",
    button: "Send Flight Enquiry",
  },
  "/cruise": {
    title: "Cruise Holidays",
    eyebrow: "CRUISE EXPERIENCES",
    subtitle: "Discover unforgettable journeys at sea.",
    description: "Share your cruise preferences and enquire about holiday options.",
    button: "Send Cruise Enquiry",
  },
  "/visa": {
    title: "Visa Assistance",
    eyebrow: "TRAVEL ESSENTIALS",
    subtitle: "Prepare for your international journey.",
    description: "Contact our team for guidance about visa requirements and travel preparation.",
    button: "Send Visa Enquiry",
  },
  "/hotels": {
    title: "Hotel Booking",
    eyebrow: "HOTEL SERVICES",
    subtitle: "Find a comfortable stay for your next trip.",
    description: "Tell us about your destination and accommodation requirements.",
    button: "Send Hotel Enquiry",
  },
  "/travel-insurance": {
    title: "Travel Insurance",
    eyebrow: "TRAVEL PROTECTION",
    subtitle: "Prepare for your journey with confidence.",
    description: "Enquire with our team about travel insurance options and coverage information.",
    button: "Send Insurance Enquiry",
  },
  "/contact": {
    title: "Contact ASAP Holidays",
    eyebrow: "WE ARE HERE TO HELP",
    subtitle: "Let's plan your next memorable holiday.",
    description: "Have a question about a destination, holiday package, or booking? Send us a message.",
    button: "Send Message",
  },
  "/offers": {
    title: "Holiday Offers",
    eyebrow: "SPECIAL HOLIDAY DEALS",
    subtitle: "Find inspiration for your next getaway.",
    description: "Tell us what kind of holiday you are looking for and enquire about available options.",
    button: "Enquire About Offers",
  },
  "/track-booking": {
    title: "Track Your Booking",
    eyebrow: "BOOKING ASSISTANCE",
    subtitle: "Need an update about your holiday booking?",
    description: "Provide your booking reference and message our team for assistance.",
    button: "Request Booking Update",
  },
  "/support": {
    title: "Travel Support",
    eyebrow: "CUSTOMER CARE",
    subtitle: "We're here to help with your travel questions.",
    description: "Send your travel question or support request to our team.",
    button: "Contact Support",
  },
};

export default function ServicePage() {
  const location = useLocation();
  const page = serviceContent[location.pathname];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reference: "",
    message: "",
  });

  const [error, setError] = useState("");

  if (!page) {
    return (
      <main className="service-page">
        <section className="service-card">
          <h1>Service Not Found</h1>
          <p>Sorry, we couldn't find this service.</p>
          <Link to="/" className="service-button">
            Back to Home
          </Link>
        </section>
      </main>
    );
  }

  const isBookingPage = location.pathname === "/track-booking";

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = `ASAP Holidays - ${page.title} Enquiry`;

    const body = [
      "Hello ASAP Holidays Team,",
      "",
      `Service: ${page.title}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${form.phone.trim() || "Not provided"}`,
      `Booking Reference: ${form.reference.trim() || "Not provided"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto =
      `mailto:info@asapholidays.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <main className="service-page">
      <section className="service-card">
        <span className="service-eyebrow">{page.eyebrow}</span>

        <h1>{page.title}</h1>
        <h2>{page.subtitle}</h2>

        <p className="service-description">{page.description}</p>

        <form className="service-form" onSubmit={handleSubmit}>
          <div className="service-form-heading">
            <h3>Send Us an Enquiry</h3>
            <p>Complete the form below to contact our team.</p>
          </div>

          <div className="service-form-grid">
            <div className="service-field">
              <label htmlFor="service-name">Full Name *</label>
              <input
                id="service-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="service-field">
              <label htmlFor="service-email">Email Address *</label>
              <input
                id="service-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="service-field">
              <label htmlFor="service-phone">Phone Number</label>
              <input
                id="service-phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {isBookingPage && (
              <div className="service-field">
                <label htmlFor="service-reference">
                  Booking Reference
                </label>
                <input
                  id="service-reference"
                  name="reference"
                  type="text"
                  placeholder="Enter booking reference"
                  value={form.reference}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="service-field service-field-full">
              <label htmlFor="service-message">Your Message *</label>
              <textarea
                id="service-message"
                name="message"
                rows={5}
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {error && (
            <p className="service-form-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="service-button">
            {page.button}
          </button>

          <p className="service-form-note">
            Submitting opens your email application with your enquiry
            details prepared. You must send the email to complete the enquiry.
          </p>
        </form>

        <div className="service-contact">
          <span className="service-contact-label">
            Need personal assistance?
          </span>

          <a href="mailto:info@asapholidays.com">
            info@asapholidays.com
          </a>

          <a href="tel:+919205129996">
            +91 92051 29996
          </a>
        </div>

        <Link to="/" className="service-home-link">
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
