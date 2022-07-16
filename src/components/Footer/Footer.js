import React, {useState,useContext} from 'react';
import {WeatherBot,Search} from '../../context/WeatherBot';

export default function Footer(props) {
  const {weatherBot,setWeatherBot} = useContext(WeatherBot);
  const {search,setSearch} = useContext(Search);
  const handleInput = (e) => {
    setSearch(e.target.value);
  }
  return (
    <footer>
      <div className='search'>
        <input placeholder="Enter city name" onChange={handleInput}/>
        <button onClick={props.grabWeather}><img src={props.Logo}/></button>
      </div>
      {weatherBot.footer}
    </footer>
  );
}
