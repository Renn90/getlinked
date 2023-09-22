import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Button = ({ cta, nav }) => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  const isActive = () => {
    return location.pathname === "/register";
  };

  return (
    <>
      {nav ? (
        <NavLink to="/register" className={`relative`}>
          <div className={`relative z-10 ${isActive() ? "gradient-border" : "gradient"} py-2 px-8 rounded text-sm`}>
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
