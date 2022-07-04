import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub,faInstagram} from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <div className='about'>
        <p>Hi, I'm Grimc0de and I've created this weather app with the <a href="https://openweathermap.org/api" target="_blank">OpenWeather</a> API.</p>
        <p>Find more about my work @</p>
        <a href="https://github.com/Gr1mc0de" target="_blank"><FontAwesomeIcon className='i' icon={faGithub}/></a>
        <a href="https://instagram.com/grimc0de" target="_blank"><FontAwesomeIcon className='i' icon={faInstagram}/></a>
    </div>
  )
}
