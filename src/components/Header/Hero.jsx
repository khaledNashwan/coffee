import React from 'react'
import hero_img5 from "../../image/nathan-dumlao-6VhPY27jdps-unsplash.jpg";
import './Header.css'
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <img src={hero_img5} alt="" />
      </div>
      <div className="right">
        <p>Adjust your mood with premium Italian coffee, and enjoy</p>

        <p> With the Italian taste only in #Ristretto ☕️👌🏻</p>

        <p>
          {" "}
          We remind you that the possibility of outside order #Takeaway is
          available :)
        </p>

        <p> Always the right #coffee in the right place.</p>
      </div>
    </div>
  );
}

export default Hero