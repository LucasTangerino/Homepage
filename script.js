// script.js
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(startTime, 500);
}


function checkTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}


function atualizaData() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
    const ano = dataAtual.getFullYear();

    document.getElementById("data").innerHTML = `${dia}/${mes}/${ano}`;
}

setInterval(atualizaData, 1000);

function playWhatsAppSound() {
    var audio = document.getElementById('whatsAppClickSound');
    audio.play();
}

function playDiscordSound() {
    var audio = document.getElementById('discordClickSound');
    audio.play();
}

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

var images = ["imagens/images.jpg","imagens/images2.jpg","imagens/images3.jpg","imagens/images4.jpg","imagens/images5.jpg","imagens/images6.jpg"];
var currentIndex = 0;
var timeoutId;

function changeBackground() {
    const body = document.querySelector('body');
    var btn = document.querySelector(".dark-mode-btn");
    if (body.classList.contains('dark-mode')) {
        images = ["imagens/images4.jpg", "imagens/images5.jpg","imagens/images6.jpg"];
        timeoutId = setTimeout(changeBackground, 10000);
    } else {
        images = ["imagens/images.jpg","imagens/images2.jpg","imagens/images3.jpg"];
        timeoutId = setTimeout(changeBackground, 10000);
    }
    body.style.backgroundImage = "url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
}

window.addEventListener('load', function() {
    startTime();
    changeBackground();
});

function toggleDarkMode() {
    const body = document.querySelector('body');
    var btn = document.querySelector(".dark-mode-btn");
    body.classList.toggle('dark-mode');
    btn.classList.toggle("dark-mode");
    clearTimeout(timeoutId);
    changeBackground();
}





