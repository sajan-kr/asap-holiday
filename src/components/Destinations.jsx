import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const destinations = [
    {
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop',
      type: 'Domestic'
    },
    {
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=300&h=200&fit=crop',
      type: 'Domestic'
    },
    {
      name: 'Thailand',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      type: 'International'
    },
    {
      name: 'Bali',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop',
      type: 'International'
    },
    {
      name: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop',
      type: 'International'
    },
    {
      name: 'Singapore',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=300&h=200&fit=crop',
      type: 'International'
    }
  ];

  return (
    <section className="destinations section">
      <div className="container">
        <h2 className="section-title">Trending Destinations</h2>
        <p className="section-subtitle">Where everyone dreams to go...</p>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <div key={index} className="destination-card">
              <div className="destination-image">
                <img src={dest.image} alt={dest.name} />
                <div className="destination-overlay">
                  <h3>{dest.name}</h3>
                  <span className="destination-type">{dest.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="destinations-cta">
          <a href="#packages" className="btn btn-primary">
            View All Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;