import React, {useEffect} from "react";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import purple from '../assets/purple star.png';
import star from "../assets/star.png";
import flare from "../assets/Purple-Lens-Flare.png";

const ContactPage = () => {
    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
    
        return () => {
          document.documentElement.style.overflow = 'auto';
        };
      }, []); 

  return (
    <>
    <div className="container relative mx-auto flex justify-center items-center text-white h-[85vh] z-[99]">
      <div className="text-sm w-1/2">
        <Header purpleTxt={'Get in touch'}/>
        <p className="my-2">Contact <br/>information</p>
        <p className="my-2">27,Alara Street <br/>Yaba 100012 Lagos State</p>
        <p className="my-2">Call Us : 07067981819</p>
        <p className="my-2">we are open from Monday-Friday <br/>08:00am - 05:00pm</p>
        <h4 className="text-secondary-2 font-bold mb-2">Share on</h4>
        <span className="flex w-[20%] justify-between">
          <BsInstagram className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
          <BiLogoFacebook className="cursor-pointer" />
          <BiLogoLinkedin className="cursor-pointer" />
        </span>
      </div>
      <form className="flex flex-col px-12 py-10 backdrop-blur-md bg-white/5 rounded-md w-[40%]">
        <h2 className="font-bold text-sm text-secondary-2 text-clash">Questions or need assistance?</h2>
        <h2 className="font-bold text-sm text-secondary-2 text-clash">Let us know  about it!</h2>
        <input type="text" placeholder="First Name" className="p-2 my-2 text-xs bg-transparent border border-1 rounded"/>
        <input type="email" placeholder="Mail" className="p-2 my-2 text-xs bg-transparent border border-1 rounded"/>
        <input type="text" placeholder="Message" className="p-2 my-2 pb-[50px] text-xs bg-transparent border border-1 rounded"/>
        <span className="self-center my-2">
        <Button cta={'Submit'}/>
        </span>
      </form>
    </div>
    {/*stars*/}
    <img src={purple} alt="star" className="absolute top-[20%] md:top-[20%] md:left-[15%] w-[15px]"/>
    <img src={star} alt="star" className="absolute left-[45%] top-[0px] md:top-[20%] md:left-[80%] w-[16px] opacity-20"/>
    <img src={star} alt="star" className="absolute left-[45%] top-[0px] md:top-[90%] md:left-[80%] w-[16px] z-[99]"/>
    <img src={purple} alt="star" className="absolute bottom-[5%] right-[20%] w-[15px] md:bottom-[20%] md:left-[50%]"/>
    
      {/* purple flare */}
      <img
        src={flare}
        alt="/"
        className="absolute top-[0%] left-[-10%] w-[50%] opacity-40 md:bottom-[-30%] z-[9]"
      />
      <img
        src={flare}
        alt="/"
        className="absolute bottom-[0%] right-[-10%] w-[50%] opacity-50 md:bottom-[-30%] z-[9]"
      />
    </>
  );
};

export default ContactPage;
