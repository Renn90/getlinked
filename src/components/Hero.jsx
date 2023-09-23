import React, { useState, useEffect } from "react";
import heroImg from "../assets/heroImg.webp";
import chain from "../assets/chain.svg";
import curve from "../assets/curve.svg";
import explode from "../assets/explode.svg";
import Button from "./UI/Button";
import idea from "../assets/idea.svg";
import flare from "../assets/Purple-Lens-Flare.webp";
import flare2 from "../assets/Purple-Lens-Flare2.webp";
import metrix from "../assets/metrix.webp";
import Hr from "./UI/Hr";
import TwinkleStar from "./UI/TwinkleStar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const zoomInVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  const num = "text-4xl unicaOne mr-3";
  const smText = "text-xs";

  const [text, setText] = useState("");
  const fullText = "Igniting a Revolution in HR Innovation";

  useEffect(() => {
    const typeText = (index) => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        setTimeout(() => typeText(index + 1), 100); // Typing speed
      } else {
        setTimeout(() => eraseText(fullText.length), 1000); // Delay before erasing
      }
    };

    const eraseText = (index) => {
      if (index >= 0) {
        setText(fullText.slice(0, index));
        setTimeout(() => eraseText(index - 1), 100); // Erasing speed
      } else {
        setTimeout(() => typeText(0), 1000); // Delay before typing again
      }
    };

    typeText(0);
    return () => {
      clearTimeout();
    };
  }, [fullText]);

  return (
    <>
      <Hr />
      <header className="container mx-auto flex flex-col mt-8 md:mt-4">
        <span className="flex flex-col text-white self-end">
          <i className="font-bold md:text-xl h-[30px]">{text}</i>
          <img src={curve} className="self-end w-[160px] mb-[30px]" />
        </span>
        <div className="flex flex-col justify-between items-center text-center text-white mt-[80px] md:text-start md:flex-row md:mt-0">
          <span className="absolute top-[20%] left-[10%] w-[15px] z-[9999]">
            <TwinkleStar />
          </span>
          <span className="absolute top-[30%] left-[40%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
          <span className="absolute bottom-[20%] left-[30%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
          <div
            style={{ lineHeight: "80px" }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src={flare}
              alt="/"
              className="absolute top-0 left-0 w-[50%] opacity-50"
            />
            <motion.h1
              className="text-3xl font-bold relative text-clash z-[99] md:text-5xl"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
              <img
                src={idea}
                className="w-[15px] absolute right-[15%] top-[-18px] md:top-[-38px] md:w-[35px]"
              />
              getlinked Tech
              <span className="flex items-center">
                Hackathon<span className="text-secondary-2">1.0</span>
                <img src={chain} alt="chain" className="w-[35px]" />
                <img src={explode} alt="ex" className="w-[35px]" />
              </span>
            </motion.h1>
            <motion.p
              className="relative text-white text-sm py-[4px]"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </motion.p>
            <motion.span
              className="m-0 z-[999]"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
              <Link to="/register">
                <Button cta="Register" />
              </Link>
            </motion.span>
            <div className="flex">
              <h1 className={num}>
                00<span className={smText}>H</span>
              </h1>
              <h1 className={num}>
                00<span className={smText}>M</span>
              </h1>
              <h1 className={num}>
                00<span className={smText}>S</span>
              </h1>
            </div>
          </div>
          <div>
            <img
              src={flare2}
              alt="/"
              className="absolute top-[5%] right-0 w-[60%] opacity-50"
            />
            <img src={metrix} alt="/" className="absolute right-0 w-[50%]" />
            <motion.img
              src={heroImg}
              className="w-[500px]"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={zoomInVariant}
              transition={{ duration: 0.3}}
            />
          </div>
        </div>
      </header>
      <Hr />
    </>
  );
};

export default Hero;
