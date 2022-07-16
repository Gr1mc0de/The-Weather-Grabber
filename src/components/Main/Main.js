import React, {useState,useContext} from 'react';
import {WeatherBot} from '../../context/WeatherBot';

export default function Main() {
  const {weatherBot,setWeatherBot} = useContext(WeatherBot);
  return (
    <main>
      {weatherBot.main}
    </main>
  )
}
