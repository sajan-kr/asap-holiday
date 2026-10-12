import React, { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaCompass,
  FaHeart,
  FaRegHeart,
  FaMapMarkerAlt,
  FaSearch,
  FaTimes,
  FaClock,
} from "react-icons/fa";
import "./DestinationHighlights.css";

const STORAGE_KEY = "asap-holidays-attraction-favorites";

function readFavorites() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function normalizePlace(item, index, destinationName) {
  if (typeof item === "string") {
    return {
      id: `${destinationName}-${index}-${item}`,
      name: item,
      category: "Places",
      location: destinationName,
      description: "",
      image: "",
      duration: "",
      url: "",
    };
  }

  if (!item || typeof item !== "object") return null;

  const name = item.name || item.title || item.attractionName || item.placeName;
  if (!name) return null;

  return {
    ...item,
    id: String(item.id || item.slug || `${destinationName}-${index}-${name}`),
    name,
    category: item.category || item.type || item.tag || "Places",
    location: item.location || item.city || item.address || destinationName,
    description: item.description || item.summary || item.shortDescription || "",
    image: item.image || item.imageUrl || item.img || item.coverImage || item.thumbnail || "",
    duration: item.duration || item.visitDuration || "",
    url: item.url || item.link || item.detailsUrl || "",
  };
}

