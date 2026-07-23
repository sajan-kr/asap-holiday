import React from 'react';
import './TrendingPackages.css';

const TrendingPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Phuket Krabi Tropical Getaway',
      price: 'INR 29,999/-',
      duration: '5 Nights / 6 Days',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Phuket Island Explorer',
      price: 'INR 22,999/-',
      duration: '4 Nights / 5 Days',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Phuket Fun Trails',
      price: 'INR 26,999/-',
      duration: '5 Nights / 6 Days',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="trending-packages section">
      <div className="container">
        <h2 className="section-title">Trending Packages</h2>
        <p className="section-subtitle">Most loved escapes...</p>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.title} />
                <div className="package-overlay">
                  <span className="package-duration">{pkg.duration}</span>
                </div>
              </div>
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-price">
                  <span className="price-label">Price Starting From</span>
                  <span className="price-amount">{pkg.price}</span>
                  <span className="price-unit">Per Person</span>
                </div>
                <a href="#" className="btn btn-primary package-btn">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPackages;