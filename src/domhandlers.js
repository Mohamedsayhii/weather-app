/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */

import weatherData from './apis';

import clearSkyDay from './assets/clear-sky-day.jpg';
import clearSkyNight from './assets/clear-sky-night.jpg';
import fewCloudsDay from './assets/few-clouds-day.jpg';
import fewCloudsNight from './assets/few-clouds-night.jpg';
import scatteredCloudsDay from './assets/scattered-clouds-day.jpg';
import scatteredCloudsNight from './assets/scattered-clouds-night.jpg';
import brokenClouds from './assets/broken-clouds.jpg';
import rainDay from './assets/rain-day.jpg';
import rainNight from './assets/rain-night.jpg';
import snowDay from './assets/snow-day.jpg';
import snowNight from './assets/snow-night.jpg';
import thunderDay from './assets/thunder-day.jpg';
import thunderNight from './assets/thunder-night.jpg';
import fogDay from './assets/fog-day.jpg';
import fogNight from './assets/fog-night.jpg';

const mainContainer = document.querySelector('#main-container');
const form = document.querySelector('form');
const error = document.querySelector('.error-msg');
const input = document.querySelector('input');
input.setAttribute('type', 'text');

const location = document.querySelector('.location');
const condition = document.querySelector('.condition');
const degrees = document.querySelector('.degrees');
const feelsLike = document.querySelector('.feels-like');
const windSpeed = document.querySelector('.wind-kmph');
const humidity = document.querySelector('.humidity');

window.addEventListener('load', async () => {
    const initialData = await weatherData('Kasserine').catch((err) => {
        throw err;
    });

    displayWeather(initialData);
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = input.value;
    const data = await weatherData(city).catch((err) => {
        if (err.message === 'cityName.location is undefined') {
            error.style.display = 'block';
            if (error.classList.contains('fade-in')) {
                error.style.display = 'none';
                error.classList.remove('fade-in2');
                error.classList.add('fade-in');
                error.style.display = 'block';
            } else {
                error.classList.add('fade-in');
            }
        }
    });

    if (data) {
        displayWeather(data);
    }
});

const displayWeather = (data) => {
    error.style.display = 'none';
    location.textContent = data[0];
    condition.textContent = data[1];
    degrees.textContent = data[2];
    feelsLike.textContent = `FEELS LIKE: ${data[3]}`;
    windSpeed.textContent = `WIND: ${data[4]} KM/H`;
    humidity.textContent = `HUMIDITY: ${data[5]}`;
    input.value = '';

    const img = document.createElement('img');
    img.src = `https://openweathermap.org/img/wn/${data[7]}@2x.png`;
    condition.appendChild(img);

    changeBg(data[7]);
};

function changeBg(weatherCondition) {
    /* Set background depending on weather */
    switch (weatherCondition) {
        case '01d':
            mainContainer.style.backgroundImage = `url(${clearSkyDay})`;
            break;
        case '01n':
            mainContainer.style.backgroundImage = `url(${clearSkyNight})`;
            break;
        case '02d':
            mainContainer.style.backgroundImage = `url(${fewCloudsDay})`;
            break;
        case '02n':
            mainContainer.style.backgroundImage = `url(${fewCloudsNight})`;
            break;
        case '03d':
            mainContainer.style.backgroundImage = `url(${scatteredCloudsDay})`;
            break;
        case '03n':
            mainContainer.style.backgroundImage = `url(${scatteredCloudsNight})`;
            break;
        case '04d':
            mainContainer.style.backgroundImage = `url(${brokenClouds})`;
            break;
        case '04n':
            mainContainer.style.backgroundImage = `url(${scatteredCloudsNight})`;
            break;
        case '09d':
            mainContainer.style.backgroundImage = `url(${rainDay})`;
            break;
        case '09n':
            mainContainer.style.backgroundImage = `url(${rainNight})`;
            break;
        case '10d':
            mainContainer.style.backgroundImage = `url(${rainDay})`;
            break;
        case '10n':
            mainContainer.style.backgroundImage = `url(${rainNight})`;
            break;
        case '11d':
            mainContainer.style.backgroundImage = `url(${thunderDay})`;
            break;
        case '11n':
            mainContainer.style.backgroundImage = `url(${thunderNight})`;
            break;
        case '13d':
            mainContainer.style.backgroundImage = `url(${snowDay})`;
            break;
        case '13n':
            mainContainer.style.backgroundImage = `url(${snowNight})`;
            break;
        case '50d':
            mainContainer.style.backgroundImage = `url(${fogDay})`;
            break;
        case '50n':
            mainContainer.style.backgroundImage = `url(${fogNight})`;
            break;
        default:
            break;
    }
}
