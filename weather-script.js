function displayAbout() {
    document.querySelector(".about").classList.toggle("about-display");
}

function speak() {
    document.querySelector(".speech-bubble").classList.toggle("bubble-display");
    document.querySelector(".bot-speech").classList.toggle("speech-display");
}

function speakSpaceBot() {
    document.querySelector(".space-bubble").classList.toggle("space-bubble-display");
    document.querySelector(".space-speech").classList.toggle("space-speech-display");
}

const apiKey = "bdb709f27095083d8e46db2e3ba5d9d9";
var search = "";
var cityForm = document.querySelector("form");
var cityInput = document.querySelector("input");

cityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector(".weather-bot").style.display = "none";
    document.querySelector(".weather-bot-error").style.display = "none";
    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".space-div").style.display = "flex";
    search = cityInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("city").innerHTML = data.name;
        if (document.getElementById("city").innerHTML === "undefined") {
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".space-div").style.display = "none";
            document.querySelector(".weather-bot-error").style.display = "flex";
        }
        document.getElementById("weather-icon").setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        document.getElementById("country").innerHTML = data.sys.country;
        document.getElementById("latitude").innerHTML = data.coord.lat;
        document.getElementById("longitude").innerHTML = data.coord.lon;
        var temperature = data.main.temp;
        document.getElementById("temperature-celcius").innerHTML = temperature;
        document.getElementById("temperature-farenheit").innerHTML = (temperature * 1.8 + 32).toFixed(2);
        document.getElementById("feels-like-celcius").innerHTML = data.main.feels_like;
        document.getElementById("feels-like-farenheit").innerHTML = (data.main.feels_like * 1.8 + 32).toFixed(2);
        document.getElementById("condition").innerHTML = data.weather[0].description;
        document.getElementById("cloudiness").innerHTML = data.clouds.all;
        document.getElementById("visibility-metric").innerHTML = (data.visibility/1000).toFixed(2);
        document.getElementById("visibility-imperial").innerHTML = (data.visibility/1609.344).toFixed(2);
        document.getElementById("wind-speed-metric").innerHTML = data.wind.speed;
        document.getElementById("wind-speed-imperial").innerHTML = (data.wind.speed/0.44704).toFixed(2);
        document.getElementById("wind-direction").innerHTML = data.wind.deg;
        document.getElementById("pressure").innerHTML = data.main.pressure;
        document.getElementById("humidity").innerHTML = data.main.humidity;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.daily[0].temp.min > temperature) {
                document.getElementById("max-celcius").innerHTML = temperature;
                document.getElementById("max-farenheit").innerHTML = (temperature * 1.8 + 32).toFixed(2);
            } else {
                document.getElementById("min-celcius").innerHTML = data.daily[0].temp.min;
                document.getElementById("min-farenheit").innerHTML = (data.daily[0].temp.min * 1.8 + 32).toFixed(2);
            }
            if (data.daily[0].temp.max < temperature) {
                document.getElementById("max-celcius").innerHTML = temperature;
                document.getElementById("max-farenheit").innerHTML = (temperature * 1.8 + 32).toFixed(2);
            } else {
                document.getElementById("max-celcius").innerHTML = data.daily[0].temp.max;
                document.getElementById("max-farenheit").innerHTML = (data.daily[0].temp.max * 1.8 + 32).toFixed(2);
            }
        });
    });
});
