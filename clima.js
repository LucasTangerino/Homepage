const apiKey ="aabf385f061bdd5d53d344356fae7b2e";


const getFlag = (pais) => {
    return "https://flagsapi.com/" + pais + "/flat/64.png";
}

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");


const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperatura span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    console.log(data)
    return data;
}
const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    console.log(typeof(data.main.temp))

    cityElement.innerText = data.name;
    tempElement.innerText = data.main.temp;
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    countryElement.setAttribute("src", getFlag(data.sys.country));
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}Km/h`
    
}

searchBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})