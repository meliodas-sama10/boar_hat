const API_KEY = 'e04d0c651a16163ce2b389d1c85e4c4c';
const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');
const currentWeatherSection = document.querySelector('.current-weather');
const weatherCardDiv = document.querySelector('.weather-card');
const humidityLogo = '<img src="humid.png" alt="">';
const windLogo = '<img src="wind.png" alt="">';
const createWeatherCard = (cityName, weatherItem, index) => {
    if (index === 0) {
        return `
        <div class="details">
            <h2 style="text-align:centre;">Today's Weather</h2>
            <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
            <h2>Temperature: ${Math.round(weatherItem.main.temp - 273.15)}°C</h2>
            <div class="min-max-temp">
                <div class="min-temp">
                    <img src="min-temp.png" alt="">
                    <div>Min: ${Math.round(weatherItem.main.temp_min - 273.15)}°C</div>
                </div>
                <div class="max-temp">
                    <img src="max-temp.png" alt="">
                    <div>Max: ${Math.round(weatherItem.main.temp_max - 273.15)}°C</div>
                </div>
            </div>
            <div class="wind-humidity">
                <div class="wind">${windLogo}<div>Wind: ${weatherItem.wind.speed} KpH</div></div>
                <div class="humidity">${humidityLogo}<div>Humidity: ${weatherItem.main.humidity}%</div></div>
            </div>
        </div>
        <div class="icon">
            <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="">
            <div>
                <p>${weatherItem.weather[0].description}</p>
            </div>
        </div>
    `;
    } else {
        return `
        <li class="card">
            <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
            <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="">
            <h3>Temperature: ${Math.round(weatherItem.main.temp - 273.15)}°C</h3>
            <div>Wind: ${weatherItem.wind.speed} KpH</div>
            <div>Humidity: ${weatherItem.main.humidity}%</div>
        </li>`;
    }
}

const getWeatherDetails = (cityName, lat, lon) => {
    const weather_api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(weather_api)
        .then(res => res.json())
        .then(data => {
            const uniqueForecasteDay = [];
            const fiveDays = data.list.filter(forecast => {
                const forecastDate = new Date(forecast.dt_txt).getDate();
                if (!uniqueForecasteDay.includes(forecastDate)) {
                    return uniqueForecasteDay.push(forecastDate);
                }
            });
            cityInput.value = "";
            currentWeatherSection.innerHTML = "";
            weatherCardDiv.innerHTML = "";
            console.log(fiveDays);
            fiveDays.forEach((weatherItem, index) => {
                if (index === 0) {
                    currentWeatherSection.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
                } else {
                    weatherCardDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
                }
            });
        })
        .catch(() => {
            alert("An error occurred");
        });
}

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim(); // Use value instead of Value
    if (!cityName) return;
    const Geocoding_api = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    fetch(Geocoding_api)
        .then(res => res.json())
        .then(data => {
            if (!data.length) return alert(`No coordinates found for ${cityName}`);
            const { name, lat, lon } = data[0];
            getWeatherDetails(name, lat, lon);
        })
        .catch(() => {
            alert("An error occurred while fetching the coordinates!");
        });
}

searchBtn.addEventListener("click", getCityCoordinates);
cityInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        getCityCoordinates();
    }
});
