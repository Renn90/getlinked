import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Button = ({ cta, nav }) => {
  const [active, setActive] = useState(null)
  return (
    <>
      {nav ? (
        <NavLink to='/register' className={({isActive}) => `${setActive(isActive)} relative`}>
          <div className={`relative z-10 ${active ? 'gradient-border' : 'gradient'} py-2 px-8 rounded text-sm`}>
            {cta}
          </div>
        </NavLink>
      ) : (
        <div>
          <button className="gradient py-2 px-8 rounded text-sm">{cta}</button>
        </div>
      )}
    </>
  );
};

export default Button;
