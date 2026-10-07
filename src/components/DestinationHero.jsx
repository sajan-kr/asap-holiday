import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaCompass,
  FaHeart,
  FaMapMarkerAlt,
  FaMountain,
  FaPaperPlane,
  FaPlay,
  FaSearch,
  FaShareAlt,
  FaStar,
  FaTimes,
  FaUmbrellaBeach,
  FaUsers,
  FaWhatsapp,
  FaCloudSun,
  FaMoon,
  FaSun,
  FaTint,
  FaWind,
  FaThermometerHalf,
} from "react-icons/fa";

import {
  WEATHER_CODE_MAP,
  formatLocalTime,
  getCitySubtitle,
  getCountryCode,
  getDestinationTagline,
  getSeason,
  normalizeCityName,
  slugify,
} from "../data/destinationHeroData";

import "./DestinationHero.css";

const GEO_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast";

// ============================================================
// Highlight icon
// ============================================================

function getHighlightIcon(value = "") {
  const text = String(value).toLowerCase();

  if (
    text.includes("mountain") ||
    text.includes("snow") ||
    text.includes("hill") ||
    text.includes("peak")
  ) {
    return FaMountain;
  }

  if (
    text.includes("beach") ||
    text.includes("island") ||
    text.includes("sea") ||
    text.includes("ocean")
  ) {
    return FaUmbrellaBeach;
  }

  if (
    text.includes("trek") ||
    text.includes("adventure") ||
    text.includes("bike")
  ) {
    return FaCompass;
  }

  if (
    text.includes("photo") ||
    text.includes("camera")
  ) {
    return FaCamera;
  }

  return FaStar;
}

// ============================================================
// Weather API
// ============================================================

async function fetchLiveWeather(
  cityName,
  countryHint
) {
  const params = new URLSearchParams({
    name: cityName,
    count: "1",
    language: "en",
    format: "json",
  });

  const countryCode = getCountryCode(countryHint);

  if (countryCode) {
    params.set("countryCode", countryCode);
  }

  const geoResponse = await fetch(
    `${GEO_URL}?${params.toString()}`
  );

  if (!geoResponse.ok) {
    throw new Error("Geocoding failed");
  }

  const geo = await geoResponse.json();

  const place = geo?.results?.[0];

  if (!place) {
    throw new Error(
      `Location not found: ${cityName}`
    );
  }

  const weatherParams = new URLSearchParams({
    latitude: String(place.latitude),
    longitude: String(place.longitude),

    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m",

    daily:
      "sunrise,sunset,temperature_2m_max,temperature_2m_min,precipitation_probability_max",

    timezone: "auto",

    forecast_days: "1",
  });

  const weatherResponse = await fetch(
    `${WEATHER_URL}?${weatherParams.toString()}`
  );

  if (!weatherResponse.ok) {
    throw new Error("Weather request failed");
  }

  const data = await weatherResponse.json();

  const current = data?.current || {};
  const daily = data?.daily || {};

  const weatherCode =
    WEATHER_CODE_MAP[current.weather_code] ||
    WEATHER_CODE_MAP[0];

  const now = new Date();

  let month = now.getMonth() + 1;

  try {
    month = Number(
      new Intl.DateTimeFormat("en-US", {
        month: "numeric",
        timeZone: data?.timezone || "UTC",
      }).format(now)
    );
  } catch {
    // Keep current month.
  }

  return {
    city: place.name,
    country: place.country,

    temperature:
      Math.round(current.temperature_2m ?? 0),

    feelsLike:
      Math.round(current.apparent_temperature ?? 0),

    humidity:
      Math.round(current.relative_humidity_2m ?? 0),

    wind:
      Math.round(current.wind_speed_10m ?? 0),

    precipitation:
      current.precipitation ?? 0,

    rainChance:
      daily.precipitation_probability_max?.[0] ?? 0,

    high:
      Math.round(
        daily.temperature_2m_max?.[0] ??
          current.temperature_2m ??
          0
      ),

    low:
      Math.round(
        daily.temperature_2m_min?.[0] ??
          current.temperature_2m ??
          0
      ),

    condition: weatherCode.label,

    iconType: weatherCode.icon,

    isDay:
      Number(current.is_day) === 1,

    localTime: current.time,

    timezone:
      data?.timezone || "UTC",

    sunrise:
      daily.sunrise?.[0] || null,

    sunset:
      daily.sunset?.[0] || null,

    season: getSeason(
      month,
      countryHint || place.country || ""
    ),

    updatedAt:
      new Date().toISOString(),
  };
}

