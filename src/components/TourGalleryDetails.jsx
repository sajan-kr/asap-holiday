import React, { useState } from "react";
import "./TourGalleryDetails.css";

const images = [
    "/images/dubai1.jpg",
    "/images/dubai2.jpg",
    "/images/dubai3.jpg",
    "/images/dubai4.jpg",
    "/images/dubai5.jpg",
    "/images/dubai6.jpg",
];

const TourGalleryDetails = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="tourGalleryDetails">

            <div className="galleryHeading">
                <span>EXPLORE</span>
                <h2>Photo Gallery</h2>
                <p>
                    Take a glimpse of the unforgettable experiences waiting for you.
                </p>
            </div>

            <div className="galleryGrid">
                {images.map((image, index) => (
                    <div
                        className="galleryCard"
                        key={index}
                        onClick={() => setSelectedImage(image)}
                    >
                        <img src={image} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="galleryModal"
                    onClick={() => setSelectedImage(null)}
                >
                    <img src={selectedImage} alt="Preview" />
                </div>
            )}

        </section>
    );
};

export default TourGalleryDetails;