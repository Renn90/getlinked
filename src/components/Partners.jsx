import React from "react";
import Header from "./UI/Header";
import sponsor from "../assets/sponsors.webp";
import Hr from "./UI/Hr";
import flare from "../assets/Purple-Lens-Flare.webp";
import TwinkleStar from "./UI/TwinkleStar";
import { zoomInVariant } from "./UI/Animations";
import { animationVariants } from "./UI/Animations";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <section className="relative">
      <div className="container mx-auto text-white py-[30px] mt-[90px] my-8">
        <div className="text-center">
          <Header head={"Partners and sponsors"} />
          <motion.p
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
            className="text-sm mx-auto md:w-[50%]"
          >
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </motion.p>
        </div>
        <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={zoomInVariant}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center border border-1 rounded border-secondary-2 mt-[65px]">
          <img
            src={sponsor}
            className="w-[100%] p-[10%] select-none cursor-text z-[99] md:w-[80%]"
          />
        </motion.div>
      </div>
      {/*stars*/}
      <span className="absolute top-[20%] w-[15px] z-[9] md:left-[15%] md:top-[20%]">
        <TwinkleStar />
      </span>
      <span className="absolute top-[20px] left-[45%] w-[12px] z-[9] md:top-[40%] md:left-[55%]">
        <TwinkleStar />
      </span>
      <span className="absolute right-[20%] w-[15px] z-[9] md:bottom-[20%] md:left-[50%]">
        <TwinkleStar />
      </span>

      {/*flares*/}
      <img
        src={flare}
        alt="/"
        className="absolute bottom-[-10%] right-[-50%] w-[100%] opacity-50 md:right-[-25%] md:bottom-[-25%] md:w-[50%]"
      />
      <img
        src={flare}
        alt="/"
        className="absolute bottom-[60%] left-[0] w-[100%] opacity-50 md:top-[0%] md:w-[50%]"
      />
      <Hr />
    </section>
  );
};

export default Partners;
