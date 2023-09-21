import React, { useState } from "react";
import remove from '../assets/remove.svg'
import Button from "./UI/Button";

const NavBar = () => {
  const [open, setOpen] = useState(null)

  window.onresize = () => {
    if (window.innerWidth >= 768) {
      setOpen(null);
    }
  };

  return (
    <nav className=" text-white text-sm font-medium">
      <div className="container m-auto flex justify-between items-center py-6 nav">
        <h1 className="w-1/3 font-bold text-xl text-clash">
          get<span className="text-secondary-2">linked</span>
        </h1>
        <ul className={`w-2/3 drop-down overflow-hidden bg-primary justify-between items-center  z-[998] md:flex ${open && 'scroll-down' }`}>
         <li className="text-[#D4D4D4] hover:text-white pt-8 md:pt-0">Timeline</li>
          <li className="text-[#D4D4D4] hover:text-white">Overview</li>
          <li className="text-[#D4D4D4] hover:text-white">FAQs</li>
          <li className="text-[#D4D4D4] hover:text-white">Contact</li>
          <li className="w-0 text-right md:w-2/6">
           <Button cta='Register'/>
          </li>

        </ul>
       {!open ? <div className="hamburger cursor-pointer flex-col md:flex md:flex-col md:hidden z-[999]" onClick={()=> setOpen(true)}>
            <span className="bar"></span> 
            <span className="bar"></span>
            <span className="bar"></span>
        </div> :
           <img src={remove} alt="x" className="z-[999] cursor-pointer" onClick={()=>setOpen(false)}/>
        }
      </div>
      <hr className="border-[#d4d4d430]"/>
    </nav>
  );
};

export default NavBar;
