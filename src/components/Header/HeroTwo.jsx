import React from 'react'
import hero_img1 from "../../image/pexels-andrew-neel-4264049.jpg";
import hero_img2 from "../../image/pexels-john-romanov-14689210.jpg";
import hero_img3 from "../../image/pexels-zoafshaaa-14455095.jpg";
import hero_img4 from "../../image/pexels-john-romanov-14689180.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Header.css";

const HeroTwo = () => {
  return (
    <>
      <div className="coffee_image">
        <div className="center">
          <img src={hero_img4} alt="" />
          <div className="overlay">
            <div className="text">Ristretto Coffee Lab</div>
          </div>
        </div>
        <div className="center">
          <img src={hero_img1} alt="" />
          <div className="overlay">
            <div className="text">Ristretto Coffee Lab</div>
          </div>
        </div>
        <div className="center">
          <img src={hero_img2} alt="" />
          <div className="overlay">
            <div className="text">Ristretto Coffee Lab</div>
          </div>
        </div>
        <div className="center">
          <img src={hero_img3} alt="" />
          <div className="overlay">
            <div className="text">Ristretto Coffee Lab</div>
          </div>
        </div>
      </div>
      <p className="more">
        {" "}
        <Link to="/Menu">
          see more <AiOutlineArrowRight />{" "}
        </Link>{" "}
      </p>
    </>
  );
}

export default HeroTwo