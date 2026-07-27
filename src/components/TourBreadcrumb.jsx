import React from "react";
import { Link } from "react-router-dom";
import "./TourBreadcrumb.css";

const TourBreadcrumb = ({ tour }) => {
  return (
    <section className="tourBreadcrumb">
      <div className="breadcrumbContainer">

        <div className="breadcrumbLeft">
          <h2>{tour.title}</h2>
          <p>Discover amazing experiences in {tour.location}</p>
        </div>

        <div className="breadcrumbRight">

          <Link to="/">Home</Link>

          <span>/</span>

          <Link to={`/tours/${tour.slug}`}>Tours</Link>

          <span>/</span>

          <span className="active">
            {tour.title}
          </span>

        </div>

      </div>
    </section>
  );
};

export default TourBreadcrumb;