// ============================================================
// Component
// ============================================================

const DestinationHero = ({
  destination,
  destinations = [],
}) => {
  const navigate = useNavigate();

  // ----------------------------------------------------------
  // State
  // ----------------------------------------------------------

  const [activeCity, setActiveCity] =
    useState(0);

  const [showVideo, setShowVideo] =
    useState(false);

  const [showPlanner, setShowPlanner] =
    useState(false);

  const [liked, setLiked] =
    useState(false);

  const [showShare, setShowShare] =
    useState(false);

  const [travelDate, setTravelDate] =
    useState("");

  const [travellers, setTravellers] =
    useState(2);

  const [weather, setWeather] =
    useState(null);

  const [weatherLoading, setWeatherLoading] =
    useState(false);

  const [weatherError, setWeatherError] =
    useState(false);

  // ----------------------------------------------------------
  // Normalize cities
  // ----------------------------------------------------------

  const cities = useMemo(() => {
    if (
      !destination ||
      !Array.isArray(destination.cities)
    ) {
      return [];
    }

    return destination.cities.map(
      (city, index) => {
        if (typeof city === "string") {
          return {
            name: city,

            slug: slugify(city),

            subtitle:
              getCitySubtitle(city),

            image:
              destination.image ||
              destination.heroImage ||
              destination.banner ||
              "",

            video:
              destination.video ||
              destination.heroVideo ||
              "",
          };
        }

        const cityName =
          city?.name ||
          city?.title ||
          `Place ${index + 1}`;

        return {
          name: cityName,

          slug:
            city?.slug ||
            slugify(cityName),

          subtitle:
            city?.subtitle ||
            city?.description ||
            getCitySubtitle(cityName),

          image:
            city?.image ||
            city?.background ||
            destination.image ||
            destination.heroImage ||
            destination.banner ||
            "",

          video:
            city?.video ||
            "",
        };
      }
    );
  }, [destination]);

  // ----------------------------------------------------------
  // Current city
  // ----------------------------------------------------------

  const currentCity =
    cities[activeCity] || null;

  // ----------------------------------------------------------
  // Hero media
  // ----------------------------------------------------------

  const heroImage =
    currentCity?.image ||
    destination?.heroImage ||
    destination?.banner ||
    destination?.image ||
    "";

  const heroVideo =
    currentCity?.video ||
    destination?.heroVideo ||
    destination?.video ||
    destination?.videoUrl ||
    "";

  // ----------------------------------------------------------
  // Highlights
  // ----------------------------------------------------------

  const highlights = useMemo(() => {
    if (
      !Array.isArray(
        destination?.highlights
      )
    ) {
      return [];
    }

    return destination.highlights
      .map((item) => {
        const title =
          typeof item === "string"
            ? item
            : item?.title ||
              item?.name ||
              "Experience";

        return {
          title,
          icon: getHighlightIcon(title),
        };
      })
      .slice(0, 4);
  }, [destination]);

  // ----------------------------------------------------------
  // Destination title
  // ----------------------------------------------------------

  const titleWords =
    destination?.title
      ?.trim()
      .split(/\s+/) || [];

  const titleBreak =
    Math.ceil(titleWords.length / 2);

  const titleFirst =
    titleWords
      .slice(0, titleBreak)
      .join(" ");

  const titleSecond =
    titleWords
      .slice(titleBreak)
      .join(" ");

  const tagline =
    destination?.tagline ||
    getDestinationTagline(
      destination?.title || ""
    );

  // ----------------------------------------------------------
  // Destination index
  // ----------------------------------------------------------

  const destinationIndex =
    Array.isArray(destinations)
      ? destinations.findIndex(
          (item) =>
            item?.slug ===
            destination?.slug
        )
      : -1;

  // ----------------------------------------------------------
  // Reset when destination changes
  // ----------------------------------------------------------

  useEffect(() => {
    setActiveCity(0);
    setLiked(false);
    setWeather(null);
    setWeatherError(false);
    setWeatherLoading(false);
  }, [destination?.slug]);

  // ----------------------------------------------------------
  // Load live weather
  // ----------------------------------------------------------

  useEffect(() => {
    let cancelled = false;
    let timer = null;

    async function loadWeather() {
      const cityName =
        normalizeCityName(
          currentCity?.name,
          destination
        );

      if (!cityName) {
        setWeather(null);
        setWeatherLoading(false);
        return;
      }

      setWeatherLoading(true);
      setWeatherError(false);

      try {
        const result =
          await fetchLiveWeather(
            cityName,
            destination?.country
          );

        if (!cancelled) {
          setWeather(result);
        }
      } catch (error) {
        console.warn(
          "Destination weather unavailable:",
          error
        );

        if (!cancelled) {
          setWeather(null);
          setWeatherError(true);
        }
      } finally {
        if (!cancelled) {
          setWeatherLoading(false);
        }
      }
    }

    loadWeather();

    timer = window.setInterval(
      loadWeather,
      10 * 60 * 1000
    );

    return () => {
      cancelled = true;

      if (timer) {
        window.clearInterval(timer);
      }
    };
  }, [
    currentCity?.name,
    destination?.country,
    destination?.title,
  ]);

  // ----------------------------------------------------------
  // Modal body lock
  // ----------------------------------------------------------

  useEffect(() => {
    if (showVideo || showPlanner) {
      document.body.classList.add(
        "dh-modal-open"
      );
    } else {
      document.body.classList.remove(
        "dh-modal-open"
      );
    }

    return () => {
      document.body.classList.remove(
        "dh-modal-open"
      );
    };
  }, [showVideo, showPlanner]);

  // ----------------------------------------------------------
  // City navigation
  // ----------------------------------------------------------

  const changeCity = (index) => {
    if (!cities.length) return;

    setActiveCity(
      (index + cities.length) %
        cities.length
    );
  };

  const nextCity = () => {
    changeCity(activeCity + 1);
  };

  const previousCity = () => {
    changeCity(activeCity - 1);
  };

  // ----------------------------------------------------------
  // Package search
  // ----------------------------------------------------------

  const handleSearch = () => {
    if (!destination?.slug) return;

    const params =
      new URLSearchParams();

    params.set(
      "destination",
      destination.slug
    );

    if (currentCity?.slug) {
      params.set(
        "city",
        currentCity.slug
      );
    }

    params.set(
      "travellers",
      String(travellers)
    );

    if (travelDate) {
      params.set(
        "date",
        travelDate
      );
    }

    navigate(
      `/packages?${params.toString()}`
    );
  };

  // ----------------------------------------------------------
  // Planner
  // ----------------------------------------------------------

  const submitPlanner = (event) => {
    event.preventDefault();

    if (!destination?.slug) return;

    const params =
      new URLSearchParams();

    params.set(
      "destination",
      destination.slug
    );

    params.set(
      "travellers",
      String(travellers)
    );

    if (travelDate) {
      params.set(
        "date",
        travelDate
      );
    }

    navigate(
      `/packages?${params.toString()}`
    );

    setShowPlanner(false);
  };

  // ----------------------------------------------------------
  // Share
  // ----------------------------------------------------------

  const shareDestination = async () => {
    if (!destination) return;

    const shareData = {
      title:
        destination.title ||
        "ASAP Holidays",

      text: `Explore ${
        destination.title ||
        "this destination"
      } with ASAP Holidays.`,

      url: window.location.href,
    };

    try {
      if (
        navigator.share &&
        typeof navigator.share === "function"
      ) {
        await navigator.share(
          shareData
        );
      } else {
        await navigator.clipboard.writeText(
          window.location.href
        );

        setShowShare(true);

        window.setTimeout(() => {
          setShowShare(false);
        }, 1800);
      }
    } catch {
      // User cancelled sharing.
    }
  };

  // ----------------------------------------------------------
  // WhatsApp
  // ----------------------------------------------------------

  const whatsappMessage =
    encodeURIComponent(
      `Hi ASAP Holidays, I want to plan a trip to ${
        destination?.title || "this destination"
      }${
        currentCity
          ? `, especially ${currentCity.name}`
          : ""
      }. Please share the best packages.`
    );

  // ----------------------------------------------------------
  // Weather icon
  // ----------------------------------------------------------

  const weatherIcon = (() => {
    if (!weather) {
      return <FaCloudSun />;
    }

    if (weather.iconType === "sun") {
      return weather.isDay ? (
        <FaSun />
      ) : (
        <FaMoon />
      );
    }

    if (weather.iconType === "snow") {
      return (
        <span className="dh-weather-emoji">
          ❄️
        </span>
      );
    }

    if (weather.iconType === "storm") {
      return (
        <span className="dh-weather-emoji">
          ⛈️
        </span>
      );
    }

    return <FaCloudSun />;
  })();

  // ----------------------------------------------------------
  // Safety
  // ----------------------------------------------------------

  if (!destination) {
    return (
      <section className="dh dh-empty">
        <div className="dh-empty-content">
          <FaMapMarkerAlt />
          <h2>Destination unavailable</h2>
          <p>
            We couldn't load this destination.
          </p>

          <Link to="/">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  // ----------------------------------------------------------
  // Render
  // ----------------------------------------------------------

  return (
    <>
      <section
        className={`dh ${
          weather?.isDay === false
            ? "dh-night"
            : ""
        }`}
      >
        {/* ================================================
            BACKGROUND
        ================================================= */}

        <div className="dh-background">
          {heroVideo ? (
            <video
              key={heroVideo}
              className="dh-background-video"
              autoPlay
              muted
              loop
              playsInline
              poster={heroImage || undefined}
            >
              <source
                src={heroVideo}
                type="video/mp4"
              />
            </video>
          ) : heroImage ? (
            <img
              key={heroImage}
              src={heroImage}
              alt={
                destination.title ||
                "Destination"
              }
              className="dh-background-image"
            />
          ) : (
            <div className="dh-background-fallback" />
          )}

          <div className="dh-color-layer" />
          <div className="dh-dark-layer" />
          <div className="dh-grain" />
        </div>

        {/* ================================================
            TOP HEADER
        ================================================= */}

        <header className="dh-header">
          <Link
            to="/"
            className="dh-brand"
          >
            <span>ASAP</span>
            <strong>HOLIDAYS</strong>
          </Link>

          <div className="dh-header-center">
            <span>
              {String(
                (destinationIndex >= 0
                  ? destinationIndex
                  : 0) + 1
              ).padStart(2, "0")}
            </span>

            <i />

            <span>
              DESTINATION
            </span>
          </div>

          <div className="dh-header-actions">
            <button
              type="button"
              className={
                liked ? "active" : ""
              }
              onClick={() =>
                setLiked(!liked)
              }
              aria-label="Add to wishlist"
            >
              <FaHeart />
            </button>

            <button
              type="button"
              onClick={
                shareDestination
              }
              aria-label="Share destination"
            >
              <FaShareAlt />
            </button>

            <Link
              to="/holidays"
              className="dh-all-destinations"
            >
              <span>
                All Destinations
              </span>

              <FaArrowRight />
            </Link>
          </div>
        </header>

        {/* ================================================
            SIDE CITY NAV
        ================================================= */}

        {cities.length > 1 && (
          <aside className="dh-side-rail">
            <span className="dh-rail-label">
              EXPLORE
            </span>

            <div className="dh-rail-line" />

            <div className="dh-city-rail">
              {cities.map(
                (city, index) => (
                  <button
                    type="button"
                    key={`${city.slug}-${index}`}
                    className={
                      activeCity === index
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      changeCity(index)
                    }
                  >
                    <span className="dh-rail-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="dh-rail-city">
                      {city.name}
                    </span>
                  </button>
                )
              )}
            </div>

            <div className="dh-rail-line" />

            <span className="dh-rail-scroll">
              SCROLL
            </span>
          </aside>
        )}

        {/* ================================================
            MAIN HERO
        ================================================= */}

        <main className="dh-main">
          <div className="dh-editorial">
            <div className="dh-eyebrow">
              <span />

              {destination.type ||
                destination.country ||
                "TRAVEL COLLECTION"}

              <span />
            </div>

            <div className="dh-script">
              {tagline}
            </div>

            <h1>
              <span>
                {titleFirst}
              </span>

              {titleSecond && (
                <strong>
                  {titleSecond}
                </strong>
              )}
            </h1>

            <div className="dh-location-line">
              <FaMapMarkerAlt />

              <span>
                {currentCity?.name ||
                  destination.location ||
                  destination.country ||
                  "Beautiful Destination"}
              </span>

              <i />

              <span>
                {destination.country ||
                  "Worldwide"}
              </span>
            </div>

            <p className="dh-description">
              {destination.description ||
                `Discover ${destination.title}, unforgettable experiences, beautiful places and carefully planned holidays with ASAP Holidays.`}
            </p>

            {/* ============================================
                WEATHER
            ============================================= */}

            <div className="dh-weather-card">
              <div className="dh-weather-icon">
                {weatherLoading ? (
                  <span className="dh-spinner" />
                ) : (
                  weatherIcon
                )}
              </div>

              <div className="dh-weather-content">
                <div className="dh-weather-top">
                  <small>
                    LIVE WEATHER
                  </small>

                  {weather && (
                    <span className="dh-live">
                      LIVE
                    </span>
                  )}
                </div>

                <div className="dh-weather-temp">
                  {weatherLoading
                    ? "--"
                    : weather
                    ? weather.temperature
                    : "—"}

                  <sup>°C</sup>
                </div>

                <strong>
                  {weather?.condition ||
                    (weatherError
                      ? "Weather unavailable"
                      : "Loading weather")}
                </strong>

                <span>
                  {weather?.city ||
                    currentCity?.name ||
                    destination.title}

                  {weather?.timezone
                    ? ` · ${weather.timezone.replace(
                        /_/g,
                        " "
                      )}`
                    : ""}
                </span>
              </div>
            </div>

            {weather && (
              <div className="dh-weather-stats">
                <div>
                  <FaThermometerHalf />
                  <span>
                    FEELS LIKE
                  </span>
                  <strong>
                    {weather.feelsLike}°
                  </strong>
                </div>

                <div>
                  <FaTint />
                  <span>
                    HUMIDITY
                  </span>
                  <strong>
                    {weather.humidity}%
                  </strong>
                </div>

                <div>
                  <FaWind />
                  <span>
                    WIND
                  </span>
                  <strong>
                    {weather.wind} km/h
                  </strong>
                </div>

                <div>
                  {weather.isDay ? (
                    <FaSun />
                  ) : (
                    <FaMoon />
                  )}

                  <span>
                    LOCAL TIME
                  </span>

                  <strong>
                    {formatLocalTime(
                      weather.localTime,
                      weather.timezone
                    )}
                  </strong>
                </div>
              </div>
            )}

            {/* ============================================
                CTA
            ============================================= */}

            <div className="dh-actions">
              <button
                type="button"
                className="dh-primary-button"
                onClick={handleSearch}
              >
                <span>
                  Explore Packages
                </span>

                <FaArrowRight />
              </button>

              <button
                type="button"
                className="dh-secondary-button"
                onClick={() =>
                  setShowPlanner(true)
                }
              >
                <FaCalendarAlt />

                <span>
                  Plan My Trip
                </span>
              </button>

              {heroVideo && (
                <button
                  type="button"
                  className="dh-video-button"
                  onClick={() =>
                    setShowVideo(true)
                  }
                >
                  <span className="dh-play">
                    <FaPlay />
                  </span>

                  <span>
                    Watch
                    <strong>
                      Destination Video
                    </strong>
                  </span>
                </button>
              )}
            </div>

            {/* ============================================
                HIGHLIGHTS
            ============================================= */}

            {highlights.length > 0 && (
              <div className="dh-highlights">
                {highlights.map(
                  (item, index) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="dh-highlight"
                        key={`${item.title}-${index}`}
                      >
                        <span>
                          <Icon />
                        </span>

                        <strong>
                          {item.title}
                        </strong>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>

          {/* ==============================================
              RIGHT PREVIEW PANEL
          =============================================== */}

          <aside className="dh-info-panel">
            <div className="dh-city-preview">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt={
                    currentCity?.name ||
                    destination.title
                  }
                />
              ) : (
                <div className="dh-preview-fallback" />
              )}

              <div className="dh-city-preview-overlay" />

              <div className="dh-preview-top">
                <span>
                  CURRENT ESCAPE
                </span>

                <span>
                  {String(
                    activeCity + 1
                  ).padStart(2, "0")}
                  /
                  {String(
                    cities.length || 1
                  ).padStart(2, "0")}
                </span>
              </div>

              <div className="dh-preview-bottom">
                <small>
                  DISCOVER
                </small>

                <strong>
                  {currentCity?.name ||
                    destination.title}
                </strong>

                <span>
                  {currentCity?.subtitle ||
                    "A beautiful place to explore"}
                </span>
              </div>

              {cities.length > 1 && (
                <div className="dh-preview-controls">
                  <button
                    type="button"
                    onClick={
                      previousCity
                    }
                    aria-label="Previous city"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    type="button"
                    onClick={nextCity}
                    aria-label="Next city"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>

            <div className="dh-panel-content">
              <div className="dh-panel-heading">
                <div>
                  <small>
                    YOUR ESCAPE
                  </small>

                  <h2>
                    {destination.title}
                  </h2>
                </div>

                <div className="dh-rating">
                  <FaStar />

                  <strong>
                    {destination.rating ||
                      "4.8"}
                  </strong>

                  <span>
                    / 5
                  </span>
                </div>
              </div>

              <div className="dh-panel-divider" />

              <div className="dh-price-row">
                <div>
                  <small>
                    STARTING FROM
                  </small>

                  <strong>
                    {destination.price ||
                      "On Request"}
                  </strong>

                  <span>
                    per person
                  </span>
                </div>

                <div className="dh-duration">
                  <FaClock />

                  <div>
                    <small>
                      DURATION
                    </small>

                    <strong>
                      {destination.duration ||
                        "Custom"}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="dh-panel-meta">
                <div>
                  <strong>
                    {cities.length ||
                      "—"}
                  </strong>

                  <span>
                    Places
                  </span>
                </div>

                <div>
                  <strong>
                    {highlights.length ||
                      "—"}
                  </strong>

                  <span>
                    Experiences
                  </span>
                </div>

                <div>
                  <strong>
                    24/7
                  </strong>

                  <span>
                    Support
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="dh-panel-button"
                onClick={() =>
                  setShowPlanner(true)
                }
              >
                <span>
                  Start Planning
                </span>

                <FaPaperPlane />
              </button>
            </div>
          </aside>
        </main>

        {/* ================================================
            BOTTOM NAV
        ================================================= */}

        <div className="dh-bottom-bar">
          <div>
            <span>
              {destination.location ||
                destination.country ||
                "ASAP HOLIDAYS"}
            </span>

            <i />
          </div>

          <div className="dh-bottom-scroll">
            <span />
            <small>
              DISCOVER MORE
            </small>
          </div>

          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="dh-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp />
            <span>
              Chat with us
            </span>
          </a>
        </div>

        {/* ================================================
            SHARE TOAST
        ================================================= */}

        {showShare && (
          <div className="dh-share-toast">
            <FaShareAlt />
            Link copied
          </div>
        )}
      </section>

      {/* ==================================================
          VIDEO MODAL
      ================================================== */}

      {showVideo && heroVideo && (
        <div
          className="dh-modal"
          role="dialog"
          aria-modal="true"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setShowVideo(false);
            }
          }}
        >
          <div className="dh-video-modal">
            <button
              type="button"
              className="dh-modal-close"
              onClick={() =>
                setShowVideo(false)
              }
              aria-label="Close video"
            >
              <FaTimes />
            </button>

            <video
              src={heroVideo}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}

      {/* ==================================================
          PLANNER MODAL
      ================================================== */}

      {showPlanner && (
        <div
          className="dh-modal"
          role="dialog"
          aria-modal="true"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setShowPlanner(false);
            }
          }}
        >
          <div className="dh-planner">
            <button
              type="button"
              className="dh-modal-close"
              onClick={() =>
                setShowPlanner(false)
              }
              aria-label="Close planner"
            >
              <FaTimes />
            </button>

            <div className="dh-planner-header">
              <span>
                PLAN YOUR ESCAPE
              </span>

              <h2>
                {destination.title}
              </h2>

              <p>
                Tell us a little about
                your trip and explore
                the best available
                packages.
              </p>
            </div>

            <form
              onSubmit={submitPlanner}
            >
              <div className="dh-form-grid">
                <label>
                  <span>
                    Travellers
                  </span>

                  <div className="dh-input-icon">
                    <FaUsers />

                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={travellers}
                      onChange={(event) =>
                        setTravellers(
                          Math.max(
                            1,
                            Math.min(
                              20,
                              Number(
                                event.target
                                  .value
                              ) || 1
                            )
                          )
                        )
                      }
                    />
                  </div>
                </label>

                <label>
                  <span>
                    Travel Date
                  </span>

                  <div className="dh-input-icon">
                    <FaCalendarAlt />

                    <input
                      type="date"
                      value={travelDate}
                      onChange={(event) =>
                        setTravelDate(
                          event.target.value
                        )
                      }
                    />
                  </div>
                </label>
              </div>

              <label className="dh-city-select">
                <span>
                  Preferred City
                </span>

                <div className="dh-input-icon">
                  <FaMapMarkerAlt />

                  <select
                    value={
                      currentCity?.slug ||
                      ""
                    }
                    onChange={(event) => {
                      const index =
                        cities.findIndex(
                          (city) =>
                            city.slug ===
                            event.target
                              .value
                        );

                      if (index >= 0) {
                        setActiveCity(
                          index
                        );
                      }
                    }}
                  >
                    {cities.length === 0 ? (
                      <option value="">
                        Entire destination
                      </option>
                    ) : (
                      cities.map(
                        (city) => (
                          <option
                            key={city.slug}
                            value={
                              city.slug
                            }
                          >
                            {city.name}
                          </option>
                        )
                      )
                    )}
                  </select>
                </div>
              </label>

              <button
                type="submit"
                className="dh-planner-submit"
              >
                <span>
                  Find Packages
                </span>

                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationHero;