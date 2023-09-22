import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import {IoIosArrowBack} from "react-icons/io"
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import PageFlaire from "../components/UI/PageFlaire";

const ContactPage = () => {

  return (
    <>
      <div className="container relative mx-auto flex flex-col justify-center items-center text-white md:h-[85vh] z-[99] md:flex-row">
      <Link to='/' className="self-start "><IoIosArrowBack size={25} className="rounded-full border-2 border-secondary-1 p-[3px] my-4 md:hidden"/></Link>
        <div className="text-sm w-[100%] hidden md:w-1/2 md:block">
          <Header purpleTxt={"Get in touch"} />
          <p className="my-3">
            Contact <br />
            information
          </p>
          <p className="my-3">
            27,Alara Street <br />
            Yaba 100012 Lagos State
          </p>
          <p className="my-3">Call Us : 07067981819</p>
          <p className="my-3">
            we are open from Monday-Friday <br />
            08:00am - 05:00pm
          </p>
          <h4 className="text-secondary-2 font-bold mb-3">Share on</h4>
          <span className="flex w-[20%] justify-between">
            <BsInstagram className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <BiLogoFacebook className="cursor-pointer" />
            <BiLogoLinkedin className="cursor-pointer" />
          </span>
        </div>
        <form className="flex flex-col px-12 py-10  rounded-md mt-4 w-[100%] md:bg-white/5 md:backdrop-blur-md md:[mt-0] md:w-[40%]">
          <h2 className="font-bold text-base text-secondary-2 text-clash md:text-sm">
            Questions or need assistance?
          </h2>
          <h2 className="font-bold text-base text-secondary-2 text-clash md:text-sm">
            Let us know about it!
          </h2>
          <p className="text-xs my-2 md:hidden">Email us below to any question related to our event</p>
          <input
            type="text"
            placeholder="First Name"
            className="bg-white/5 p-2 my-2 text-xs bg-transparent border border-1 outline-0 rounded"
          />
          <input
            type="email"
            placeholder="Mail"
            className="bg-white/5 p-2 my-2 text-xs bg-transparent border border-1 outline-0 rounded"
          />
          <input
            type="text"
            placeholder="Message"
            className="bg-white/5 p-2 my-2 pb-[80px] text-xs bg-transparent border border-1 outline-0 rounded"
          />
          <span className="self-center my-2">
            <Button cta={"Submit"} />
          </span>
        </form>
        <div className="text-center flex flex-col items-center md:hidden">
        <h4 className="text-secondary-2 font-bold mb-3">Share on</h4>
          <span className="flex justify-between">
            <BsInstagram className="cursor-pointer mx-1" />
            <FaXTwitter className="cursor-pointer mx-1" />
            <BiLogoFacebook className="cursor-pointer mx-1" />
            <BiLogoLinkedin className="cursor-pointer mx-1" />
          </span>
        </div>
      </div>
      {/*flair and stars*/}
      <PageFlaire />
    </>
  );
};

export default ContactPage;
