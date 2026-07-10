import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);

  function formatDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = `0$(minutes)`;
    }
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day} ${hours}:${minutes} ${ampm}`;
  }
  function refreshWeather(response) {
    setWeatherData({
      city: response.data.city,
      time: formatDate(response.data.time),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      temperature: Math.round(response.data.temperature.current),
      iconURL: response.data.condition.icon_url,
    });
  }
  function searchCity(city) {
    let apiKey = "tfo33b89af42954f2d60430a801e1b3c";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiURL).then(refreshWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
    if (weatherData === null) {
      searchCity(props.defaultCity);

      return <p>Loading...</p>;
    }
  }
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="form-control"
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1 className="city-name">{weatherData.city}</h1>
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
