import React from "react";
import "./Partners.css";

const partners = [
  "/partner/travelPartnersLogo-02.png",
  "/partner/travelPartnersLogo-03.png",
  "/partner/travelPartnersLogo-04.png",
  "/partner/travelPartnersLogo-05.png",
  "/partner/travelPartnersLogo-06.png",
  "/partner/travelPartnersLogo-07.png",
  "/partner/travelPartnersLogo-08.png",
  "/partner/travelPartnersLogo-09.png",
  "/partner/travelPartnersLogo-10.png",
  "/partner/travelPartnersLogo-11.png",
  "/partner/travelPartnersLogo-14.png",
  "/partner/travelPartnersLogo-16.png",
  "/partner/travelPartnersLogo-18.png",
];

const Partners = () => {
  return (
    <section className="partners-section">

      {/* TOP LIGHT */}

      <div className="partners-top-light"></div>

      <div className="partners-container">

        {/* HEADING */}

        <div className="partners-heading">

          <span className="partners-tag">
            Trusted Worldwide
          </span>

          <h2>
            Our Premium
            <span> Travel Partners</span>
          </h2>

        </div>

        {/* SLIDER */}

        <div className="partners-slider">

          <div className="partners-track">

            {[...partners, ...partners].map((logo, index) => (

              <div className="partner-card" key={index}>

                <img
                  src={logo}
                  alt="partner"
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Partners;