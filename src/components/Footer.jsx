import React from 'react'
import FacebookLogo from '../img/face.png'
import InstagramLogo from '../img/insta.png'
import TwitterLogo from '../img/twitter.png'

import '../styles/Footer.css';

function Footer() {
  return (

    <div className="Footer">
      <div className="Footer-credentials">
        <ul>
          <li>Adress: Torstraße 123, 10243 Berlin</li>
          <li>Tel.: (123)-456-7890</li>
          <li>email: librify@customerservice.de</li>
          <li>open: Monday-Friday: 9 - 18</li>
        </ul>
      </div>
      <div className="Footer-social-media">
        <img src={FacebookLogo} alt="facebook-logo" />
        <img src={InstagramLogo} alt="instagram-logo" />
        <img src={TwitterLogo} alt="twitter-logo" />
      </div>
    </div>
  )
}

export default Footer;
