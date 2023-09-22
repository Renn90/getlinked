import React, { useState, useEffect } from "react";
import remove from '../assets/remove.svg'
import Button from "./UI/Button";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 768) {
        setOpen(null)
      }
    };

    window.addEventListener('resize', handleSize);
  }, [open]);

  const closeHandler =()=> {
    setOpen(false)
  } 

  return (
    <nav className=" text-white text-sm font-medium">
      <div className="container m-auto flex justify-between items-center py-6 nav">
        <h1 className="w-1/3 font-bold text-xl text-clash">
          get<span className="text-secondary-2">linked</span>
        </h1>
        <ul className={`w-2/3 drop-down rounded-b overflow-hidden z-[998]  ${open && 'scroll-down'}`}>
          <span className="justify-between items-center py-[80px] px-6 md:py-0 md:px-0 md:flex">
         <li><NavLink to='/' className={({isActive})=> `text-[#D4D4D4] hover:text-white ${isActive && 'text-gradient'}`} onClick={closeHandler}>Timeline</NavLink></li>
         <li><NavLink to='' className="text-[#D4D4D4] hover:text-white" onClick={closeHandler}>Overview</NavLink></li>
         <li><NavLink to='' className="text-[#D4D4D4] hover:text-white" onClick={closeHandler}>FAQs</NavLink></li>
         <li><NavLink to='/contact' className={({isActive})=> `text-[#D4D4D4] hover:text-white ${isActive && 'text-gradient'}`} onClick={closeHandler}>Contact</NavLink></li>
         <li><span className='w-0 text-right md:w-2/6' onClick={closeHandler}>
             <Button nav={true} cta={'Register'}/>
         </span></li>
         </span>
        </ul>
       {!open ? <div className="hamburger cursor-pointer flex-col md:flex md:flex-col md:hidden z-[999]" onClick={()=> setOpen(true)}>
            <span className="bar"></span> 
            <span className="bar"></span>
            <span className="bar"></span>
        </div> :
           <img src={remove} alt="x" className="z-[999] cursor-pointer" onClick={()=>setOpen(false)}/>
        }
      </div>
    </nav>
  );
};

export default NavBar;
