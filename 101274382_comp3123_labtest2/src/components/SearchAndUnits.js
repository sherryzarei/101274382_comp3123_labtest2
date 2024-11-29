import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchAndUnits.css";

function SearchAndUnits({ setQ, units, setUnits }) {
  const [city, setCity] = useState("");

  const toggleUnits = () => {
    setUnits((prevUnits) => (prevUnits === "metric" ? "imperial" : "metric"));
  };

  const searchClick = () => {
    if (city !== "") setQ({ q: city });
  };

  return (
    <div className="SearchAndUnits-container">
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Search for places"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <FaSearch className="search-icon" size={23} onClick={searchClick} />
      </div>

      <div className="unit-toggle">
        <button className="toggle-button" onClick={toggleUnits}>
          {units === "metric" ? "°C" : "°F"}
        </button>
      </div>
    </div>
  );
}

export default SearchAndUnits;
