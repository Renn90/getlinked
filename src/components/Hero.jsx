import React from "react";
import heroImg from "../assets/heroImg.png";
import chain from "../assets/chain.svg";

const Hero = () => {
  return (
    <div>
      <div>
        <h1>
          getlinked Tech Hackathon{" "}
          <span>
            1.0
            <img src={chain}/>
          </span>
        </h1>
      </div>
      <div>
        ggggg
        <img src={heroImg} className="w-[500px]" />
      </div>
    </div>
  );
};

export default Hero;
