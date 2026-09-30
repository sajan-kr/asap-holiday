import React, { useEffect, useMemo, useState } from "react";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaCheck,
    FaChevronLeft,
    FaHeart,
    FaMinus,
    FaPhoneAlt,
    FaPlus,
    FaTimes,
    FaUsers,
    FaWhatsapp,
} from "react-icons/fa";

import "./TourCTA.css";

const WHATSAPP = "919205129996";
const PHONE = "+919205129996";
const EMAIL = "info@asapholidays.com";

const INITIAL_FORM = {
    date: "",
    flexible: true,
    adults: 2,
    children: 0,
    style: "Relax & Explore",
    hotel: "Premium",
    name: "",
    phone: "",
    email: "",
    message: "",
};

const addDays = (days) => {
    const date = new Date();

    date.setDate(date.getDate() + days);

    return date.toISOString().split("T")[0];
};

const formatDate = (value) => {
    if (!value) return "";

    return new Date(`${value}T00:00:00`).toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }
    );
};

const TourCTA = ({ tour }) => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [saved, setSaved] = useState(false);
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState(INITIAL_FORM);

    const highlights = useMemo(
        () => tour?.highlights?.slice(0, 4) || [],
        [tour]
    );

    const totalGuests =
        form.adults + form.children;

    /* =====================================================
       BODY SCROLL LOCK
    ===================================================== */

    useEffect(() => {
        if (!open) {
            document.body.style.overflow = "";
            return;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closePlanner();
            }
        };

        document.body.style.overflow = "hidden";

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.body.style.overflow = "";

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [open]);

    if (!tour) {
        return null;
    }

    /* =====================================================
       UPDATE FORM
    ===================================================== */

    const update = (key, value) => {
        setForm((previous) => ({
            ...previous,
            [key]: value,
        }));

        if (errors[key]) {
            setErrors((previous) => ({
                ...previous,
                [key]: "",
            }));
        }
    };

    /* =====================================================
       GUEST COUNTER
    ===================================================== */

    const changeGuests = (key, amount) => {
        setForm((previous) => ({
            ...previous,

            [key]: Math.max(
                key === "adults" ? 1 : 0,
                previous[key] + amount
            ),
        }));
    };

    /* =====================================================
       OPEN PLANNER
    ===================================================== */

    const openPlanner = () => {
        setStep(1);
        setSubmitted(false);
        setErrors({});
        setOpen(true);
    };

    /* =====================================================
       CLOSE PLANNER
    ===================================================== */

    const closePlanner = () => {
        setOpen(false);
        setStep(1);
        setSubmitted(false);
        setErrors({});
    };

    /* =====================================================
       QUICK DATE
    ===================================================== */

    const selectQuickDate = (type) => {
        if (type === "flexible") {
            update("flexible", true);
            update("date", "");

            return;
        }

        update("flexible", false);

        if (type === "soon") {
            update("date", addDays(7));
        }

        if (type === "later") {
            update("date", addDays(30));
        }
    };

    /* =====================================================
       STEP 1 → STEP 2
    ===================================================== */

    const goStepTwo = () => {
        if (!form.flexible && !form.date) {
            setErrors({
                date:
                    "Choose a date or keep your dates flexible.",
            });

            return;
        }

        setErrors({});
        setStep(2);
    };

    /* =====================================================
       STEP 2 → STEP 3
       
       IMPORTANT:
       DO NOT VALIDATE CONTACT DETAILS HERE.
       CONTACT DETAILS ARE ON STEP 3.
    ===================================================== */

    const goStepThree = () => {
        setErrors({});
        setStep(3);
    };

    /* =====================================================
       STEP 3 CONTACT VALIDATION
    ===================================================== */

    const validateContact = () => {
        const nextErrors = {};

        if (!form.name.trim()) {
            nextErrors.name =
                "Enter your name.";
        }

        if (!form.phone.trim()) {
            nextErrors.phone =
                "Enter your phone number.";
        } else if (
            form.phone
                .replace(/\D/g, "")
                .length < 8
        ) {
            nextErrors.phone =
                "Enter a valid phone number.";
        }

        if (!form.email.trim()) {
            nextErrors.email =
                "Enter your email.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                form.email
            )
        ) {
            nextErrors.email =
                "Enter a valid email address.";
        }

        if (
            Object.keys(nextErrors).length > 0
        ) {
            setErrors(nextErrors);

            return false;
        }

        setErrors({});

        return true;
    };

    /* =====================================================
       WHATSAPP MESSAGE
    ===================================================== */

    const buildMessage = () => {
        return `Hello ASAP Holidays,

I would like to plan this trip.

TRIP
Tour: ${tour.title}
Destination: ${tour.location}
Duration: ${tour.duration}
Starting price: ${tour.price}

TRAVEL
Date: ${form.flexible
                ? "Flexible dates"
                : formatDate(form.date)
            }
Adults: ${form.adults}
Children: ${form.children}
Total guests: ${totalGuests}

PREFERENCES
Travel style: ${form.style}
Hotel preference: ${form.hotel}

CONTACT
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

SPECIAL REQUEST
${form.message || "None"}

Please share the best package options and next steps.`;
    };

    /* =====================================================
       SUBMIT
    ===================================================== */

    const submit = () => {
        const valid = validateContact();

        if (!valid) {
            return;
        }

        const message = buildMessage();

        window.open(
            `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                message
            )}`,
            "_blank",
            "noopener,noreferrer"
        );

        setSubmitted(true);
    };

    /* =====================================================
       QUICK WHATSAPP
    ===================================================== */

    const quickWhatsApp =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
            `Hello ASAP Holidays, I am interested in ${tour.title} in ${tour.location}. Please share the package options.`
        )}`;

    /* =====================================================
       PROGRESS
    ===================================================== */

    const progress =
        step === 1
            ? "33%"
            : step === 2
                ? "66%"
                : "100%";

    return (
        <>
            {/* =================================================
                MAIN CTA
            ================================================= */}

            <section className="tripCta">

                <div className="tripCta__background">

                    <img
                        src={tour.image}
                        alt={tour.title}
                        loading="lazy"
                    />

                    <div className="tripCta__backgroundShade" />

                </div>

                <div className="tripCta__content">

                    <div className="tripCta__topline">

                        <span>
                            ASAP HOLIDAYS
                        </span>

                        <span>
                            PRIVATE TRIP PLANNING
                        </span>

                    </div>

                    <div className="tripCta__copy">

                        <span className="tripCta__eyebrow">
                            {tour.location}
                        </span>

                        <h2>
                            Don&apos;t just book
                            <br />
                            a trip. <em>Plan it.</em>
                        </h2>

                        <p>
                            Tell us what you want from
                            your holiday and our travel
                            team will help shape the
                            experience around you.
                        </p>

                        <div className="tripCta__chips">

                            <span>
                                <FaCheck />
                                Personalised planning
                            </span>

                            <span>
                                <FaCheck />
                                No booking pressure
                            </span>

                        </div>

                    </div>

                    {/* =================================================
                        FLOATING CARD
                    ================================================= */}

                    <div className="tripCta__floatingCard">

                        <div className="tripCta__cardTitle">

                            <div>

                                <span>
                                    START YOUR ENQUIRY
                                </span>

                                <strong>
                                    {tour.title}
                                </strong>

                            </div>

                            <button
                                type="button"
                                className={
                                    saved
                                        ? "saved"
                                        : ""
                                }
                                onClick={() =>
                                    setSaved(
                                        (value) =>
                                            !value
                                    )
                                }
                                aria-label="Save tour"
                            >
                                <FaHeart />
                            </button>

                        </div>

                        <div className="tripCta__cardStats">

                            <div>
                                <small>
                                    From
                                </small>

                                <strong>
                                    {tour.price}
                                </strong>
                            </div>

                            <div>
                                <small>
                                    Duration
                                </small>

                                <strong>
                                    {tour.duration}
                                </strong>
                            </div>

                            <div>
                                <small>
                                    Guests
                                </small>

                                <strong>
                                    {totalGuests}
                                </strong>
                            </div>

                        </div>

                        {highlights.length > 0 && (
                            <div className="tripCta__highlights">

                                {highlights.map(
                                    (
                                        item,
                                        index
                                    ) => (
                                        <span
                                            key={`${item}-${index}`}
                                        >
                                            <FaCheck />
                                            {item}
                                        </span>
                                    )
                                )}

                            </div>
                        )}

                        <div className="tripCta__actions">

                            <button
                                type="button"
                                className="tripCta__primary"
                                onClick={
                                    openPlanner
                                }
                            >

                                <span>

                                    <small>
                                        2 MINUTES TO
                                        START
                                    </small>

                                    Plan my trip

                                </span>

                                <FaArrowRight />

                            </button>

                            <a
                                href={
                                    quickWhatsApp
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="tripCta__whatsapp"
                                aria-label="WhatsApp ASAP Holidays"
                            >
                                <FaWhatsapp />
                            </a>

                        </div>

                        <div className="tripCta__cardFooter">

                            <span>
                                <FaPhoneAlt />
                                Need help? Call{" "}
                                {PHONE}
                            </span>

                            <span>
                                Free consultation
                            </span>

                        </div>

                    </div>

                </div>

            </section>

            {/* =================================================
                PLANNER
            ================================================= */}

            {open && (

                <div className="planner">

                    <div
                        className="planner__overlay"
                        onClick={closePlanner}
                    />

                    <div className="planner__window">

                        {/* HEADER */}

                        <header className="planner__header">

                            <div className="planner__brand">
                                <span>
                                    ASAP
                                </span>{" "}
                                HOLIDAYS
                            </div>

                            <div className="planner__headerTrip">

                                <img
                                    src={tour.image}
                                    alt=""
                                />

                                <div>

                                    <small>
                                        {tour.location}
                                    </small>

                                    <strong>
                                        {tour.title}
                                    </strong>

                                </div>

                            </div>

                            <button
                                type="button"
                                className="planner__close"
                                onClick={
                                    closePlanner
                                }
                                aria-label="Close planner"
                            >
                                <FaTimes />
                            </button>

                        </header>

                        {/* PROGRESS */}

                        <div className="planner__progress">

                            <div
                                className="planner__progressFill"
                                style={{
                                    width:
                                        progress,
                                }}
                            />

                        </div>

                        {/* BODY */}

                        <div className="planner__body">

                            {/* =================================================
                                SIDEBAR
                            ================================================= */}

                            <aside className="planner__summary">

                                <div className="planner__summaryImage">

                                    <img
                                        src={
                                            tour.image
                                        }
                                        alt=""
                                    />

                                    <span>
                                        {
                                            tour.location
                                        }
                                    </span>

                                </div>

                                <div className="planner__summaryContent">

                                    <span className="planner__summaryLabel">
                                        YOUR TRIP
                                    </span>

                                    <h3>
                                        {
                                            tour.title
                                        }
                                    </h3>

                                    <div className="planner__summaryRows">

                                        <div>

                                            <small>
                                                Duration
                                            </small>

                                            <strong>
                                                {
                                                    tour.duration
                                                }
                                            </strong>

                                        </div>

                                        <div>

                                            <small>
                                                Starting
                                            </small>

                                            <strong>
                                                {
                                                    tour.price
                                                }
                                            </strong>

                                        </div>

                                    </div>

                                    <div className="planner__steps">

                                        <div
                                            className={
                                                step >=
                                                    1
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <b>
                                                1
                                            </b>

                                            <span>
                                                Trip
                                            </span>
                                        </div>

                                        <div
                                            className={
                                                step >=
                                                    2
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <b>
                                                2
                                            </b>

                                            <span>
                                                Preferences
                                            </span>
                                        </div>

                                        <div
                                            className={
                                                step >=
                                                    3
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <b>
                                                3
                                            </b>

                                            <span>
                                                Contact
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                <div className="planner__assurance">

                                    <FaCheck />

                                    <span>
                                        No payment is
                                        required. This
                                        is an enquiry
                                        only.
                                    </span>

                                </div>

                            </aside>

                            {/* =================================================
                                FORM AREA
                            ================================================= */}

                            <main className="planner__formArea">

                                {/* =================================================
                                    SUCCESS
                                ================================================= */}

                                {submitted ? (

                                    <div className="planner__success">

                                        <div className="planner__successIcon">
                                            <FaCheck />
                                        </div>

                                        <span>
                                            ENQUIRY READY
                                        </span>

                                        <h2>
                                            Your trip is
                                            ready to
                                            discuss.
                                        </h2>

                                        <p>
                                            We&apos;ve
                                            prepared
                                            your travel
                                            details for
                                            WhatsApp.
                                            Continue the
                                            conversation
                                            to discuss
                                            availability
                                            and package
                                            options.
                                        </p>

                                        <a
                                            href={
                                                quickWhatsApp
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaWhatsapp />
                                            Continue on
                                            WhatsApp
                                        </a>

                                        <button
                                            type="button"
                                            onClick={
                                                closePlanner
                                            }
                                        >
                                            Close planner
                                        </button>

                                    </div>

                                ) : (

                                    <>

                                        {/* MOBILE STEP */}

                                        <div className="planner__mobileStep">

                                            <span>
                                                STEP{" "}
                                                {step}{" "}
                                                OF 3
                                            </span>

                                            <strong>
                                                {step ===
                                                    1
                                                    ? "When are you travelling?"
                                                    : step ===
                                                        2
                                                        ? "Make it your kind of trip"
                                                        : "How can we reach you?"}
                                            </strong>

                                        </div>

                                        {/* =================================================
                                            STEP 1
                                        ================================================= */}

                                        {step ===
                                            1 && (

                                                <section className="planner__stepContent">

                                                    <div className="planner__intro">

                                                        <span>
                                                            01 /
                                                            TRAVEL
                                                            DATE
                                                        </span>

                                                        <h2>
                                                            When would
                                                            you like
                                                            to go?
                                                        </h2>

                                                        <p>
                                                            No fixed
                                                            plans?
                                                            That&apos;s
                                                            completely
                                                            fine. We
                                                            can work
                                                            around
                                                            your
                                                            schedule.
                                                        </p>

                                                    </div>

                                                    <div className="planner__dateQuick">

                                                        <button
                                                            type="button"
                                                            className={
                                                                form.flexible
                                                                    ? "active"
                                                                    : ""
                                                            }
                                                            onClick={() =>
                                                                selectQuickDate(
                                                                    "flexible"
                                                                )
                                                            }
                                                        >
                                                            <span>
                                                                Flexible
                                                            </span>

                                                            <small>
                                                                Find
                                                                the
                                                                best
                                                                dates
                                                            </small>
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className={
                                                                !form.flexible &&
                                                                    form.date ===
                                                                    addDays(
                                                                        7
                                                                    )
                                                                    ? "active"
                                                                    : ""
                                                            }
                                                            onClick={() =>
                                                                selectQuickDate(
                                                                    "soon"
                                                                )
                                                            }
                                                        >
                                                            <span>
                                                                Soon
                                                            </span>

                                                            <small>
                                                                Within
                                                                1 week
                                                            </small>
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className={
                                                                !form.flexible &&
                                                                    form.date ===
                                                                    addDays(
                                                                        30
                                                                    )
                                                                    ? "active"
                                                                    : ""
                                                            }
                                                            onClick={() =>
                                                                selectQuickDate(
                                                                    "later"
                                                                )
                                                            }
                                                        >
                                                            <span>
                                                                Later
                                                            </span>

                                                            <small>
                                                                Around
                                                                1
                                                                month
                                                            </small>
                                                        </button>

                                                    </div>

                                                    <div className="planner__customDate">

                                                        <label>

                                                            <span>
                                                                OR
                                                                CHOOSE
                                                                A
                                                                SPECIFIC
                                                                DATE
                                                            </span>

                                                            <div className="planner__dateInput">

                                                                <FaCalendarAlt />

                                                                <input
                                                                    type="date"
                                                                    min={addDays(
                                                                        1
                                                                    )}
                                                                    value={
                                                                        form.date
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        update(
                                                                            "date",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );

                                                                        update(
                                                                            "flexible",
                                                                            false
                                                                        );
                                                                    }}
                                                                />

                                                            </div>

                                                            {errors.date && (
                                                                <small className="planner__error">
                                                                    {
                                                                        errors.date
                                                                    }
                                                                </small>
                                                            )}

                                                        </label>

                                                    </div>

                                                    <div className="planner__travellerHead">

                                                        <div>

                                                            <span>
                                                                TRAVELLERS
                                                            </span>

                                                            <strong>
                                                                Who&apos;s
                                                                coming?
                                                            </strong>

                                                        </div>

                                                        <small>
                                                            {
                                                                totalGuests
                                                            }{" "}
                                                            guests
                                                        </small>

                                                    </div>

                                                    <div className="planner__guests">

                                                        {/* ADULTS */}

                                                        <div className="planner__guestBox">

                                                            <div>

                                                                <span className="planner__guestIcon">
                                                                    <FaUsers />
                                                                </span>

                                                                <div>

                                                                    <strong>
                                                                        Adults
                                                                    </strong>

                                                                    <small>
                                                                        12+
                                                                        years
                                                                    </small>

                                                                </div>

                                                            </div>

                                                            <div className="planner__counter">

                                                                <button
                                                                    type="button"
                                                                    disabled={
                                                                        form.adults <=
                                                                        1
                                                                    }
                                                                    onClick={() =>
                                                                        changeGuests(
                                                                            "adults",
                                                                            -1
                                                                        )
                                                                    }
                                                                >
                                                                    <FaMinus />
                                                                </button>

                                                                <b>
                                                                    {
                                                                        form.adults
                                                                    }
                                                                </b>

                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        changeGuests(
                                                                            "adults",
                                                                            1
                                                                        )
                                                                    }
                                                                >
                                                                    <FaPlus />
                                                                </button>

                                                            </div>

                                                        </div>

                                                        {/* CHILDREN */}

                                                        <div className="planner__guestBox">

                                                            <div>

                                                                <span className="planner__guestIcon muted">
                                                                    <FaUsers />
                                                                </span>

                                                                <div>

                                                                    <strong>
                                                                        Children
                                                                    </strong>

                                                                    <small>
                                                                        2–11
                                                                        years
                                                                    </small>

                                                                </div>

                                                            </div>

                                                            <div className="planner__counter">

                                                                <button
                                                                    type="button"
                                                                    disabled={
                                                                        form.children <=
                                                                        0
                                                                    }
                                                                    onClick={() =>
                                                                        changeGuests(
                                                                            "children",
                                                                            -1
                                                                        )
                                                                    }
                                                                >
                                                                    <FaMinus />
                                                                </button>

                                                                <b>
                                                                    {
                                                                        form.children
                                                                    }
                                                                </b>

                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        changeGuests(
                                                                            "children",
                                                                            1
                                                                        )
                                                                    }
                                                                >
                                                                    <FaPlus />
                                                                </button>

                                                            </div>

                                                        </div>

                                                    </div>

                                                    {/* STEP 1 ACTION */}

                                                    <div className="planner__stickyAction">

                                                        <div>

                                                            <small>
                                                                YOUR
                                                                SELECTION
                                                            </small>

                                                            <strong>
                                                                {form.flexible
                                                                    ? "Flexible dates"
                                                                    : formatDate(
                                                                        form.date
                                                                    )}

                                                                {" · "}

                                                                {
                                                                    totalGuests
                                                                }{" "}
                                                                guests
                                                            </strong>

                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={
                                                                goStepTwo
                                                            }
                                                        >
                                                            Continue
                                                            <FaArrowRight />
                                                        </button>

                                                    </div>

                                                </section>
                                            )}

                                        {/* =================================================
                                            STEP 2
                                        ================================================= */}

                                        {step ===
                                            2 && (

                                                <section className="planner__stepContent">

                                                    <div className="planner__intro">

                                                        <span>
                                                            02 /
                                                            PREFERENCES
                                                        </span>

                                                        <h2>
                                                            Make it
                                                            your kind
                                                            of trip.
                                                        </h2>

                                                        <p>
                                                            These
                                                            quick
                                                            choices
                                                            help us
                                                            understand
                                                            what you
                                                            actually
                                                            want from
                                                            the
                                                            holiday.
                                                        </p>

                                                    </div>

                                                    {/* TRAVEL STYLE */}

                                                    <div className="planner__preference">

                                                        <div className="planner__preferenceHead">

                                                            <div>

                                                                <span>
                                                                    TRAVEL
                                                                    STYLE
                                                                </span>

                                                                <strong>
                                                                    What
                                                                    sounds
                                                                    right?
                                                                </strong>

                                                            </div>

                                                        </div>

                                                        <div className="planner__choiceGrid">

                                                            {[
                                                                "Relax & Explore",
                                                                "Adventure",
                                                                "Family",
                                                                "Romantic",
                                                            ].map(
                                                                (
                                                                    item
                                                                ) => (

                                                                    <button
                                                                        type="button"
                                                                        key={
                                                                            item
                                                                        }
                                                                        className={
                                                                            form.style ===
                                                                                item
                                                                                ? "active"
                                                                                : ""
                                                                        }
                                                                        onClick={() =>
                                                                            update(
                                                                                "style",
                                                                                item
                                                                            )
                                                                        }
                                                                    >

                                                                        <span>
                                                                            {
                                                                                item
                                                                            }
                                                                        </span>

                                                                        {form.style ===
                                                                            item && (
                                                                                <FaCheck />
                                                                            )}

                                                                    </button>

                                                                )
                                                            )}

                                                        </div>

                                                    </div>

                                                    {/* HOTEL */}

                                                    <div className="planner__preference">

                                                        <div className="planner__preferenceHead">

                                                            <div>

                                                                <span>
                                                                    STAY
                                                                </span>

                                                                <strong>
                                                                    Hotel
                                                                    preference
                                                                </strong>

                                                            </div>

                                                        </div>

                                                        <div className="planner__choiceGrid planner__choiceGrid--three">

                                                            {[
                                                                "Comfort",
                                                                "Premium",
                                                                "Luxury",
                                                            ].map(
                                                                (
                                                                    item
                                                                ) => (

                                                                    <button
                                                                        type="button"
                                                                        key={
                                                                            item
                                                                        }
                                                                        className={
                                                                            form.hotel ===
                                                                                item
                                                                                ? "active"
                                                                                : ""
                                                                        }
                                                                        onClick={() =>
                                                                            update(
                                                                                "hotel",
                                                                                item
                                                                            )
                                                                        }
                                                                    >

                                                                        <span>
                                                                            {
                                                                                item
                                                                            }
                                                                        </span>

                                                                        {form.hotel ===
                                                                            item && (
                                                                                <FaCheck />
                                                                            )}

                                                                    </button>

                                                                )
                                                            )}

                                                        </div>

                                                    </div>

                                                    {/* SPECIAL REQUEST */}

                                                    <div className="planner__field planner__messageField">

                                                        <span>
                                                            SPECIAL
                                                            REQUEST
                                                        </span>

                                                        <textarea
                                                            placeholder="Tell us anything important about your trip..."
                                                            value={
                                                                form.message
                                                            }
                                                            onChange={(
                                                                e
                                                            ) =>
                                                                update(
                                                                    "message",
                                                                    e
                                                                        .target
                                                                        .value
                                                                )
                                                            }
                                                        />

                                                    </div>

                                                    {/* SUMMARY */}

                                                    <div className="planner__quickSummary">

                                                        <div>

                                                            <small>
                                                                DATE
                                                            </small>

                                                            <strong>
                                                                {form.flexible
                                                                    ? "Flexible"
                                                                    : formatDate(
                                                                        form.date
                                                                    )}
                                                            </strong>

                                                        </div>

                                                        <div>

                                                            <small>
                                                                GUESTS
                                                            </small>

                                                            <strong>
                                                                {
                                                                    totalGuests
                                                                }
                                                            </strong>

                                                        </div>

                                                        <div>

                                                            <small>
                                                                STYLE
                                                            </small>

                                                            <strong>
                                                                {
                                                                    form.style
                                                                }
                                                            </strong>

                                                        </div>

                                                    </div>

                                                    {/* STEP 2 ACTION */}

                                                    <div className="planner__stickyAction">

                                                        <button
                                                            type="button"
                                                            className="planner__backButton"
                                                            onClick={() =>
                                                                setStep(
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            <FaChevronLeft />
                                                            Back
                                                        </button>

                                                        <div>

                                                            <small>
                                                                STEP
                                                                2 OF
                                                                3
                                                            </small>

                                                            <strong>
                                                                Travel
                                                                preferences
                                                            </strong>

                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={
                                                                goStepThree
                                                            }
                                                        >
                                                            Continue
                                                            <FaArrowRight />
                                                        </button>

                                                    </div>

                                                </section>
                                            )}

                                        {/* =================================================
                                            STEP 3
                                        ================================================= */}

                                        {step ===
                                            3 && (

                                                <section className="planner__stepContent">

                                                    <div className="planner__intro">

                                                        <span>
                                                            03 /
                                                            CONTACT
                                                        </span>

                                                        <h2>
                                                            Where
                                                            should we
                                                            send your
                                                            plan?
                                                        </h2>

                                                        <p>
                                                            Add your
                                                            details
                                                            and we&apos;ll
                                                            prepare
                                                            your
                                                            personalised
                                                            enquiry
                                                            for
                                                            WhatsApp.
                                                        </p>

                                                    </div>

                                                    {/* CONTACT */}

                                                    <div className="planner__contactGrid">

                                                        <label className="planner__field planner__field--full">

                                                            <span>
                                                                FULL
                                                                NAME
                                                            </span>

                                                            <input
                                                                type="text"
                                                                autoComplete="name"
                                                                placeholder="Your full name"
                                                                value={
                                                                    form.name
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) =>
                                                                    update(
                                                                        "name",
                                                                        e
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                            />

                                                            {errors.name && (
                                                                <small className="planner__error">
                                                                    {
                                                                        errors.name
                                                                    }
                                                                </small>
                                                            )}

                                                        </label>

                                                        <label className="planner__field">

                                                            <span>
                                                                PHONE
                                                                NUMBER
                                                            </span>

                                                            <input
                                                                type="tel"
                                                                inputMode="tel"
                                                                autoComplete="tel"
                                                                placeholder="+91 98765 43210"
                                                                value={
                                                                    form.phone
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) =>
                                                                    update(
                                                                        "phone",
                                                                        e
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                            />

                                                            {errors.phone && (
                                                                <small className="planner__error">
                                                                    {
                                                                        errors.phone
                                                                    }
                                                                </small>
                                                            )}

                                                        </label>

                                                        <label className="planner__field">

                                                            <span>
                                                                EMAIL
                                                                ADDRESS
                                                            </span>

                                                            <input
                                                                type="email"
                                                                autoComplete="email"
                                                                placeholder="you@example.com"
                                                                value={
                                                                    form.email
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) =>
                                                                    update(
                                                                        "email",
                                                                        e
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                            />

                                                            {errors.email && (
                                                                <small className="planner__error">
                                                                    {
                                                                        errors.email
                                                                    }
                                                                </small>
                                                            )}

                                                        </label>

                                                    </div>

                                                    {/* REVIEW */}

                                                    <div className="planner__review">

                                                        <div>

                                                            <span>
                                                                DESTINATION
                                                            </span>

                                                            <strong>
                                                                {
                                                                    tour.location
                                                                }
                                                            </strong>

                                                        </div>

                                                        <div>

                                                            <span>
                                                                TRAVEL
                                                                DATE
                                                            </span>

                                                            <strong>
                                                                {form.flexible
                                                                    ? "Flexible dates"
                                                                    : formatDate(
                                                                        form.date
                                                                    )}
                                                            </strong>

                                                        </div>

                                                        <div>

                                                            <span>
                                                                TRAVELLERS
                                                            </span>

                                                            <strong>
                                                                {
                                                                    totalGuests
                                                                }{" "}
                                                                guests
                                                            </strong>

                                                        </div>

                                                        <div>

                                                            <span>
                                                                HOTEL
                                                            </span>

                                                            <strong>
                                                                {
                                                                    form.hotel
                                                                }
                                                            </strong>

                                                        </div>

                                                    </div>

                                                    {/* STEP 3 ACTION */}

                                                    <div className="planner__stickyAction">

                                                        <button
                                                            type="button"
                                                            className="planner__backButton"
                                                            onClick={() =>
                                                                setStep(
                                                                    2
                                                                )
                                                            }
                                                        >
                                                            <FaChevronLeft />
                                                            Back
                                                        </button>

                                                        <div>

                                                            <small>
                                                                READY
                                                                TO SEND
                                                            </small>

                                                            <strong>
                                                                Your
                                                                enquiry
                                                                is
                                                                complete
                                                            </strong>

                                                        </div>

                                                        <button
                                                            type="button"
                                                            className="planner__sendButton"
                                                            onClick={
                                                                submit
                                                            }
                                                        >
                                                            <FaWhatsapp />
                                                            Send
                                                            enquiry
                                                        </button>

                                                    </div>

                                                    <p className="planner__privacy">
                                                        No payment
                                                        is taken
                                                        here. Your
                                                        information
                                                        is used
                                                        only for
                                                        this travel
                                                        enquiry.
                                                    </p>

                                                </section>
                                            )}

                                    </>
                                )}

                            </main>

                        </div>

                    </div>

                </div>
            )}
        </>
    );
};

export default TourCTA;