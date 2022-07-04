import React from 'react';
import About from './About/About';

export default function Header(props) {
  const displayAbout = () => {
    document.querySelector(".about").classList.toggle("about-display");
  }
  return (
    <header>
      <a className='main-heading' href=''>
        <img className='logo' src={props.Logo}/>
        <h1>THE WEATHER GRABBER</h1>
      </a>
      <h4 onClick={displayAbout}>About</h4>
      <About/>
    </header>
  )
}
