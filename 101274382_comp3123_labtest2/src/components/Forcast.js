import React from "react";
import '../styles/Forcast.css';

function Forecast({ title, items }) {
  return (
    <div>
      <div className="forecast-title">
        <p>{title}</p>
      </div>
      <hr className="forecast-divider" />

      <div className="forecast-items">
        {items && items.map((item, index) => (
          <div
            key={index}
            className="forecast-item"
          >
            <p className="forecast-item-title">{item.title}</p>
            <img
              src={item.icon_url}
              className="forecast-item-icon"
              alt="weather icon"
            />
            <p className="forecast-item-temp">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
