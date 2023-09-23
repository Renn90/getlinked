import React, { useEffect, useState } from "react";
import star from "../../assets/star.webp";
import purplep from "../../assets/purple star.webp";

const TwinkleStar = () => {
  const [opacity, setOpacity] = useState(1);
  const [purple, setPurple] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(() => {
        const newOpacity = Math.random();
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          setPurple(true);
        } else {
          setPurple(false);
        }
        return newOpacity;
      });
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[100%] absolute">
      <img
        src={purple ? purplep : star}
        style={{ opacity }}
        alt="star"
        className={`twinkle absolute z-[9]`}
      />
    </div>
  );
};

export default TwinkleStar;
