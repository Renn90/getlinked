import React from "react";
import Header from "./UI/Header";
import liberty from "../assets/sponsors/Liberty-company-logo.png";
import libertyWhite from "../assets/sponsors/Liberty-company-logo-white.png";
import winwise from "../assets/sponsors/winwise.png";
import wisper from "../assets/sponsors/wisper-logo.png";
import paybox from "../assets/sponsors/Paybox.png";
import visual from "../assets/sponsors/Vizual-Plus.png";

const Partners = () => {
  const horizontalClass = "w-[2px] h-[100px] gradient rounded";
  const virticalClass = "w-[100%] h-[2px] m-4 gradient rounded ";
  const imgClass = "p-4 h-[100%]";

  return (
    <div className="container mx-auto text-white py-[200px]">
      <Header head={"Partners and sponsors"} />
      <p className="text-sm">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div>
        <div className="flex justify-center items-center w-[100%]">
          <span>
            <img src={liberty} alt="logo" className={imgClass} />
            <div className={virticalClass} />
          </span>
          <div className={horizontalClass} />
          <span className="flex flex-col justify-between items-end">
            <img src={libertyWhite} alt="logo" className={imgClass} />
            <div className={virticalClass} />
          </span>
          <div className={horizontalClass} />
          <span>
            <img src={winwise} alt="logo" className={imgClass} />
            <div className={virticalClass} />
          </span>
        </div>
        <div className="flex justify-center items-center w-[100%]">
          <img src={liberty} alt="logo" className={imgClass} />
          <div className={horizontalClass} />
          <img src={libertyWhite} alt="logo" className={imgClass} />
          <div className={horizontalClass} />
          <img src={winwise} alt="logo" className={imgClass} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
