import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Logo from './i/weather-grabber.png';
import Bot from './i/weather-bot.png';
import Bubble from './i/speech-bubble.png'
import {WeatherBot,Search} from './context/WeatherBot';

export default function App() {
  const speak = () => {
    document.querySelector('.speech-bubble').classList.toggle('bubble-display');
    document.querySelector('.bot-speech').classList.toggle('speech-display');
  }
  const [weatherBot,setWeatherBot] = useState({
    main: (
      <div className='weather-bot'>
        <img className='bot' src={Bot} onClick={speak}/>
        <img className='speech-bubble' src={Bubble}/>
        <p className='bot-speech'>Hi, I am the Weather Grabber's Bot! Tell me any city in the world and I'll go check if it's raining for ya...</p>
      </div>
    ),
    footer: null
  });
  const [search,setSearch] = useState('');
  const grabWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.name === undefined) {
        setWeatherBot({
          main: (
            <div class='weather-bot-error'>
              <img class="error-bot" src={Bot}/>
              <img class="error-bubble" src={Bubble}/>
              <p class="speech-error">Looks like you've sent me on a wild goose chase... Feel free to try again with a valid location.</p>
            </div>
          ),
          footer: null
        });
      } else {
        setWeatherBot({
          main: (
            <div className='weather'>
              <div>
                <h1 className="weather-h1">City: <span id="city">{data.name}</span></h1>
                <img id="weather-icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
              </div>
              <div className="caption-1">
                <p>Country: <span id="country">{data.sys.country}</span> <span class="bullet">&#8226;</span></p>
                <p>Latitude: <span id="latitude">{data.coord.lat}</span>&deg; <span class="bullet">&#8226;</span></p>
                <p>Longitude: <span id="longitude">{data.coord.lon}</span>&deg;</p>
              </div>
              <h1 className="weather-h1">Temperature: <div><span id="temperature-celcius">{data.main.temp}</span> (&#8451;) / <span id="temperature-farenheit">{(data.main.temp * 1.8 + 32).toFixed(2)}</span> (&#8457;)</div></h1>
              <div class="caption-2">
                <p>Feels like: <span id="feels-like-celcius">{data.main.feels_like}</span> (&#8451;) / <span id="feels-like-farenheit">{(data.main.feels_like * 1.8 + 32).toFixed(2)}</span> (&#8457;) <span class="bullet">&#8226;</span></p>
                <p>Min: <span id="min-celcius"></span> (&#8451;) / <span id="min-farenheit"></span> (&#8457;) <span class="bullet">&#8226;</span></p>
                <p>Max: <span id="max-celcius"></span> (&#8451;) / <span id="max-farenheit"></span> (&#8457;)</p>
              </div>
            </div>
          ),
          footer: null
        });
      }
    });
  }
  return (
    <div>
      <Header
       Logo={Logo}
      />
      <WeatherBot.Provider value={{weatherBot,setWeatherBot}}>
        <Main/>
        <Search.Provider value={{search,setSearch}}>
          <Footer
            Logo={Logo}
            grabWeather={grabWeather}
          />
        </Search.Provider>
      </WeatherBot.Provider>
    </div>
  );
}
