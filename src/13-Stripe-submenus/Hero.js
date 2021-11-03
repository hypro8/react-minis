import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./Context";

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <section
      className="hero"
      style={{ border: "2px solid blue" }}
      onMouseOver={closeSubMenu}
    >
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of businesses of all sizes – from startups to large
            enterprises – use Stripe's software and APIs to accept payments,
            send payouts, and manage their businesses online.
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone-image" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
