import React, { useState, useEffect } from "react";
import "../styles/CitySelector.css";

function CitySelector({ setQ }) {
  const [cities, setCities] = useState([]);

  // Shuffle function to randomize city order
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ ...item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ sort, ...item }) => item);
  };

  // Fetch cities from GeoDB Cities API
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "7b65f8485fmsh3ef20429e03668fp1d0a33jsn9f6d1d0df3b5",
              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        const cityData = data.data.map((city, index) => ({
          id: index + 1,
          name: city.name,
        }));

        // Shuffle cities before setting state
        const shuffledCities = shuffleArray(cityData);
        setCities(shuffledCities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="top-button-container">
      {cities.length > 0 ? (
        cities.map((city) => (
          <button
            key={city.id}
            className="top-button"
            onClick={() => setQ({ q: city.name })}
          >
            {city.name}
          </button>
        ))
      ) : (
        <p>Loading cities...</p>
      )}
    </div>
  );
}

export default CitySelector;
