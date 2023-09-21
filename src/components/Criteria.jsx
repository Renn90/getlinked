import React from "react";
import Header from "./UI/Header";
import purple from '../assets/purple star.png'
import illustration from "../assets/criteriaSec.png";
import flare from "../assets/Purple-Lens-Flare.png";
import star from "../assets/star.png";
import Button from "./UI/Button";
import Hr from "./UI/Hr";

const Criteria = () => {
  return (
    <section className="relative">
    <img
        src={flare}
        alt="/"
        className="absolute bottom-[60%] left-[0] w-[100%] opacity-50 md:bottom-[0%] md:w-[50%]"
      />
    <div className="container overflow-hidden relative mx-auto flex flex-col items-center text-white py-[60px] md:flex-row">
      <div className="w-[100%] md:w-1/2">
        <img src={purple} alt="star" className="absolute left-[45%] top-[20px] md:top-[10%] md:left-[15%]"/>
        <img src={illustration} alt="/" />
        <img src={star} alt="star" className="absolute bottom-[5%] right-[20%] w-[15px] md:bottom-[10%] md:right-[60%]"/>
      </div>
      <div className="w-[100%] md:w-1/2">
        <Header head={"Judging Criteria"} purpleTxt={"Key attributes"} />
        <p className="text-sm leading-6 my-4">
          <span className="text-secondary-2 font-bold">
            Innovation and Creativity:{" "}
          </span>
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="text-sm leading-6 my-4">
          <span className="text-secondary-2 font-bold">Functionality: </span>
          Assess how well the solution works. Does it perform its intended
          functions effectively and without major issues? Judges would consider
          the completeness and robustness of the solution.
        </p>
        <p className="text-sm leading-6 my-4">
          <span className="text-secondary-2 font-bold">
            Impact and Relevance:{" "}
          </span>
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="text-sm leading-6 my-4">
          <span className="text-secondary-2 font-bold">
            Technical Complexity:{" "}
          </span>
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.:
        </p>
        <p className="text-sm leading-6 my-4">
          <span className="text-secondary-2 font-bold">
            Adherence to Hackathon Rules:{" "}
          </span>
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <Button cta={'Read More'}/>
      </div>
    </div>
    <img
        src={flare}
        alt="/"
        className="absolute bottom-[-10%] right-[-50%] w-[100%] opacity-50 md:right-[-25%] md:bottom-[-25%] md:w-[50%]"
      />
    <Hr />
    </section>
  );
};

export default Criteria;
