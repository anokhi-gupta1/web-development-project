const api_key = "eef959aef016e61ea3a31625978ace07";
const prompt = document.querySelector(".prompt");
const click = document.querySelector(".click1");
const temp = document.querySelector(".temp");
const place = document.querySelector(".place");
const wind = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");
const Humidity = document.querySelector(".Humidity");
const curLoc = document.querySelector(".curLoc");

// Fetch weather data by city name
click.addEventListener("click", async () => {
    let data = prompt.value.trim();
    if (data === "") {
        alert("Please enter a city name.");
        return;
    }
    await fetchWeatherByCity(data);
});

// Fetch weather data for current location
curLoc.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

// Function to fetch weather by city
async function fetchWeatherByCity(city) {
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
        if (!res.ok) throw new Error(`City not found! Status: ${res.status}`);
        
        let result1 = await res.json();
        console.log("City Weather Data:", result1);

        updateWeatherUI(result1);
    } catch (error) {
        console.error("Error fetching city weather:", error);
        alert("City not found. Please try again.");
    }
}

// Function to fetch weather by current location
async function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`);
        if (!res.ok) throw new Error(`Weather data not found! Status: ${res.status}`);

        let result1 = await res.json();
        console.log("Current Location Weather Data:", result1);

        updateWeatherUI(result1);
    } catch (error) {
        console.error("Error fetching location weather:", error);
        alert("Unable to fetch weather for your location.");
    }
}

// Function to handle location errors
function error() {
    alert("Unable to retrieve location. Please enable location services.");
}

// Function to update UI with weather data
function updateWeatherUI(result1) {
    prompt.value = "";
    let r = Math.floor(result1.main.temp - 273.15); // Convert Kelvin to Celsius
    temp.textContent = `${r}ºC`;
    place.textContent = result1.name;
    wind.textContent = `${Math.floor(result1.wind.speed)} km/h`;
    pressure.textContent = result1.main.pressure;
    Humidity.textContent = `${result1.main.humidity}%`;
}
