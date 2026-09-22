import React, { useEffect, useRef, useState } from "react";
import "./HolidayMemories.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaHeart,
  FaGoogle,
  FaFacebookF,
  FaTimes,
  FaVolumeMute,
  FaVolumeUp,
  FaShareAlt,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

/* =========================================================
   HOLIDAY MEMORIES DATA
========================================================= */

const holidayMemories = [
  {
    id: 1,
    name: "Nikki Galrani",
    title: "Maldives Holiday",
    destination: "Maldives",
    slug: "maldives",
    video: "/video/maldives.mp4",
    description: "Experience the tropical beauty of the Maldives with actress Nikki Galrani. From pristine turquoise waters and powder-soft beaches to luxurious resorts and unforgettable island experiences, this Maldives holiday is designed for a perfect blend of relaxation and adventure.",
  },

  {
    id: 2,
    name: "Bali Experience",
    title: "Bali Holiday",
    destination: "Bali",
    slug: "bali",
    video: "/video/bali.mp4",
    description: "Discover the beauty of Bali with stunning beaches, cultural experiences, beautiful temples and unforgettable moments. Experience a perfect combination of relaxation, adventure and local culture.",
  },

  {
    id: 3,
    name: "Dubai Adventure",
    title: "Dubai Holiday",
    destination: "Dubai",
    slug: "dubai",
    video: "/video/dubai.mp4",
    description: "Explore Dubai with world-class attractions, luxury experiences, stunning architecture and unforgettable adventures. Create amazing memories with an exciting Dubai holiday.",
  },

  {
    id: 4,
    name: "International Journey",
    title: "International Holiday",
    destination: "International",
    slug: "international",
    video: "/video/international.mp4",
    description: "Explore unforgettable international destinations with carefully planned experiences, beautiful locations and memorable holiday moments.",
  },

  {
    id: 5,
    name: "Japan Journey",
    title: "Japan Holiday",
    destination: "Japan",
    slug: "japan",
    video: "/video/japan.mp4",
    description: "Experience the unique beauty of Japan with traditional culture, modern cities, breathtaking landscapes and unforgettable travel experiences.",
  },

  {
    id: 6,
    name: "Shimla Escape",
    title: "Shimla Holiday",
    destination: "Shimla",
    slug: "shimla",
    video: "/video/shimla.mp4",
    description: "Enjoy the peaceful mountains of Shimla with beautiful landscapes, pleasant weather and memorable experiences surrounded by nature.",
  },

  {
    id: 7,
    name: "Switzerland Dreams",
    title: "Switzerland Holiday",
    destination: "Switzerland",
    slug: "switzerland",
    video: "/video/switzerland.mp4",
    description: "Discover the breathtaking beauty of Switzerland with stunning mountains, scenic towns, crystal-clear lakes and unforgettable European experiences.",
  },

  {
    id: 8,
    name: "Turkey Discovery",
    title: "Turkey Holiday",
    destination: "Turkey",
    slug: "turkey",
    video: "/video/turkey.mp4",
    description: "Explore Turkey with its rich history, beautiful architecture, vibrant culture and stunning landscapes. A perfect destination for an unforgettable holiday.",
  },

  {
    id: 9,
    name: "ASAP Family",
    title: "Family Holiday",
    destination: "Family Holiday",
    slug: "family-holiday",
    video: "/video/asap-family-video.mp4",
    description: "Beautiful family moments captured during an unforgettable holiday planned with ASAP Holidays.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const HolidayMemories = () => {
  const navigate = useNavigate();

  const sliderRef = useRef(null);
  const popupVideoRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likedIds, setLikedIds] = useState(() => {
    try {
      const saved = localStorage.getItem("asapHolidayMemoryLikes");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [likeMessage, setLikeMessage] = useState("");

  /* =========================================================
     FAVOURITE / LIKE
  ========================================================= */

  const toggleLike = (memoryId, memoryName = "Holiday") => {
    setLikedIds((current) => {
      const isLiked = current.includes(memoryId);
      const next = isLiked
        ? current.filter((id) => id !== memoryId)
        : [...current, memoryId];

      try {
        localStorage.setItem(
          "asapHolidayMemoryLikes",
          JSON.stringify(next)
        );
      } catch {
        // Local storage may be unavailable in private/restricted browsers.
      }

      setLikeMessage(
        isLiked
          ? `${memoryName} removed from favourites`
          : `${memoryName} added to favourites`
      );

      window.clearTimeout(window.__holidayLikeTimer);
      window.__holidayLikeTimer = window.setTimeout(() => {
        setLikeMessage("");
      }, 1800);

      return next;
    });
  };

  /* =========================================================
     CARD VIDEO AUTOPLAY
  ========================================================= */

  useEffect(() => {
    const videos = document.querySelectorAll(".holidayMemoryVideo");

    videos.forEach((video) => {
      video.muted = true;
      video.play().catch(() => { });
    });
  }, []);

  /* =========================================================
     OPEN POPUP
  ========================================================= */

  const openPopup = (memory) => {
    setSelectedMemory(memory);
    setIsMuted(true);
    setIsPlaying(true);
    setIsFullscreen(false);

    document.body.style.overflow = "hidden";
  };

  /* =========================================================
     CLOSE POPUP
  ========================================================= */

  const closePopup = () => {
    if (popupVideoRef.current) {
      popupVideoRef.current.pause();
      popupVideoRef.current.currentTime = 0;
    }

    setSelectedMemory(null);
    setIsPlaying(false);
    setIsFullscreen(false);

    document.body.style.overflow = "";
  };

  /* =========================================================
     ESC KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && selectedMemory) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedMemory]);

  /* =========================================================
     CARD WIDTH
  ========================================================= */

  const getCardWidth = () => {
    const slider = sliderRef.current;

    if (!slider) return 0;

    const card = slider.querySelector(".holidayMemoryCard");

    if (!card) return 0;

    const styles = window.getComputedStyle(slider);

    const gap = parseFloat(styles.gap) || 22;

    return card.offsetWidth + gap;
  };

  /* =========================================================
     NEXT CARD
  ========================================================= */

  const handleNext = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: getCardWidth(),
      behavior: "smooth",
    });

    setActiveIndex((current) =>
      Math.min(current + 1, holidayMemories.length - 1)
    );
  };

  /* =========================================================
     PREVIOUS CARD
  ========================================================= */

  const handlePrevious = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: -getCardWidth(),
      behavior: "smooth",
    });

    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  /* =========================================================
     DOT
  ========================================================= */

  const handleDotClick = (index) => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollTo({
      left: index * getCardWidth(),
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  /* =========================================================
     SCROLL
  ========================================================= */

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    const index = Math.round(slider.scrollLeft / cardWidth);

    setActiveIndex(
      Math.max(0, Math.min(index, holidayMemories.length - 1))
    );
  };

  /* =========================================================
     PLAY / PAUSE
  ========================================================= */

  const togglePlay = () => {
    const video = popupVideoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch(() => { });
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  /* =========================================================
     MUTE
  ========================================================= */

  const toggleMute = async () => {
    const video = popupVideoRef.current;

    if (!video) return;

    try {
      if (video.muted) {
        video.muted = false;
        video.volume = 1;
        setIsMuted(false);

        if (video.paused) {
          await video.play();
          setIsPlaying(true);
        }
      } else {
        video.muted = true;
        video.volume = 0;
        setIsMuted(true);
      }
    } catch (error) {
      console.log("Audio could not be enabled:", error);
    }
  };

  /* =========================================================
     FULLSCREEN
  ========================================================= */

  const toggleFullscreen = async () => {
    const video = popupVideoRef.current;

    if (!video) return;

    try {
      if (!document.fullscreenElement) {
        await video.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.log("Fullscreen not supported");
    }
  };

  /* =========================================================
     SHARE
  ========================================================= */

  const handleShare = async () => {
    if (!selectedMemory) return;

    const shareData = {
      title: selectedMemory.title,
      text: `Check out this ${selectedMemory.destination} holiday with ASAP Holidays.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);

        alert("Holiday link copied successfully!");
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  /* =========================================================
     GO TO PACKAGE PAGE
  ========================================================= */

  const handleViewPackages = () => {
    if (!selectedMemory) return;

    /*
      Change this route if your package route is different.

      Example:
      /packages/maldives
      /packages/bali
      /packages/dubai
    */

    navigate(`/packages/${selectedMemory.slug}`);

    closePopup();
  };

  /* =========================================================
     NEXT VIDEO INSIDE POPUP
  ========================================================= */

  const handlePopupNext = () => {
    if (!selectedMemory) return;

    const currentIndex = holidayMemories.findIndex(
      (item) => item.id === selectedMemory.id
    );

    const nextIndex =
      (currentIndex + 1) % holidayMemories.length;

    setSelectedMemory(holidayMemories[nextIndex]);

    setIsMuted(true);
    setIsPlaying(true);
  };

  /* =========================================================
     PREVIOUS VIDEO INSIDE POPUP
  ========================================================= */

  const handlePopupPrevious = () => {
    if (!selectedMemory) return;

    const currentIndex = holidayMemories.findIndex(
      (item) => item.id === selectedMemory.id
    );

    const previousIndex =
      (currentIndex - 1 + holidayMemories.length) %
      holidayMemories.length;

    setSelectedMemory(holidayMemories[previousIndex]);

    setIsMuted(true);
    setIsPlaying(true);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section className="holidayMemoriesSection">

      <div className="holidayMemoryShape holidayMemoryShapeOne"></div>
      <div className="holidayMemoryShape holidayMemoryShapeTwo"></div>

      <div className="holidayMemoriesContainer">

        {/* HEADER */}

        <div className="holidayMemoriesHeader">

          <span className="holidayMemoriesEyebrow">
            TRAVEL MEMORIES
          </span>

          <h2>
            Stories of Our{" "}
            <span>Travellers</span>

            <FaHeart className="holidayMemoriesHeart" />
          </h2>

          <p>
            Real journeys. Happy travellers.
            Unforgettable memories.
          </p>

          <div className="holidayReviews">

            <div className="holidayReview">

              <div className="holidayReviewIcon google">
                <FaGoogle />
              </div>

              <div className="holidayReviewText">

                <strong>
                  4.6/5 <span>★</span>
                </strong>

                <small>
                  9070 reviews
                </small>

              </div>

            </div>

            <div className="holidayReviewDivider"></div>

            <div className="holidayReview">

              <div className="holidayReviewIcon facebook">
                <FaFacebookF />
              </div>

              <div className="holidayReviewText">

                <strong>
                  4.8/5 <span>★</span>
                </strong>

                <small>
                  1440 reviews
                </small>

              </div>

            </div>

          </div>

        </div>

        {/* SLIDER */}

        <div className="holidayMemoriesSliderWrapper">

          <button
            type="button"
            className="holidayMemoryArrow holidayMemoryArrowLeft"
            onClick={handlePrevious}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div
            className="holidayMemoriesSlider"
            ref={sliderRef}
            onScroll={handleScroll}
          >

            {holidayMemories.map((memory) => (

              <article
                className="holidayMemoryCard"
                key={memory.id}
                onClick={() => openPopup(memory)}
              >

                <div className="holidayMemoryMedia">

                  <video
                    className="holidayMemoryVideo"
                    src={memory.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />

                  <div className="holidayMemoryGradient"></div>

                  <div className="holidayMemoryPlay">
                    <span>
                      <FaPlay />
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`holidayMemoryHeart ${likedIds.includes(memory.id) ? "liked" : ""
                      }`}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleLike(memory.id, memory.destination);
                    }}
                    aria-label={
                      likedIds.includes(memory.id)
                        ? `Remove ${memory.destination} from favourites`
                        : `Add ${memory.destination} to favourites`
                    }
                    aria-pressed={likedIds.includes(memory.id)}
                    title={
                      likedIds.includes(memory.id)
                        ? "Remove from favourites"
                        : "Add to favourites"
                    }
                  >
                    <FaHeart />
                  </button>

                  <div className="holidayMemoryContent">

                    <div className="holidayMemoryLocation">

                      <FaMapMarkerAlt />

                      <span>
                        {memory.destination}
                      </span>

                    </div>

                    <h3>
                      {memory.name}
                    </h3>

                    <p>
                      {memory.title}
                    </p>

                    <span className="holidayMemoryTag">
                      {memory.destination}
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

          <button
            type="button"
            className="holidayMemoryArrow holidayMemoryArrowRight"
            onClick={handleNext}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* DOTS */}

        <div className="holidayMemoryDots">

          {holidayMemories.map((memory, index) => (

            <button
              type="button"
              key={memory.id}
              className={
                activeIndex === index
                  ? "holidayMemoryDot active"
                  : "holidayMemoryDot"
              }
              onClick={() => handleDotClick(index)}
              aria-label={`Go to ${memory.destination}`}
            />

          ))}

        </div>

      </div>

      {/* =====================================================
          VIDEO POPUP
      ===================================================== */}

      {selectedMemory && (

        <div
          className="holidayVideoModal"
          onClick={closePopup}
        >

          <div
            className="holidayVideoModalInner"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              type="button"
              className="holidayVideoClose"
              onClick={closePopup}
              aria-label="Close video"
            >
              <FaTimes />
            </button>

            {/* VIDEO */}

            <div className="holidayPopupVideoBox">

              <video
                key={selectedMemory.video}
                ref={popupVideoRef}
                className="holidayPopupVideo"
                src={selectedMemory.video}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="auto"
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={(event) => {
                  setIsMuted(event.currentTarget.muted);
                }}
              />

              {/* TOP DESTINATION */}

              <div className="holidayPopupVideoDestination">
                <FaMapMarkerAlt />

                <span>
                  {selectedMemory.destination}
                </span>
              </div>

              {/* POPUP FAVOURITE */}

              <button
                type="button"
                className={`holidayPopupLike ${likedIds.includes(selectedMemory.id) ? "liked" : ""
                  }`}
                onClick={() =>
                  toggleLike(
                    selectedMemory.id,
                    selectedMemory.destination
                  )
                }
                aria-label={
                  likedIds.includes(selectedMemory.id)
                    ? "Remove from favourites"
                    : "Add to favourites"
                }
                aria-pressed={likedIds.includes(selectedMemory.id)}
                title={
                  likedIds.includes(selectedMemory.id)
                    ? "Remove from favourites"
                    : "Add to favourites"
                }
              >
                <FaHeart />
              </button>

              {/* POPUP NAVIGATION */}

              <button
                type="button"
                className="holidayPopupNav holidayPopupNavLeft"
                onClick={handlePopupPrevious}
                aria-label="Previous video"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                className="holidayPopupNav holidayPopupNavRight"
                onClick={handlePopupNext}
                aria-label="Next video"
              >
                <FaChevronRight />
              </button>

              {/* CONTROLS */}

              <div className="holidayPopupControls">

                {/* PLAY */}

                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={
                    isPlaying
                      ? "Pause video"
                      : "Play video"
                  }
                >
                  {isPlaying ? (
                    <FaPause />
                  ) : (
                    <FaPlay />
                  )}
                </button>

                {/* MUTE */}

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={
                    isMuted
                      ? "Unmute"
                      : "Mute"
                  }
                >
                  {isMuted ? (
                    <FaVolumeMute />
                  ) : (
                    <FaVolumeUp />
                  )}
                </button>

                {/* SHARE */}

                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share"
                >
                  <FaShareAlt />
                </button>

                {/* FULLSCREEN */}

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Fullscreen"
                >
                  {isFullscreen ? (
                    <FaCompress />
                  ) : (
                    <FaExpand />
                  )}
                </button>

              </div>

              {/* VIEW PACKAGES */}

              <button
                type="button"
                className="holidayViewPackages"
                onClick={handleViewPackages}
              >
                View {selectedMemory.destination} Packages
                <FaChevronRight />
              </button>

            </div>

            {/* DETAILS */}

            <div className="holidayPopupDetails">

              <span className="holidayPopupDestination">
                {selectedMemory.destination}
              </span>

              <h2>
                {selectedMemory.name}{" "}
                {selectedMemory.title}
              </h2>

              <div className="holidayPopupLine"></div>

              <p>
                {selectedMemory.description}
              </p>

              <button
                type="button"
                className="holidayPopupPackageButton"
                onClick={handleViewPackages}
              >
                Explore {selectedMemory.destination} Packages

                <FaChevronRight />
              </button>

            </div>

          </div>

        </div>

      )}

      {likeMessage && (
        <div className="holidayLikeToast" role="status">
          <span className="holidayLikeToastIcon">
            <FaHeart />
          </span>
          <span>{likeMessage}</span>
        </div>
      )}

    </section>
  );
};

export default HolidayMemories;