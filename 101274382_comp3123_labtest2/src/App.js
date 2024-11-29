import React, { useEffect, useState } from "react";
import CitySelector from "./components/CitySelector";
import SearchAndUnits from "./components/SearchAndUnits";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndData from "./components/WeatherDetails";
import Forcast from "./components/Forcast";
import { fetchWeatherData, forcastWeather } from "./components/Weather";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forcast, setForcast] = useState(null);
  const [units, setUnits] = useState("metric");
  const [q, setQ] = useState({ q: "Toronto" });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWeatherData("weather", q.q, units);
      setWeather(response);
      console.log(response);
    };

    fetchData();
  }, [q, units]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await forcastWeather("forecast", q.q, units);
      setForcast(response);
      console.log(response);
    };

    fetchData();
  }, [q, units]);

  return (
    <div className="app">
      <div className="container">
        <dive className="section">
        <CitySelector setQ={setQ} />
        <SearchAndUnits setQ={setQ} units={units} setUnits={setUnits} />
        </dive>
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TempAndData weather={weather} />
            <Forcast title="Daily Forcast" items={forcast} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
