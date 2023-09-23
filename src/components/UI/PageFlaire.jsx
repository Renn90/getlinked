import React from "react";
import purple from "../../assets/purple star.png";
import star from "../../assets/star.png";
import flare from "../../assets/Purple-Lens-Flare.png";
import TwinkleStar from "./TwinkleStar";

const PageFlaire = () => {
  return (
    <>
      {/*stars*/}
      <span className="absolute top-[20%] md:left-[10%] w-[15px] z-[9]">
        <TwinkleStar />
      </span>
      <span className="absolute bottom-[20%] md:left-[10%] w-[15px] z-[9]">
        <TwinkleStar />
      </span>
      <span className="absolute top-[20%] right-[15%] w-[16px] z-[999] md:left-[80%] md:top-[20%]">
        <TwinkleStar />
      </span>
      <span className="absolute bottom-[20%] right-[15%] w-[15px] z-[9] md:left-[80%] md:top-[90%]">
        <TwinkleStar />
      </span>
      <span className="absolute bottom-[15%] left-[20%] w-[15px] z-[9] md:bottom-[20%] md:left-[50%]">
        <TwinkleStar />
      </span>

      {/* purple flare */}
      <img
        src={flare}
        alt="/"
        className="absolute top-[0%] left-[-10%] w-[50%] opacity-40 md:bottom-[-30%] z-[9]"
      />
      <img
        src={flare}
        alt="/"
        className="absolute bottom-[0%] right-[-10%] w-[50%] opacity-50 md:bottom-[-30%] z-[9]"
      />
    </>
  );
};

export default PageFlaire;
