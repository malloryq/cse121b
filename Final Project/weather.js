const apiKey = '0000236f2f188e4ecdffcdf64b71cb16';
const form = document.getElementById('location-form');
const weatherInfo = document.getElementById('weather-info');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city-input').value;
    try {
        const weatherData = await getWeather(cityInput);
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error fetching weather:', error);
        weatherInfo.innerHTML = '<p>Weather data not available for this location</p>';
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Weather data not available for this location');
        }
        return await response.json();
    } catch (error) {
        throw new Error(error);
    }
}

function displayWeather(data) {
    const { name: cityName, main: { temp: temperature }, weather } = data;
    const weatherDescription = weather[0].description;
    const temperatureCelsius = temperature - 273.15; // Conversion from Kelvin to Celsius

    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>Temperature:  ${temperatureCelsius.toFixed(2)}°C</p>
        <p>Weather: ${weatherDescription}</p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}

// Example of using an array method (filter)
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);
