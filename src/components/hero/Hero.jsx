import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h2 className="hero__img">🌱</h2>
        <h3 className="hero__title"> The nature candle</h3>
        <p className="hero__desc">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>
        <button className="hero__btn">Discovery our collection</button>
      </div>
    </div>
  );
};

export default Hero;
