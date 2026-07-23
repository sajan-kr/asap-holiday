// RecentlyBooked.jsx

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    ChevronLeft,
    ChevronRight,
    Heart,
    MapPin,
    Check,
    ArrowUpRight,
} from "lucide-react";

import "./RecentlyBooked.css";

const packages = [
    {
        id: 1,
        title: "Maldives Luxury Escape",
        location: "Maldives",
        category: "LUXURY",
        price: "₹2,45,000",
        duration: "5 nights / person",
        image:
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
        user: "Rahul from Mumbai",
        time: "20m ago",
        destination: "Maldives",
        budget: "Luxury",
        badge: "R",
        slug: "maldives-luxury",
    },

    {
        id: 2,
        title: "Swiss Alps Adventure",
        location: "Switzerland",
        category: "ADVENTURE",
        price: "₹1,89,000",
        duration: "7 nights / person",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        user: "Aman from Delhi",
        time: "1hr ago",
        destination: "Europe",
        budget: "₹1.5L to ₹2.5L",
        badge: "A",
        slug: "swiss-alps",
    },

    {
        id: 3,
        title: "Romantic Bali Retreat",
        location: "Bali",
        category: "HONEYMOON",
        price: "₹1,15,000",
        duration: "6 nights / couple",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
        user: "Sneha from Pune",
        time: "2hr ago",
        destination: "Bali",
        budget: "₹50K to ₹1.5L",
        badge: "S",
        slug: "bali-retreat",
    },

    {
        id: 4,
        title: "Dubai Premium Experience",
        location: "Dubai",
        category: "PREMIUM",
        price: "₹1,55,000",
        duration: "4 nights / person",
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
        user: "Karan from Chennai",
        time: "5hr ago",
        destination: "Dubai",
        budget: "₹1.5L to ₹2.5L",
        badge: "K",
        slug: "dubai-premium",
    },

    {
        id: 5,
        title: "Thailand Beach Escape",
        location: "Thailand",
        category: "BEACH",
        price: "₹95,000",
        duration: "5 nights / person",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        user: "Vikas from Bangalore",
        time: "3hr ago",
        destination: "Thailand",
        budget: "₹50K to ₹1.5L",
        badge: "V",
        slug: "thailand-beach",
    },
];

const budgets = [
    "Under ₹50K",
    "₹50K to ₹1.5L",
    "₹1.5L to ₹2.5L",
    "Luxury",
];

const destinations = [
    "All Destinations",
    "Maldives",
    "Europe",
    "Bali",
    "Dubai",
    "Thailand",
];

export default function RecentlyBooked() {

    const sliderRef = useRef(null);
    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] =
        useState(false);

    const [selectedDestination, setSelectedDestination] =
        useState("All Destinations");

    const [selectedBudget, setSelectedBudget] =
        useState("");

    const filteredPackages = packages.filter(
        (item) => {

            const destinationMatch =
                selectedDestination ===
                    "All Destinations"
                    ? true
                    : item.destination ===
                    selectedDestination;

            const budgetMatch =
                selectedBudget
                    ? item.budget === selectedBudget
                    : true;

            return (
                destinationMatch &&
                budgetMatch
            );

        }
    );

    const scroll = (direction) => {

        if (sliderRef.current) {

            sliderRef.current.scrollBy({

                left:
                    direction === "left"
                        ? -430
                        : 430,

                behavior: "smooth",

            });

        }

    };

    const goToPage = (slug) => {

        navigate(`/package/${slug}`);

    };

    return (

        <section className="recently-booked">

            <div className="main-container">

                {/* LEFT SIDE */}

                <div className="left-side">

                    <div className="heading-wrapper">

                        <div className="green-circle"></div>

                        <h2>
                            Explore
                            <br />
                            Dream
                            <br />
                            Holidays
                        </h2>

                    </div>

                    <p className="description">

                        Discover luxury escapes,
                        romantic getaways and
                        unforgettable travel
                        experiences around the world.

                    </p>

                    <div className="trip-badge">

                        <Heart
                            size={17}
                            fill="#ff7b00"
                            color="#ff7b00"
                        />

                        <span>
                            3,500+ travelers booked this month
                        </span>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="right-side">

                    {/* TOP BAR */}

                    <div className="top-bar">

                        {/* DROPDOWN */}

                        <div className="dropdown-wrapper">

                            <button
                                className="dropdown-btn"
                                onClick={() =>
                                    setDropdownOpen(!dropdownOpen)
                                }
                            >

                                {selectedDestination}

                                <span
                                    className={`dropdown-arrow ${dropdownOpen ? "rotate-arrow" : ""
                                        }`}
                                >

                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >

                                        <path
                                            d="M7 10L12 15L17 10"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                    </svg>

                                </span>

                            </button>

                            {dropdownOpen && (

                                <div className="dropdown-menu">

                                    {destinations.map(
                                        (item, index) => (

                                            <div
                                                key={index}
                                                className={`dropdown-item ${selectedDestination === item
                                                        ? "active-item"
                                                        : ""
                                                    }`}
                                                onClick={() => {

                                                    setSelectedDestination(item);

                                                    setDropdownOpen(false);

                                                }}
                                            >

                                                <div className="radio">

                                                    {selectedDestination === item && (
                                                        <Check size={12} />
                                                    )}

                                                </div>

                                                {item}

                                            </div>

                                        )
                                    )}

                                </div>

                            )}

                        </div>

                        {/* FILTERS */}

                        <div className="budget-filters">

                            {budgets.map(
                                (item, index) => (

                                    <button
                                        key={index}
                                        className={`filter-btn ${selectedBudget === item
                                            ? "active-filter"
                                            : ""
                                            }`}
                                        onClick={() =>
                                            setSelectedBudget(
                                                selectedBudget === item
                                                    ? ""
                                                    : item
                                            )
                                        }
                                    >

                                        {item}

                                    </button>

                                )
                            )}

                        </div>

                        {/* NAVIGATION */}

                        <div className="slider-nav">

                            <button
                                onClick={() =>
                                    scroll("left")
                                }
                            >
                                <ChevronLeft size={22} />
                            </button>

                            <button
                                onClick={() =>
                                    scroll("right")
                                }
                            >
                                <ChevronRight size={22} />
                            </button>

                        </div>

                    </div>

                    {/* SLIDER */}

                    <div
                        className="cards-slider"
                        ref={sliderRef}
                    >

                        {filteredPackages.map(
                            (item) => (

                                <div
                                    className="travel-card"
                                    key={item.id}
                                    onClick={() =>
                                        goToPage(item.slug)
                                    }
                                >

                                    {/* USER BAR */}

                                    <div className="user-bar">

                                        <div className="avatar">
                                            {item.badge}
                                        </div>

                                        <p>
                                            {item.user} • {item.time}
                                        </p>

                                    </div>

                                    {/* IMAGE */}

                                    <div className="card-image">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />

                                        <div className="image-overlay">

                                            <button className="explore-btn">

                                                Explore

                                                <ArrowUpRight size={18} />

                                            </button>

                                        </div>

                                    </div>

                                    {/* BODY */}

                                    <div className="card-body">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <div className="location">

                                            <MapPin size={16} />

                                            <span>
                                                {item.location}
                                            </span>

                                        </div>

                                        <div className="tag">
                                            {item.category}
                                        </div>

                                    </div>

                                    {/* FOOTER */}

                                    <div className="card-footer">

                                        <div>

                                            <h4>
                                                {item.price}
                                            </h4>

                                            <p>
                                                {item.duration}
                                            </p>

                                        </div>

                                        <button>

                                            View Details

                                        </button>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </div>

            </div>

        </section>

    );
}