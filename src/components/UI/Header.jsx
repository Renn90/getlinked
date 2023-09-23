import React from "react";
import { animationVariants } from "../../components/UI/Animations";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = ({ head, purpleTxt }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 0.7 }}
      className="font-bold text-xl text-clash leading-6 py-2"
    >
      {head} <br />
      <span className="text-secondary-2">{purpleTxt}</span>
    </motion.h2>
  );
};

export default Header;
