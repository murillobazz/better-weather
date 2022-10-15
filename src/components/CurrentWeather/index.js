import './index.css';

const CurrentWeather = ({data}) => {
    return (
        <div className="card">
            <div className="header">
                <div className="header-text">
                    <h2 className="name">{data.city}</h2>
                    <p className="description">{data.weather[0].description}</p>
                </div>
                <img className="weather-icon" src={`icons/${data.weather[0].icon}.png`} alt="weather" />
            </div>
            <div className="content">
                <h2 className="temperature">{Math.round(data.main.temp)}°C</h2>
                <div className="details">
                    <p><strong>Details</strong></p>
                    <div className="parameter">
                        <span className="label">Feels like</span>
                        <span className="value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter">
                        <span className="label">Wind speed</span>
                        <span className="value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter">
                        <span className="label">Humidity</span>
                        <span className="value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter">
                        <span className="label">Pressure</span>
                        <span className="value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CurrentWeather;