function DestinationHighlights({
  destination = {},
  attractions: attractionsProp,
  planTripUrl = "",
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [savedOnly, setSavedOnly] = useState(false);
  const [sort, setSort] = useState("recommended");
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useState(readFavorites);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [bookingMessage, setBookingMessage] = useState("");

  const destinationName =
    destination.name || destination.title || destination.destinationName || "Your Destination";

  const rawAttractions =
    (Array.isArray(attractionsProp) && attractionsProp.length > 0
      ? attractionsProp
      : null) ||
    [
      destination.attractions,
      destination.popularAttractions,
      destination.famousPlaces,
      destination.highlights,
      destination.experiences,
      destination.thingsToDo,
    ].find(
      (value) => Array.isArray(value) && value.length > 0
    ) ||
    [];

  const attractions = useMemo(
    () => rawAttractions.map((item, index) => normalizePlace(item, index, destinationName)).filter(Boolean),
    [rawAttractions, destinationName]
  );

  const categories = useMemo(
    () => ["All", ...new Set(attractions.map((item) => item.category).filter((value) => value && value !== "All"))],
    [attractions]
  );

  const filteredPlaces = useMemo(() => {
    const query = search.trim().toLowerCase();
    let result = attractions.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = [item.name, item.category, item.location, item.description]
        .join(" ")
        .toLowerCase()
        .includes(query);
      const matchesSaved = !savedOnly || favorites.includes(item.id);
      return matchesCategory && matchesSearch && matchesSaved;
    });
    if (sort === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [attractions, search, activeCategory, savedOnly, favorites, sort]);

  const visiblePlaces = showAll ? filteredPlaces : filteredPlaces.slice(0, 4);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // Favorites still work in the current session if storage is unavailable.
    }
  }, [favorites]);

  useEffect(() => {
    if (!selectedPlace) return undefined;
    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedPlace(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPlace]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
    );
  }

  function navigateTo(url) {
    if (typeof url !== "string" || !url.trim()) return false;
    if (url.startsWith("#")) {
      const target = document.querySelector(url);
      if (!target) return false;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }
    window.location.assign(url);
    return true;
  }

  function handlePlanTrip() {
    setBookingMessage("");
    // Close the attraction-details popup when the user chooses to plan a trip.
    setSelectedPlace(null);

    const bookingUrl =
      planTripUrl || destination.bookingUrl || destination.tourUrl || destination.bookingLink || destination.url;

    if (bookingUrl && navigateTo(bookingUrl)) return;

    const selectors = ["#tour-booking", "#related-tours", "#booking", "#booking-form"];
    for (const selector of selectors) {
      const target = document.querySelector(selector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    setBookingMessage(
      `Booking is not configured for ${destinationName}. Add a valid bookingUrl to this destination's data, or add a booking section with id="tour-booking".`
    );
  }

  function clearFilters() {
    setSearch("");
    setActiveCategory("All");
    setSavedOnly(false);
    setSort("recommended");
    setShowAll(false);
  }

  return (
    <section className="dh-section" id="destination-highlights">
      <div className="dh-container">
        <div className="dh-heading-row">
          <div className="dh-heading-copy">
            <span className="dh-eyebrow"><FaCompass /> EXPLORE &amp; DISCOVER</span>
            <h2>Popular Places in <span>{destinationName}</span></h2>
            <p>Discover beautiful places, local experiences, and memorable stops for your next journey.</p>
          </div>
          <button type="button" className="dh-plan-button" onClick={handlePlanTrip}>
            Plan Your Trip <FaArrowRight />
          </button>
        </div>

        {bookingMessage && (
          <div className="dh-booking-message" role="status">
            <span>{bookingMessage}</span>
            <button type="button" onClick={() => setBookingMessage("")} aria-label="Dismiss message"><FaTimes /></button>
          </div>
        )}

        <div className="dh-toolbar">
          <label className="dh-search">
            <FaSearch />
            <input
              type="search"
              placeholder="Search attractions..."
              value={search}
              onChange={(event) => { setSearch(event.target.value); setShowAll(false); }}
              aria-label="Search attractions"
            />
            {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search"><FaTimes /></button>}
          </label>
          <button
            type="button"
            className={`dh-saved-filter ${savedOnly ? "active" : ""}`}
            onClick={() => { setSavedOnly((value) => !value); setShowAll(false); }}
            aria-pressed={savedOnly}
          ><FaHeart /> Saved <span>{favorites.length}</span></button>
          <label className="dh-sort">
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort places">
              <option value="recommended">Recommended</option>
              <option value="name">Name: A–Z</option>
            </select>
          </label>
        </div>

        <div className="dh-categories" aria-label="Filter places by category">
          {categories.map((value) => (
            <button type="button" key={value} className={activeCategory === value ? "active" : ""}
              onClick={() => { setActiveCategory(value); setShowAll(false); }}>{value}</button>
          ))}
        </div>

        <div className="dh-results">
          <span><strong>{filteredPlaces.length}</strong> {filteredPlaces.length === 1 ? "place" : "places"} to explore</span>
          {(search || activeCategory !== "All" || savedOnly || sort !== "recommended") && (
            <button type="button" onClick={clearFilters}>Clear filters</button>
          )}
        </div>

        {visiblePlaces.length > 0 ? (
          <div className="dh-grid">
            {visiblePlaces.map((place) => {
              const isSaved = favorites.includes(place.id);
              return (
                <article className="dh-card" key={place.id}>
                  <button className="dh-image-button" type="button" onClick={() => setSelectedPlace(place)} aria-label={`View ${place.name} details`}>
                    {place.image ? <img className="dh-image" src={place.image} alt={place.name} loading="lazy" /> : (
                      <div className="dh-image-placeholder"><FaCompass /><span>{place.name}</span></div>
                    )}
                    <span className="dh-image-overlay" />
                    <span className="dh-category-badge">{place.category}</span>
                    <span className="dh-image-cta">Discover <FaArrowRight /></span>
                  </button>
                  <button type="button" className={`dh-heart ${isSaved ? "saved" : ""}`} onClick={() => toggleFavorite(place.id)}
                    aria-label={isSaved ? `Remove ${place.name} from saved places` : `Save ${place.name}`} aria-pressed={isSaved}>
                    {isSaved ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <div className="dh-card-body">
                    <div className="dh-location"><FaMapMarkerAlt /><span>{place.location}</span></div>
                    <h3>{place.name}</h3>
                    <p className="dh-description">{place.description || `Discover ${place.name} during your visit.`}</p>
                    <div className="dh-card-footer">
                      {place.duration && <span className="dh-duration"><FaClock /> {place.duration}</span>}
                      <button type="button" className="dh-explore-link" onClick={() => setSelectedPlace(place)}>Explore <FaArrowRight /></button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="dh-empty">
            <FaSearch />
            <h3>No places found</h3>
            <p>{savedOnly ? "You have no saved places matching these filters." : "Try a different search or category."}</p>
            <button type="button" onClick={clearFilters}>Show all places</button>
          </div>
        )}

        {filteredPlaces.length > 4 && (
          <div className="dh-view-all-wrap">
            <button type="button" className="dh-view-all" onClick={() => setShowAll((value) => !value)}>
              {showAll ? "Show Less" : "View All Places"}
              <FaArrowRight className={showAll ? "dh-arrow-up" : ""} />
            </button>
          </div>
        )}
      </div>

      {selectedPlace && (
        <div className="dh-modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedPlace(null);
        }}>
          <div className="dh-modal" role="dialog" aria-modal="true" aria-labelledby="dh-modal-title">
            <button type="button" className="dh-modal-close" onClick={() => setSelectedPlace(null)} aria-label="Close details"><FaTimes /></button>
            {selectedPlace.image && <img className="dh-modal-image" src={selectedPlace.image} alt={selectedPlace.name} />}
            <div className="dh-modal-content">
              <span className="dh-modal-category">{selectedPlace.category}</span>
              <h3 id="dh-modal-title">{selectedPlace.name}</h3>
              <div className="dh-location"><FaMapMarkerAlt /><span>{selectedPlace.location}</span></div>
              <p>{selectedPlace.description || `Discover ${selectedPlace.name} during your visit to ${destinationName}.`}</p>
              {selectedPlace.duration && <p className="dh-modal-duration"><FaClock /> Suggested visit: {selectedPlace.duration}</p>}
              <div className="dh-modal-actions">
                <button type="button" className="dh-modal-save" onClick={() => toggleFavorite(selectedPlace.id)}>
                  {favorites.includes(selectedPlace.id) ? <FaHeart /> : <FaRegHeart />}
                  {favorites.includes(selectedPlace.id) ? "Saved" : "Save Place"}
                </button>
                {selectedPlace.url && <button type="button" className="dh-plan-button" onClick={() => navigateTo(selectedPlace.url)}>View More <FaArrowRight /></button>}
              </div>
              <button type="button" className="dh-modal-plan" onClick={handlePlanTrip}>Plan a Trip to {destinationName} <FaArrowRight /></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default DestinationHighlights;
