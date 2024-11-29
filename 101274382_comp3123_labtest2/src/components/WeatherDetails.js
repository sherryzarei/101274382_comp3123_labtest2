import React from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaTemperatureHigh,
  FaWind,
} from "react-icons/fa";
import { FiSunset } from "react-icons/fi";
import { FaDroplet } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { formatToLocalTime } from "./Weather";
import "../styles/WeatherDetails.css";

function WeatherDetails({
  weather: {
    description,
    icon_url,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="temp-container">
        <p>{description}</p>
      </div>

      <div className="weather-info">
        <div className="weather-header">
          <img src={icon_url} alt="weather icon" />
          <p>{`${temp.toFixed()}°`}</p>
          <div className="weather-details">
            <div className="weather-detail">
              <FaTemperatureHigh size={18} />
              Real feel: <span>{`${feels_like.toFixed()}°`}</span>
            </div>
            <div className="weather-detail">
              <FaDroplet size={18} />
              Humidity: <span>{`${humidity.toFixed()}%`}</span>
            </div>
            <div className="weather-detail">
              <FaWind size={18} />
              Wind: <span>{`${speed.toFixed()} MPH`}</span>
            </div>
          </div>
        </div>

        <div className="weather-footer">
          <div className="weather-item">
            <IoSunny />
            <p>
              Rise:{" "}
              <span className="font-medium">
                {formatToLocalTime(sunrise, timezone, "hh:mm a")}
              </span>
            </p>
          </div>
          <div className="separator"></div>
          <div className="weather-item">
            <FiSunset />
            <p>
              Set:{" "}
              <span className="font-medium">
                {formatToLocalTime(sunset, timezone, "hh:mm a")}
              </span>
            </p>
          </div>
          <div className="separator"></div>
          <div className="weather-item">
            <FaArrowUp />
            <p>
              High:{" "}
              <span className="font-medium">{`${temp_max.toFixed()}°`}</span>
            </p>
          </div>
          <div className="separator"></div>
          <div className="weather-item">
            <FaArrowDown />
            <p>
              Low:{" "}
              <span className="font-medium">{`${temp_min.toFixed()}°`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
