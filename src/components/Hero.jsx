import React from "react";
import heroImg from "../assets/heroImg.png";
import chain from "../assets/chain.svg";
import curve from "../assets/curve.svg";
import explode from "../assets/explode.svg";
import Button from "./UI/Button";
import idea from "../assets/idea.svg";
import flare from "../assets/Purple-Lens-Flare.png";
import flare2 from "../assets/Purple-Lens-Flare2.png";
import metrix from "../assets/metrix.png";
import star from "../assets/star.png";
import Hr from "./UI/Hr";

const Hero = () => {
  const num = "text-4xl unicaOne mr-3";
  const smText = "text-xs";
  
  return (
    <>
      <header className="container mx-auto flex flex-col mt-8 md:mt-4">
      <Hr />
        <span className="flex flex-col text-white self-end">
          <i className="font-bold md:text-xl">
            Igniting a Revolution in HR Innovation
          </i>
          <img
            src={curve}
            className="self-end w-[160px] mb-[30px]"
          />
        </span>
        <div className="flex flex-col justify-between items-center text-center text-white mt-[80px] md:text-start md:flex-row md:mt-0">
          <img src={star} alt="star" className="absolute top-[20%] left-10 w-[20px] md:left-[12%]" />
          <img
            src={star}
            alt="star"
            className="absolute top-[30%] left-[40%] opacity-10 w-[20px]"
          />
          <img
            src={star}
            alt="star"
            className="absolute bottom-[20%] left-[30%] opacity-10 w-[20px]"
          />
          <div style={{ lineHeight: "80px" }} className="flex flex-col items-center md:items-start">
            <img
              src={flare}
              alt="/"
              className="absolute top-0 left-0 w-[50%] opacity-50"
            />
            <h1 className="text-3xl font-bold relative text-clash z-[99] md:text-5xl">
              <img
                src={idea}
                className="w-[15px] absolute right-[15%] top-[-18px] md:top-[-38px] md:w-[35px]"
              />
              getlinked Tech
              <span className="flex items-center">
                Hackathon<span className="text-secondary-2">1.0</span>
                <img src={chain} alt="chain" className="w-[35px]" />
                <img src={explode} alt="ex" className="w-[35px]" />
              </span>
            </h1>
            <p className="text-white text-sm py-[4px]">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Button cta="Register" />
            <div className="flex">
              <h1 className={num}>
                00<span className={smText}>H</span>
              </h1>
              <h1 className={num}>
                00<span className={smText}>M</span>
              </h1>
              <h1 className={num}>
                00<span className={smText}>S</span>
              </h1>
            </div>
          </div>
          <div>
            <img
              src={flare2}
              alt="/"
              className="absolute top-[5%] right-0 w-[60%] opacity-50"
            />
            <img src={metrix} alt="/" className="absolute right-0 w-[50%]" />
            <img src={heroImg} className="w-[500px]" />
          </div>
        </div>
      </header>
    <Hr />
    </>
  );
};

export default Hero;
