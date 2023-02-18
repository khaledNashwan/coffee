import React from "react";
import Hero from "./Hero";
import HeroThree from "./HeroThree";
import HeroTwo from "./HeroTwo";



const Header = () => {
  return (
    <header>
      <div className="contianer">
        <Hero />
        <HeroTwo />
        <HeroThree />
      </div>
    </header>
  );
};

export default Header;
