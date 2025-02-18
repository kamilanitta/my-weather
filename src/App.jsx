import "./App.css"

function App() {
  return (
    <div className="weather-app">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
            id="search-input"
          />
          <input
            type="submit"
            value="Search"
            className="search-button"
          />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1
              className="current-city"
              id="current-city"
            >
              Paris
            </h1>
            <p className="current-details">
              <span id="current-date"></span>, moderate rain <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="current-temperature-icon">☀️</span>
            <span
              className="current-temperature-value"
              id="current-temperature"
            >
              24
            </span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="#"
            target="_blank"
          >
            Kamila Nitta{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/kamilanitta/my-weather"
            target="_blank"
          >
            on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://my-weather-she-codes.netlify.app/"
            target="_blank"
          >
            hosted on Netlify.
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
