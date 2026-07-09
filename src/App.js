import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/rebecca-lange-804b8b111/"
            target="_blank"
            rel="noreferrer"
          >
            Rebecca Lange
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/beckslange/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
