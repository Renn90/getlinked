import React from 'react'
import purple from "../../assets/purple star.png";
import star from "../../assets/star.png";
import flare from "../../assets/Purple-Lens-Flare.png";
import TwinkleStar from './TwinkleStar';

const PageFlaire = () => {
  return (
    <>
      {/*stars*/}
      <TwinkleStar purple={true} top={'20%'} mdLft={'15%'} mdTop={'20%'} width={'15px'}/>
      <TwinkleStar right={'15%'} top={'20%'} mdTop={'20%'} mdLft={'80%'} width={'16px'}/>
      <TwinkleStar right={'15%'} bottom={'20%'} mdTop={'90%'} mdLft={'80%'} width={'16px'}/>
      <TwinkleStar purple={true} bottom={'15%'} left={'20%'} width={'15px'} mdBtm={'20%'} mdLft={'50%'} />


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
