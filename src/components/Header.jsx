import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showPaymentPopup, setShowPaymentPopup] = useState(false);

    /* =========================
       RAZORPAY PAYMENT
    ========================= */

    const unlockScroll = () => {
        document.body.style.overflow = "auto";
        document.body.style.position = "static";
        document.body.style.height = "auto";
        document.body.style.width = "100%";

        document.documentElement.style.overflow = "auto";
        document.documentElement.style.position = "static";

        document.body.classList.remove("razorpay-open");
        document.body.classList.remove("modal-open");

        window.scrollTo(window.scrollX, window.scrollY);
    };

    const handlePayment = () => {
        // Close your custom popup
        setShowPaymentPopup(false);

        // Unlock page scroll
        const unlockScroll = () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";

            document.body.style.position = "";
            document.documentElement.style.position = "";

            document.body.style.height = "";
            document.documentElement.style.height = "";

            document.body.classList.remove("razorpay-open");
            document.body.classList.remove("modal-open");
        };

        const options = {
            key: "rzp_test_9x8AbCdEfGh123", // <-- Replace with your real Razorpay Test Key
            amount: 50000,
            currency: "INR",
            name: "ASAP Holidays",
            description: "Travel Booking Payment",
            image: "/asaplogo.png",

            handler: function (response) {
                unlockScroll();

                alert(
                    "Payment Successful\nPayment ID: " +
                    response.razorpay_payment_id
                );
            },

            modal: {
                ondismiss: function () {
                    unlockScroll();
                },
                escape: true,
                backdropclose: true,
            },

            prefill: {
                name: "Customer",
                email: "customer@gmail.com",
                contact: "9205129996",
            },

            theme: {
                color: "#ff7a00",
            },
        };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", function (response) {
            unlockScroll();

            alert("Payment Failed");
        });

        rzp.open();

        // Safety unlock after modal opens/closes
        setTimeout(() => {
            unlockScroll();
        }, 1000);
    };

    return (
        <>
            {/* ========= TOP BAR ======== */}

            <div className="topbar">
                <div className="container">
                    <div className="topbar-content">
                        <div className="offer-text">
                            ✈ Dream Trip Discounts • Thailand • Dubai • Bali • Maldives •
                            Europe
                        </div>

                        <div className="top-links">
                            <a href="#">Track Booking</a>
                            <a href="#">Offers</a>
                            <a href="#">Support</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ======= HEADER ====== */}

            <header className="header">
                <div className="container">
                    <div className="header-content">

                        {/* LOGO */}

                        <div className="logo">
                            <Link to="/">
                                <img src="/asaplogo.png" alt="ASAP Holidays"/>
                            </Link>
                        </div>

                        {/* NAVIGATION */}

                        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
                            <ul className="nav-list">

                                <li>
                                    <a href="#home">Home</a>
                                </li>

                                {/* MEGA MENU */}

                                <li className="mega-parent">
                                    <a href="#packages">Holidays</a>

                                    <div className="mega-menu">

                                        {/* LEFT SIDE */}

                                        <div className="mega-left">

                                            {/* INTERNATIONAL */}

                                            <div className="mega-column">
                                                <h3>International</h3>
                                                <a href="#">Thailand</a>
                                                <a href="#">Dubai</a>
                                                <a href="#">Singapore</a>
                                                <a href="#">Maldives</a>
                                                <a href="#">Europe</a>
                                                <a href="#">Vietnam</a>
                                            </div>

                                            {/* DOMESTIC */}

                                            <div className="mega-column">
                                                <h3>Domestic</h3>
                                                <a href="#">Goa</a>
                                                <a href="#">Kashmir</a>
                                                <a href="#">Kerala</a>
                                                <a href="#">Ladakh</a>
                                                <a href="#">Manali</a>
                                                <a href="#">Andaman</a>
                                            </div>

                                        </div>

                                        {/* RIGHT SIDE IMAGE */}

                                        <div className="mega-right">
                                            <img src="/grass-sunset.jpg" alt="Summer Escape"/>
                                            <div className="mega-overlay">
                                                <h2>Summer Escape</h2>
                                                <p>Starting from ₹29,999</p>
                                                <button>
                                                    Explore Now
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <a href="#flights">Flights</a>
                                </li>
                                <li>
                                    <a href="#cruise">Cruise</a>
                                </li>
                                <li>
                                    <a href="#visa">Visa</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        {/* RIGHT ACTIONS */}

                        <div className="header-actions">
                            <div className="contact-box">
                                <div className="phone-icon">
                                    ☎
                                </div>
                                <div className="contact-text">
                                    <span>Call Us</span>
                                    <h4>+91-9205129996</h4>
                                </div>
                            </div>

                            <button className="pay-btn" onClick={() => setShowPaymentPopup(true) }>
                                Pay Online
                            </button>

                        </div>

                        {/* MOBILE MENU */}

                        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen) }>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* ========================= PAYMENT POPUP ========================= */}

            {showPaymentPopup && (
                <div className="payment-popup-overlay" onClick={() => setShowPaymentPopup(false) }>
                    <div className="payment-popup-container" onClick={(e) => e.stopPropagation() }>

                        {/* CLOSE BUTTON */}

                        <button className="popup-close" onClick={() => setShowPaymentPopup(false) }>
                            ×
                        </button>

                        {/* HEADER */}

                        <div className="popup-header">
                            <h2>
                                Choose Payment Method
                            </h2>
                            <p>
                                Safe • Secure • Instant Payment
                            </p>
                        </div>

                        {/* PAYMENT GRID */}

                        <div className="payment-grid">

                            {/* UPI */}

                            <div className="payment-card">

                                <img src="/sankash.png" alt="UPI QR"/>

                                <h3>
                                    Scan & Pay By UPI
                                </h3>

                                <p>
                                    VMS TRAVEL TECH INDIA PVT LTD
                                </p>

                                <button className="payment-btn" onClick={handlePayment}>
                                    Pay Now
                                </button>

                            </div>

                            {/* EMI */}

                            <div className="payment-card">

                                <img src="/icici-UPI.png" alt="ICICI QR"/>

                                <h3>
                                    Scan & Pay By Easy EMI
                                </h3>

                                <p>
                                    VMS TRAVEL TECH INDIA PVT LTD
                                </p>

                                <button className="payment-btn" onClick={handlePayment}>
                                    Pay Now
                                </button>

                            </div>

                        </div>

                        {/* BANK SECTION */}

                        <div className="bank-section">

                            {/* CC AVENUE */}

                            <div className="bank-card">

                                <img src="/cc-avenue.png" alt="CC Avenue"/>

                                <button className="bank-btn" onClick={handlePayment}>
                                    Continue Payment
                                </button>

                            </div>

                            {/* ICICI */}

                            <div className="bank-card">

                                <img src="/ICICI_Bank_Logo.png" alt="ICICI Bank"/>

                                <button className="bank-btn" onClick={handlePayment}>
                                    Continue Payment
                                </button>

                            </div>

                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Header;