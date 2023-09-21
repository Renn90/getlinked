import React from "react";
import Header from "./UI/Header";
import illustration from '../assets/priceillustration.png'
import rewards from '../assets/Rewards.png'

const PriceSec = () => {
  return (
    <div>
      <div>
        <Header head={"Prizes and"} purpleTxt={"Rewards"} />
        <p>
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div>
        <img src={illustration} alt="price"/>
        <img src={rewards} alt="rewards"/>
      </div>
    </div>
  );
};

export default PriceSec;
