import React from "react";
import illustration from "../assets/rules-section-image.png";
import Header from "./UI/Header";
import flare from "../assets/Purple-Lens-Flare.png";

import Hr from "./UI/Hr";
import TwinkleStar from "./UI/TwinkleStar";

const Rules = () => {
  return (
    <section className="relative">
      <img
        src={flare}
        alt="/"
        className="absolute top-[5%] left-[5%] w-[100%] opacity-50 md:top-[-20%] md:w-[50%]"
      />
      <div className="container overflow-hidden relative mx-auto flex flex-col justify-between items-center py-[20px] text-white md:flex-row-reverse">
        <div className="w-1/2 relative w-[100%] flex items-center md:items-start">
          <img
            src={illustration}
            alt="illustration"
            className="w-[664px] md:ml-[10%]"
          />
         <TwinkleStar bottom={'10%'} left={'0%'} width={'15px'} />
        </div>
        <div className="w-1/2 relative w-[100%] mt-[58px] md:mt-[0px] md:ml-5">
        <Header head={'Rules and'} purpleTxt={'Guidelines'}/>
          <TwinkleStar top={'10%'} right={'50%'} width={'15px'} />
          <p className="text-sm leading-6">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <img
        src={flare}
        alt="/"
        className="absolute bottom-[-10%] right-[-35%] w-[100%] opacity-50 md:w-[50%] overflow-hidden"
      />
      <Hr />
    </section>
  );
};

export default Rules;
