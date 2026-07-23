import { useState } from "react";
import "./TourSearch.css";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaSearch,
} from "react-icons/fa";

const TourSearch = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    duration: "",
    budget: "",
    month: "",
  });

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log("Search Data:", searchData);

    alert(`
Destination: ${searchData.destination || "Any"}
Duration: ${searchData.duration || "Any"}
Budget: ${searchData.budget || "Any"}
Travel Month: ${searchData.month || "Any"}
    `);

    // Next step:
    // Here we'll filter tours or navigate to the Tours page.
  };

  return (
    <section className="tour-search-wrapper">
      <div className="tour-search-box">

        {/* Destination */}
        <div className="search-item">
          <div className="search-icon">
            <FaMapMarkerAlt />
          </div>

          <div className="search-content">
            <span>Destination</span>

            <select
              name="destination"
              value={searchData.destination}
              onChange={handleChange}
            >
              <option value="">Where To?</option>
              <option value="Dubai">Dubai</option>
              <option value="Bali">Bali</option>
              <option value="Maldives">Maldives</option>
              <option value="Thailand">Thailand</option>
              <option value="Singapore">Singapore</option>
              <option value="Switzerland">Switzerland</option>
            </select>
          </div>
        </div>

        <div className="divider"></div>

        {/* Duration */}
        <div className="search-item">
          <div className="search-icon">
            <FaCalendarAlt />
          </div>

          <div className="search-content">
            <span>Duration</span>

            <select
              name="duration"
              value={searchData.duration}
              onChange={handleChange}
            >
              <option value="">Any Duration</option>
              <option value="1-3 Days">1-3 Days</option>
              <option value="4-6 Days">4-6 Days</option>
              <option value="7-9 Days">7-9 Days</option>
              <option value="10+ Days">10+ Days</option>
            </select>
          </div>
        </div>

        <div className="divider"></div>

        {/* Budget */}
        <div className="search-item">
          <div className="search-icon">
            <FaMoneyBillWave />
          </div>

          <div className="search-content">
            <span>Budget</span>

            <select
              name="budget"
              value={searchData.budget}
              onChange={handleChange}
            >
              <option value="">Any Budget</option>
              <option value="$500">$500</option>
              <option value="$1000">$1000</option>
              <option value="$2000">$2000</option>
              <option value="$5000+">$5000+</option>
            </select>
          </div>
        </div>

        <div className="divider"></div>

        {/* Month */}
        <div className="search-item">
          <div className="search-icon">
            <FaCalendarAlt />
          </div>

          <div className="search-content">
            <span>Travel Month</span>

            <select
              name="month"
              value={searchData.month}
              onChange={handleChange}
            >
              <option value="">Any Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          className="search-btn"
          onClick={handleSearch}
        >
          <FaSearch />
          Search Tours
        </button>

      </div>
    </section>
  );
};

export default TourSearch;