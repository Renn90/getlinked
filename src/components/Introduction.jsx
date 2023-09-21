import React from "react";
import illustration from '../assets/intro-img.png'
import arrow from '../assets/arrow.png'
import purple from '../assets/purple star.png'
import Hr from "./UI/Hr";
import Header from "./UI/Header";

const Introduction = () => {
  return (
    <>
    <section className="container relative mx-auto flex flex-col justify-between items-center text-white py-[30px] md:flex-row">
      <div className="w-1/2 relative w-[100%] flex items-center md:items-start">
        <img src={illustration} alt="illustration" className="w-[400px]"/>
        <img src={arrow} alt="arrow" className="absolute bottom-[-30px] right-[40%] md:bottom-[10px] md:right-[20%]"/>
        <img src={purple} alt="star" className="absolute top-[20%] left-[0%] w-[15px]"/>
      </div>
      <div className="w-1/2 relative w-[100%] mt-[58px] md:mt-[0px] md:ml-5">
        <Header head={'Introduction to getlinked'} purpleTxt={'tech Hackathon 1.0'}/>
        <img src={purple} alt="star" className="absolute top-[10%] right-[0%] w-[15px]"/>
        <p className="text-sm leading-6">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </section>
    <Hr />
    </>
  );
};

export default Introduction;
