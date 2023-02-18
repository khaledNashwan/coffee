import React from 'react'
import reto from "../../image/rito.jpg";
import "./Header.css";

const HeroThree = () => {
  return (
    <>
      <div className="hero_hjj">
        <div className="hero_hjj_image">
          <img src={reto} alt="" />
        </div>
        <p>
          Adjust your mood with premium Italian coffee, and enjoy Italian tate
          only in
          <span>#Ristretto</span>
        </p>
      </div>

    </>
  );
}

export default HeroThree