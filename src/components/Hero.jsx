import React from 'react'
import '../styles/Hero.css'
import Logo from '../img/fav.png'
import Javascript from '../img/javascript.png'
import css from '../img/css.png'
import html from '../img/html.png'
import react from '../img/react.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>the coolest app for bookworms out there!</h1>

        <p>
          <button data-fancybox data-src="#selectableModal" className="hero-content_button">about the app</button>
        </p>

        <div style={{
          display: "none",
          maxWidth: "60%",
          fontSize: "2rem",
          padding: "4rem",
          color: "white",
          backgroundImage: "linear-gradient(to bottom, #d55ead, #543093)"
        }} id="selectableModal">

          <h2 data-selectable="true" style={{ textAlign: "center", paddingBottom: "2rem" }}>Welcome!</h2>

          <p data-selectable="true">I've created this single page application using React. During my time at Ubiqum Code Academy this was one of the funnest projects. I've really enjoyed every moment of descovering this great framework!</p>

          <h3 style={{ paddingTop: "2rem" }}>Special thanks to:</h3>

          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <span style={{ fontFamily: "Pacifico, cursive", fontSize: "4rem", color: "#FF5268" }}>fancybox</span>
            <img src={html} alt="html-logo" />
            <img src={css} alt="css-logo" />
            <img src={Javascript} alt="javascript-logo" />
            <img src={react} alt="react-logo" />
          </div>

        </div>
      </div >
    </div >
  )
}

export default Hero
