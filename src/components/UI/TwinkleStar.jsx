import React, { useEffect, useState } from "react";
import star from "../../assets/star.png";

const TwinkleStar = () => {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prev) => {
        const newOpacity = Math.random();
        return newOpacity;
      });
    }, 300);
    return ()=> {
        clearInterval(interval)
    }
  }, []);
  return <img src={star} style={{opacity}}/>;
};

export default TwinkleStar;
