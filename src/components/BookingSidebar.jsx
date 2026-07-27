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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      tour: tour.title,
      price: tour.price,
    });

    alert(`Thank you! Your enquiry for ${tour.title} has been submitted.`);
  };

  return (
    <aside className="bookingSidebar">

      <div className="priceCard">

        <span className="startingFrom">
          Starting From
        </span>

        <h2>{tour.price}</h2>

        <p>Per Person</p>

      </div>

      <div className="includedList">

        {tour.highlights.slice(0, 4).map((item, index) => (
          <div key={index}>
            <FaCheckCircle />
            {item}
          </div>
        ))}

      </div>

      <form onSubmit={handleSubmit}>

        <div className="inputGroup">
          <FaCalendarAlt />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputGroup">
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

        <div className="inputGroup">
          <FaUsers />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="inputGroup">
          <FaEnvelope />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>

        <div className="inputGroup">
          <FaPhoneAlt />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>

        <button type="submit">
          Book {tour.title}
        </button>

      </form>

    </aside>
  );
};

export default BookingSidebar;