let countryName = document.querySelector('.location');
let todayTemp = document.querySelector('.num');
let todayIcon = document.querySelector('.todayIcon');
let todayStatus = document.querySelector('.todayStatus');
let todayDay = document.querySelector('.todayDay');
let todayDate = document.querySelector('.todayDate');
let forecastIcon = document.querySelector('.forecastIcon');
let forecastDeg1 = document.querySelector('.forecastDeg1');
let forecastDeg2 = document.querySelector('.forecastDeg2');
let forecastStatus = document.querySelector('.forecastStatus');
let forecastStatus2 = document.querySelector('.forecastStatus2');
let forecastDeg3 = document.querySelector('.forecastDeg1');
let forecastDeg4 = document.querySelector('.forecastDeg2');
let forecastIcon2 = document.querySelector('.forecastIcon2');

async function getWeather(location) {
        let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=df21adeb63e94548a91182947242312&q=${location}&days=3`);
        let finalResponse = await response.json();
        console.log(finalResponse);
        getTodayWeather(finalResponse);
}

function getTodayWeather(weather) {
    countryName.innerHTML = weather.location.name;
    todayTemp.innerHTML = weather.current.temp_c;
    todayIcon.innerHTML = `<img src="https:${weather.current.condition.icon}" alt="${weather.current.condition.text}">`;
    todayStatus.innerHTML = weather.current.condition.text;
    forecastIcon.innerHTML = `<img src="https:${weather.forecast.forecastday[1].day.condition.icon}" alt="${weather.forecast.forecastday[1].day.condition.text}">`;
    forecastDeg1.innerHTML = weather.forecast.forecastday[1].day.avgtemp_c;
    forecastDeg2.innerHTML = weather.forecast.forecastday[1].day.mintemp_c;
    forecastStatus.innerHTML = weather.forecast.forecastday[1].day.condition.text;
    forecastStatus2.innerHTML = weather.forecast.forecastday[2].day.condition.text;
    forecastIcon2.innerHTML = `<img src="https:${weather.forecast.forecastday[2].day.condition.icon}" alt="${weather.forecast.forecastday[1].day.condition.text}">`;
    forecastDeg3.innerHTML = weather.forecast.forecastday[2].day.avgtemp_c;
    forecastDeg4.innerHTML = weather.forecast.forecastday[2].day.mintemp_c;
}


document.getElementById('inputSearch').addEventListener('input', (event) => {
    const location = event.target.value.trim();
    getWeather(location); 
});
