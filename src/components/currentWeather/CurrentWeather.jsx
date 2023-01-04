import "./currentWeather.css";

const currentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrano</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weather-icon" />
      </div>
      <div className="botton">
        <p className="tempeture">18°C</p>
      <div className="details">
        <div className="parameter-row">
          <span className="parameter-label top">Details:</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Feels Like</span>
          <span className="parameter-value">22°C</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Wind</span>
          <span className="parameter-value">2 m/s</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Hunidity</span>
          <span className="parameter-value">15%</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Pressure</span>
          <span className="parameter-value">15 hPa</span>
        </div>
      </div>
    </div>
      </div>
  );
};

export default currentWeather;
