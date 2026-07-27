import React from "react";
import { Link, useParams } from "react-router-dom";
import "./TourBreadcrumb.css";

const TourBreadcrumb = () => {
    const { slug } = useParams();

    const tourName = slug
        ? slug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        : "Tour Details";

    return (
        <section className="tourBreadcrumb">
            <div className="breadcrumbContainer">

                <div className="breadcrumbLeft">
                    <h2>{tourName}</h2>
                    <p>Everything you need to know before booking this amazing trip.</p>
                </div>

                <div className="breadcrumbRight">
                    <Link to="/">Home</Link>

                    <span>/</span>

                    <Link to="/holidays">Tours</Link>

                    <span>/</span>

                    <span className="active">{tourName}</span>
                </div>

            </div>
        </section>
    );
};

export default TourBreadcrumb;