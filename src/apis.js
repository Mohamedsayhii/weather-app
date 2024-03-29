/* eslint-disable consistent-return */

const weatherData = async (location) => {
    const [response1, response2] = await Promise.all([
        fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=7abf249092cd41b1824162213230108&q=${location}`,
            { mode: 'cors' }
        ),
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f5bfad9a4c075a3a9ebfa4137dd6a339`,
            { mode: 'cors' }
        ),
    ]);

    const cityName = await response1.json();
    const data = await response2.json();

    return [
        `${cityName.location.name.toUpperCase()}, ${cityName.location.country.toUpperCase()}`,
        data.weather[0].description.toUpperCase(),
        Math.round(data.main.temp - 273.15),
        Math.round(data.main.feels_like - 273.15),
        Math.round(data.wind.speed * 3.6 * 10) / 10,
        Math.round(data.main.humidity),
        data.weather[0].main,
        data.weather[0].icon,
    ];
};

export default weatherData;
