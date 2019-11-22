import React from 'react'
import '../styles/Hero.css'
import Logo from '../img/fav.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>sign up for our news letter and recive crazy discounts</h1>
        {/* <button className="hero-content_button">sign up</button> */}
        <p>
          <button data-fancybox data-src="#selectableModal" className="hero-content_button">about the app</button>
        </p>

        <div style={{ 
          display: "none", 
          maxWidth: "80%", 
          fontSize: "1.6rem", 
          padding: "4rem", 
          color:"white",
          backgroundImage: "linear-gradient(to bottom, #d55ead, #543093)" }} id="selectableModal">

          <h2 data-selectable="true" style={{ textAlign: "center" }}>Welcome!</h2>
          <br />
          <p data-selectable="true">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fuga ipsum id assumenda. Quasi cumque unde accusantium minus error, quis quas, temporibus odio veritatis quaerat voluptates incidunt, nulla consequatur ducimus!
          <br /><br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sequi tenetur unde eveniet dolore iusto, vero vitae fugiat asperiores eius deleniti quae! Ea harum dolor minima laboriosam, assumenda repudiandae deleniti aperiam quaerat consequuntur ad, eius atque, eaque temporibus error aliquid! Earum illum iure ipsam molestias quaerat quisquam vel obcaecati quod?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus natus numquam debitis molestiae minima ducimus quam rem facere sit qui perspiciatis laborum iure ipsum harum sint, aperiam aliquam iusto aut quasi repellat explicabo reprehenderit. Ad tempore itaque mollitia non, accusamus cum autem alias expedita provident ullam quo nihil. Animi, repellat maiores nulla nesciunt autem optio harum facilis cumque aliquam minima, quo esse illo numquam quod quas! Explicabo fuga necessitatibus magni distinctio libero voluptate deserunt, hic sequi repellendus expedita voluptas, debitis odit labore numquam architecto. Sit earum iste possimus, voluptatem maxime velit incidunt officiis eius illo aliquam non quidem. Aperiam totam corporis, ea voluptatum mollitia labore fugiat magni odio at tempora qui rem dolore dolorum quasi consectetur assumenda porro eos voluptatem? Quibusdam soluta alias at natus perspiciatis, sit iste, ut, delectus quae explicabo debitis! Accusamus placeat reiciendis animi inventore corporis mollitia veritatis esse numquam eius, consequatur ea voluptates eos doloremque voluptas dolor maxime tenetur, nemo rerum dolorum amet ex blanditiis, sint porro repellat. Corrupti repudiandae ratione eos ad iste necessitatibus dignissimos incidunt cupiditate, qui delectus, quibusdam explicabo sit asperiores rerum corporis, est fugit molestias porro quis magnam recusandae nostrum. Reiciendis aliquid aperiam sint repellendus expedita reprehenderit incidunt ut. Possimus, accusamus?
          </p>
          <br />
          <img src={Logo} alt="logo" style={{ textAlign: "center", marginLeft: "50%", transform: "translateX(-50%)" }} />
        </div>
      </div >
    </div >
  )
}

export default Hero
