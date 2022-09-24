/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
import weatherData from './apis';

const form = document.querySelector('form');
const input = document.querySelector('input');
input.setAttribute('type', 'text');

const location = document.querySelector('.location');
const condition = document.querySelector('.condition');
const degrees = document.querySelector('.degrees');
const feelsLike = document.querySelector('.feels-like');
const windSpeed = document.querySelector('.wind-kmph');
const humidity = document.querySelector('.humidity');

window.addEventListener('load', async () => {
    const initialData = await weatherData('Kasserine');

    location.textContent = initialData[0];
    condition.textContent = initialData[1];
    degrees.textContent = initialData[2];
    feelsLike.textContent = `FEELS LIKE: ${initialData[3]}`;
    windSpeed.textContent = `WIND: ${initialData[4]} KM/H`;
    humidity.textContent = `HUMIDITY: ${initialData[5]}`;
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = input.value;
    const data = await weatherData(city);

    location.textContent = data[0];
    condition.textContent = data[1];
    degrees.textContent = data[2];
    feelsLike.textContent = `FEELS LIKE: ${data[3]}`;
    windSpeed.textContent = `WIND: ${data[4]} KM/H`;
    humidity.textContent = `HUMIDITY: ${data[5]}`;
    input.value = '';
});
