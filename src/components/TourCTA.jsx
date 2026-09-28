import React, { useEffect, useState } from "react";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaCheck,
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

const TourCTA = ({ tour }) => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [sent, setSent] = useState(false);

    const [form, setForm] = useState({
        date: "",
        flexible: true,
        adults: 2,
        children: 0,
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!tour) return null;

    const highlights = tour.highlights?.slice(0, 4) || [];

    const closeModal = () => {
        setOpen(false);
        setStep(1);
        setSent(false);
    };

    const changePeople = (key, amount) => {
        setForm((prev) => ({
            ...prev,
            [key]: Math.max(key === "adults" ? 1 : 0, prev[key] + amount),
        }));
    };

    const submit = (e) => {
        e.preventDefault();

        const date = form.flexible
            ? "Flexible dates"
            : form.date || "Date to be discussed";

        const message = `Hello ASAP Holidays,

I am interested in:
Tour: ${tour.title}
Destination: ${tour.location}
Duration: ${tour.duration}
Price: ${tour.price}

Travel date: ${date}
Adults: ${form.adults}
Children: ${form.children}

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Special request:
${form.message || "None"}

Please share the available package details.`;

        window.open(
            `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

        setSent(true);
    };

    return (
        <>
            <section className="tourCtaPremium">

                <div className="tourCtaPremium__image">
                    <img src={tour.image} alt={tour.title} />
                    <div className="tourCtaPremium__shade" />

                    <div className="tourCtaPremium__top">
                        <span>ASAP HOLIDAYS</span>
                        {tour.offer && <b>{tour.offer}</b>}
                    </div>

                    <div className="tourCtaPremium__caption">
                        <span>{tour.location}</span>
                        <h2>Make this journey<br />yours.</h2>
                    </div>
                </div>

                <div className="tourCtaPremium__card">

                    <div className="tourCtaPremium__cardHead">
                        <span>PLAN YOUR ESCAPE</span>
                        <div className="tourCtaPremium__line" />
                    </div>

                    <h3>{tour.title}</h3>

                    <p className="tourCtaPremium__description">
                        {tour.description ||
                            "Tell us what you are looking for and our travel experts will create a personalised holiday experience for you."}
                    </p>

                    <div className="tourCtaPremium__meta">
                        <div>
                            <small>Duration</small>
                            <strong>{tour.duration}</strong>
                        </div>

                        <div>
                            <small>Starting from</small>
                            <strong>{tour.price}</strong>
                        </div>

                        <div>
                            <small>Guest rating</small>
                            <strong>★ {tour.rating}</strong>
                        </div>
                    </div>

                    {highlights.length > 0 && (
                        <div className="tourCtaPremium__highlights">
                            {highlights.map((item, index) => (
                                <span key={index}>
                                    <FaCheck /> {item}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="tourCtaPremium__actions">
                        <button onClick={() => setOpen(true)}>
                            Plan this trip
                            <FaArrowRight />
                        </button>

                        <a
                            href={`https://wa.me/${WHATSAPP}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>

                    <div className="tourCtaPremium__note">
                        <span>Free consultation</span>
                        <span>•</span>
                        <span>No booking commitment</span>
                    </div>
                </div>

            </section>

            {open && (
                <div className="tourCtaModal">
                    <div
                        className="tourCtaModal__overlay"
                        onClick={closeModal}
                    />

                    <div className="tourCtaModal__box">

                        <button
                            className="tourCtaModal__close"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>

                        {!sent ? (
                            <>
                                <div className="tourCtaModal__intro">
                                    <span>LET'S PLAN IT</span>

                                    <div className="tourCtaModal__steps">
                                        <i className={step >= 1 ? "active" : ""} />
                                        <i className={step >= 2 ? "active" : ""} />
                                    </div>

                                    <h3>
                                        {step === 1
                                            ? "When would you like to go?"
                                            : "Where should we send your plan?"}
                                    </h3>

                                    <p>
                                        {step === 1
                                            ? `A few details about your ${tour.title} trip.`
                                            : "We'll use these details to prepare your enquiry."}
                                    </p>
                                </div>

                                {step === 1 ? (
                                    <div className="tourCtaModal__body">

                                        <div className="tourCtaModal__tour">
                                            <img src={tour.image} alt={tour.title} />
                                            <div>
                                                <small>{tour.location}</small>
                                                <strong>{tour.title}</strong>
                                            </div>
                                        </div>

                                        <label className="tourCtaModal__label">
                                            <FaCalendarAlt />
                                            Preferred date
                                        </label>

                                        <input
                                            className="tourCtaModal__input"
                                            type="date"
                                            disabled={form.flexible}
                                            value={form.date}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    date: e.target.value,
                                                })
                                            }
                                        />

                                        <label className="tourCtaModal__check">
                                            <input
                                                type="checkbox"
                                                checked={form.flexible}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        flexible: e.target.checked,
                                                    })
                                                }
                                            />
                                            My dates are flexible
                                        </label>

                                        <div className="tourCtaModal__travellers">

                                            <div>
                                                <FaUsers />
                                                <div>
                                                    <strong>Travellers</strong>
                                                    <small>Adults & children</small>
                                                </div>
                                            </div>

                                            <div className="tourCtaModal__counter">
                                                <button
                                                    onClick={() =>
                                                        changePeople("adults", -1)
                                                    }
                                                >
                                                    <FaMinus />
                                                </button>

                                                <b>{form.adults}</b>

                                                <button
                                                    onClick={() =>
                                                        changePeople("adults", 1)
                                                    }
                                                >
                                                    <FaPlus />
                                                </button>

                                                <span>adults</span>
                                            </div>

                                        </div>

                                        <div className="tourCtaModal__travellers">

                                            <div>
                                                <div>
                                                    <strong>Children</strong>
                                                    <small>2–11 years</small>
                                                </div>
                                            </div>

                                            <div className="tourCtaModal__counter">
                                                <button
                                                    onClick={() =>
                                                        changePeople("children", -1)
                                                    }
                                                >
                                                    <FaMinus />
                                                </button>

                                                <b>{form.children}</b>

                                                <button
                                                    onClick={() =>
                                                        changePeople("children", 1)
                                                    }
                                                >
                                                    <FaPlus />
                                                </button>

                                                <span>children</span>
                                            </div>

                                        </div>

                                        <button
                                            className="tourCtaModal__next"
                                            onClick={() => setStep(2)}
                                        >
                                            Continue
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        className="tourCtaModal__body"
                                        onSubmit={submit}
                                    >
                                        <div className="tourCtaModal__field">
                                            <label>Your name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        name: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>

                                        <div className="tourCtaModal__grid">
                                            <div className="tourCtaModal__field">
                                                <label>Phone</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="+91"
                                                    value={form.phone}
                                                    onChange={(e) =>
                                                        setForm({
                                                            ...form,
                                                            phone: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>

                                            <div className="tourCtaModal__field">
                                                <label>Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="you@email.com"
                                                    value={form.email}
                                                    onChange={(e) =>
                                                        setForm({
                                                            ...form,
                                                            email: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="tourCtaModal__field">
                                            <label>Anything else?</label>
                                            <textarea
                                                rows="4"
                                                placeholder="Hotel preference, activities, special occasion..."
                                                value={form.message}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        message: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>

                                        <div className="tourCtaModal__formActions">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="tourCtaModal__back"
                                            >
                                                Back
                                            </button>

                                            <button
                                                type="submit"
                                                className="tourCtaModal__submit"
                                            >
                                                <FaWhatsapp />
                                                Send on WhatsApp
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </>
                        ) : (
                            <div className="tourCtaModal__success">
                                <div className="tourCtaModal__successIcon">
                                    <FaCheck />
                                </div>

                                <span>ENQUIRY READY</span>

                                <h3>Your holiday is taking shape.</h3>

                                <p>
                                    Your enquiry for <strong>{tour.title}</strong>{" "}
                                    has been prepared in WhatsApp.
                                </p>

                                <a
                                    href={`https://wa.me/${WHATSAPP}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaWhatsapp />
                                    Continue on WhatsApp
                                </a>

                                <button onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </>
    );
};

export default TourCTA;
