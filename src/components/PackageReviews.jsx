
import React, { useMemo, useState } from "react";
import {
  Star,
  Quote,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  MapPin,
} from "lucide-react";

import "./PackageReviews.css";

const PAGE_SIZE = 3;

const getRating = (value) => {
  const rating = Number(value);
  return Number.isFinite(rating)
    ? Math.max(0, Math.min(5, rating))
    : 0;
};

const Stars = ({ rating, size = 15 }) => (
  <span
    className="apr-stars"
    role="img"
    aria-label={`${getRating(rating)} out of 5 stars`}
  >
    {Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={size}
        strokeWidth={1.7}
        className={
          index < Math.round(getRating(rating))
            ? "apr-star-filled"
            : "apr-star-empty"
        }
        aria-hidden="true"
      />
    ))}
  </span>
);

const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  const name = review.name || "Traveller";
  const content = review.review || review.text || "";

  const initials =
    review.initials ||
    name
      .trim()
      .split(/\s+/)
      .map((part) => part.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const canExpand = content.length > 160;

  return (
    <article className="apr-card">
      <div className="apr-card-top">
        <div className="apr-card-rating">
          <Stars rating={review.rating} />
          <strong>{getRating(review.rating).toFixed(1)}</strong>
        </div>

        <Quote className="apr-quote" size={26} />
      </div>

      {review.isDemo && (
        <span className="apr-demo-tag">
          SAMPLE REVIEW
        </span>
      )}

      <h3>
        {review.title || "A memorable travel experience"}
      </h3>

      <div className="apr-card-body">
        <p className={expanded ? "expanded" : ""}>
          {content}
        </p>

        {canExpand && (
          <button
            type="button"
            className="apr-read-more"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
          >
            {expanded ? "Read less" : "Read full review"}
            <ArrowRight size={14} />
          </button>
        )}
      </div>

      <div className="apr-author">
        <div className="apr-avatar">
          {review.avatar ? (
            <img
              src={review.avatar}
              alt=""
              loading="lazy"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        <div className="apr-author-info">
          <strong>{name}</strong>
          <span>
            {review.location || "Traveller"}
            {review.date ? ` · ${review.date}` : ""}
          </span>
        </div>

        {review.verified && !review.isDemo && (
          <span
            className="apr-verified"
            title="Verified traveller"
          >
            <CheckCircle2 size={17} />
          </span>
        )}
      </div>
    </article>
  );
};

const PackageReviews = ({ item, reviews }) => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("recent");
  const [visibleCount, setVisibleCount] =
    useState(PAGE_SIZE);

  const reviewList = useMemo(() => {
    if (Array.isArray(reviews)) return reviews;
    if (Array.isArray(item?.reviews)) return item.reviews;
    return [];
  }, [reviews, item?.reviews]);

  const stats = useMemo(() => { 
    const total = reviewList.length;

    const average = total
      ? reviewList.reduce(
          (sum, review) => sum + getRating(review.rating),
          0
        ) / total
      : 0;

    const distribution = [5, 4, 3, 2, 1].map(
      (star) => {
        const count = reviewList.filter(
          (review) =>
            Math.round(getRating(review.rating)) === star
        ).length;

        return {
          star,
          count,
          percent: total ? (count / total) * 100 : 0,
        };
      }
    );

    return { total, average, distribution };
  }, [reviewList]);

  const filteredReviews = useMemo(() => {
    const result = reviewList
      .map((review, index) => ({ review, index }))
      .filter(({ review }) => {
        if (filter === "all") return true;

        return (
          Math.round(getRating(review.rating)) ===
          Number(filter)
        );
      });

    if (sort === "highest") {
      result.sort(
        (a, b) =>
          getRating(b.review.rating) -
            getRating(a.review.rating) ||
          a.index - b.index
      );
    } else if (sort === "lowest") {
      result.sort(
        (a, b) =>
          getRating(a.review.rating) -
            getRating(b.review.rating) ||
          a.index - b.index
      );
    } else {
      const getDate = (review) => {
        const value = review.createdAt || review.date;

        if (
          typeof value !== "string" ||
          !/^\d{4}-\d{2}-\d{2}/.test(value)
        ) {
          return -Infinity;
        }

        const timestamp = Date.parse(value);

        return Number.isFinite(timestamp)
          ? timestamp
          : -Infinity;
      };

      result.sort(
        (a, b) =>
          getDate(b.review) - getDate(a.review) ||
          a.index - b.index
      );
    }

    return result;
  }, [reviewList, filter, sort]);

  const visibleReviews = filteredReviews.slice(
    0,
    visibleCount
  );

  const hasMore = visibleCount < filteredReviews.length;

  const isDemo = reviewList.some(
    (review) => review.isDemo
  );

  const handleFilter = (value) => {
    setFilter(value);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSort = (value) => {
    setSort(value);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section
      className="apr-section"
      id="package-reviews"
      aria-labelledby="apr-title"
    >
      <header className="apr-heading">
        <span className="apr-eyebrow">
          <span className="apr-eyebrow-line" />
          TRAVELLER EXPERIENCES
        </span>

        <h2 id="apr-title">
          Every journey has <span>a story.</span>
        </h2>

        <p>
          Discover travel experiences, honest feedback
          and memorable moments shared by travellers.
        </p>
      </header>

      {stats.total > 0 ? (
        <>
          {isDemo && (
            <div className="apr-demo-notice">
              Sample reviews for website testing.
              Replace with genuine customer feedback
              before publishing.
            </div>
          )}

          <div className="apr-summary">
            <div className="apr-summary-score">
              <span className="apr-summary-label">
                {isDemo
                  ? "SAMPLE REVIEW RATING"
                  : "OVERALL TRAVELLER RATING"}
              </span>

              <div className="apr-score-number">
                <strong>{stats.average.toFixed(1)}</strong>
                <span>/ 5</span>
              </div>

              <Stars rating={stats.average} size={19} />

              <p>
                Based on {stats.total}{" "}
                {isDemo ? "sample" : "traveller"} reviews
              </p>
            </div>

            <div className="apr-rating-bars">
              {stats.distribution.map((row) => (
                <div
                  className="apr-rating-row"
                  key={row.star}
                >
                  <span className="apr-rating-label">
                    {row.star}
                    <Star size={12} fill="currentColor" />
                  </span>

                  <div
                    className="apr-rating-track"
                    role="progressbar"
                    aria-label={`${row.star} star reviews`}
                    aria-valuenow={row.count}
                    aria-valuemin={0}
                    aria-valuemax={stats.total}
                  >
                    <div
                      className="apr-rating-fill"
                      style={{
                        width: `${row.percent}%`,
                      }}
                    />
                  </div>

                  <span className="apr-rating-count">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>

            <div className="apr-summary-aside">
              <MessageSquare size={25} />
              <strong>Travel experiences matter</strong>
              <p>
                Explore feedback and discover the
                highlights of every destination.
              </p>
            </div>
          </div>

          <div className="apr-list-header">
            <div>
              <h3>What travellers are saying</h3>
              <p>
                {filteredReviews.length} of {stats.total}{" "}
                reviews
              </p>
            </div>

            <div className="apr-controls">
              <label className="apr-select">
                <select
                  aria-label="Filter reviews by rating"
                  value={filter}
                  onChange={(event) =>
                    handleFilter(event.target.value)
                  }
                >
                  <option value="all">All ratings</option>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <option
                      key={rating}
                      value={rating}
                    >
                      {rating} stars
                    </option>
                  ))}
                </select>
                <ChevronDown size={15} />
              </label>

              <label className="apr-select">
                <select
                  aria-label="Sort reviews"
                  value={sort}
                  onChange={(event) =>
                    handleSort(event.target.value)
                  }
                >
                  <option value="recent">Most recent</option>
                  <option value="highest">
                    Highest rated
                  </option>
                  <option value="lowest">
                    Lowest rated
                  </option>
                </select>
                <ChevronDown size={15} />
              </label>
            </div>
          </div>

          {filteredReviews.length > 0 ? (
            <>
              <div className="apr-grid">
                {visibleReviews.map(
                  ({ review, index }) => (
                    <ReviewCard
                      key={
                        review.id ??
                        `${review.name}-${index}`
                      }
                      review={review}
                    />
                  )
                )}
              </div>

              {hasMore && (
                <div className="apr-more">
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((count) =>
                        count + PAGE_SIZE
                      )
                    }
                  >
                    Load more reviews
                    <ArrowRight size={17} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="apr-empty">
              <p>
                No reviews match the selected rating.
              </p>
              <button
                type="button"
                onClick={() => handleFilter("all")}
              >
                Clear filter
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="apr-empty">
          <MessageSquare size={30} />
          <h3>Your travel story could be next</h3>
          <p>
            No customer reviews have been published
            for this package yet.
          </p>
        </div>
      )}

      <div className="apr-bottom">
        <div className="apr-bottom-icon">
          <MapPin size={20} />
        </div>

        <div>
          <strong>
            Ready to create your own travel story?
          </strong>
          <p>
            Discover unforgettable destinations with
            ASAP Holidays.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackageReviews;
