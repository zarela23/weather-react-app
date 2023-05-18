import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    temperature: "60",
    city: "Tokyo",
    date: "Friday 12:00",
    description: "sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: "70",
    wind: "7",
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city...🔍"
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={weatherData.imgUrl} alt="{weatherData.description}" />
            <div>
              <strong>{weatherData.temperature}</strong>
              <span className="units"> °F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
