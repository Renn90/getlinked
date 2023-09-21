import React from "react";

const Header = ({head, purpleTxt}) => {
  return (
    <h2 className="font-bold text-xl text-clash leading-6 py-2">
      {head} <br />
      <span className="text-secondary-2">{purpleTxt}</span>
    </h2>
  );
}; 

export default Header;
