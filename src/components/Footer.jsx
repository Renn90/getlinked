import React from "react";
import purple from "../assets/purple star.png";
import star from "../assets/star.png";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="relative bg-[#100B20] mt-[20px] py-[20px] z-[99] h-[100%]">
      <section className="container mx-auto text-white my-[10px]">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="relative flex flex-col justify-between mb-[39px] md:mb-0 md:w-2/4">
            <span>
              <h1 className="font-bold text-xl text-clash">
                get<span className="text-secondary-2">linked</span>
              </h1>
              <p className="text-xs py-2 w-[70%]">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </span>
            <span className="flex items-center text-sm md:mb-5">
              <h3 className="cursor-pointer">Terms of Use</h3>
              <div className="h-[12px] w-[2px] rounded gradient mx-4" />
              <h3 className="cursor-pointer">Privacy Policy</h3>
            </span>
            {/* random stars*/}
            <img
          src={purple}
          alt="star"
          className="absolute bottom-[10%] right-[10%] w-[17px]"
        />
            <img
          src={star}
          alt="star"
          className="absolute w-[15px] top-[0%] left-[-10%]"
        />
          </div>
          <div className="text-sm flex flex-col justify-between mb-[39px] md:w-1/4 md:mb-0">
            <h2 className="text-secondary-2 font-bold">Useful Links</h2>
            <h3 className="mb-1 cursor-pointer">Overview</h3>
            <h3 className="mb-1 cursor-pointer">Timeline</h3>
            <h3 className="mb-1 cursor-pointer">FAQs</h3>
            <h3 className="mb-1 cursor-pointer">Register</h3>
            <span className="flex w-[70%] justify-between">
              <h3>Follow us</h3>
              <BsInstagram className="cursor-pointer"/>
              <FaXTwitter className="cursor-pointer"/>
              <BiLogoFacebook className="cursor-pointer"/>
              <BiLogoLinkedin className="cursor-pointer"/>
            </span>
          </div>
          <div className="relative flex flex-col justify-between md:w-1/4">
            <h2 className="text-secondary-2 font-bold">Contact Us</h2>
            <span className="flex items-center text-sm">
              <BiSolidPhoneCall className="mr-2" /> <a href="tel:+234 6707653444">+234 6707653444</a>
            </span>
            <span className="flex w-[70%] text-sm items-start md:w-[100%]">
              <FaLocationDot className="mr-2" />
              27,Alara Street Yaba 100012 Lagos State
            </span>
            <img
          src={star}
          alt="star"
          className="absolute w-[15px] top-[0%] left-[-10%]"
        />
         <img
          src={star}
          alt="star"
          className="absolute w-[15px] bottom-[-5%] right-[10%] w-[12px]"
        />
          </div>
        </div>
        <p className="text-center mt-[30px] text-xs">
          All rights reserved.&copy;getlinked Ltd.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
