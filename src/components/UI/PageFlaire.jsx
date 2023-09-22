import React from 'react'
import purple from "../../assets/purple star.png";
import star from "../../assets/star.png";
import flare from "../../assets/Purple-Lens-Flare.png";

const PageFlaire = () => {
  return (
    <>
      {/*stars*/}
      <img
        src={purple}
        alt="star"
        className="absolute top-[20%] md:top-[20%] md:left-[15%] w-[15px]"
      />
      <img
        src={star}
        alt="star"
        className="absolute right-[15%] top-[20%] md:top-[20%] md:left-[80%] w-[16px] opacity-20"
      />
      <img
        src={star}
        alt="star"
        className="absolute right-[15%] bottom-[20%] md:top-[90%] md:left-[80%] w-[16px] z-[9]"
      />
      <img
        src={purple}
        alt="star"
        className="absolute bottom-[15%] left-[20%] w-[15px] md:bottom-[20%] md:left-[50%]"
      />


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
  )
}

export default PageFlaire
