import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul className="list-unstyled">
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
              alt="Mostly Cloudy"
              className="weather-icon me-2"
            />
            <div className="temperature-container">
              <span className="temperature">6</span>
              <span className="unit ms-1">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="list-unstyled">
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
