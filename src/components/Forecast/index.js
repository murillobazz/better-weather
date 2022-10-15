import {
    Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel
} from 'react-accessible-accordion';
import './index.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => {
                    return (
                        <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.floor(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="details-grid">
                                <div className="details-item">
                                    <label>Pressure: </label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="details-item">
                                    <label>Humidity: </label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="details-item">
                                    <label>Clouds: </label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="details-item">
                                    <label>Wind speed: </label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="details-item">
                                    <label>Sea level: </label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="details-item">
                                    <label>Feels like: </label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    )
                })}
            </Accordion>
        </>
    )
};

export default Forecast;