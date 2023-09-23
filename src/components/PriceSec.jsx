import React from "react";
import Header from "./UI/Header";
import illustration from "../assets/priceIllustration.png";
import rewards from "../assets/Rewards.png";
import flare from "../assets/Purple-Lens-Flare.png";
import TwinkleStar from "./UI/TwinkleStar";

const PriceSec = () => {
  return (
    <section className="relative">
      <div className="container mx-auto text-white flex flex-col py-[30px] md:mt-4">
        <div className="self-end text-center md:text-start">
          <Header head={"Prizes and"} purpleTxt={"Rewards"} />
          <p className="text-sm">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-[100%] pt-12 md:flex-row">
          <span className="flex justify-center relative md:justify-start">
            <img src={illustration} alt="price" className="w-[85%] z-[99]" />
            <span className="absolute top-[20%] left-[45%] w-[15px] z-[9] md:top-[-10%] md:left-[15%]">
              <TwinkleStar />
            </span>
            <span className="absolute right-[0%] w-[15px] z-[9] md:bottom-[0%] md:left-[10%]">
              <TwinkleStar />
            </span>
          </span>
          <span className="flex justify-center relative md:justify-end">
            <img
              src={rewards}
              alt="rewards"
              className="mt-[51px] w-[85%] md:mt-0 z-[99]"
            />
              <span className="absolute bottom-[0%] right-[10%] w-[15px] z-[9] md:bottom-[-5%] md:right-[15%]">
            <TwinkleStar />
          </span>
              <span className="absolute top-[0%] left-[10%] w-[15px] z-[9] md:top-[10%] md:left-[10%]">
            <TwinkleStar />
          </span>
              <span className="absolute top-[20%] right-[0%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
          </span>
        </div>
      </div>
      <img
        src={flare}
        alt="/"
        className="absolute top-[5%] left-[5%] w-[100%] opacity-50 md:top-[-20%] md:w-[50%]"
      />
      <img
        src={flare}
        alt="/"
        className="absolute bottom-[-10%] right-[-35%] w-[100%] opacity-50 md:w-[50%]"
      />
    </section>
  );
};

export default PriceSec;
