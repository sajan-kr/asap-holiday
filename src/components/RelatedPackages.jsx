import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Clock3, Star } from "lucide-react";
import "./RelatedPackages.css";

const RelatedPackages = ({ currentSlug, currentPackage, packagesData }) => {
  const navigate = useNavigate();

  // Use provided data or import it through the parent component.
  const allPackages = packagesData || {};

  const relatedPackages = Object.entries(allPackages)
    .filter(([slug, item]) => {
      return slug !== currentSlug && item && item.title;
    })
    .slice(0, 3);

  if (relatedPackages.length === 0) {
    return null;
  }

  const handleExplore = (slug) => {
    navigate(`/packages/${slug}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="related-packages-section">
      <div className="related-packages-heading">
        <div className="related-packages-heading-copy">
          <span className="related-packages-eyebrow">
            <span className="related-packages-eyebrow-line" />
            MORE TO EXPLORE
          </span>

          <h2>
            Your next escape
            <br />
            <span>starts here.</span>
          </h2>

          <p>
            Discover more incredible destinations and find the perfect
            experience for your next getaway.
          </p>
        </div>

        <div className="related-packages-heading-note">
          <span className="related-packages-note-dot" />
          <span>Find your next favourite destination</span>
        </div>
      </div>

      <div className="related-packages-grid">
        {relatedPackages.map(([slug, item], index) => (
          <article
            className="related-package-card"
            key={slug}
            style={{ "--related-card-index": index }}
          >
            <button
              type="button"
              className="related-package-image-button"
              onClick={() => handleExplore(slug)}
              aria-label={`Explore ${item.title}`}
            >
              <img
                className="related-package-image"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <span className="related-package-image-overlay" />

              <span className="related-package-image-label">
                <MapPin size={13} />
                {item.location || item.title}
              </span>

              {item.rating && (
                <span className="related-package-rating">
                  <Star size={13} fill="currentColor" />
                  {item.rating}
                </span>
              )}
            </button>

            <div className="related-package-content">
              <div className="related-package-topline">
                <span>DESTINATION {String(index + 1).padStart(2, "0")}</span>
                <span className="related-package-topline-dot" />
              </div>

              <h3>{item.title}</h3>

              <p className="related-package-description">
                {item.description ||
                  `Discover unforgettable experiences in ${item.location || item.title}.`}
              </p>

              <div className="related-package-meta">
                <div className="related-package-duration">
                  <Clock3 size={15} />
                  <span>{item.duration || "Custom itinerary"}</span>
                </div>

                <div className="related-package-price">
                  {item.price || "Price on request"}
                  {item.price && (
                    <span className="related-package-price-unit">
                      / person
                    </span>
                  )}
                </div>
              </div>

              <button
                type="button"
                className="related-package-explore-btn"
                onClick={() => handleExplore(slug)}
              >
                <span>Explore Package</span>
                <span className="related-package-arrow">
                  <ArrowRight size={17} />
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="related-packages-footer">
        <span className="related-packages-footer-line" />

        <p>
          Different places.
          <strong> Extraordinary memories.</strong>
        </p>

        <span className="related-packages-footer-line" />
      </div>
    </section>
  );
};

export default RelatedPackages;