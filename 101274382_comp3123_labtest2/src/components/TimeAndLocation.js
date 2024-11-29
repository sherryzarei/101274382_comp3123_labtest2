import React from "react";
import { formatToLocalTime } from "./Weather";
import "../styles/TimeAndLocation.css";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="time-container">
        <p className="time-text">{formatToLocalTime(dt, timezone, "h:mm a")}</p>
      </div>

      <div className="location-container">
        <p className="location-text">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
