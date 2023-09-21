import React from "react";
import Header from "./UI/Header";
import sponsor from '../assets/sponsors/sponsor.png'

const Partners = () => {
  const horizontalClass = "w-[2px] h-[100px] gradient rounded";
  const imgClass = "p-4 h-[100%]";

  return (
    <div className="container mx-auto text-white py-[200px]">
      <Header head={"Partners and sponsors"} />
      <p className="text-sm">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div>
        <img src={sponsor} alt="sponsor" className="w-[30%]"/>
      </div>
    </div>
  );
};

export default Partners;
