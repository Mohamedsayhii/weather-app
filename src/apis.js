const weatherData = async (location) => {
    const [response1, response2] = await Promise.all([
        fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=2fc531ab42724d4ba6a110316222409&q=${location}`,
            { mode: 'cors' }
        ),
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f5bfad9a4c075a3a9ebfa4137dd6a339`,
            { mode: 'cors' }
        ),
    ]);

    const cityName = await response1.json();
    const data = await response2.json();

    console.log(`${cityName.location.name}, ${cityName.location.country}`);
    console.log(data.weather[0].description);
    console.log(
        Math.round(data.main.temp - 273.15),
        Math.round(data.main.feels_like - 273.15),
        `${Math.round(data.main.humidity)}%`
    );
    console.log(Math.round(data.wind.speed * 3.6 * 10) / 10);
};

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value;
    weatherData(city);
});
