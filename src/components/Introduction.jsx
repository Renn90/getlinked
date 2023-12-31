import React, { useEffect } from "react";
import illustration from "../assets/intro-img.webp";
import arrow from "../assets/arrow.webp";
import Hr from "./UI/Hr";
import Header from "./UI/Header";
import TwinkleStar from "./UI/TwinkleStar";
import { zoomInVariant } from "./UI/Animations";
import { animationVariants } from "./UI/Animations";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <section ref={ref} className="container relative mx-auto flex flex-col justify-between items-center text-white py-[30px] md:flex-row">
        <div className="w-1/2 relative w-[100%] flex items-center md:items-start">
          <div>
            <motion.img
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={zoomInVariant}
              transition={{ duration: 0.3}}
              src={illustration}
              alt="illustration"
              className="w-[400px]"
            />
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="absolute bottom-[-30px] right-[40%] md:bottom-[10px] md:right-[20%]"
          />
          <span className="absolute top-[20%] left-[0%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.3 }}
          className="w-1/2 relative w-[100%] mt-[58px] md:mt-[0px] md:ml-5"
        >
          <Header
            head={"Introduction to getlinked"}
            purpleTxt={"tech Hackathon 1.0"}
          />
          <span className="absolute top-[10%] right-[0%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </motion.div>
      </section>
      <Hr />
    </>
  );
};

export default Introduction;
