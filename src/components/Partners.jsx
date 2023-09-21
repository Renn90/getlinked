import React from "react";
import Header from "./UI/Header";
import sponsor from '../assets/sponsors.png'
import Hr from "./UI/Hr";
import flare from "../assets/Purple-Lens-Flare.png";
import purple from '../assets/purple star.png';
import star from "../assets/star.png";

const Partners = () => {

  return (
    <section className="relative">
    <div className="container mx-auto text-white py-[30px] mt-[90px] my-8">
      <div className="text-center">
        <Header head={"Partners and sponsors"} />
        <p className="text-sm mx-auto md:w-[50%]">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="flex flex-col items-center border border-1 rounded border-secondary-2 mt-[65px]">
        <img src={sponsor} className="w-[100%] p-[10%] select-none cursor-text z-[99] md:w-[80%]"/>
      </div>
    </div>
    {/*stars*/}
    <img src={purple} alt="star" className="absolute top-[20%] md:top-[20%] md:left-[15%] w-[15px]"/>
    <img src={purple} alt="star" className="absolute left-[45%] top-[20px] md:top-[40%] md:left-[55%] w-[12px]"/>
    <img src={star} alt="star" className="absolute bottom-[5%] right-[20%] w-[15px] md:bottom-[20%] md:left-[50%]"/>
    
    {/*flares*/}
    <img
        src={flare}
        alt="/"
        className="absolute bottom-[-10%] right-[-50%] w-[100%] opacity-50 md:right-[-25%] md:bottom-[-25%] md:w-[50%]"
      />
       <img
        src={flare}
        alt="/"
        className="absolute bottom-[60%] left-[0] w-[100%] opacity-50 md:top-[0%] md:w-[50%]"
      />
    <Hr />
    </section>
  );
};

export default Partners;
