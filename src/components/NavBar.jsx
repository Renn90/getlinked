import React, { useState } from "react";
import {BsXLg} from "react-icons/bs";

const NavBar = () => {
  const [open, setOpen] = useState(true)

  return (
    <nav className=" text-white text-sm font-medium">
      <div className="container m-auto flex justify-between items-center py-6 nav">
        <h1 className="w-1/3 font-bold text-xl">
          get<span className="text-secondary-2">linked</span>
        </h1>
        <ul className="w-2/3 hidden justify-between items-center md:flex drop-down">
          <li className="text-[#D4D4D4] hover:text-white">Timeline</li>
          <li className="text-[#D4D4D4] hover:text-white">Overview</li>
          <li className="text-[#D4D4D4] hover:text-white">FAQs</li>
          <li className="text-[#D4D4D4] hover:text-white">Contact</li>
          <li className="w-0 text-right md:w-2/6">
            <button className="gradient py-2 px-8 rounded text-sm">Register</button>
          </li>
        </ul>
       {!open ? <div className="hamburger flex-col md:flex md:flex-col md:hidden">
            <span className="bar"></span> 
            <span className="bar"></span>
            <span className="bar"></span>
        </div> :
        <BsXLg size={30} className="border border-custom border-2 rounded-full z-[99] p-1"/>}
      </div>
      <hr className="border-[#d4d4d430]"/>
    </nav>
  );
};

export default NavBar;
