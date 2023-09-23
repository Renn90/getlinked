import React, { useEffect, useState } from "react";
import star from "../../assets/star.png";
import purplep from "../../assets/purple star.png";

const TwinkleStar = ({purple, top, bottom, left, right, width, mdTop, mdBtm, mdLft, mdRight}) => {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(() => {
        const newOpacity = Math.random();
        return newOpacity;
      });
    }, 300);
    return ()=> {
        clearInterval(interval)
    }
  }, []);
 
  return <div className="w-[100%] absolute"><img src={purple ? purplep : star} style={{opacity}} alt="star" className={`twinkle absolute top-[${top}] bottom-[${bottom}] left-[${left}] right-[${right}] md:left-[${mdLft}] md:right-[${mdRight}] w-[${width}] md:top-[${mdTop}] md:bottom-[${mdBtm}] z-[9]`}/></div>;
};

TwinkleStar.defaultProps = {
    purple: false,
    top: 'unset',
    bottom: 'unset',
    left: 'unset',
    right: 'unset',
    width: '50px',
    mdTop: 'unset',
    mdBtm: 'unset',
    mdLft: 'unset',
    mdRight: 'unset'
  };
  

export default TwinkleStar;
