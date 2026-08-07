import React, { useState } from "react";
import "./BookingSidebar.css";

import {
  FaCalendarAlt,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

const BookingSidebar = ({ tour }) => {
  const [formData, setFormData] = useState({
    date: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  // =========================
  // Handle Input Change
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // =========================
  // Validation
  // =========================
  const validateForm = () => {
    let newErrors = {};

    // Date
    if (!formData.date) {
      newErrors.date = "Please select a travel date.";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const selectedDate = new Date(formData.date);

      if (selectedDate < today) {
        newErrors.date = "Travel date cannot be in the past.";
      }
    }

    // Guests
    if (!formData.guests || Number(formData.guests) < 1) {
      newErrors.guests = "Minimum 1 guest is required.";
    }

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Only letters are allowed.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Minimum 3 characters required.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log({
      ...formData,
      tour: tour.title,
      price: tour.price,
    });

    alert(`Thank you! Your enquiry for ${tour.title} has been submitted.`);

    setFormData({
      date: "",
      guests: 2,
      name: "",
      email: "",
      phone: "",
    });

    setErrors({});
  };

  return (
    <aside className="bookingSidebar">

      <div className="priceCard">
        <span className="startingFrom">Starting From</span>

        <h2>{tour.price}</h2>

        <p>Per Person</p>
      </div>

      <div className="includedList">
        {tour.highlights.slice(0, 4).map((item, index) => (
          <div key={index}>
            <FaCheckCircle />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>

        {/* Date */}

        <div className={`inputGroup ${errors.date ? "errorBorder" : ""}`}>
          <FaCalendarAlt />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {errors.date && <p className="error">{errors.date}</p>}

        {/* Guests */}

        <div className={`inputGroup ${errors.guests ? "errorBorder" : ""}`}>
          <FaUsers />
          <input
            type="number"
            min="1"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Guests"
          />
        </div>

        {errors.guests && <p className="error">{errors.guests}</p>}

        {/* Name */}

        <div className={`inputGroup ${errors.name ? "errorBorder" : ""}`}>
          <FaUsers />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>

        {errors.name && <p className="error">{errors.name}</p>}

        {/* Email */}

        <div className={`inputGroup ${errors.email ? "errorBorder" : ""}`}>
          <FaEnvelope />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
        </div>

        {errors.email && <p className="error">{errors.email}</p>}

        {/* Phone */}

        <div className={`inputGroup ${errors.phone ? "errorBorder" : ""}`}>
          <FaPhoneAlt />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>

        {errors.phone && <p className="error">{errors.phone}</p>}

        <button type="submit">
          Book {tour.title}
        </button>

      </form>

    </aside>
  );
};

export default BookingSidebar;