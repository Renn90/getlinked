import React from "react";
import { FaCheck } from "react-icons/fa";
import Header from "./UI/Header";
import Button from "./UI/Button";
import privacy from "../assets/privacy.webp";
import sheild from "../assets/sheild.webp";
import flare from "../assets/Purple-Lens-Flare.webp";
import TwinkleStar from "./UI/TwinkleStar";
import { zoomInVariant } from "./UI/Animations";
import { animationVariants } from "./UI/Animations";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PrivacyPolicy = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <section className="relative">
      <div className="text-white container mx-auto flex flex-col justify-between py-[30px] my-8 items-center md:flex-row">
        <div className=" md:w-1/2 relative">
          <Header head={"Privacy Policy and"} purpleTxt={"Terms"} />
          <motion.p
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
            className="text-sm text-[lightGrey]"
          >
            Last updated on September 12, 2023
          </motion.p>
          <motion.p
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.3 }}
            className="py-4"
          >
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </motion.p>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={zoomInVariant}
            transition={{ duration: 0.5 }}
            className="p-10 backdrop-blur-md bg-white/5 rounded border border-secondary-2 z-[99] md:w-[80%]"
          >
            <p className="text-sm leading-6">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h3 className="font-bold text-secondary-2 pt-[24px]">
              Licensing Policy
            </h3>
            <h3 className="font-bold text-sm py-3">
              Here are terms of our Standard License:
            </h3>
            <span>
              <p className="flex justify-center text-xs my-4">
                <FaCheck
                  size={12}
                  style={{
                    backgroundColor: "#2DE100",
                    padding: "6px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
              <p className="flex justify-center items-start text-xs my-4">
                <FaCheck
                  size={12}
                  style={{
                    backgroundColor: "#2DE100",
                    padding: "6px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
              <span className="self-center text-center">
                <Button cta={"Read More"} />
              </span>
            </span>
          </motion.div>
          {/*random stars */}
          <span className="absolute top-[10%] right-[0%] w-[17px] z-[9]">
            <TwinkleStar />
          </span>
          <span className="absolute bottom-[10%] left-[0%] w-[17px] z-[9] md:left-[50%]">
            <TwinkleStar />
          </span>
          <span className="absolute top-[-5%] left-[0%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>

          {/* purple flare */}
          <img
            src={flare}
            alt="/"
            className="absolute bottom-[0%] left-[0] w-[80%] opacity-40 md:bottom-[-30%] z-[9]"
          />
        </div>
        <div className="relative self-end flex justify-center mt-[48px] md:w-1/2 md:mt-0">
          <motion.span
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={zoomInVariant}
          transition={{ duration: 0.5 }}
          >
            {/*illustration image */}
            <img src={privacy} alt="privacy" className="w-[80%] z-[99]" />
            <img
              src={sheild}
              alt="sheild"
              className="absolute top-[0%] right-20% w-[70%] md:right-0 md:top-[-10%]"
            />
          </motion.span>
          {/*random stars */}
          <span className="absolute bottom-[40%] left-[30%] w-[17px] z-[9]">
            <TwinkleStar />
          </span>
          <span className="absolute bottom-[0%] right-[0%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
          <span className="absolute top-[5%] right-[20%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
          <span className="absolute bottom-[15%] left-[0%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
