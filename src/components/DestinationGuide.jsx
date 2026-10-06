import React, { useState } from "react";

import {
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaLanguage,
  FaHotel,
  FaCar,
  FaLightbulb,
} from "react-icons/fa";

import "./DestinationGuide.css";

const DestinationGuide = ({ destination }) => {
  // ------------------------------------------------
  // Active guide tab
  // ------------------------------------------------
  const [activeTab, setActiveTab] = useState("overview");


  // ------------------------------------------------
  // Guide information
  //
  // These values can later be moved into
  // destinationsData.js for destination-specific data.
  // ------------------------------------------------
  const guideTabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <FaCalendarAlt />,
    },
    {
      id: "stay",
      label: "Where To Stay",
      icon: <FaHotel />,
    },
    {
      id: "transport",
      label: "Getting Around",
      icon: <FaCar />,
    },
    {
      id: "tips",
      label: "Travel Tips",
      icon: <FaLightbulb />,
    },
  ];


  return (
    <section
      id="destination-guide"
      className="destination-guide"
    >

      <div className="destination-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}
        <div className="destination-section-header">

          <span className="destination-section-eyebrow">
            TRAVEL GUIDE
          </span>

          <h2>
            Everything You Need To Know
          </h2>

          <p>
            Plan your {destination.name} trip with
            useful information before you travel.
          </p>

        </div>


        {/* =================================================
            GUIDE WRAPPER
        ================================================= */}
        <div className="destination-guide__wrapper">

          {/* =================================================
              TAB NAVIGATION
          ================================================= */}
          <div className="destination-guide__tabs">

            {guideTabs.map((tab) => (

              <button
                key={tab.id}
                type="button"
                className={`
                  destination-guide__tab
                  ${
                    activeTab === tab.id
                      ? "is-active"
                      : ""
                  }
                `}
                onClick={() => setActiveTab(tab.id)}
              >

                <span className="destination-guide__tab-icon">
                  {tab.icon}
                </span>

                <span>
                  {tab.label}
                </span>

              </button>

            ))}

          </div>


          {/* =================================================
              TAB CONTENT
          ================================================= */}
          <div className="destination-guide__content">

            {/* ===============================================
                OVERVIEW
            =============================================== */}
            {activeTab === "overview" && (

              <div className="destination-guide__panel">

                <div className="destination-guide__panel-heading">

                  <span>
                    PLAN YOUR TRIP
                  </span>

                  <h3>
                    Know Before You Go
                  </h3>

                  <p>
                    A few important details to help
                    you prepare for your journey.
                  </p>

                </div>


                <div className="destination-guide__info-grid">

                  {/* Best Time */}
                  <div className="destination-guide__info-card">

                    <div className="destination-guide__info-icon">
                      <FaCalendarAlt />
                    </div>

                    <div>
                      <span>Best Time</span>

                      <strong>
                        Year Round
                      </strong>
                    </div>

                  </div>


                  {/* Duration */}
                  <div className="destination-guide__info-card">

                    <div className="destination-guide__info-icon">
                      <FaClock />
                    </div>

                    <div>
                      <span>Recommended Duration</span>

                      <strong>
                        5 - 7 Days
                      </strong>
                    </div>

                  </div>


                  {/* Currency */}
                  <div className="destination-guide__info-card">

                    <div className="destination-guide__info-icon">
                      <FaMoneyBillWave />
                    </div>

                    <div>
                      <span>Currency</span>

                      <strong>
                        Local Currency
                      </strong>
                    </div>

                  </div>


                  {/* Language */}
                  <div className="destination-guide__info-card">

                    <div className="destination-guide__info-icon">
                      <FaLanguage />
                    </div>

                    <div>
                      <span>Language</span>

                      <strong>
                        English & Local
                      </strong>
                    </div>

                  </div>

                </div>

              </div>

            )}


            {/* ===============================================
                WHERE TO STAY
            =============================================== */}
            {activeTab === "stay" && (

              <div className="destination-guide__panel">

                <div className="destination-guide__panel-heading">

                  <span>
                    ACCOMMODATION
                  </span>

                  <h3>
                    Where Should You Stay?
                  </h3>

                  <p>
                    Choose accommodation according
                    to your travel style and budget.
                  </p>

                </div>


                <div className="destination-guide__options">

                  <div className="destination-guide__option">

                    <div className="destination-guide__option-icon">
                      <FaHotel />
                    </div>

                    <div>
                      <h4>
                        Luxury Hotels
                      </h4>

                      <p>
                        Premium properties with
                        exceptional comfort and services.
                      </p>
                    </div>

                  </div>


                  <div className="destination-guide__option">

                    <div className="destination-guide__option-icon">
                      <FaHotel />
                    </div>

                    <div>
                      <h4>
                        Family-Friendly Stays
                      </h4>

                      <p>
                        Comfortable accommodation
                        suitable for families and groups.
                      </p>
                    </div>

                  </div>


                  <div className="destination-guide__option">

                    <div className="destination-guide__option-icon">
                      <FaHotel />
                    </div>

                    <div>
                      <h4>
                        Budget Accommodation
                      </h4>

                      <p>
                        Practical and comfortable
                        options for budget-conscious travelers.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            )}


            {/* ===============================================
                TRANSPORT
            =============================================== */}
            {activeTab === "transport" && (

              <div className="destination-guide__panel">

                <div className="destination-guide__panel-heading">

                  <span>
                    TRANSPORTATION
                  </span>

                  <h3>
                    Getting Around
                  </h3>

                  <p>
                    Explore the destination comfortably
                    with the right transportation option.
                  </p>

                </div>


                <div className="destination-guide__options">

                  <div className="destination-guide__option">

                    <div className="destination-guide__option-icon">
                      <FaPlane />
                    </div>

                    <div>
                      <h4>
                        Airport Transfers
                      </h4>

                      <p>
                        Convenient transfers between
                        the airport and your accommodation.
                      </p>
                    </div>

                  </div>


                  <div className="destination-guide__option">

                    <div className="destination-guide__option-icon">
                      <FaCar />
                    </div>

                    <div>
                      <h4>
                        Private Transport
                      </h4>

                      <p>
                        Travel comfortably with private
                        cars and dedicated transportation.
                      </p>
                    </div>

                  </div>


                  <div className="destination-guide__option">

                    <div className="destination-guide__option-icon">
                      <FaCar />
                    </div>

                    <div>
                      <h4>
                        Local Transport
                      </h4>

                      <p>
                        Use local transportation to
                        explore nearby attractions.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            )}


            {/* ===============================================
                TRAVEL TIPS
            =============================================== */}
            {activeTab === "tips" && (

              <div className="destination-guide__panel">

                <div className="destination-guide__panel-heading">

                  <span>
                    TRAVEL SMART
                  </span>

                  <h3>
                    Helpful Travel Tips
                  </h3>

                  <p>
                    Simple tips to make your trip
                    smoother and more enjoyable.
                  </p>

                </div>


                <div className="destination-guide__tips">

                  <div className="destination-guide__tip">

                    <span>01</span>

                    <div>
                      <h4>
                        Plan Important Activities Early
                      </h4>

                      <p>
                        Reserve popular experiences
                        and activities in advance.
                      </p>
                    </div>

                  </div>


                  <div className="destination-guide__tip">

                    <span>02</span>

                    <div>
                      <h4>
                        Keep Important Documents Safe
                      </h4>

                      <p>
                        Carry copies of important
                        travel documents and bookings.
                      </p>
                    </div>

                  </div>


                  <div className="destination-guide__tip">

                    <span>03</span>

                    <div>
                      <h4>
                        Stay Flexible
                      </h4>

                      <p>
                        Leave some free time to discover
                        unexpected places and experiences.
                      </p>
                    </div>

                  </div>


                  <div className="destination-guide__tip">

                    <span>04</span>

                    <div>
                      <h4>
                        Ask Your Travel Expert
                      </h4>

                      <p>
                        Contact ASAP Holidays for
                        destination-specific assistance.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default DestinationGuide;