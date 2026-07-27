import React, { useState } from "react";
import "./TourGalleryDetails.css";

const TourGalleryDetails = ({ tour }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="tourGalleryDetails">

      <div className="galleryHeading">

        <span>PHOTO GALLERY</span>

        <h2>{tour.title} Gallery</h2>

        <p>
          Explore beautiful moments from this destination.
        </p>

      </div>

      <div className="galleryGrid">

        {tour.gallery.map((image, index) => (

          <div
            key={index}
            className="galleryCard"
            onClick={() => setSelectedImage(image)}
          >

            <img
              src={image}
              alt={`${tour.title} ${index + 1}`}
            />

          </div>

        ))}

      </div>

      {selectedImage && (

        <div
          className="galleryModal"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Preview"
          />

        </div>

      )}

    </section>
  );
};

export default TourGalleryDetails;