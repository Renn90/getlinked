import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import {IoIosArrowBack} from "react-icons/io"
import Header from "../components/UI/Header";
import PageFlaire from "../components/UI/PageFlaire";
import ContactForm from "../components/ContactForm";
 
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
        <ContactForm />
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
